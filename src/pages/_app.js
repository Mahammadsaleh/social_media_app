import '@/styles/globals.css';
import Navbar from "../component/Navbar/Navbar";
export default function App({ Component, pageProps }) {
  
  return(
    <>
    <div style={
      {
        display:'flex'
      }
    }>
      <Navbar />
      <div
      style={{
       alignItems:'center',
      }}
      >
        <Component {...pageProps} />
      </div>
      
    </div>
      
    </>    
  );
}
