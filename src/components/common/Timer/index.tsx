import TimerBlock from "./TimerBlock";

const Timer = ({ time }: { time: string }) => {
  const [hourValue, minuteValue, secondValue] = time.split(":");

  return (
    <div className="flex flex-row gap-8 mt-16 ">
      <TimerBlock value={hourValue} text={"H O U R S"}></TimerBlock>
      <div className="flex flex-col w-[24px] gap-[64px] text-[154px] text-primary h-">:</div>
      <TimerBlock value={minuteValue} text={"M I N U T E S"}></TimerBlock>
      <div className="flex flex-col w-[24px] gap-[64px] text-[154px] text-primary h-">:</div>
      <TimerBlock value={secondValue} text={"S E C O N D S"}></TimerBlock>
    </div>
  );
};

export default Timer;
