import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Bookmark = ({ title, href }: { title: string; href: string }) => {
  const [active, setActive] = useState("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === href) {
      setActive("--active");
    }
  }, [pathname, href]);

  return (
    <a href={href} className={"bookmark " + active}>
      <div className="bookmark__title">{title}</div>
    </a>
  );
};

export { Bookmark };
