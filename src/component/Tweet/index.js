import Image from "next/image";
import style from "./css/style.module.css";
import AddProfilePhoto from "../AddProfilePhoto";
import AddPhoto from "../AddPhoto";
import AddComment from "../AddComment";
import AddLike from "../AddLike";
import AddAuthor from "../AddAuthor";
import AddDate from "../AddDate";
import AddBodyText from "../AddBodyText";
function Tweet() {
  return (
    <div className={style.main}>
      <div className={style.tweet}>
        <AddProfilePhoto />
        <div className={style.tweetBody}>
          <div className={style.tweetInfo}>
            <AddAuthor />
            <AddDate />
          </div>
          <AddBodyText />
          <AddPhoto />
          <div className={style.tweetFooter}>
            <AddComment />
            <AddLike />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
