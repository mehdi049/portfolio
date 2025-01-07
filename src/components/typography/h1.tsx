import { TypographyProps } from "./type";

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={`text-4xl lg:text-7xl uppercase font-bold text-gray-900 tracking-wide ${className}`}
    >
      {children}
    </h1>
  );
};
