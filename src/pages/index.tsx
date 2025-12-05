import Button from "@/components/common/Button";
import Image from "next/image";

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
      <Button variant="tertiary" disabled={true} onClick={() => console.log("클릭중3")}>
        Button
      </Button>
    </div>
  );
}
