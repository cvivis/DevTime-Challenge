import Button from "@/components/common/Button";
import { TextFieldInput } from "@/components/common/Input";
import Image from "next/image";
import SignUp from "./signup";
import Router from "next/router";

export default function Home() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log("클릭중")}>
        Button
      </Button>
      <Button variant="secondary" onClick={() => console.log("클릭중22")}>
        Button
      </Button>
      <Button variant="tertiary" onClick={() => console.log("클릭중3")}>
        Button
      </Button>
      <Button variant="primary" disabled={true} onClick={() => console.log("클릭중3")}>
        Button
      </Button>
      <Button variant="secondary" disabled={true} onClick={() => console.log("클릭중3")}>
        Button
      </Button>
      <Button variant="tertiary" onClick={() => Router.push("/signup")}>
        회원가입 페이지로 이동
      </Button>
      {/* <div>
        <SignUp></SignUp>
      </div> */}
    </div>
  );
}
