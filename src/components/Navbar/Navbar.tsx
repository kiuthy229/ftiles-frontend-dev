import React, { FunctionComponent } from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  ButtonItem,
  ButtonItemText,
  Item,
  NavbarContainer,
  NotificationCounter,
  RightCornerItems,
  SearchContainer,
  SearchInput,
  StyledDashboardIcon,
  TabsContainer,
  TabText,
  UserAvatar,
  Wrapper,
} from "./Navbar.style";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <NavbarContainer>
      <Wrapper>
        <TabsContainer>
          <StyledDashboardIcon />
          <TabText>Dashboard</TabText>
        </TabsContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </SearchContainer>
        <RightCornerItems>
          <ButtonItem>
            <ButtonItemText>Bán hàng</ButtonItemText>
          </ButtonItem>

          <Item>
            <NotificationsNoneOutlinedIcon />
            <NotificationCounter>1</NotificationCounter>
          </Item>

          <Item>
            <UserAvatar src="" alt="" />
          </Item>
        </RightCornerItems>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
