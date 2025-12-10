import instance from "@/lib/axios";

export const loginApi = async (email: string, password: string) => {
  try {
    const response = await instance.post("/api/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("로그인 오류:", error);
  }
};
