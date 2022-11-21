import react, {useState} from 'react'
import Card from './Card'
import './style.css'
import { BiSearchAlt } from 'react-icons/bi'
import axios from 'axios'

const Main =()=> {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    const searchBook=(evt) => {
        if(evt.key==="Enter") 
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyC3_Dzf4oh_G3M1AAKrE6wBKx-zuJ0qk4w'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    return (
        <>
            <div className='header'>
                <div className='row1'>
                <h1>A room without books is like a body without a soul.</h1>
                </div>
                <div className='row2'>
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder='Enter Book Name'
                        value={search} onChange={e=>setSearch(e.target.value)} 
                            onKeyPress={searchBook}
                        />
                        <button><BiSearchAlt/></button>
                    </div>
                </div>
            </div>
            <div className="container">
                {
                    <Card book= {bookData}/>
                }
            </div>
        </>
    )
}

export default Main;