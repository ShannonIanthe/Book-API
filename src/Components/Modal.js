import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './style.css'
import { LoremIpsum } from 'react-lorem-ipsum'

const Modal=({show, item, onClose})=> {
  if(!show) 
  {
    return null;
  }
  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}><AiOutlineCloseCircle/></button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
                <h1>{item.volumeInfo.title}</h1>
                <h3>{item.volumeInfo.authors}</h3>
                <h4>{item.volumeInfo.publisher}<span> {item.volumeInfo.publishedDate}</span></h4><br/>
                <a href={item.volumeInfo.previewLink}><button>More</button></a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description} </h4>
        </div>
      </div>
    </>
  );
}

export default Modal;
