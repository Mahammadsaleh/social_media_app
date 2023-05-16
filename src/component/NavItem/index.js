import Link from "next/link";
import style from "./css/style.module.css";

function NavItem ({ text, href, active }) {
  return (
    <Link href={href} className={style.navLink}
    style={
      {
        display:"flex",
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        padding:'10px',
        
       
      }
    }>
     {text}
    </Link>
  );
};

export default NavItem;