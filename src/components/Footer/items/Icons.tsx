import facebook from "@icons/footerIcons/facebook.svg";
import twitter from "@icons/footerIcons/twitter.svg";
import vk from "@icons/footerIcons/vk.png";
import React from "react";

const Icons = (): JSX.Element => (
  <div className="flex items-center gap-4">
    <a href="http://facebook.com">
      <img
        alt="facebook"
        className="h-4 w-4"
        src={facebook}
      />
    </a>
    <a href="http://twitter.com">
      <img
        alt="twitter"
        className="h-4 w-4"
        src={twitter}
      />
    </a>
    <a href="http://vk.com">
      <img
        alt="vk"
        className="h-4 w-4"
        src={vk}
      />
    </a>
  </div>
);

export default Icons;
