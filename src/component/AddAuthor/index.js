import Link from "next/link";
import style from "./css/style.module.css";
function AddAuthor({name}) {
  return <Link className={style.author} href="/authors/new">{name}</Link>;;
}

export default AddAuthor;
