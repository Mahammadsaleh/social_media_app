import style from "./css/style.module.css";
import Link from "next/link";
export default function Follower(){
    return(
        <div className={style.following}>
            <h1 className={style.followingnum}>26</h1>
            <Link href="" style={{ textDecoration: 'none' }}><h1 className={style.followingtext}>Following</h1></Link>
        </div>
    );

}