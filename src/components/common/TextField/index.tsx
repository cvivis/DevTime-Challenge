import { TextFieldInput } from "@/components/common/Input";
import { TextFieldHelper } from "./TextFieldHepler";
import Button from "../Button";

interface TextFieldProps {
  fieldLabel?: string;
  placeholder?: string;
  buttonText?: string;
  helperMessage?: string;
  helperStatus?: "default" | "error" | "success" | "informative";
  buttonDisabled?: boolean;
  buttonUsed?: boolean;
  textHelperUsed?: boolean;
}

export default function TextField({
  fieldLabel,
  placeholder,
  buttonText,
  helperMessage,
  helperStatus,
  buttonDisabled,
  buttonUsed,
  textHelperUsed,
}: TextFieldProps) {
  return (
    <div>
      <label className="w full[208px] h full[18px]">{fieldLabel}</label>
      <div className="flex ">
        <TextFieldInput placeholder={placeholder} />
        {buttonUsed && (
          <Button variant="secondary" disabled={buttonDisabled}>
            {buttonText}
          </Button>
        )}
      </div>
      {textHelperUsed && (
        <TextFieldHelper status={helperStatus} message={helperMessage}></TextFieldHelper>
      )}
    </div>
  );
}
