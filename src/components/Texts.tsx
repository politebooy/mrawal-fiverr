import React from "react";

const Title = ({ children, cls }: Props) => {
  return (
    <h2
      className={`text-5xl font-bold text-gray-700 font-['noto-serif'] ${cls}`}
    >
      {children}
    </h2>
  );
};

export default Title;

interface Props {
  children: React.ReactNode;
  cls?: string;
}
