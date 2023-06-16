'use client';

import React from 'react';
import StartYourFreeTrialModal from './StartYourFreeTrialModal';

const CallToAction = () => {
  return (
    <section className="hero py-10 bg-inherit flex flex-col gap-4 justify-center ">
      <h2 className=" text-black text-5xl">
        Get started with <span className="text-blue-500">Office</span>Hours!
      </h2>
      <p className="text-black text-2xl">
        Unlock the power of school management with our easy, professional and
        affortable solution
      </p>
      <button
        onClick={() => window.my_modal_5.showModal()}
        className="text-2xl mt-[.1rem] cursor-pointer font-semibold outline outline-4 outline-slate-200 rounded-lg py-2 px-4 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors"
      >
        Start your free trial
      </button>
      <StartYourFreeTrialModal />
    </section>
  );
};

export default CallToAction;
