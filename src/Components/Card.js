import react from 'react';
import './style.css'

const Card=({book}) => {
    console.log(book)
    return (
        <>
        {
            book.map((item) => {
                return(
                    <div className="card">
<img src="./images/book.jpeg" alt="" />
<div className="bottom">
    <h3 className='title'>React Js</h3>
    <p className='amount'>&#x20AC;24</p>
</div>
</div>
                )
            })
        }


        </>
    )
}

export default Card;