import React, { useEffect, useState } from "react";
import './StoneFilter.css'
const CenterStone = () => {
  const baseurl = "http://192.168.1.215/stage_dioraadams/api/parameters";
  const [results, setResults] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let formData = new FormData();
    formData.append("type", "diamond");
    formData.append("paraname[]", "Shape");
    // formData.append("paraname[]", "Clarity");
    // formData.append("paraname[]", "Color");
    // formData.append("paraname[]", "Cut");
    // formData.append("paraname[]", "Flourescence");
    // formData.append("paraname[]", "Polish");
    // formData.append("paraname[]", "Symmetry");
    // formData.append("paraname[]", "Lab");

    await fetch(baseurl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data?.data);
      });
  };

  return (
    <>
      <div className="bg-color">
        <div className="grid grid-rows-1 mt-2">
          <div className="grid grid-cols-6 gap-1">
            {results?.Shape?.map((item, index) => {
              return (
                <div className="option_inner main ">
                  <div className="border flex justify-center relative">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-10 h-9 img_opacity "
                    />
                    
                    <dav className="absolute inset-x-0 bottom-0">{item.name}</dav>
                  </div>
                    
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterStone;
