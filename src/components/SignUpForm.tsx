'use client';

import { createNewUserWithEmailAndPassword } from '@/firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  signUpActive: boolean;
}

const SignUpForm = ({ signUpActive }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
  const onSubmit = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    const usersName = data.name.split(' ');
    if (usersName.length != 2) throw new Error('Only first and last name!');
    createNewUserWithEmailAndPassword(
      usersName[0],
      usersName[1],
      data.email,
      data.password
    );
  };

  const sharedUtilClasses =
    'bg-white text-black h-12 rounded-md px-2 focus:outline-4 focus:border-none border-2 border-b-blue-500bg-white text-black border-2 border-b-blue-500';
  return (
    <form
      action="submit"
      onSubmit={handleSubmit(onSubmit)}
      className={`text-black ${
        signUpActive ? 'block' : 'hidden'
      } flex flex-col items-center gap-4`}
    >
      <label hidden htmlFor="email">
        Your name
      </label>
      <input
        {...register('name', { required: true })}
        id="name"
        type="text"
        placeholder="First Last"
        className={sharedUtilClasses}
      />
      {errors.email && <span className="text-red-600">Email is required</span>}
      <label hidden htmlFor="email">
        Email
      </label>
      <input
        {...register('email', { required: true })}
        id="email"
        type="email"
        placeholder="name@example.com"
        className={sharedUtilClasses}
      />
      {errors.email && <span className="text-red-600">Email is required</span>}
      <label hidden htmlFor="password">
        Password
      </label>
      <input
        {...register('password', { required: true })}
        id="password"
        type="password"
        className={sharedUtilClasses}
      />
      {errors.password && (
        <span className="text-red-600">Password is required</span>
      )}
      {/* <input type="submit" /> */}
      <button type="submit" className="btn btn-secondary">
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
