import AddProfile from "@/component/AddProfile";
import { Inter } from "next/font/google";
import Tweet from "@/component/Tweet";
import {
  follow,
  getProfileInfo,
  getAllPostsWithUser,
  getPosts,
  likePost,
  login,
  post,
  signUp,
  unfollow,
} from "@/lib/firebase";
const inter = Inter({ subsets: ["latin"] });

export default function Profile({ post, profileInfo }) {
  return (
    <>
      <div>
       
        <AddProfile post={post} profileInfo={profileInfo}/>
        <br/>
        <br/>
        <Tweet post={post} profileInfo={profileInfo} />
      </div>
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
  var postInfo = await getAllPostsWithUser(exactDateTimestamp,10,user);
  var profileInfo = await getProfileInfo(user);
  //  console.log(post);
  // console.log(postInfo);
  return {
    props: {
      post: postInfo,
      profileInfo: profileInfo,
    },
  };
}
