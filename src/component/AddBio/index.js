import style from "./css/style.module.css";

export default function AddBio({profileInfo}){
    return(
        <div className={style.text}>
            <h2>{profileInfo.bio}</h2>
        </div>
    );

}