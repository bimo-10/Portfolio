import React from "react";

function PortofolioCard({ id, image, title, desc }) {
  return (
    <div className="card mx-32 md:card-side bg-info shadow-xl md:flex-row-reverse my-8">
      <figure className="">
        <img
          src={image}
          alt="Movie"
          className="md:w-[880px] md:h-[380px] rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default PortofolioCard;
