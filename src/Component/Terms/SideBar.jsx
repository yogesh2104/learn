import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
        <div className="d-none d-lg-block d-md-block select_p">
          <p>
            <NavLink to="/terms" className="navlink" style={({ isActive }) => ({
              color: isActive ? '#034259' : '#034259',
              borderBottom: isActive ? '2px solid #034259' : '#f0f0f0',
            })}>
              <span className="">Terms & Conditions</span>
            </NavLink>
          </p>
          <p>
            <NavLink to="/policy" className="navlink"style={({ isActive }) => ({
              color: isActive ? '#034259' : '#034259',
              borderBottom: isActive ? '2px solid #034259' : '#f0f0f0',
            })}>
              <span className="">Privacy Policy</span>
            </NavLink>
          </p>
          <p>
            <NavLink to="/returnPolicy" className="navlink" style={({ isActive }) => ({
              color: isActive ? '#034259' : '#034259',
              borderBottom: isActive ? '2px solid #034259' : '#f0f0f0',
            })}>
              <span className="">Return and Shipping Policy</span>
            </NavLink>
          </p>
          <p>
            <NavLink to="/deliveryInfo" className="navlink"style={({ isActive }) => ({
              color: isActive ? '#034259' : '#034259',
              borderBottom: isActive ? '2px solid #034259' : '#f0f0f0',
            })}>
              <span className="">Delivery Information</span>
            </NavLink>
          </p>
        </div>
    </>
  );
};

export default SideBar;
