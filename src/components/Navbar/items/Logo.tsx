import React from "react";
import delivery from "@icons/delivery.svg";
import { logoIcon, logoText, logoWrapper } from "../constants/NavbarClasses";

const Logo = (): JSX.Element => (
  <div className={logoWrapper}>
    <img
      alt="logo"
      className={logoIcon}
      src={delivery}
    />

    <p className={logoText}>Delivery</p>
  </div>
);

export default Logo;
