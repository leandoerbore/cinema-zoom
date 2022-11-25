import React from "react";
import { Bookmark } from "./components/bookmark";

const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/">
          <div className="header__title">Zoom-Zoom</div>
        </a>
      </div>

      <nav className="bookmark-wrapper">
        <Bookmark title="Афиша" href="/afisha" />
        <Bookmark title="Кинотеатры" href="/map" />
        <Bookmark title="О нас" href="/about" />
      </nav>
    </>
  );
};

export default Header;
