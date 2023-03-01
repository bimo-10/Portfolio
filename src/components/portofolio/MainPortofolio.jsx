import React from "react";
import datas from "../../datas";
import PortofolioCard from "../layouts/card/PortofolioCard";

function MainPortofolio() {
  return (
    <div>
      <div>
        {datas.map((data) => {
          return (
            <PortofolioCard
              id={data.id}
              image={data.image}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainPortofolio;
