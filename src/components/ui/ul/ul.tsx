type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};
export const Ul = ({ children, className }: ButtonProps) => {
  return (
    <ul className={`list-disc space-y-2 ml-4 ${className}`}>{children}</ul>
  );
};
