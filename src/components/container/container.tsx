type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`w-full max-w-[1200px] px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};
