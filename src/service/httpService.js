import axiosClient from "../api/axiosClient";

export const httpService = {
    get: async (url, params = {}) => {
        return await axiosClient.get(url, { params });
    },

    post: async (url, data = {}) => {
        return await axiosClient.post(url, data);
    },

    put: async (url, data = {}) => {
        return await axiosClient.put(url, data);
    },

    patch: async (url, data = {}) => {
        return await axiosClient.patch(url, data);
    },

    delete: async (url, data = {}) => {
        return await axiosClient.delete(url, data);
    }
};
