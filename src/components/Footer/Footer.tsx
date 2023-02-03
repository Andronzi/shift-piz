import React from "react";
import Icons from "./items/Icons";
import Logo from "./items/Logo";

const Footer = (): JSX.Element => (
  <div className="bg-black w-full px-4">
    <div className="max-w-screen-xl flex items-center justify-between h-28 mx-auto">
      <Logo />
      <Icons />
    </div>
  </div>
);

export default Footer;
