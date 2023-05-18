import Link from "next/link";
import style from "./css/style.module.css";


export default function AddFollowerButton(){
    return(
       <div className={style.followerButton}>
        <button type="submit">Following</button>
       </div>
    );
}