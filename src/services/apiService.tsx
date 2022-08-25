import { Dispatch } from "react";
import { setKey } from "../components/Root-file/slice/jwtSlice";
import { ProjectResponse } from "../types/interface";

let memoryToken = "";
const backendUrl = process.env.REACT_APP_BACKEND_URL

const token = (validToken: string) => {
  if (memoryToken === '' && validToken === '') {
    return {}
  }

  return {
    headers: {
      Authorization: `Bearer ${memoryToken === "" ? validToken : memoryToken}`,
    }
  }
}

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
  getProject: async (validToken: string, url: string): Promise<ProjectResponse> => {
    const response = await fetch(`${backendUrl}/api/v1/project?url=${url}`, token(validToken))

    if (response.status !== 200) {
      return { success: false, code: response.status }
    }

    const jsonResponse = await response.json()

    if (!jsonResponse.files) {
      return { success: false, errorString: 'No files' }
    }

    if (jsonResponse.files.length === 0) {
      return { success: false, errorString: "The project doesn't include any Javascript files" }
    }

    return {
      success: true,
      files: jsonResponse.files
    }
  },
}
