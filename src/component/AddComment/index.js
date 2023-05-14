import style from "./css/style.module.css";
import { FaRegCommentDots } from "@react-icons/all-files/fa/FaRegCommentDots";
function AddComment({commentCount}) {
  return (
    <div className={style.comment}>
      <FaRegCommentDots  style={{cursor: 'pointer',}} href="#" onClick={() => {console.log("clicked")}} size={20} />
      <div className="tweet-comment">{commentCount}</div>
    </div>
  );
}

export default AddComment;
