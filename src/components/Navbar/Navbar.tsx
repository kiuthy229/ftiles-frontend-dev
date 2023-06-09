import React, { FunctionComponent, useEffect, useState } from "react";

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

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [yaxis, setYaxis] = useState(NavbarContainer.scrollY);
  const [activateNav, setActivateNav] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => setYaxis(NavbarContainer.scrollY));
    if (yaxis > 200) {
      setActivateNav(true);
    }
    if (yaxis < 200) {
      setActivateNav(false);
    }

    return () => {
      window.removeEventListener("scroll", (e: any) => setYaxis(e));
    };
  }, [yaxis]);
  return (
    <>
      {activateNav && (
        <NavbarContainer id="navbar">
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
                <UserAvatar
                  style={{
                    backgroundColor: "#F9E2AF",
                  }}
                />
              </Item>
            </RightCornerItems>
          </Wrapper>
        </NavbarContainer>
      )}
    </>
  );
};

export default Navbar;
