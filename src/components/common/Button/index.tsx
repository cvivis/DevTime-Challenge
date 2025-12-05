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
  // 1. Base Style
  // - h-12 (48px), px-4 (16px), py-3 (12px)
  // - rounded-[5px] (디자인 명세 5px 준수)
  // - font-['Pretendard'] (폰트 적용)
  // - border-[1.5px] border-transparent (Focus 시 테두리가 생길 때 사이즈가 튀지 않도록 투명 테두리 미리 확보)
  const baseStyle =
    "flex items-center justify-center h-12 px-4 py-3 rounded-[5px] font-['Pretendard'] font-semibold text-[18px] leading-[22px] transition-all duration-150 border-[1.5px] border-transparent outline-none";

  let variantStyle = "";

  // 2. Variant & State Logic
  // 디자인 명세에 따라 Disabled 상태도 Variant 별로 색상이 다르므로 switch 문 안에서 처리
  switch (variant) {
    case "primary":
      if (disabled) {
        // Primary Disabled: Bg(#969DA8), Text(#CCD0D6)
        variantStyle = "bg-[#969DA8] text-[#CCD0D6] cursor-not-allowed pointer-events-none";
      } else {
        // Primary Enabled
        // Focus: border-[#FF47FF] (Magenta)
        variantStyle = `
          bg-[#4C79FF] text-white 
          hover:brightness-90 
          active:brightness-75
          focus:border-[#FF47FF]
        `;
      }
      break;

    case "secondary":
      if (disabled) {
        // Secondary Disabled: Bg(#E5E7EB), Text(#969DA8)
        variantStyle = "bg-[#E5E7EB] text-[#969DA8] cursor-not-allowed pointer-events-none";
      } else {
        // Secondary Enabled: Bg(Blue 10%), Text(#4C79FF)
        variantStyle = `
          bg-[rgba(76,121,255,0.1)] text-[#4C79FF] 
          hover:bg-[rgba(76,121,255,0.2)] 
          active:bg-[rgba(76,121,255,0.3)]
          focus:border-[#FF47FF]
        `;
      }
      break;

    case "tertiary":
      if (disabled) {
        // Tertiary Disabled: Bg(#E5E7EB), Text(#969DA8) - Secondary와 동일
        variantStyle = "bg-[#E5E7EB] text-[#969DA8] cursor-not-allowed pointer-events-none";
      } else {
        // Tertiary Enabled: Bg(#F9FAFB), Text(#4C79FF)
        variantStyle = `
          bg-[#F9FAFB] text-[#4C79FF] 
          hover:brightness-95 
          active:brightness-90
          focus:border-[#FF47FF]
        `;
      }
      break;
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
