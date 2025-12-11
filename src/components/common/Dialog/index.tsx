import Button from "../Button";

interface DialogProps {
  title: string;
  message?: string;
  isOpen: boolean;
  confirmLabel?: string;
  onConfirm?: () => void;
  cancelLabel?: string;
  onCancel?: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  message,
  confirmLabel = "확인",
  onConfirm,
  cancelLabel,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[328px] bg-white rounded-[12px] p-[24px] flex flex-col gap-[24px] shadow-[0px_8px_8px_rgba(0,0,0,0.05)] animate-fadeIn">
        <div className="flex flex-col gap-[8px] ">
          <h2 className="text-[20px] font-semibold text-[#1F2937] leading-[24px] font-pretendard">
            {title}
          </h2>
          <h3 className="text-[16px] font-normal text-[#6B7280] font-pretendard">{message}</h3>
        </div>

        <div className="flex gap-[16px] w-full">
          {/* 취소 버튼 (onCancel이 있을 때만 렌더링) */}
          {onCancel && (
            <Button
              variant="tertiary" // Figma의 회색 버튼 스타일에 맞춤 (Tertiary or Secondary)
              onClick={onCancel}
              className="flex-1 bg-[#F9FAFB] hover:bg-[#F3F4F6]"
            >
              {cancelLabel || "취소"}
            </Button>
          )}

          {/* 확인 버튼 (Full Width) */}
          <Button
            variant="primary"
            onClick={onConfirm}
            className="flex-1" // flex-1을 주어 공간을 가득 채우게 함
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
