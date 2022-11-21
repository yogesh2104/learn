import React, { useEffect, useState } from "react";
import "./StoneFilter.css";
import Slider from "@mui/material/Slider"; //! npm install @mui/material @emotion/react @emotion/styled

const CenterStone = () => {
  const baseurl = "http://192.168.1.215/stage_dioraadams/api/parameters";
  const [results, setResults] = useState([]);
  const [selectShape, setSelectedShape] = useState('')
  const [selectColor, setSelectedColor] = useState('')
  const [selectClarity, setSelectedClarity] = useState('')

  useEffect(() => {
    getData();
  }, []);



  //! carat state start
  const [caratMin, setCaratMin] = useState(0.5);
  const [caratMax, setCaratMax] = useState(20);

  const handleCarat = (event, newValue) => {
    event.preventDefault();
    setCaratMin(newValue[0]);
    setCaratMax(newValue[1]);
  };
  const handleCaratText = (event) => {
    event.preventDefault();
    setCaratMin(event.target.value);
  };
  const handleCaratText2 = (event) => {
    event.preventDefault();
    setCaratMax(event.target.value);
  };

  //! carat state end

  const getData = async () => {
    let formData = new FormData();
    formData.append("type", "diamond");
    formData.append("paraname[]", "Shape");
    formData.append("paraname[]", "Clarity");
    formData.append("paraname[]", "Color");

    await fetch(baseurl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data?.data);
      });
  };


  const handleChange = (e) => {
    const { name, checked } = e.target;
    if(checked){
      if(name==="Shape"){
         setSelectedShape(e.target.value);
      }
      if(name==="Color"){
        setSelectedColor(e.target.value)
      }
      if(name==="Clarity"){
        setSelectedClarity(e.target.value)
      }
    }
  };
  
  return (
    <>
      <div className="bg-color mb">
        <div className="col-md-12">
          <h4 className="ml-3">Shape :</h4>
          <div className="m">
            {results?.Shape?.map((item, index) => {
              return (
              <label className="option_item main cursor-pointer">
                <input type="radio"className="checkbox none_display"onChange={handleChange} name="Shape" value={item.name}/>
                  <div className="add-non-active option_inner main" key={index}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-shape-w"/>
                    <p className="title-shape">{item.name}</p>
                  </div>
              </label>
              )
            })}
          </div>
        </div>
        <div className="col-md-12">
          <h4 className="ml-3">Color :</h4>
          <div className="m">
            {results?.Color?.map((item, index) => {
              return (
                <label className="option_item main cursor-pointer">
                <input type="radio"className="checkbox none_display "onChange={handleChange} name="Color" value={item.name}/>
                <div className="add-non-active new-pad-box option_inner main" key={index}>
                  <span className="">{item.name}</span>
                </div>
                </label>
              );
            })}
          </div>
        </div>
        <div className="col-md-12">
          <h4 className="ml-3">Clarity :</h4>
          <div className="m">
            {results?.Clarity?.map((item, index) => {
              return (
                <label className="option_item main cursor-pointer">
                <input type="radio"className="checkbox none_display "onChange={handleChange} name="Clarity" value={item.name}/>
                <div className="add-non-active new-pad-box option_inner main" key={index}>
                  <span className="">{item.name}</span>
                </div>
                </label>
              );
            })}
          </div>
        </div>
        <div className="col-md-12 mb">
          <h4 className="ml-3">Carat :</h4>
          <div className="m col-md-6 slider">
            <Slider
              value={[caratMin, caratMax]}
              min={0.5}
              max={20}
              onChange={handleCarat}
            />
          </div>
          <div className="">
            <input
              className="form-con float m"
              type="text"
              id="min"
              name="min"
              value={caratMin}
              onChange={handleCaratText}
              autocomplete="off"
            />
            <div>
              <input
                className="form-con float1"
                type="text"
                id="max"
                name="max"
                value={caratMax}
                onChange={handleCaratText2}
                autocomplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterStone;
