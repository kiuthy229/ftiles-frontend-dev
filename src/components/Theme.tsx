import React, { FunctionComponent, useState } from "react";
import { branches } from "../common/common";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const MyContext = React.createContext(null);

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [branchData, setBranchData] = useState<number[]>(branches);
  const [actions] = useState({
    chooseBranch: (branch: number) => {
      setBranchData([branch]);
      return branchData;
    },
  });

  return (
    <MyContext.Provider value={{ actions, branchData } as any}>
      {children}
    </MyContext.Provider>
  );
};

export default ThemeProvider;
