import React from "react";
import { Link } from "react-router-dom";
import cart from "@icons/cart.svg";
import { cartIcon, iconsWrapper } from "../constants/NavbarClasses";

const Icons = (): JSX.Element => (
  <div className={iconsWrapper}>
    <Link to="/cart">
      <img
        alt="корзина"
        className={cartIcon}
        src={cart}
      />
    </Link>
  </div>
);

export default Icons;
