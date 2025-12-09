import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [idError, setIdError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [helperIdMessage, setHelperIdMessage] = useState<string>("");
  const [helperPasswordMessage, setHelperPasswordMessage] = useState<string>("");
  const idHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    if (!id || id.length === 0) {
      console.log("이메일 없음");
      setIdError(true);
      setHelperIdMessage("이메일을 입력해주세요");
    } else {
      setIdError(false);
    }

    if (!password || password.length === 0) {
      setPasswordError(true);
      setHelperPasswordMessage("비밀번호를 입력해주세요");
    } else {
      setPasswordError(false);
    }

    if (id && !id.includes("@")) {
      setIdError(true);
      setHelperIdMessage("이메일 형식으로 작성해주세요");
    } else {
      setPasswordError(false);
    }
  };

  const passwordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!id || id.length === 0) {
      setIdError(true);
      setHelperIdMessage("이메일을 입력해주세요");
    } else {
      setIdError(false);
    }
    if (!e.target.value || e.target.value.length === 0) {
      setPasswordError(true);
      setHelperPasswordMessage("비밀번호를 입력해주세요");
    } else {
      setPasswordError(false);
    }
    // console.log(e.target.value);
  };
  return (
    <>
      {/* 1. 배경 심볼 (위치 고정) */}

      <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">
        <Image
          src="/LoginBgImg.svg"
          alt="backgroundImage"
          width={1045}
          height={500}
          className="absolute left-[1048px] top-[60px] pointer-events-none z-0"
        />
        <div className="w-[500px] h-[598px] bg-white/50 rounded-[10px] shadow-[0px_40px_100px_40px_rgba(3,104,255,0.05)] backdrop-blur-[25px] flex flex-col items-center pt-[100px] px-[86px]">
          <div className="mb-[48px]">
            <Image
              src="/✅ Logo.svg"
              alt="Logo"
              width={132} // Figma 사이즈에 맞춰 조정 (원본 264가 너무 크다면)
              height={100}
            />
          </div>

          {/* 폼 영역 */}
          <form className="w-full flex flex-col gap-[36px]">
            <div className="flex flex-col gap-[36px]">
              <TextField
                fieldLabel="이메일"
                inputType="email"
                placeholder="example@email.com"
                onChange={idHandleChange}
                helperStatus={idError ? "error" : "default"}
                textHelperUsed={idError}
                helperMessage="이메일을 입력해주세요"
                value={id}
              />

              <TextField
                fieldLabel="비밀번호"
                inputType="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={passwordHandleChange}
                helperStatus={passwordError ? "error" : "default"}
                textHelperUsed={passwordError}
                helperMessage="비밀번호를 입력해주세요"
                value={password}
              />
            </div>

            <div className="mt-[12px]">
              // 추후 disabled true로 default 수정
              <Button type="submit" variant="primary" disabled={false} className="w-full">
                로그인
              </Button>
            </div>
          </form>

          {/* 하단 링크 */}
          <div className="mt-[24px] flex items-center gap-4 text-[14px] font-medium text-[#4C79FF]">
            <Link href="/signup" className="hover:underline">
              회원가입
            </Link>
          </div>
        </div>{" "}
        {/* 카드 컨테이너 끝 */}
      </div>
    </>
  );
}
