import { AxiosRequestConfig } from "axios";

const BASEURL = "";

const serverStatusConfig = (): AxiosRequestConfig => {
  return {
    method: "",
    url: BASEURL.toString(),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};

export default serverStatusConfig;
