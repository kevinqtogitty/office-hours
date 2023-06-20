'use client';
import SignInForm from '@/components/SignInForm';
import SignUpForm from '@/components/SignUpForm';
import { signInUserWithGoogle } from '@/firebase/auth';
import Image from 'next/image';

import React, { useState } from 'react';

const Login = () => {
  const [signUpActive, setSignUpActive] = useState(false);
  const [signInActive, setSignInActive] = useState(true);

  const toggleForm = () => {
    setSignUpActive((state) => !state);
    setSignInActive((state) => !state);
  };

  return (
    <main className="flex flex-row-reverse h-screen">
      <Image
        src="https://source.unsplash.com/ck0i9Dnjtj0"
        height={1500}
        width={1100}
        alt="desk"
        className="rounded-lg m-4"
      />
      <div className="tabs tabs-boxed w-[45%] mt-[-10%] flex flex-col gap-3 items-center self-center bg-transparent">
        <h2 className="text-5xl font-bold text-blue-500">Welcome!</h2>
        <div className="w-fit">
          <a
            onClick={toggleForm}
            className={`tab text-black transition-colors ${
              signInActive ? 'tab-active' : null
            }`}
          >
            Sign In
          </a>
          <a
            onClick={toggleForm}
            className={`tab text-black transition-colors ${
              signUpActive ? 'tab-active' : null
            }`}
          >
            Sign Up
          </a>
        </div>
        <div className="border w-fit">
          <SignUpForm signUpActive={signUpActive} />
          <SignInForm signInActive={signInActive} />
        </div>
        <div className="divider before:bg-primary after:bg-secondary w-[50%] self-center">
          or
        </div>
        <button onClick={signInUserWithGoogle} className="btn btn-primary">
          {`${signUpActive ? 'Sign up' : 'Sign in'} with Google`}
        </button>
      </div>
    </main>
  );
};
export default Login;
