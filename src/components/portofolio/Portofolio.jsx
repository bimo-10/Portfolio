import React from "react";
import Card from "../layouts/card/Card";
import datas from "../../datas";

function Portofolio() {
  return (
    <div className="hero min-h-screen bg-primary-content ">
      <div className="md:hero-content">
        {datas.map((data) => (
          <Card
            key={data.id}
            img={data.image}
            title={data.title}
            desc={data.desc}
            button={"See more"}
            path={data.path}
          />
        ))}
      </div>
    </div>
  );
}

export default Portofolio;
