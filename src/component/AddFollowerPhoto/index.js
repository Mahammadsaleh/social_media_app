import style from "./css/style.module.css";
import Link from "next/link";


export default function AddFollowerPhoto() {
    return(
        <>
        <div>
            <img
                className={style.followerPhoto}
                src="https://i.pinimg.com/originals/3c/64/50/3c6450fedc218f742f25b76deb764847.png"
            ></img>
        </div>
        </>
    );
}