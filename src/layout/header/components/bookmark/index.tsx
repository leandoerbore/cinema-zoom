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
  }, [href]);

  return (
    <Link href={href} className="">
      <a className={"bookmark " + active}>
        <div className="bookmark__title">{title}</div>
      </a>
    </Link>
  );
};

export { Bookmark };
