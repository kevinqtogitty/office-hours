import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const listItems = [
    'Simplest classroom management tool',
    'No tech skills required',
    'Easy to setup',
    'Get started in minutes'
  ];
  return (
    <main className="hero min-h-[80vh] bg-inherit bg-[left_top_-8rem] bg-[url('../assets/images/teacher.jpg')] text-black flex-row">
      <div className="hero-content w-[80%] flex-row justify-start">
        <div className="max-w-lg">
          <h1 className="text-5xl flex-col gap-5">
            <span className="font-light">You classroon management system,</span>
            <br />
            <span className="font-bold">easier than ever</span>
          </h1>
          <ul className="py-6 text-2xl">
            {listItems.map((item, i) => (
              <li key={i}>
                <div className="flex-row inline-flex gap-2">
                  <CheckCircle className="mt-1 text-blue-500" />
                  {item}
                </div>
              </li>
            ))}
          </ul>
          <button className="text-lg mt-[.1rem] cursor-pointer font-semibold self-middle outline-6 outline outline-blue-500 rounded-lg py-2 px-4 bg-blue-500 text-white hover:text-blue-500 hover:bg-white transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
