import style from "./css/style.module.css";

export default function AddJoinedDate({profileInfo}){
    return(
        <div className={style.date}>
   
           <h1 className={style.datetext}>Joined May 2023</h1>
        </div>
    );
}