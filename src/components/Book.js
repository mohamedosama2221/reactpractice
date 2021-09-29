import React from 'react'
import './book.css'

const Book = (props) => {
    const {imgUrl , bookTitle , bookAuth , bookAuthName, children} =props;
    // const {bookinfo:{imgUrl , bookTitle , bookAuth , bookAuthName} , children} =props;
    const authName = ()=>{
        alert(bookAuthName);
    }
    return (
        <article className='book'>
            <img src={imgUrl} alt="book" style={{cursor:"pointer"}} className="book_img"  onClick={()=> alert("hello")}/>
            <h1 className="book_title" style={{textTransform:'capitalize'}}>{bookTitle}</h1>
            <div className="book_desc-container"><span  className="book_desc-head" style={{color:"#a36200"}}>Description</span>{children}</div>
            <h4 className="book_auth" style={{color:'red' , fontSize:'1rem' }}>{bookAuth}</h4>
            <h6 className="book_auth-name">{bookAuthName}</h6>
            <button onClick={authName}>example</button>
        </article>
    )
}

export default Book
