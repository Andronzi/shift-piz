import React from "react";
import Icons from "./items/Icons";
import Logo from "./items/Logo";

const Footer = (): JSX.Element => (
  <div className="w-full bg-black px-4">
    <div className="mx-auto flex h-28 max-w-screen-xl items-center justify-between">
      <Logo />
      <Icons />
    </div>
  </div>
);

export default Footer;
