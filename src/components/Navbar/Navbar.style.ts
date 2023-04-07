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
  color: #555;
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
`;

export const Wrapper = styled.div`
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
  font-size: 13px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 3px;
`;

export const SearchInput = styled.input`
  border: 6px;
  outline: none;
  background: transparent;
  &::placeholder {
    font-size: 12px;
  }
`;

export const RightCornerItems = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  background-color: #e5ecf6;
  padding: 10px;
  border-radius: 6px;
  &:hover {
    background-color: #c7d5e9;
  }
`;

export const ButtonItemText = styled.div`
  font-weight: bolder;
  font-size: 14px;
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
  position: absolute;
  top: -5px;
  right: -5px;
  display: none;
`;

export const UserAvatar = styled.img`
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
