import React, { FunctionComponent } from "react";

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
import logo from "../../assets/logo.png";

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
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
            <ItemText>Chi nhánh 1</ItemText>
          </CenterItem>
          <CenterItem>
            <ItemText>Chi nhánh 2</ItemText>
          </CenterItem>
          <CenterItem>
            <ItemText>Chi nhánh 3</ItemText>
          </CenterItem>
          <CenterItem>
            <ItemText>Chi nhánh 4</ItemText>
          </CenterItem>
          <CenterItem>
            <ItemText>Chi nhánh 5</ItemText>
          </CenterItem>
          <CenterItem>
            <ItemText>Chi nhánh 6</ItemText>
          </CenterItem>

          <br />

          <CenterItem>
            <StyledLocalShippingIcon />
            <ItemText>3. Kho tổng Miền Nam</ItemText>
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
