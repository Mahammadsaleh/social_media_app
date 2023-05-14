import style from "./css/style.module.css";
import Link from "next/link";
export default function Follower(){
    return(
        <div className={style.follower}>
            <h1 className={style.followernum}>13</h1>
            <Link href="" style={{ textDecoration: 'none' }}><h1 className={style.followertext}>Follower</h1></Link>
        </div>
    );

}