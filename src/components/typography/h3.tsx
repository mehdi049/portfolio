import { TypographyProps } from "./type";

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={`text-xl font-medium uppercase text-gray-500 tracking-widest ${className}`}
    >
      {children}
    </h3>
  );
};
