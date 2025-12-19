import Image from "next/image";

interface TimeActionProps {
  isRunning: boolean;
  handleAction: (action: "START" | "PAUSE" | "STOP") => void;
}

export const TimerAction = ({ isRunning, handleAction }: TimeActionProps) => {
  return (
    <div className="flex flex-row gap-16 mt-20">
      <Image
        onClick={() => handleAction("START")}
        className="cursor-pointer"
        src="/StartAction.svg"
        alt="StartImg"
        width={100}
        height={100}
      />
      <Image
        onClick={() => handleAction("PAUSE")}
        className="cursor-pointer"
        src="/Pause.svg"
        alt="StartImg"
        width={100}
        height={100}
      />
      <Image
        onClick={() => handleAction("STOP")}
        className="cursor-pointer"
        src="/Finish.svg"
        alt="FinishImg"
        width={100}
        height={100}
      />
    </div>
  );
};

export default TimerAction;
