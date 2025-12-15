import { httpService } from "./httpService";
import { auth } from "../api/endpoint";

export const authService = {
  login: async (payload) => {
    const response = await httpService.post(auth.LOGIN, payload);
    if (response?.data?.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  },
};
