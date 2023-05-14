import AddProfile from "@/component/AddProfile";
import { Inter } from "next/font/google";
import Tweet from "@/component/Tweet";

const inter = Inter({ subsets: ["latin"] });

export default function Profile() {
  return (
    <>
      <AddProfile />
      <Tweet></Tweet>
      <Tweet></Tweet>
      <Tweet></Tweet>
    </>
  );
}
