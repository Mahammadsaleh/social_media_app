import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  follow,
  getProfileInfo,
  getPosts,
  likePost,
  login,
  post,
  signUp,
  unfollow,
} from "@/lib/firebase";
import style from "./css/style.module.css";
import AddProfilePhoto from "../AddProfilePhoto";
import AddPhoto from "../AddPhoto";
import AddComment from "../AddComment";
import AddLike from "../AddLike";
import AddAuthor from "../AddAuthor";
import AddDate from "../AddDate";
import AddBodyText from "../AddBodyText";
import AddTweetInput from "../AddTweetInput";
import { FcLikePlaceholder } from "@react-icons/all-files/fc/FcLikePlaceholder";
import { GoFileMedia } from "@react-icons/all-files/go/GoFileMedia";

function AddTweet({ profileInfo,className  }) {
  const [img, setImg] = useState("");

  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setInput(inputRef.current.value);
    inputRef.current.value = "";
  };
  
  useEffect(() => {
    const user = window?.localStorage?.getItem("user");
    console.log(user);
    if (input != "") {
      post({
        content: input,
        date: Date.now(),
        author: user,
        image: img,
      });
    }
  });

  const readFile = (e) => {
    if (!e.target.files.length) {
      return;
    }
    const reader = new FileReader();
    // if (e.target.files[0].type !== " image/jpeg") {
    //   alert("File format not supported ");
    // }
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setImg(reader.result);
    };
  };
  return (
  
      <div className={`${style.tweet} ${className}`}>
        <AddProfilePhoto />
        <div className={style.tweetBody}>
          <div className={style.tweetInfo}>
            <input
              ref={inputRef}
              type="text"
              className={style.tweetInput}
              placeholder="Write your tweet"
            />
          </div>
          <div className={style.tweetFooter}>
            <label htmlFor="fileInput">
              <GoFileMedia size={30} className={style.fileInputIcon} />
            </label>
            <input
              onChange={readFile}
              type="file"
              id="fileInput"
              className={style.fileInput}
            ></input>
            <button onClick={handleClick} className={style.submitButton}>
              Tweet
            </button>
          </div>
        </div>
      </div>

  );
}

export default AddTweet;
