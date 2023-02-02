import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import {
  listLi,
  mobileLinksList,
  notMobileLinksList,
  link,
} from "../constants/NavbarClasses";

interface LinksListProps {
  isMobile: boolean;
  linkCallback: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const LinksList: React.FC<LinksListProps> = ({ isMobile, linkCallback }) => (
  <ul className={`${isMobile ? mobileLinksList : notMobileLinksList}`}>
    <li className={listLi}>
      <Link
        className={link}
        onClick={linkCallback}
        to="/main">
        Главная
      </Link>
    </li>

    <li className={listLi}>
      <Link
        className={link}
        onClick={linkCallback}
        to="/menu">
        Меню
      </Link>
    </li>
    <li className={listLi}>
      <Link
        className={link}
        onClick={linkCallback}
        to="/orders">
        Заказы
      </Link>
    </li>
  </ul>
);

export default LinksList;
