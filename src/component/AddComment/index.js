import style from "./css/style.module.css";
import { FaRegCommentDots } from "@react-icons/all-files/fa/FaRegCommentDots";
import React, { useEffect, useRef, useState } from "react";
function AddComment({ commentCount,profileInfo }) {
  return (
    <>
      <div className={style.comment}>
        <FaRegCommentDots
          style={{ cursor: "pointer" }}
          href="#"
          onClick={() => {
            console.log("clicked");
          }}
          size={20}
        />
        <div className="tweet-comment">{commentCount}</div>
      </div>
      
      {/* <Comment profileInfo={profileInfo} /> */}
    </>
  );
}

export default AddComment;

