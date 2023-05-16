import { useCallback, useState } from "react";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password, name);
    },
    [email, password, name]
  );
  return (
    <>
      {" "}
      <div className="max-w-d  mx-auto py-12  ">
        <h1 className="text-2xl py-4">Create New Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
          <input
            type="email"
            placeholder="Email"
            className="p-4 bg-gray-100 rounded-md "
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-4 bg-gray-100 rounded-md "
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-gray-100 rounded-md"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="submit"
            value="Sign In"
            className="p-4 bg-green-400 rounded-md "
          ></input>
        </form>
      </div>
    </>
  );
}

export default SignUp;
