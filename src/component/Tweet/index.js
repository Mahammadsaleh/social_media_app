import Image from "next/image";
import style from "./css/style.module.css";
import AddProfilePhoto from "../AddProfilePhoto";
import AddPhoto from "../AddPhoto";
import AddComment from "../AddComment";
import AddLike from "../AddLike";
import AddAuthor from "../AddAuthor";
import AddDate from "../AddDate";
import AddBodyText from "../AddBodyText";
function Tweet({ post, profileInfo }) {
  // var postInfo = post[0][1];
  // console.log(postInfo);

  return (
    <ul>
      {post.map((tweet, index) => (
        <li key={`index-${index}`}>
          {
            <div className={style.main}>
              <div className={style.tweet}>
                <AddProfilePhoto />
                <div className={style.tweetBody}>
                  <div className={style.tweetInfo}>
                    <AddAuthor name={profileInfo.name} />
                    <AddDate date={tweet[1].date} />
                  </div>
                  <AddBodyText postContent={tweet[1].content} />
                  <AddPhoto image={tweet[1].image}/>
                  <div className={style.tweetFooter}>
                    <AddComment profileInfo={profileInfo} commentCount={post.length} />
                    <AddLike likeId={post[index][0]} likeCount={tweet[1].likes} />
                  </div>
                </div>
              </div>
            </div>
          }
        </li>
      ))}
    </ul>
  );
}

export default Tweet;
