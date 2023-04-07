import React, { FunctionComponent, useLayoutEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
  BranchHeader,
  BranchHeaderText,
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
import { requestURL } from "../../common/common";
import logo from "../../assets/logo.png";
import axios, { all } from "axios";

interface SideBarProps {}

export type allBranchesData = {
  id: number;
  branchName: string;
};

let initialValue = [
  {
    id: 1000000146,
    branchName: "1. Kho Nhà Máy",
  },
  {
    id: 1000000145,
    branchName: "2. Kho Ngoại Quan",
  },
  {
    id: 1000000114,
    branchName: "3. Kho Tổng Miền Nam",
  },
  {
    id: 1000000204,
    branchName: "4. Kho Củ Chi",
  },
  {
    id: 1000000158,
    branchName: "Chi nhánh thuế",
  },
  {
    id: 1000000202,
    branchName: "Dev Test",
  },
];
const SideBar: FunctionComponent<SideBarProps> = () => {
  const [allBranches, setAllBranches] = useState<allBranchesData[]>(
    initialValue
  );

  const fetchData = async () => {
    return await axios
      .get(`${requestURL}ftiles/branch/allBranches`, {
        data: { method: "HEAD", mode: "no-cors" },
      })
      .then((data: any) => {
        setAllBranches(data.data.data);
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

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

          {allBranches
            ? allBranches.map((branch, id) => (
                <CenterItem key={id}>
                  <ItemText>{branch.branchName}</ItemText>
                </CenterItem>
              ))
            : null}

          <br />

          <CenterItem>
            <StyledLocalShippingIcon />
            <ItemText>Giao hàng</ItemText>
          </CenterItem>

          <br />

          <CenterItem>
            <StyledSettingsApplicationsIcon />
            <ItemText>Settings</ItemText>
          </CenterItem>
          <CenterItem>
            <StyledAccountCircleOutlinedIcon />
            <ItemText>Profile</ItemText>
          </CenterItem>
          <CenterItem>
            <StyledExitToAppIcon />
            <ItemText>Logout</ItemText>
          </CenterItem>
        </CenterItemList>
      </CenterContainer>
    </SideBarContainer>
  );
};

export default SideBar;
