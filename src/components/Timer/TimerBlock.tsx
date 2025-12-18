interface TimerProps {
  value: string;
  text: string;
}

const Timer = ({ value, text }: TimerProps) => {
  return (
    <div className="flex justify-even">
      <div className="flex flex-col items-center bg-primary-gradient w-[264px] h-[298px] ">
        <div className="flex flex-col w-[250px] h-[200px] items-center  font-digital leading-[200px] text-center text-primary text-[154px] ">
          {value}
        </div>
        <div className="flex flex-col  items-center text-primary font-semibold text-sm leading-[18px] text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Timer;
