import React from "react";

// Priority를 variant로 정의합니다.
type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  className = "",
  ...rest
}) => {
  const baseStyle =
    "flex items-center justify-center w-[88px] h-12 px-4 py-3 rounded-[5px] font-['Pretendard'] font-semibold text-[18px] leading-[22px] transition-all duration-150 border-[1.5px] border-transparent outline-none whitespace-nowrap";

  let variantStyle = "";

  switch (variant) {
    case "primary":
      if (disabled) {
        variantStyle =
          "bg-disabled text-gray-300 cursor-not-allowed pointer-events-none";
      } else {
        variantStyle = `
          bg-primary text-white 
          hover:brightness-90 
          active:brightness-75
          focus:border-[#FF47FF]
        `;
      }
      break;

    case "secondary":
      if (disabled) {
        variantStyle =
          "bg-secondary text-disabled cursor-not-allowed pointer-events-none";
      } else {
        variantStyle = `
          bg-[rgba(76,121,255,0.1)] text-primary
          hover:bg-[rgba(76,121,255,0.2)] 
          active:bg-[rgba(76,121,255,0.3)]
          focus:border-[#FF47FF]
        `;
      }
      break;

    case "tertiary":
      if (disabled) {
        variantStyle =
          "bg-gray-200 text-disabled cursor-not-allowed pointer-events-none";
      } else {
        variantStyle = `
          bg-gray-50 text-primary
          hover:brightness-95 
          active:brightness-90
          focus:border-[#FF47FF]
        `;
      }
      break;
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
