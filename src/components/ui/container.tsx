import React from "react";
import { PropsWithChildren } from "react";


 const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-[80%] mx-auto px-4 py-4 flex items-center justify-between">{children}</div>;
};

export default Container