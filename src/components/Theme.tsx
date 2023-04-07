import React, { FunctionComponent, useState } from "react";
import { initialBranchesList } from "../common/common";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const initialState = {
  branches: initialBranchesList,
};

export const MyContext = React.createContext(initialState);

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [branchData, setBranchData] = useState<number[]>([]);
  const [actions] = useState<any>({
    chooseBranch: (branch: number) => {
      setBranchData([...branchData, branch]);
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
