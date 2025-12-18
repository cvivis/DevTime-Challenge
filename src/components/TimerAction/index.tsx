import Image from "next/image";

export const TimerAction = ({ handleRunning }: { hadleRuning: () => void }) => {
  return (
    <div className="flex flex-row gap-16 mt-20">
      <Image
        onClick={handleRunning}
        className="cursor-pointer"
        src="/StartAction.svg"
        alt="StartImg"
        width={100}
        height={100}
      />
      <Image className="cursor-pointer" src="/Pause.svg" alt="StartImg" width={100} height={100} />
      <Image
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
