import { TextFieldInput } from "@/components/common/Input";
import TextField from "@/components/common/TextField";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex w-full h-screen min-h-[900ox]">
      <div className="hidden lg:flex w-1/2 h-full bg-primary flex-col items-center justify-center gap-9">
        <Image
          src="/Logo.svg" // 'public' 빼고 파일명부터 시작
          alt="Logo" // 접근성을 위해 필수
          width={264} // 원본 크기 혹은 표시할 크기 지정 필수
          height={200}
        />
      </div>
      <div className="flex flex-col justify-center">
        <label>회원가입</label>
        <TextField
          buttonText="중복확인"
          fieldLabel="아이디"
          placeholder="이메일 주소 형식으로 입력해주세요"
          buttonDisabled={true}
          buttonUsed={true}
        ></TextField>
        <TextField
          buttonText="중복확인"
          fieldLabel="닉네임"
          placeholder="닉네임을 입력해주세요"
          buttonDisabled={true}
          buttonUsed={true}
        ></TextField>
        <TextField
          fieldLabel="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          buttonDisabled={true}
          buttonUsed={false}
        ></TextField>
        <TextField
          fieldLabel="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          buttonDisabled={true}
          buttonUsed={false}
        ></TextField>
      </div>
    </div>
  );
}
