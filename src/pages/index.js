import Image from "next/image";
import { Inter } from "next/font/google";
import Tweet from "@/component/Tweet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Tweet />
      <Tweet />
      <Tweet />
    </>
  );
}
