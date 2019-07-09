import axios from "axios";
import { ApiRoute } from "~/core/api/apiRoute";

const ApiExecutor = axios.create({
  method: "post",
  timeout: 0,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  baseURL: "http://local_lottery_api.platformdev.cc:978/",
});

export const getBaseInfo = (payload) =>
  ApiExecutor(ApiRoute.GET_BASE_INFO, { params: { par: payload } });
