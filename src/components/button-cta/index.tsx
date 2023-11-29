const ButtonCTA: React.FC<
  React.PropsWithChildren<{
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type: 'button' | 'submit' | 'reset';
  }>
> = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`"group bg-red-400 disabled:bg-red-200 disabled:cursor-not-allowed font-serif text-white text-lg py-2 px-4 mt-8 inline-flex items-center rounded-xl transition-all shadow-xl shadow-red-100 hover:shadow-2xl hover:shadow-red-200 active:shadow-lg active:shadow-red-200" ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
