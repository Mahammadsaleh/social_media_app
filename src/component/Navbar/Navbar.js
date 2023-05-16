import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../Logo";
import NavItem from "../NavItem";
import style from "./css/style.module.css";
import { BiHomeCircle } from "@react-icons/all-files/bi/BiHomeCircle";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddTweet from "../AddTweet";
import "./css/style.module.css";
import { green } from "@mui/material/colors";
const MENU_LIST = [
  { text: "Home", href: "../" },
  { text: "Profile", href: "/profile" },
  { text: "Sign Out", href: "/profile" },
];

function Navbar({ profileInfo, post }) {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={style.nav}>
        <Link href={"/"}>

        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
      <div className="main">
        <Popup
          trigger={<button className={style.button}>Tweet</button>}
          modal
          nested
          position="top center"
          contentStyle={{
            padding: "",
            border: "2px solid rgba(0, 0, 0, 0.50)", // Change the border color to red
          }}
          className="popup-overlay"
        >
          <AddTweet className={style.tweet}  post={post} profileInfo={profileInfo} />
        </Popup>
      </div>
    </header>
  );
}

export default Navbar;
export async function getServerSideProps() {
  // await post({
  //   content: "Hello",
  //   date: Date.now(),
  //   author:"-NVBCF_otC_hB1_HqB7C"
  // });
  var postInfo = await getPosts("-NVBCF_otC_hB1_HqB7C", 4);
  var profileInfo = await getProfileInfo("-NVBCF_otC_hB1_HqB7C");
  //  console.log(post);
  console.log(postInfo);
  return {
    props: {
      post: postInfo,
      profileInfo: profileInfo,
    },
  };
}
