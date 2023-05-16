import Image from "next/image";
import { Inter } from "next/font/google";
import Tweet from "@/component/Tweet";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
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
export async function getServerSideProps() {
  // await post({
  //   content: "Hello",
  //   date: Date.now(),
  //   author:"-NVBCF_otC_hB1_HqB7C"
  // });
  var postInfo = await getPosts("-NVBCF_otC_hB1_HqB7C", 5);
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
