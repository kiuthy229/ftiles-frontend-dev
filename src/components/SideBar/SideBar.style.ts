import styled from "styled-components";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Select from "react-select";

export const SideBarContainer = styled.div`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  max-height: 100vh;
  width: 13%;
  background-color: white;
  overflow: auto;
  overscroll-behavior: auto none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const LogoContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.span``;

export const LogoImage = styled.img`
  margin-top: 10px;
  max-width: 65px;
`;

export const CenterContainer = styled.div`
  padding-left: 10px;
`;

export const CenterItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledStoreIcon = styled(StoreIcon)`
  font-size: 18px;
  color: #422f8a;
`;

export const StyledLocalShippingIcon = styled(LocalShippingIcon)`
  font-size: 18px;
  color: #422f8a;
`;
export const StyledSettingsApplicationsIcon = styled(SettingsApplicationsIcon)`
  font-size: 18px;
  color: #422f8a;
`;
export const StyledExitToAppIcon = styled(ExitToAppIcon)`
  font-size: 18px;
  color: #422f8a;
`;
export const StyledAccountCircleOutlinedIcon = styled(
  AccountCircleOutlinedIcon
)`
  font-size: 18px;
  color: #422f8a;
`;

export const ItemText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

export const CenterItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ece8ff;
  }
`;

export const BranchHeader = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const BranchHeaderText = styled.span``;

export const BranchSelect = styled(Select)`
  min-width: 18vh;
  font-size: 13px;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
  &::-webkit-scrollbar-track {
    visibility: hidden;
  }
`;
