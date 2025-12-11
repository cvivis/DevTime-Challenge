import instance from "@/lib/axios";

export const loginApi = async (email: string, password: string) => {
  const response = await instance.post("/api/auth/login", { email, password });
  return response.data;
};
