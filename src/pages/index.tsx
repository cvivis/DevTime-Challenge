import NavigationBar from "@/components/common/NabigationBar";
import TimerAction from "@/components/TimerAction";
import Timer from "@/components/common/Timer";
import { useEffect, useState } from "react";
export default function Main() {
  const [time, setTime] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      if (!startTime) {
        setStartTime(new Date());
        return;
      }
      timer = setInterval(() => {
        const now = new Date();
        const diffTime = now.getTime() - startTime!.getTime();

        const hours = String(Math.floor(diffTime / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(
          2,
          "0"
        );
        const seconds = String(Math.floor((diffTime % (1000 * 60)) / 1000)).padStart(2, "0");
        setTime(`${hours}:${minutes}:${seconds}`);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, startTime]);

  return (
    <div className="flex flex-col bg-secondary-gradient min-h-screen w-full">
      <div className="flex justify-center items-center w-full">
        <NavigationBar></NavigationBar>
      </div>
      <div className="flex flex-col items-center mt-20 mb-20 w-full">
        <h1 className="text-indigo-dark text-4xl md:text-[72px] font-bold leading-tight mb-4">
          WELCOME
        </h1>
        <p className="text-[#023E99] text-sm md:text-base font-normal opacity-80">
          DevTime을 사용하려면 로그인이 필요합니다.
        </p>
        <Timer time={`${time}`}></Timer>
        <TimerAction></TimerAction>
      </div>
    </div>
  );
}
