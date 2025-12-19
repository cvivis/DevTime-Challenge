import NavigationBar from "@/components/common/NabigationBar";
import TimerAction from "@/components/TimerAction";
import Timer from "@/components/common/Timer";
import { useEffect, useReducer } from "react";

const initialState = {
  isRunning: false,
  time: "00:00:00",
  startTime: null,
  savedTime: 0,
};

interface TimeState {
  isRunning: boolean;
  time: string;
  startTime: Date | null;
  savedTime: number;
}

type TimerActionType =
  | { type: "START" }
  | { type: "PAUSE" }
  | { type: "STOP" }
  | { type: "RUN"; nowTime: string };

function timerReducer(
  timeState: TimeState,
  action: TimerActionType
): TimeState {
  switch (action.type) {
    case "START":
      return {
        ...timeState,
        isRunning: true,
        startTime: new Date(),
      };
    case "PAUSE":
      if (!timeState.startTime) return timeState;
      const newSavedTime = new Date().getTime() - timeState.startTime.getTime();
      return {
        ...timeState,
        isRunning: false,
        startTime: null,
        savedTime: timeState.savedTime + newSavedTime,
      };
    case "STOP":
      return initialState;
    case "RUN":
      return {
        ...timeState,
        time: action.nowTime,
      };
    default:
      return timeState;
  }
}

export default function Main() {
  const [timeState, dispatch] = useReducer(timerReducer, initialState);

  const handleAction = (action: "START" | "PAUSE" | "STOP") => {
    dispatch({ type: action });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // isRunning이 true이고, startTime이 존재할 때만 타이머 가동
    if (timeState.isRunning && timeState.startTime) {
      timer = setInterval(() => {
        const now = new Date();

        // 🚨 핵심 수정: 저장된 시간(savedTime)을 반드시 더해줘야 함!
        const diffTime =
          now.getTime() - timeState.startTime.getTime() + timeState.savedTime;

        const hours = String(Math.floor(diffTime / (1000 * 60 * 60))).padStart(
          2,
          "0"
        );
        const minutes = String(
          Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((diffTime % (1000 * 60)) / 1000)
        ).padStart(2, "0");

        dispatch({ type: "RUN", nowTime: `${hours}:${minutes}:${seconds}` });
      }, 100); // 0.1초마다 갱신 (화면이 더 부드러움)
    }

    return () => clearInterval(timer);

    // 의존성 배열 최적화: timeState 전체를 넣으면 매초 불필요한 재설정이 일어날 수 있음
  }, [timeState.isRunning, timeState.startTime, timeState.savedTime]);

  return (
    <div className="flex flex-col bg-secondary-gradient min-h-screen w-full">
      <div className="flex justify-center bg-transparent items-center w-full">
        <NavigationBar></NavigationBar>
      </div>
      <div className="flex flex-col items-center mt-20 mb-20 w-full">
        <h1 className="text-indigo-dark text-4xl md:text-[72px] font-bold leading-tight mb-4">
          WELCOME
        </h1>
        <p className="text-[#023E99] text-sm md:text-base font-normal opacity-80">
          DevTime을 사용하려면 로그인이 필요합니다.
        </p>
        <Timer time={timeState.time}></Timer>
        <TimerAction
          isRunning={timeState.isRunning}
          handleAction={handleAction}
        ></TimerAction>
      </div>
    </div>
  );
}
