import "@/styles/globals.css";
import Navbar from "../component/Navbar/Navbar";
import Social_app_ContextProvider from "@/component/context/Social_app_Context/contextuser";

export default function App({ Component, pageProps }) {
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
