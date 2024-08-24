"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface StartContextProps {
  isEnter: boolean;
  setIsEnter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Start = createContext<StartContextProps | undefined>(undefined);

const StartProvider: React.FC<{ children: ReactNode }> = ({ children }: any) => {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  return (
    <Start.Provider
      value={{
        isEnter,
        setIsEnter,
      }}
    >
      {children}
    </Start.Provider>
  );
};

export const useStart = (): StartContextProps => {
  const context = useContext(Start);
  if (!context) {
    throw new Error("Error on Context provider");
  }
  return context;
};

export default StartProvider;
