import React from "react";
import { Bookmark } from "./components/bookmark";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link href="/">
          <a>
            <div className="header__title">Zoom-Zoom</div>
          </a>
        </Link>
      </div>

      <nav className="bookmark-wrapper">
        <Bookmark title="Афиша" href="/afisha" />
        <Bookmark title="Кинотеатры" href="/cinemas" />
        <Bookmark title="О нас" href="/about" />
      </nav>
    </>
  );
};

export default Header;
