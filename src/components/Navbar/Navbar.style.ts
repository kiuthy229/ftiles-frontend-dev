import styled from "styled-components";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const NavbarContainer = styled.div`
  height: 50px;
  width: 71%;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  position: fixed;
  background-color: #ffffff;

  @keyframes scroll {
    from {
      margin-top: -90px;
    }
    to {
      margin-top: 0;
    }
  }
  z-index: 9;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;
export const TabText = styled.span`
  position: relative;
  font-size: 13px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 3px;
`;

export const SearchInput = styled.input`
  position: relative;
  width: auto;
  border: 6px;
  outline: none;
  background: transparent;
  &::placeholder {
    font-size: 12px;
  }
`;

export const RightCornerItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  background-color: #c1f4c5;
  padding: 10px;
  border-radius: 6px;
  &:hover {
    background-color: #8fd9a8;
  }
`;

export const ButtonItemText = styled.div`
  font-weight: bolder;
  font-size: 14px;
  color: #006a71;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
`;

export const NotificationCounter = styled.div`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  position: relative;
  top: -5px;
  right: -5px;
  display: none;
`;

export const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const StyledNotificationsNoneOutlinedIcon = styled(
  NotificationsNoneOutlinedIcon
)`
  font-size: 20px;
`;

export const StyledDashboardIcon = styled(DashboardIcon)`
  font-size: 20px;
`;
