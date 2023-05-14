import { likePost } from "@/lib/firebase";
import style from "./css/style.module.css";
import { FcLike } from "@react-icons/all-files/fc/FcLike";
import { useEffect, useState } from "react";
import { FcLikePlaceholder } from "@react-icons/all-files/fc/FcLikePlaceholder";

function AddLike({ likeCount }) {
  const [likeCountState, setLikeCount] = useState(likeCount);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCountState - 1);
    } else {
      setLikeCount(likeCountState + 1);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    likePost("-NVGKVHTjeSHI6ITjtZ0", likeCountState);
  }, [likeCountState]);

  return (
    <div className={style.like}>
      {liked ? (
        <FcLike
          style={{ cursor: "pointer" }}
          href="#"
          onClick={handleLike}
          size={20}
        />
      ) : (
        <FcLikePlaceholder
          style={{ cursor: "pointer" }}
          href="#"
          onClick={handleLike}
          size={20}
        />
      )}
      <div className="tweet-like">{likeCountState}</div>
    </div>
  );
}

export default AddLike;
