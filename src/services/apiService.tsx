import { Dispatch, SetStateAction } from "react";
import { setKey } from "../components/Root-file/slice/jwtSlice";

const login = (apiUrl: string, dispatch: Dispatch<any>, memoryToken: string) => {
  return async () => {
    const token = await fetch(`${apiUrl}/api/v1/github/login`, {
      method: "post",
      credentials: "include",
    });
    const result = token.status;
    const { key } = await token.json();

    if (result === 200) {
      dispatch(setKey(key));
      memoryToken = key;
      setInterval(login, 14 * (60 * 1000)); //Refresh token each 14 min
      return true;
    } else {
      console.log("no login");
      return false;
    }
  }
}

export const apiService = {
  login,
  getRepo: (apiUrl: string, setResult: Dispatch<SetStateAction<string | JSX.Element>>, memoryToken: string, validToken: string) => {
    return async (repo: string, get: string) => {
      try {
        const apiurl = `${apiUrl}/api/v1/github/repo?id=${repo}&${get}`;
        const sendToken = {
          headers: {
            Authorization: `Bearer ${
              memoryToken === "" ? validToken : memoryToken
            }`,
          },
        };
        const token = memoryToken === "" && validToken === "" ? {} : sendToken;

        const response = await fetch(apiurl, token);

        if (response.status === 404) {
          setResult(
            <span className="LoadCode__msg">
              The gist doesn't exist. Check the URL and try again
            </span>
          );
          return [];
        }

        const data = await response.json();
        return data;
      } catch (error) {}
    }
  }
}
