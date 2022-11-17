import React, { useState } from "react";
import SideStone from "./Stone Filter/SideStone";
import CenterStone from "./Stone Filter/CenterStone";


const LeftSideFrom = () => {
  const [isRadio, setIsRadio] = useState("rings");
  const [linkRadio, setLinkRadio] = useState('img')

  const [centerStone, setCenterStone] = useState(false)
  const [sideStone , setSideStone] = useState(true)

  const handleCenterStone=()=>{
    setCenterStone(!centerStone)
  }
  const handleSideStone=()=>{
    setSideStone(!sideStone)
  }
  const linkhandleChange=(e)=>{
    setLinkRadio(e.target.value)
    console.log(e.target.value)
  }


  const handleChange = (e) => {
    // console.log(e.target.value);
    setIsRadio(e.target.value);
  };

  return (
    <>
      <div className="col-md-12 custom-form">
        <br />
        <div>
          <div className="col-md-12 form-group">
            <label className="font-18">
              Choose jewelry type<span className="mark_red">*</span>
            </label>
            <div className="d-block">
              <label htmlFor="rings" className="col-md-3">
                <input
                  type="radio"
                  id="rings"
                  value="rings"
                  onChange={handleChange}
                  checked={isRadio === "rings"}
                />
                <span className="-mt-2">Rings</span>
              </label>
              <label htmlFor="bracelets" className="col-md-3">
                <input
                  type="radio"
                  id="bracelets"
                  value="bracelets"
                  onChange={handleChange}
                  checked={isRadio === "bracelets"}
                />
                Bracelets
              </label>
              <label htmlFor="earrings" className="col-md-3">
                <input
                  type="radio"
                  id="earrings"
                  value="earrings"
                  onChange={handleChange}
                  checked={isRadio === "earrings"}
                />
                Earrings
              </label>
              <label htmlFor="brooches" className="col-md-3">
                <input
                  type="radio"
                  id="brooches"
                  value="brooches"
                  onChange={handleChange}
                  checked={isRadio === "brooches"}
                />
                Brooches
              </label>
              <label htmlFor="necklace" className="col-sm-3">
                <input
                  type="radio"
                  id="necklace"
                  value="necklace"
                  onChange={handleChange}
                  checked={isRadio === "necklace"}
                />
                Necklace & Pendants
              </label>
              <label htmlFor="other" className="col-md-3">
                <input
                  type="radio"
                  id="other"
                  value="other"
                  onChange={handleChange}
                  checked={isRadio === "other"}
                />
                Other
              </label>
            </div>
            {isRadio === "other" ? (
              <div className="from-group col-md-11 m-3">
                <hr />
                <lebel htmlFor="other_type">
                  Other Type<span className="mark_red">*</span>
                </lebel>
                <input
                  type="text"
                  className="form_control"
                  id="other_type"
                  placeholder="Other Type"
                />
              </div>
            ) : (
              ""
            )}
            <div className="col-md-12 ">
              <p className="font-18 mt-2">
                <b>Metal Type</b>
              </p>
              <div className="col-md-12">
                <div className="row">
                  <div className="from_Group col-md-6">
                    <label htmlFor="Metaltype">
                      Metal Type<span className="mark_red">*</span>
                    </label>
                    <select
                      className="form_control"
                      name="Metaltype"
                      id="Metaltype"
                    >
                      <option>18k white gold</option>
                    </select>
                  </div>
                  <div className="from_Group col-md-6">
                    <label htmlFor="appMetal">
                      Appx Metal Weight (gm)<span className="mark_red">*</span>
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      id="appMetal"
                      placeholder="Appx Metal Weight (gm)"
                    />
                  </div>

                  {
                  // isRadio==="earring" || isRadio=== "brooches" || isRadio=== "necklace" || isRadio==="other"?
                  (isRadio === "bracelets" ? (
                      <div className="from_Group col-md-6">
                      <label htmlFor="bracelets">
                      Bracelets<span className="mark_red">*</span>
                      </label>
                      <select
                        className="form_control"
                        name="bracelets"
                        id="bracelets">
                        <option>Bracelets</option>
                      </select>
                    </div>
                  ) : (
                    <div className="from_Group col-md-6">
                      <label htmlFor="Ringtype">
                        Ring Type<span className="mark_red">*</span>
                      </label>
                      <select
                        className="form_control"
                        name="Metaltype"
                        id="Ringtype"
                      >
                        <option>Ringtype</option>
                      </select>
                    </div>)
                  )}
                  <div className="from_Group col-md-6">
                    <label htmlFor="engraving">
                      Engraving<span className="mark_red">*</span>
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      id="engraving"
                      placeholder="Engraving"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 m"><hr/></div>
          <div className="col-md-11 m">
            <p className="font-18"><b>Diamond and Gemstone Detail</b></p>
          </div>
          <div className="col-md-12">
            <input type="checkbox" className="input_check"name ="centerStone" value="center" onChange={handleCenterStone} checked={centerStone}/> Center Stone
          </div>
          <div className="col-md-12 m">
            {centerStone && <CenterStone/>}
          </div>
          <div className="col-md-12">
            <input type="checkbox" className="input_check" name="sideStone" value="side" onChange={handleSideStone} checked={sideStone}/>  Side Stone
          </div>
          <div className="col-md-12 m">
            {sideStone && <SideStone/>}
          </div>
          <div className="col-md-12 m"><hr/></div>
          <div className="col-md-12 form-group">
            <label className="font-18">Upload Your Image
              <span className="mark_red">*</span>
            </label>
            <p className="font-12">You may upload image, video and URL of the product that you want us to design for you.</p>
          </div>
          <div className="d-block m">
          <label htmlFor="img" className="col-md-2">
                <input
                  type="radio"
                  id="img"
                  value="img"
                  onChange={linkhandleChange}
                  checked={linkRadio === "img"}
                />
                Image
            </label>
            <label htmlFor="video" className="col-md-2">
                <input
                  type="radio"
                  id="video"
                  value="video"
                  onChange={linkhandleChange}
                  checked={linkRadio === "video"}
                />
                Video
            </label>
            <label htmlFor="url" className="col-md-2">
                <input
                  type="radio"
                  id="url"
                  value="url"
                  onChange={linkhandleChange}
                  checked={linkRadio === "url"}
                />
                URL
            </label>
            
              {linkRadio==="url"?(
                <div className="mt-10">
                  <input type="text" className="form-control mx-400 mb-10" placeholder="Enter URL"/>
                </div>
              ):(
              <div>
                <div className="img">
                  <label htmlFor="upload" className="img_btn">
                  {linkRadio==="img"?"Browse Images":"Browse Video"} <input type="file" id="upload" className="file_up"/>
                  </label>
                </div>
             {linkRadio==="img"?(<p className="font-12">2Mb Max and 5 Images Max (JPG, JPEG and PNG)</p>):(<p>20Mb Max (MP4, WEBM)</p>)}
              </div>)}
              
            
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LeftSideFrom;
