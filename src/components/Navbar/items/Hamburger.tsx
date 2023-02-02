import React from "react";
import {
  mobileLinkListWrapper,
  hamburgerButton,
  hamburgerSpan,
} from "../constants/NavbarClasses";
import LinksList from "./LinksList";

const Hamburger = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleLinkClick = () => {
    setIsActive(false);
  };

  const handleMenuClick = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <>
      <button
        className={hamburgerButton}
        onClick={handleMenuClick}
        type="button">
        <span className={hamburgerSpan} />
      </button>

      {isActive ? (
        <div className={mobileLinkListWrapper}>
          <LinksList
            isMobile
            linkCallback={handleLinkClick}
          />
        </div>
      ) : null}
    </>
  );
};

export default Hamburger;
