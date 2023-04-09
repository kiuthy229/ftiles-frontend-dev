import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import {
  BranchHeader,
  BranchHeaderText,
  BranchSelect,
  CenterContainer,
  CenterItem,
  CenterItemList,
  Logo,
  LogoContainer,
  LogoImage,
  SideBarContainer,
  StyledStoreIcon,
} from "./SideBar.style";
import { MyContext } from "../Theme/Theme";
import { useAxios } from "../../common/useAxios";

interface SideBarProps {}

export type allBranchesData = {
  id: number;
  branchName: string;
};

const SideBar: FunctionComponent<SideBarProps> = () => {
  const [allBranches, setAllBranches] = useState<allBranchesData[]>([]);
  const { actions } = useContext<any>(MyContext);
  let { apiData, loading }: any = useAxios("ftiles/branch/allBranches");
  let branchOptions = loading
    ? []
    : allBranches && allBranches.length !== 0
    ? allBranches.map((branch) => ({
        value: branch.id,
        label: branch.branchName,
      }))
    : [];

    
    useEffect(() => {
    setAllBranches(apiData);
    console.log(allBranches);
  }, [apiData]);

  return (
    <SideBarContainer>
      <LogoContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <LogoImage src={logo} alt="logo" />
          </Logo>
        </Link>
      </LogoContainer>

      <br />

      <CenterContainer>
        <CenterItemList>
          <BranchHeader>
            <StyledStoreIcon />
            <BranchHeaderText>CHI NHÁNH</BranchHeaderText>
          </BranchHeader>

          <CenterItem>
            <BranchSelect
              defaultValue={[]}
              isMulti
              onChange={(e: any) => actions.chooseBranch(e.map((data:any)=>data.value))}
              maxMenuHeight={220}
              menuPlacement="auto"
              options={branchOptions}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
          </CenterItem>
        </CenterItemList>
      </CenterContainer>
    </SideBarContainer>
  );
};

export default SideBar;
