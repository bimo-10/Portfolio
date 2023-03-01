import React from "react";
import { Link } from "react-router-dom";

import myPic from "../../../assets/images/Untitled-1.jpg";

function HeroHome() {
  return (
    <div>
      <div className="md:card lg:card-side bg-blue-400 shadow-xl">
        <figure>
          <img src={myPic} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center bg-white rounded-md p-6 md:my-auto md:mx-auto md:w-[600px] md:h-[400px]">
            <div>
              <h2 className="card-title">About Me</h2>
              <p className="py-2">
                I love web and graphic design and have experience designing
                websites, user interfaces, brands and logos as well as graphics
                and print media.
              </p>
              <p className="py-2">
                I have a passion for front-end web development and have
                experience in coding HTML, CSS, Javascript, React and blogging.
              </p>
              <p className="py-2">
                My passion for building web apps is shaped by having the mindset
                of putting humans in the center of attention.
              </p>
              <p className="py-2">
                My strong focus is on discovery research and building design
                concepts that will enable organizations in defining a new
                strategy or product opportunities to help the business gain its
                competitive advantage.
              </p>
              <div className="card-actions justify-start">
                <Link to="https://drive.google.com/file/d/1PCYr1CmHr_f6Cc7uKPwkkHBobwl0TK64/view?usp=share_link">
                  <button className="btn btn-neutral-focus text-secondary-content">
                    Check out my CV
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
