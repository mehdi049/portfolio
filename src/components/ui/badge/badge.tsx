type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};
export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center text-xs font-medium bg-black text-white rounded-sm p-1 w-max ${className}`}
    >
      {children}
    </span>
  );
};
