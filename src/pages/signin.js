import { useCallback, useEffect, useRef, useState } from "react";
import { login } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { cookies } from "next/headers";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const inputRef = useRef();
  // useEffect(() => {
  //   const user = window?.localStorage?.getItem("user");
  //   if (!user && inputRef.current.value==null) {
  //     alert("Invalid Credentials");
  //   }
  // });
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) return;
      login({ email: email, password: password }).then(() => {
        // router.push("./");
      });
    },
    [email, password]
  );

  // const handleSignUpClick = () => {
  //   const cookieStore = cookies();
  //   const theme = cookieStore.get("username");
  //   console.log(theme);
  //   router.push("/");
  // };

  return (
    <>
      <div className="max-w-d  mx-auto py-4  ">
        <h1 className="text-2xl py-4">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
          <input
            ref={inputRef}
            type="email"
            placeholder="Email"
            className="p-4 bg-gray-100 rounded-md "
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            ref={inputRef}
            type="password"
            placeholder="Password"
            className="p-4 bg-gray-100 rounded-md "
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <input
            // onClick={handleSignUpClick}
            type="submit"
            value="Sign In"
            className="p-4 bg-purple-500 text-white hover:bg-purple-400 rounded-md "
          ></input>
          <Link href="/signup" className="text-blue-500">
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignIn;
