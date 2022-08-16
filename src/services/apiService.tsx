import { Dispatch, SetStateAction } from "react";
import { setKey } from "../components/Root-file/slice/jwtSlice";
import { codeGithubType, responseGithubType } from "../types/interface";

let memoryToken = "";
const backendUrl = process.env.REACT_APP_BACKEND_URL

export const apiService = {
  login: (dispatch: Dispatch<any>) => {
    return async () => {
      const token = await fetch(`${backendUrl}/api/v1/github/login`, {
        method: "post",
        credentials: "include",
      });
      const result = token.status;
      const { key } = await token.json();

      if (result === 200) {
        dispatch(setKey(key));
        memoryToken = key;
        setInterval(apiService.login, 14 * (60 * 1000)); //Refresh token each 14 min
        return true;
      } else {
        console.log("no login");
        return false;
      }
    }
  },
  getRepo: (setResult: Dispatch<SetStateAction<string | JSX.Element>>, validToken: string) => {
    return async (repo: string, get: string) => {
      try {
        const url = `${backendUrl}/api/v1/github/repo?id=${repo}&${get}`;
        const sendToken = {
          headers: {
            Authorization: `Bearer ${
              memoryToken === "" ? validToken : memoryToken
            }`,
          },
        };
        const token = memoryToken === "" && validToken === "" ? {} : sendToken;

        const response = await fetch(url, token);

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
  },
  loadAllFiles: (setResult: Dispatch<SetStateAction<string | JSX.Element>>, validToken: string) => {
    return async (files: responseGithubType[], urlData: any) => {
      let files64: codeGithubType[] = await Promise.all(
        files.map((element: responseGithubType) => {
          return apiService.getRepo(setResult, validToken)(
            `${urlData.username}/${urlData.repo}`,
            `blob=${element.sha}`
          );
        })
      );

      let dataFiles: { code: string; from: string; language: string }[] = [];
      files64.forEach((element: codeGithubType, index: number) => {
        dataFiles.push({
          code: atob(element.content),
          from: files[index].path,
          language: files[index].language as string,
        });
      });

      return dataFiles
    }
  },
  getCode: (setResult: Dispatch<SetStateAction<string | JSX.Element>>, validToken: string) => {
    return async (id: string) => {
      try {
        const sendToken = {
          headers: {
            Authorization: `Bearer ${
              memoryToken === "" ? validToken : memoryToken
            }`,
          },
        };
        const token = memoryToken === "" && validToken === "" ? {} : sendToken;
        let response = await fetch(
          `${backendUrl}/api/v1/github/gist?id=${id}`,
          token
        );

        if (response.status === 404) {
          setResult(
            <span className="LoadCode__msg">
              The gist doesn't exist. Check the URL and try again
            </span>
          );
          return {};
        }
        let data = response.json();
        return data;
      } catch (error) {
        setResult(
          <span className="LoadCode__msg">Error Internet Disconnected</span>
        );
        return {};
      }
    }
  },
}