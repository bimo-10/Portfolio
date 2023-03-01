import React from "react";
import { Link } from "react-router-dom";

function Card({ children, id, img, title, desc, button, path }) {
  return (
    <div className="card w-96 bg-primary-content shadow-xl my-8">
      <figure>
        <img src={img} alt="Shoes" className="w-full h-[180px]" />
      </figure>
      <div key={id} className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <Link to={path}>
            <button className="btn btn-primary">{button}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
