import { TextFieldInput } from "@/components/common/Input";
import { TextFieldHelper } from "./TextFieldHepler";
import Button from "../Button";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldLabel?: string;
  placeholder?: string;
  buttonText?: string;
  helperMessage?: string;
  helperStatus?: "default" | "error" | "success" | "informative";
  buttonDisabled?: boolean;
  buttonUsed?: boolean;
  textHelperUsed?: boolean;
  inputType?: string;
}

export default function TextField({
  fieldLabel,
  inputType,
  buttonText,
  helperMessage,
  helperStatus,
  buttonDisabled,
  buttonUsed,
  textHelperUsed,
  ...rest
}: TextFieldProps) {
  return (
    <div>
      <label className="w full[208px] h full[18px]">{fieldLabel}</label>
      <div className="flex w-full">
        <TextFieldInput type={inputType} {...rest} />
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
