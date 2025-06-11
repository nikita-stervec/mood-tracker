import axiosInstance from './axiosConfig';

export const apiClient = {
  get: async <T>(url: string, params?: object) => {
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  },
  post: async <T>(url: string, data: object) => {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  },
  put: async <T>(url: string, data: object) => {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  },
  delete: async <T>(url: string) => {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  },
};
