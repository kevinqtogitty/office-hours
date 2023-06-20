'use client';

import { createNewUserWithEmailAndPassword } from '@/firebase/auth';
import { auth } from '@/firebase/firebaseInit';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  signUpActive: boolean;
}

const SignUpForm = ({ signUpActive }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });
  const onSubmit = async (data: {
    username: string;
    password: string;
    email: string;
  }) => {
    try {
      const user = await createNewUserWithEmailAndPassword(
        data.username,
        data.email,
        data.password
      );

      if (auth.currentUser) router.push('/dashboard');
      if (!user) throw new Error();
    } catch (error) {
      setError('root', { type: '500', message: 'Server Error' });
    }
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
      <label hidden htmlFor="username">
        Username
      </label>
      <input
        {...register('username', {
          required: { value: true, message: 'Please enter your name' },
          minLength: { value: 6, message: 'At least 6 characters' }
        })}
        id="username"
        type="text"
        placeholder="username"
        className={sharedUtilClasses}
      />
      {errors.username && (
        <span className="text-red-600">{errors.username.message}</span>
      )}
      <label hidden htmlFor="email">
        Email
      </label>
      <input
        {...register('email', {
          required: { value: true, message: 'a valid email is required' }
        })}
        id="email"
        type="email"
        placeholder="name@example.com"
        className={sharedUtilClasses}
      />
      {errors.email && (
        <span className="text-red-600">{errors.email.message}</span>
      )}
      <label hidden htmlFor="password">
        Password
      </label>
      <input
        {...register('password', {
          required: { value: true, message: 'a password is required' },
          minLength: { value: 8, message: 'at least 8 characters' }
        })}
        id="password"
        type="password"
        className={sharedUtilClasses}
      />
      {errors.password && (
        <span className="text-red-600">{errors.password.message}</span>
      )}
      <span className="text-red-600">{errors.root?.message}</span>
      <button type="submit" className="btn btn-secondary">
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
