'use client';

import React from 'react';
import { signInUser } from '@/firebase/auth';
import { auth } from '@/firebase/firebaseInit';
import { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface Props {
  signInActive: boolean;
}

const SignInForm = ({ signInActive }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const user: User | undefined = await signInUser(
        data.email,
        data.password
      );
      if (auth.currentUser) router.push('/dashboard');
      if (!user) throw new Error();
    } catch (error) {
      setError(
        'root',
        {
          type: '400',
          message: 'No account found'
        },
        { shouldFocus: true }
      );
    }
  };

  const sharedUtilClasses =
    'bg-white text-black h-12 rounded-md px-2 focus:outline-4 focus:border-none border-2 border-b-blue-500bg-white text-black border-2 border-b-blue-500';

  return (
    <form
      action="submit"
      onSubmit={handleSubmit(onSubmit)}
      className={`text-black ${
        signInActive ? 'block' : 'hidden'
      } flex flex-col items-center gap-4`}
    >
      <label hidden htmlFor="email">
        Email
      </label>
      <input
        {...register('email', {
          required: { value: true, message: 'please enter in your email' }
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
          required: { value: true, message: 'please enter in your password' }
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
        login
      </button>
    </form>
  );
};

export default SignInForm;
