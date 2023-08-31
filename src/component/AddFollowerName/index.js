import style from "./css/style.module.css";
import Link from "next/link";

export default function AddFollowerName(){
    return(
        <div style={{marginTop: '10px'}}>
            <Link href="" className={style.followerName}>Mabel</Link>
        </div>
    );
}