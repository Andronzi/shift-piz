import React from "react";
import Logo from "./items/Logo";
import Icons from "./items/Icons";

const Footer = (): JSX.Element => (
  <div className="bg-black w-full px-4 mt-8">
    <div className="max-w-screen-xl flex items-center justify-between h-28 mx-auto">
      <Logo />
      <Icons />
    </div>
  </div>
);

export default Footer;
