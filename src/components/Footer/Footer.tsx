import React from "react";
import Logo from "./items/Logo";
import Icons from "./items/Icons";

const Footer = (): JSX.Element => (
  <div className="bg-black flex items-center justify-between h-20 w-full px-10 mt-8">
    <Logo />
    <Icons />
  </div>
);

export default Footer;
