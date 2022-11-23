import React, { useState, useEffect } from "react";
import "./CSS/process-tab.css";
import Setting from "./image/setting.svg";
import Diamonds from "./image/diamonds.svg";
import Rings from "./image/ring.svg";
import { Multiselect } from "multiselect-react-dropdown";
import Select from 'react-select';

const ProductListTab = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);


  const [getShape, setShape] = useState([]);
  const [getShapeId, setShapeId] = useState([])


  const [getMetalType, setMetalType] = useState([]);
  const [getWeight, setWeight] = useState([]);
  const [getSetting, setSetting] = useState([]);
  const [getPrice, setPrice] = useState([]);


  //! Onclick clear All button clear all data
  const clearShapeData=()=>{
    getShapeId.splice(0,getShapeId.length)
    setShapeId([])
  }


  //! MultiSelect OnRemove Function
  const onremove=(selectedList)=>{
    setShapeId(selectedList);
    // console.log("remove data:", getShapeId)
    // console.log("getShaped", getShapeId)
  }
  const  onselect=(selectedList)=>{
    setShapeId(selectedList)
    // console.log("getShapeId", getShapeId)

    // console.log("selectedList",selectedList)
    // console.log("selectedItem",selectedItem.id)
    // setShape(data)
   
    // console.log("select data:", getShapeId)
  }
  useEffect(() => {
    getData();    
  }, [ ]);


  // console.log("all Id:", getShapeId)

  useEffect(() => {

    const getSliderFilterData = setTimeout(() => {
      fetchFilterdata();
    }, 1000)
    return () => clearTimeout(getSliderFilterData)

    // setTimeout(() => {
    //   fetchFilterdata()
    // }, 1000);
  }, [ ]);
  
// console.log("id", getShapeId);


  const getData = async () => {
    await fetch("http://192.168.1.215/stage_dioraadams/api/Jewellery-filter", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data);
      });
  };
  
  const style = {
    chips: {
      background: "#3ab591",
    },
    multiselectContainer: {
      color: "#3ab591",
    },
  };

  const weightData = [
    { id:1, label: "Less Than 2 Grams", min: 0 , max: 2},
    { id:2, label: "2 Grams to 4 Grams", min:2 , max: 4},
    { id:3, label: "4 Grams to 6 Grams", min: 4 , max:6},
    { id:4, label: "6 Grams And Above" , min: 6 , max:99},
  ];
  const PriceData = [
    { id:1, label: "Under $100" ,min:0 , max:100},
    { id:2, label: "$100 to $200",min:100 , max:200 },
    { id:3, label: "$200 to $300",min:200 , max:300 },
    { id:4, label: "$300 to $400" ,min:300 , max:400},
    { id:5, label: "$400 to $500",min:400 , max:500 },
  ];


  const fetchFilterdata = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    let formdata = new FormData();
    formdata.append("draw", "1");
    formdata.append("start", "0");
    formdata.append("length", "12");
    // formdata.append("metal_type", getMetalType);
    // formdata.append("diamond_type", getShapeId);
    // formdata.append("setting_type", getSetting);
    // formdata.append("weight_min", getWeight.min);
    // formdata.append("weight_max", getWeight.max);
    // formdata.append("price_min", getPrice.min);
    // formdata.append("price_max", getPrice.max);
  
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      "https://laravel.weingenious.in/diora_adams/backend/api/products",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setFilterData(result));
  };


  const handleWeight = (option) => setWeight(option);
  const handlePrice = (option) => setPrice(option);
    
  return (
    <>
      <section className="mobile-view-none mt-3">
        <div className="container container-main">
          <div className="wizard2-steps mb-3">
            <div className="step wizard2-steps-heading">
              <div className="node">
                <div className="node-skin">
                  <div className="cont">
                    <h2 className="nostyle-heading">Build Your Own Ring</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyo-bar-step step step-item active-step keep-left">
              <div className="node">
                <div className="node-skin">
                  <div className="pho">
                    <img src={Setting} alt="setting" />
                  </div>
                  <div className="cont">
                    <div className="action help-tips">
                      <a href="!#" className="td-u bar-action">
                        Choose
                      </a>
                    </div>
                    <div className="heading">
                      <h2 className="nostyle-heading">Setting</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyo-bar-step step step-item">
              <div className="node">
                <div className="node-skin">
                  <div className="pho">
                    <img src={Diamonds} alt="diamond" />
                  </div>
                  <div className="cont">
                    <div className="action help-tips">
                      <a href="!#" className="td-u bar-action line1-doted-2">
                        0.33-Carat Round Cut
                      </a>
                    </div>
                    <div className="heading">
                      <h2 className="nostyle-heading">Diamond</h2>
                    </div>
                    <div className="action double-action">
                      <a href="!#" className="td-u bar-action">
                        View
                      </a>
                      <a href="!#" className="td-u bar-action">
                        Change
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step step-item invariant-color">
              <div className="node">
                <div className="node-skin">
                  <div className="pho">
                    <img src={Rings} alt="ring" />
                  </div>
                  <div className="cont">
                    <div className="action help-tips">Choose</div>
                    <div className="heading">
                      <h2 className="nostyle-heading">Ring Size</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className="container">
        <div className="row">
          <div className="col-md-2">
            <Multiselect
              options={data?.Metal_Type}
              displayValue="name"
              style={style}
              key={data?.id}
              placeholder="Metal Type"
              hideSelectedList={true}
              showCheckbox={true}
              // onSelect={e=>e.filter(itm=> setMetalType([...getMetalType, itm.id]) )}
              onSelect={e=>setMetalType(e)}
            />
          </div>
          <div className="col-md-2">
            <Multiselect
              options={data?.Shape}
              displayValue="name"
              style={style}
              key={data?.id}
              placeholder="Diamonds Type"
              hideSelectedList={true}
              showCheckbox={true}
              onRemove={onremove}
              onSelect={onselect}
              // onSelect={(e)=>{setShape(e)}}
              // onSelect={e=>e.filter(itm=> setShape(function (preVal){
              //   if(e.includes(itm)){
              //    return([...getShapeId])
              //   }
              //   else{
              //     return([...getShapeId, itm.id])
              //   }
              // }) )}
            />
          </div>
          <div className="col-md-2">
          <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable={false}
              onChange={handleWeight}
              name="label"
              options={weightData}
              kry={weightData.id}
          />
          </div>
          <div className="col-md-2">
            <Multiselect
              options={data?.Setting_Type}
              displayValue="name"
              placeholder="Setting Type"
              hideSelectedList={true}
              style={style}
              key={data?.key}
              showCheckbox={true}
              onSelect={e=>e.filter(itm=> setSetting([...getSetting, itm.id]) )}
              
            />
          </div>
          <div className="col-md-2">
          <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable={false}
              onChange={handlePrice}
              name="label"
              key={PriceData.id} 
              options={PriceData}
          />
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-dark ">
              More Filter
            </button>
          </div>
        </div>
      </section>
      <section className="container d-flex flex-row mt-2">
        <div className="text-denger ml-2">
          <ul className="select_filter">
            <li className="res">Result({filterData?.recordsFiltered})</li>
            {getShapeId?.map((item,index)=>{
              return(
                 <li key={index} className="sec"><span>{item.name}</span>X</li>
              )
            })}
            <li className="clear_all" onClick={clearShapeData}>Clear All</li>
          </ul>
        </div>
      </section>
      <div className="product-page-div container">
        {filterData?.data?.map((item,index) => {
          return (
              <div className="product-div find-img" key={index}>
                <div className="product-div-div">
                  <div className="product-div-box">
                    <div className="product-div-list">
                      <img
                        width="200px"
                        height="200px"
                        src={item?.default?.path}
                        className="inner-img-product"
                        alt={item?.category?.name}
                      />
                    </div>
                    <div className="text-center show-viewbtn">
                      <h5 className="product-title pt-3 line1-doted-3">
                        {item?.description}
                      </h5>
                      <p className="product-title-price mb-0">
                        $ {item?.setting_price === null ? "N/A" : item?.setting_price}
                      </p>
                      <div className="pt-3 hide-view-btn">
                        <a className="view-details-btn" href="!#">
                          <span className="span-link">View Details 	&#62;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListTab;
