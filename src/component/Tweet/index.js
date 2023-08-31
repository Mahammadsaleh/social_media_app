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
  
  console.log(post);
  console.log(post[0]);
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

                    {/* <AddAuthor name={profileInfo.name} /> */}
                    <AddDate date={tweet[1].date} />

                    <AddAuthor name={tweet?.name} />  
                    <AddDate date={tweet.date} />

                  </div>
                  <AddBodyText postContent={tweet.content} />
                  <AddPhoto image={tweet.image}/>
                  <div className={style.tweetFooter}>
                    <AddComment profileInfo={profileInfo} postAuthor={tweet.author} commentCount={post.length} />
                    <AddLike likeId={tweet.key} likeCount={tweet.likes} />
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
