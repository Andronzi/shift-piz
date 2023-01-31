import React from "react";
import Icons from "./items/Icons";
import LinksList from "./items/LinksList";
import Logo from "./items/Logo";
import { navbarWrapper } from "./constants/NavbarClasses";
import Hamburger from "./items/Hamburger";

const Navbar = () => (
  <div className="shadow">
    <div className={navbarWrapper}>
      <Hamburger />
      <Logo />
      <LinksList
        isMobile={false}
        linkCallback={undefined}
      />
      <Icons />
    </div>
  </div>
);

export default Navbar;
