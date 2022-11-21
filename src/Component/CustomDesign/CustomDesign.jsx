import React from 'react'
import Breadcrumb from "react-bootstrap/Breadcrumb"; //! npm install react-bootstrap bootstrap
import { FaHome } from "react-icons/fa";   //! npm install react-icons --save
import './CustomDesign.css'
import LeftSideFrom from './LeftSideFrom';
import RightSideFrom from './RightSideFrom';
import GuideText from './GuideText';

const CustomDesign = () => {
  return (
    <>
      <div className="container mt-4">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="!#">
            <FaHome className="mark_black" />
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Custom Design</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <section>
        <div className="container pd-30">
          <div className="pd-z">
            <p className="Custom-title ">CUSTOMIZE YOUR DESIGN</p>
            <hr className="hr-line" />
            <p></p>
            <br />
            <div className="row">
              <div className="col-md-8 fix-left">
                <LeftSideFrom />
              </div>
              <div className="col-md-4">
                <RightSideFrom/>
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 container">
            <GuideText />
          </div>
      </section>
    </>
  );
}

export default CustomDesign