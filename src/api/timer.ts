import instance from "@/lib/axios";

export const timerApi = async () => {
    const response = await instance.get('/api/timers');
    return response;
}