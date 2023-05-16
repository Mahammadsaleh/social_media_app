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
import { FaHome }  from "react-icons/fa";
import {FaUserAlt}  from "react-icons/fa";
import {RiLogoutBoxFill}  from "react-icons/ri";

const MENU_LIST = [
  { text: "Home", href: "../" },
  
];
const MENU_LIST2 = [
  { text: "Profile", href: "/profile" },
]
const MENU_LIST3 = [
  { text: "Sign Out", href: "/signin" },
]
function Navbar({ profileInfo, post }) {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const deleUser = () => {window?.localStorage?.removeItem("user"); }
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
        <div className={`${navActive ? "active" : ""} nav__menu-list`}
         
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              style={{ display: 'flex'}}
            >
              
              
              <FaHome style={{marginTop: '42px', marginLeft:'55px'}}/>
              <NavItem active={activeIdx === idx} {...menu}   />
            </div>
          ))}
          {MENU_LIST2.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
                
              }}
              key={menu.text}
              style={{ display: 'flex'}}
            >
              <FaUserAlt  style={{marginTop: '42px', marginLeft:'55px'}} />
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          {MENU_LIST3.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
                deleUser();
              }}
              key={menu.text}
              style={{ display: 'flex'}}
            >
              <RiLogoutBoxFill style={{marginTop: '42px', marginLeft:'45px'}} />
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
export async function getServerSideProps(context) {
  // await post({
  //   content: "Hello",
  //   date: Date.now(),
  //   author:"-NVBCF_otC_hB1_HqB7C"
  // });
  const user = context.req.cookies["user"]
  // const user = window?.localStorage?.getItem("user");
  var postInfo = await getPosts(user, 4);
  var profileInfo = await getProfileInfo(user);
  //  console.log(post);
  console.log(postInfo);
  return {
    props: {
      post: postInfo,
      profileInfo: profileInfo,
    },
  };
}