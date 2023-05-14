import Link from "next/link";
import style from "./css/style.module.css";

function NavItem ({ text, href, active }) {
  return (
    <Link href={href} className={style.navLink}
    style={
      {
        textDecoration: 'none',
        padding:'150px',
        lineHeight: '5em',
       
      }
    }>
     {text}
    </Link>
  );
};

export default NavItem;