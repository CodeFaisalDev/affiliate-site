import Link from "next/link";
import React from "react";

const Card = ({ name, desc, link }) => {
  return (
    <div className="mt-10 card card-compact w-[90vw] md:w-96 h-96 bg-base-100 border-b border-l lg:border-none md:shadow-xl">
      <div className='bg-[url("/airpod.png")] bg-center md:rounded-t-3xl bg-cover h-full'></div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <Link href={link}>
            <button className="btn btn-primary">Get Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
