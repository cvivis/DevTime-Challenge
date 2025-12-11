import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { use } from "react";
import { useRouter } from "next/navigation";

const instance = axios.create({
  baseURL: "https://devtime.prokit.app/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { refreshToken, setAccessToeken, logout } = useAuthStore.getState();
        if (!refreshToken) {
          logout();
          return Promise.reject(error);
        }

        const newAccessToken = await axios.post("https://devtime.prokit.app/auth/refresh", {
          refreshToken: refreshToken,
        });
        setAccessToeken(newAccessToken.data.accessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken.data.accessToken}`;
        return instance(originalRequest);
      } catch (error) {
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
