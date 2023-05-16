import { Fragment, useRef } from 'react';
import { login } from '@/lib/firebase/connect';
import { useState } from 'react';

export default function Login() {
  const [message, setmessage] = useState();
  const Email = useRef();
  const Password = useRef();

  async function getlogin(e) {
    e.preventDefault();

    const emailVal = Email.current.value;
    const passwordVal = Password.current.value;

    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const validPasword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_]).{8,}$/;

    if (!emailVal.match(validEmail)) {
      setmessage('Please introduce a correct email address');
      return;
    }

    if (!passwordVal.match(validPasword)) {
      setmessage('Please introduce a correct Password');
      return;
    }

    await login({
      email: emailVal,
      password: passwordVal,
    });

    Email.current.value = '';
    Password.current.value = '';
  }

  return (
    <div className="flex flex-col justify-center flex-wrap items-center">
      <h2 className="justify-center">Login</h2>
      <form className="flex justify-center place-content-around">
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="example@email.com"
            ref={Email}
          ></input>

          <input type="pasword" placeholder="Password" ref={Password}></input>
        </div>
        <p>{message}</p>
      </form>
      <button className="" onClick={getlogin}>
        Login
      </button>
    </div>
  );
}
