import React from 'react';

const StartYourFreeTrialModal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
      <form method="dialog" className="modal-box bg-slate-300">
        <h3 className="text-lg text-black">
          Enter your email and we&apos;ll be in touch!
        </h3>
        <div className="modal-action w-full flex justify-between">
          <div className="form-control w-full max-w-xs">
            <label className="label hidden">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="name@email.com"
              className="input input-bordered w-full max-w-xs bg-slate-200 text-black"
            />
          </div>
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default StartYourFreeTrialModal;
