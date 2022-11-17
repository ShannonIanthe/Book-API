import React from "react";
import { IoIosClose } from "react-icons/io";
import './style.css'

function Modal() {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">{IoIosClose}</button>
          <div className="inner-box">
            <img src="./images/book.jpeg" alt="" />
            <div className="info">
                <h1>ReactJS - Learning Modern Web Applications with React</h1>
                <h3>Shannon Mettry</h3><br/>
                <h4>Shannon Web Dev Ltd<span>2022-11-16</span></h4><br/>
                <a href="#"><button>More</button></a>
            </div>
          </div>
          <h4 className="description">Knowledge for Free...</h4>
        </div>
      </div>
    </>
  );
}

export default Modal;
