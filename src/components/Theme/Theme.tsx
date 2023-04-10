import React, { FunctionComponent, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const MyContext = React.createContext(null);

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [branchData, setBranchData] = useState<number[]>([]);
  const [actions] = useState({
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
