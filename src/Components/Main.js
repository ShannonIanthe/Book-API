import react from 'react'
import Card from './Card'
import './style.css'
import { BiSearchAlt } from 'react-icons/bi'

const Main =()=> {
    return (
        <>
            <div className='header'>
                <div className='row1'>
                <h1>A room without books is like <br></br> a body without a soul.</h1>
                </div>
                <div className='row2'>
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder='Enter Book Name' />
                        <button><BiSearchAlt/></button>
                    </div>
                    <img src='./images/book1.jpg' alt='picture-of-books'/>
                </div>
            </div>
            <div className="container">
                <Card/>
            </div>
        </>
    )
}

export default Main;