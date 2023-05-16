import { useRef, useState } from 'react';
import { signUp } from '@/lib/firebase/connect';
import { getServerSideProps } from '@/pages';
import { useContext } from 'react';
import { Social_app_Context } from '@/context/Social_app_Context/contextuser';
export default function Signin() {
  const [state, dispatch] = useContext(Social_app_Context);
  const [message, setmessage] = useState('');
  console.log(state.user);
  const Firstname = useRef();
  const Lastname = useRef();
  const Email = useRef();
  const Password = useRef();

  async function signIn(e) {
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
    await signUp({
      name: `${Firstname.current.value} ${Lastname.current.value}`,
      email: emailVal,
      password: passwordVal,
    });

    Firstname.current.value = '';
    Lastname.current.value = '';
    Email.current.value = '';
    Password.current.value = '';
    setmessage('');
  }

  return (
    <>
      <div className="flex flex-col justify-center flex-wrap items-center">
        <h2>Sign In</h2>
        <form className="flex justify-center place-content-around">
          <div className="flex flex-col space-y-4">
            <input type="text" placeholder="First Name" ref={Firstname}></input>

            <input type="text" placeholder="Last Name" ref={Lastname}></input>

            <input
              type="email"
              placeholder="example@email.com"
              ref={Email}
            ></input>

            <input type="pasword" placeholder="Password" ref={Password}></input>
          </div>
          <p>{message}</p>
        </form>
        <button onClick={signIn}>Sign In</button>
      </div>
    </>
  );
}
