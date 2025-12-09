interface HelperTextProps {
  message?: string;
  status?: "default" | "error" | "success" | "informative";
  className?: string;
}

export const TextFieldHelper = ({ message, status, className }: HelperTextProps) => {
  const baseStyle = "mt-1 text-sm";
  let textColor = "text-green-500";
  console.log(status);
  switch (status) {
    case "error":
      textColor = "text-red-500";
      break;
    case "success":
      textColor = "text-green-500";
      break;
    case "informative":
      textColor = "text-blue-500";
      break;
    default:
      "text-gray-500";
  }

  return <p className={`${baseStyle} ${className} ${textColor}`}>{message}</p>;
};
