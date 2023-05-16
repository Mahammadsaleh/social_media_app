import Link from "next/link";
import style from "./css/style.module.css";


//import {Link as Linklink} from 'react-router-dom';
function AddProfilePhoto() {
  return (
    <div>
      <Link href="./profile">
        <img
          className={style.authorImage}
          src="https://www.abka.com.tr/app/default/assets/vendor/visiosoft/store-module/resources/images/store-detail/no-user.png?v=1655397974"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </Link>
    </div>
  );
}

export default AddProfilePhoto;
