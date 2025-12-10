import Button from "@/components/common/Button";
import { TextFieldInput } from "@/components/common/Input";
import TextField from "@/components/common/TextField";
import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex w-full h-screen min-h-[900px]">
      <div className="hidden lg:flex w-1/2 h-full bg-primary flex-col items-center justify-center gap-9">
        <Image
          src="/Logo.svg" // 'public' 빼고 파일명부터 시작
          alt="Logo"
          width={264}
          height={200}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="w-[420px] flex flex-col gap-4">
          <div className="flex justify-center text-primary text-2xl/[30px] font-bold  font-['Pretendard']    ">
            <label>회원가입</label>
          </div>
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
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between">
              <label>이용약관</label>
              <div className="flex gap-1">
                <label>동의함</label>
                <input type="checkbox" />
              </div>
            </div>
            <div className="w-full h-[110px] bg-[#F9FAFB] rounded-[5px] p-[12px_16px] overflow-y-auto border border-transparent focus:border-[#4C79FF]">
              {/* 2. 텍스트: Figma 스타일 적용 (font-bold, 12px, leading-16px) */}
              {/* whitespace-pre-wrap: 텍스트의 줄바꿈을 유지해줍니다. */}
              <p className="font-['Pretendard'] font-bold text-[12px] leading-[16px] text-gray-600 whitespace-pre-wrap">
                제1조 (목적) 이 약관은 DevTime(이하 “서비스”)의 이용 조건 및
                절차, 사용자와 서비스 제공자(회사) 간의 권리, 의무 및 책임사항을
                규정함을 목적으로 합니다.
                <br />
                <br />
                제2조 (정의) 서비스: 개발자들이 일상 업무 및 할 일을 효과적으로
                관리할 수 있도록 제공되는 DevTime(데브타임) TODO 앱 및 관련
                기능을 말합니다. 사용자: 이 약관에 따라 서비스를 이용하는 개인
                및 단체를 의미합니다. 계정: 사용자가 서비스를 이용하기 위해
                등록하는 고유 식별 정보를 의미합니다.
                <br />
                <br />
                제3조 (약관의 효력 및 변경) 본 약관은 사용자가 서비스에 최초
                가입하거나 서비스를 이용하는 시점부터 효력을 발생합니다. 회사는
                필요에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 앱 내
                공지사항 또는 이메일 등으로 사전에 고지합니다.
                <br />
                <br />
                제4조 (서비스 제공 및 변경) 회사는 사용자가 할 일을 등록, 수정,
                삭제하고 일정을 관리할 수 있도록 서비스를 제공합니다. 서비스의
                일부 기능 또는 전체 서비스를 사전 예고 없이 변경하거나 중단할 수
                있으며, 이로 인한 책임은 회사가 부담하지 않습니다.
                <br />
                <br />
                제5조 (사용자의 의무) 사용자는 서비스 이용 시 관련 법령 및 본
                약관을 준수해야 합니다. 사용자는 본인의 계정 및 비밀번호를
                안전하게 관리하며, 타인에게 양도하거나 공유할 수 없습니다.
                사용자는 서비스 이용 과정에서 다음과 같은 행위를 해서는 안
                됩니다: 타인의 권리를 침해하거나 불법적인 목적으로 서비스를
                이용하는 행위 허위 정보를 기재하거나 부정한 방법으로 서비스를
                이용하는 행위 회사의 정상적인 서비스 운영을 방해하는 행위
                <br />
                <br />
                제6조 (개인정보 보호) 회사는 개인정보 보호 관련 법령을 준수하며,
                별도의 개인정보 처리방침에 따라 사용자의 개인정보를 안전하게
                관리합니다. 사용자는 서비스 이용을 위해 필요한 최소한의
                개인정보를 제공하며, 해당 정보는 서비스 제공 목적에 한해서만
                사용됩니다.
                <br />
                <br />
                제7조 (서비스 이용 제한 및 중지) 회사는 사용자가 본 약관을
                위반한 경우 경고 후 서비스 이용을 제한하거나 중지할 수 있습니다.
                사용자는 본 약관 위반 시 발생하는 모든 결과에 대해 책임을 지며,
                회사는 이에 대해 어떠한 책임도 지지 않습니다.
                <br />
                <br />
                제8조 (책임의 제한) 회사는 천재지변, 불가항력적 사유, 또는 통신
                장애 등으로 인한 서비스 제공 중단에 대해 책임을 지지 않습니다.
                회사는 사용자가 서비스를 이용하여 발생한 데이터 손실, 업무상
                손해 등에 대해 책임을 제한합니다.
                <br />
                <br />
                제9조 (준거법 및 관할법원) 본 약관은 대한민국 법률에 따라 해석
                및 적용됩니다. 서비스 이용과 관련하여 발생한 분쟁은 회사 본사
                소재지를 관할하는 법원을 제1심 관할법원으로 합니다.
                <br />
                <br />
                제10조 (부칙) 본 약관은 2024년 2월 1일부터 시행됩니다. 본 약관에
                명시되지 않은 사항은 관련 법령 및 회사의 내부 정책에 따릅니다.
              </p>
            </div>
            <Button variant="primary" disabled={true} className="w-full">
              회원가입
            </Button>
            <div className="w-full flex ">
              <label>회원이신가요?</label>
              <label>로그인 바로가기</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
