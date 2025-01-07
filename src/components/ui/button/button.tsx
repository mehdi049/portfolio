type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};
export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`py-4 px-4 sm:py-4 sm:px-6 bg-black hover:bg-black/80 text-white uppercase text-sm font-semibold ${className}`}
    >
      {children}
    </button>
  );
};
