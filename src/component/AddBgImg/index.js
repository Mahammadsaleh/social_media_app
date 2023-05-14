import Link from "next/link";
import style from "./css/style.module.css";


//import {Link as Linklink} from 'react-router-dom';
function AddBgImg() {
  return (
    <div  className={style.bgImg}>
      
      <img
        src="https://assets.teenvogue.com/photos/5beb34096029df2db3813b6d/4:3/w_1528,h_1146,c_limit/tout.jpg" 
        width={530}
      />
     
    </div>
  );
}

export default AddBgImg;
