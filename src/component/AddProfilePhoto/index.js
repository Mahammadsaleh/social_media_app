import Link from "next/link";
import style from "./css/style.module.css";


//import {Link as Linklink} from 'react-router-dom';
function AddProfilePhoto() {
  return (
    <div>
      <Link href="/profile">
      <img
        className={style.authorImage}
        src="https://geekybytes.net/wp-content/uploads/2022/07/Tanjiro-Kamado-PFP-7.jpeg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      </Link>
      
    </div>
  );
}

export default AddProfilePhoto;
