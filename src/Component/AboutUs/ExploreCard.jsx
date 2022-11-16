import React from "react";
import data from "./CardData.json";
const ExploreCard = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-sp-12">
              <div className="text">
                <img
                  className="img-fluid"
                  width="auto"
                  height="auto"
                  src={item.img_link}
                  alt={item.heading}/>
                <div className="description">
                  <h3>{item.heading}</h3>
                  <p>{item.para}</p>
                  <p>
                    <a href="!#">VIEW MORE</a>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ExploreCard;
