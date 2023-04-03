import React, { FunctionComponent } from "react";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./SideBar.style.css";

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} alt="logo" />
          </span>
        </Link>
      </div>

      <br />

      <div className="center">
        <ul>
          <p className="title">
            <StoreIcon className="icon" />
            <span>CHI NHÁNH</span>
          </p>

          <li>
            <span>Chi nhánh 1</span>
          </li>
          <li>
            <span>Chi nhánh 2</span>
          </li>
          <li>
            <span>Chi nhánh 3</span>
          </li>
          <li>
            <span>Chi nhánh 4</span>
          </li>
          <li>
            <span>Chi nhánh 5</span>
          </li>
          <li>
            <span>Chi nhánh 6</span>
          </li>

          <br />

          <li>
            <LocalShippingIcon className="icon" />
            <span>3. Kho tổng Miền Nam</span>
          </li>

          <br />

          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default SideBar;
