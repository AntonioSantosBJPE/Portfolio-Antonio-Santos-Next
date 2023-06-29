interface IpropsLayoutDefault {
  className: string;
  children: React.ReactNode;
}

export const LayoutDefault = ({ children, className }: IpropsLayoutDefault) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};
