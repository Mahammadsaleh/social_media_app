import Image from "next/image";
import { Inter } from "next/font/google";
import Tweet from "@/component/Tweet";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  follow,
  getAllPostsWithUser,
  getProfileInfo,
  getPosts,
  likePost,
  login,
  post,
  signUp,
  unfollow,
} from "@/lib/firebase";
import AddTweet from "@/component/AddTweet";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ post, profileInfo }) {
  console.log(post);
  console.log(profileInfo);

  return (
    <>
      <AddTweet post={post} profileInfo={profileInfo} />
      <Tweet post={post} profileInfo={profileInfo} />
    </>
  );
}
export async function getServerSideProps(context) {
  // await post({
  //   content: "Hello",
  //   date: Date.now(),
  //   author:"-NVBCF_otC_hB1_HqB7C"
  // });
  const exactDate = "15/5/2023 10:58:13";

  // 👇 Get the timestamp when you already have the date object
  const exactDateTimestamp = new Date(exactDate).getTime();
  
  const user = context.req.cookies["user"];
  // const user = window?.localStorage?.getItem("user");
  var postInfo = await getAllPostsWithUser(exactDateTimestamp,10);
  var profileInfo = await getProfileInfo(user);
  //  console.log(post);
  console.log("postinfo"+postInfo);
  return {
    props: {
      post: postInfo,
      profileInfo: profileInfo,
    },
  };
}
