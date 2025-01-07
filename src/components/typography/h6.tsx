import { TypographyProps } from "./type";

export const H6 = ({ children, className }: TypographyProps) => {
  return <h6 className={`font-semibold ${className}`}>{children}</h6>;
};
