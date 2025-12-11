import { useState, ChangeEvent, FormEvent, useReducer, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import { loginApi } from "@/api/auth";
import { useRouter } from "next/router";
import { Dialog } from "@/components/common/Dialog";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const validateEmail = (value: string) => {
    if (!value) return "이메일을 입력해주세요.";
    if (!value.includes("@")) return "이메일 형식이 아닙니다.";
    return ""; // 에러 없음
  };

  const validatePassword = (value: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!value) return "비밀번호를 입력해주세요.";
    if (!regex.test(value)) return "비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다";
    return "";
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (emailError) {
      setEmailError(validateEmail(value));
    }
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (passwordError) {
      setPasswordError(validatePassword(value));
    }
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const handleDialogConfirm = () => {
    setIsDialogOpen(false);
    emailRef.current?.focus();
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    // 제출 전에 마지막으로 한 번 더 검사
    const emailMsg = validateEmail(email);
    const passMsg = validatePassword(password);
    if (emailMsg || passMsg) {
      setEmailError(emailMsg);
      setPasswordError(passMsg);
      return; // 에러 있으면 API 호출 안 함
    }

    try {
      const response = await loginApi(email, password);

      if (response.isFirstLogin) {
        router.push("/mypage");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">
        <Image
          src="/LoginBgImg.svg"
          alt="backgroundImage"
          width={1090}
          height={530}
          className="absolute left-[1048px] top-[60px] pointer-events-none"
        />
        <div className="w-[500px] h-[598px] bg-white/50 rounded-[10px] shadow-[0px_40px_100px_40px_rgba(3,104,255,0.05)] backdrop-blur-[25px] flex flex-col items-center pt-[100px] px-[86px]">
          <div className="mb-[48px]">
            <Image src="/Logo2.svg" alt="Logo" width={132} height={100} />
          </div>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-[36px]">
            <div className="flex flex-col gap-[36px]">
              <TextField
                fieldLabel="이메일"
                inputType="email"
                placeholder="example@email.com"
                value={email}
                ref={emailRef}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur} // ✨ 포커스 나갈 때 검증
                textHelperUsed={emailError.length > 0} // 에러 메시지가 있으면 true
                helperStatus={emailError.length > 0 ? "error" : "default"}
                helperMessage={emailError}
              />

              {/* 비밀번호 필드 */}
              <TextField
                fieldLabel="비밀번호"
                inputType="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur} // ✨ 포커스 나갈 때 검증
                textHelperUsed={passwordError.length > 0} // 에러 메시지가 있으면 true
                helperStatus={passwordError.length > 0 ? "error" : "default"}
                helperMessage={passwordError}
              />
            </div>

            <div className="mt-[12px]">
              <Button
                type="submit"
                variant="primary"
                // 버튼 비활성화 처리 (선택 사항)
                disabled={emailError.length > 0 || passwordError.length > 0 || !email || !password}
                className="w-full"
              >
                로그인
              </Button>
            </div>
          </form>

          <div className="mt-[24px] flex items-center gap-4 text-[14px] font-medium text-[#4C79FF]">
            <Link href="/signup" className="hover:underline">
              회원가입
            </Link>
          </div>
        </div>
      </div>
      <Dialog
        title="로그인 정보를 다시 확인해 주세요"
        isOpen={isDialogOpen}
        onConfirm={handleDialogConfirm}
      ></Dialog>
    </>
  );
}
