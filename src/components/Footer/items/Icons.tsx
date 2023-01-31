import React from "react";
import facebook from "@icons/facebook.svg";
import twitter from "@icons/twitter.svg";
import vk from "@images/vk.png";

const Icons = (): JSX.Element => (
  <div className="flex items-center gap-4">
    <a href="http://facebook.com">
      <img
        className="w-4 h-4"
        src={facebook}
        alt="facebook"
      />
    </a>
    <a href="http://twitter.com">
      <img
        className="w-4 h-4"
        src={twitter}
        alt="twitter"
      />
    </a>
    <a href="http://vk.com">
      <img
        className="w-4 h-4"
        src={vk}
        alt="vk"
      />
    </a>
  </div>
);

export default Icons;
