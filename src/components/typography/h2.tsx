import { TypographyProps } from "./type";

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={`text-3xl lg:text-5xl font-medium text-gray-900 ${className}`}
    >
      {children}
    </h2>
  );
};
