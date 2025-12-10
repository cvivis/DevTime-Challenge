interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  isOpen,
  onClose,
  className = "",
  ...rest
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${className}`}
      {...rest}
    >
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <button
          className="bg-primary text-white px-4 py-2 rounded hover:brightness-90 active:brightness-75"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
};
