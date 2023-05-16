import AddProfile from "@/component/AddProfile";
import { Inter } from "next/font/google";
import Tweet from "@/component/Tweet";
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
