import { ACF_OPTIONS_URL } from "@/lib/constants";
import Link from "next/link";

const HeaderMenu = async () => {
  const res = await fetch(ACF_OPTIONS_URL);
  const options = await res.json();

  let menu = options.acf.header_menu;

  menu = menu.map((item) => {
    return {
      ...item.menu_item,
      slug: item.menu_item.url.split("/").filter(Boolean).pop(),
    };
  });

  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        {menu.map((item) => (
          <Link className="header-menu__item" href={item.slug}>
            {item.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
