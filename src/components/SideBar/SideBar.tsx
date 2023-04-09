import React, {
  FunctionComponent,
  useContext,
  useLayoutEffect,
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
  ItemText,
  Logo,
  LogoContainer,
  LogoImage,
  SideBarContainer,
  StyledAccountCircleOutlinedIcon,
  StyledExitToAppIcon,
  StyledLocalShippingIcon,
  StyledSettingsApplicationsIcon,
  StyledStoreIcon,
} from "./SideBar.style";
import { initialBranchesValue } from "../../common/common";
import { MyContext } from "../Theme/Theme";
import { useAxios } from "../../common/useAxios";

interface SideBarProps {}

export type allBranchesData = {
  id: number;
  branchName: string;
};

const SideBar: FunctionComponent<SideBarProps> = () => {
  let allBranches: allBranchesData[] = initialBranchesValue;
  const { actions } = useContext<any>(MyContext);
  const branchOptions = allBranches
    ? allBranches.map((branch) => ({
        value: branch.id,
        label: branch.branchName,
      }))
    : [];
  const [selectedOption] = useState([]);
  let { apiData, loading }: any = useAxios("ftiles/branch/allBranches");

  allBranches = useMemo(() => apiData, [loading]);

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
              defaultValue={selectedOption}
              isMulti
              onChange={(e: any) => {
                actions.chooseBranch(e.map((data: any) => data.value));
              }}
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
