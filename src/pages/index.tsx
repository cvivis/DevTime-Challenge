import Button from "@/components/common/Button";
import { TextFieldInput } from "@/components/common/Input";
import Image from "next/image";
import SignUp from "./signup";
import Router from "next/router";
import NavigationBar from "@/components/common/NabigationBar";
import Timer from "@/components/Timer";
import { useState } from "react";

export default function Home() {
  const [hourValue, setThourValue] = useState("25");
  const [minuteValue, setMinuteValue] = useState("00");
  const [secondValue, setSecondValue] = useState("00");
  const [textValue, setTextValue] = useState("HOURS");
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center w-[1200px]">
        <NavigationBar></NavigationBar>
      </div>
      <div className="flex flex-col items-center mt-20 mb-20 w-full">
        <h1 className="text-indigo-dark text-4xl md:text-[72px] font-bold leading-tight mb-4">
          WELCOME
        </h1>
        <p className="text-[#023E99] text-sm md:text-base font-normal opacity-80">
          DevTime을 사용하려면 로그인이 필요합니다.
        </p>
        <div className="flex flex-row gap-8 mt-16">
          <Timer value={hourValue} text={textValue}></Timer>
          <div className="flex flex-col w-[24px] gap-[64px] text-[154px] text-primary h-">:</div>
          <Timer value={minuteValue} text={textValue}></Timer>
          <div className="flex flex-col w-[24px] gap-[64px] text-[154px] text-primary h-">:</div>
          <Timer value={secondValue} text={textValue}></Timer>
        </div>
        <div className="flex gap-[134px]"></div>
      </div>
    </div>
  );
}
