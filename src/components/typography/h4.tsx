import { TypographyProps } from "./type";

export const H4 = ({ children, className }: TypographyProps) => {
  return (
    <h4
      className={`uppercase text-gray-400 font-medium tracking-wider ${className}`}
    >
      {children}
    </h4>
  );
};
