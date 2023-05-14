import Link from "next/link";
function NavItem ({ text, href, active }) {
  return (
    <Link href={href} className={`nav__link`}>
     {text}
    </Link>
  );
};

export default NavItem;