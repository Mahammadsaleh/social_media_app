import Link from "next/link";
import style from "./css/style.module.css";


//import {Link as Linklink} from 'react-router-dom';
function AddBgImg() {
  return (
    <div  className={style.bgImg}>
      
      <img
        src="https://img.freepik.com/premium-photo/tiktok-minimal-logo-tiktok-clean-background_125322-8.jpg" 
        className={style.bgImg}
      />
     
    </div>
  );
}

export default AddBgImg;
