import style from "./css/style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
export default function AddJoinedDate(){
    return(
        <div className={style.date}>
           <FontAwesomeIcon icon={faCalendar} className={style.dateicon}/>
           <h1 className={style.datetext}>Joined May 2023</h1>
        </div>
    );
}