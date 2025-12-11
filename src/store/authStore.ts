import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isDuplicateLogin: boolean;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setAccessToeken: (accessToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  isDuplicateLogin: false,
  setTokens: (accessToken: string, refreshToken: string) =>
    set(() => ({ accessToken, refreshToken, isDuplicateLogin: true })),
  setAccessToeken: (accessToken: string) => set(() => ({ accessToken })),
  logout: () => set(() => ({ accessToken: null, refreshToken: null, isDuplicateLogin: false })),
}));
