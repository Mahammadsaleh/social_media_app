import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Navbar from "../component/Navbar/Navbar";
import Social_app_ContextProvider from "@/component/context/Social_app_Context/contextuser";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  let [userExist,setUserExist]=useState(false);
  useEffect(() => {
    const user = window?.localStorage?.getItem("user");
    const isMainPage =
      router.pathname === "/" || router.pathname === "/profile";

    if (!user && isMainPage) {
      router.replace("/signin");
    } else {
      setUserExist(true);
    }
  });

  return (
    <Social_app_ContextProvider>
      <div className="nav">
        <Navbar style={{}} />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </Social_app_ContextProvider>
  );
}
