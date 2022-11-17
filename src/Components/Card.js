import react from "react";
import "./style.css";
import Modal from './Modal'

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
          //let title = item.volumeInfo.readingModes && item.volumeInfo.readingModes.subtitle;
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if(thumbnail!= undefined && amount != undefined) 
          {
            return (
            <>
          <div className="card">
            <img src={thumbnail} alt="" />
            <div className="bottom">
              <h3 className="title">{item.volumeInfo.title}</h3>
              <p className="amount">&#x20AC; {amount}</p>
            </div>
          </div>
          <Modal/>
          </>
        );

          }
        
      })}
    </>
  );
};

export default Card;
