import { TypographyProps } from "./type";

export const H5 = ({ children, className }: TypographyProps) => {
  return (
    <h5
      className={`text-base sm:text-lg font-medium text-gray-700 tracking-wide ${className}`}
    >
      {children}
    </h5>
  );
};
