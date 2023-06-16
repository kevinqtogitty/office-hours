import Image from 'next/image';
import React from 'react';

interface Props {
  name: string;
  review: string;
  path: string;
  location: string;
}

const ReviewCard = ({ name, review, path, location }: Props) => {
  return (
    <div className="card w-fit bg-slate-200 shadow-xl p-4 max-w-lg">
      <figure>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <Image src={path} alt={name} width={400} height={500} />
          </div>
        </div>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-slate-700">{`"${review}"`}</p>
        <p className="self-end text-blue-500">{location}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
