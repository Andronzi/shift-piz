import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import {
  listLi,
  mobileLinksList,
  notMobileLinksList,
} from "../constants/NavbarClasses";
import { link } from "../constants/NavbarClasses";

interface LinksListProps {
  isMobile: boolean;
  linkCallback: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const LinksList: React.FC<LinksListProps> = ({ isMobile, linkCallback }) => {
  return (
    <ul className={`${isMobile ? mobileLinksList : notMobileLinksList}`}>
      <li className={listLi}>
        <Link
          to="/main"
          onClick={linkCallback}
          className={link}>
          Главная
        </Link>
      </li>

      <li className={listLi}>
        <Link
          to="/menu"
          onClick={linkCallback}
          className={link}>
          Меню
        </Link>
      </li>
      <li className={listLi}>
        <Link
          to="/orders"
          onClick={linkCallback}
          className={link}>
          Заказы
        </Link>
      </li>
    </ul>
  );
};

export default LinksList;
