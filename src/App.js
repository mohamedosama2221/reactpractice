import React from 'react'
import Book from './components/Book'
import { bookInfo } from './data/booksinfo'

const App = () => {

  const data = bookInfo.map(book => 
    <Book {...book} key={book.id}>
      <p className='book_desc-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate ratione quam perferendis asperiores pariatur minima natus culpa quo veritatis nobis dignissimos, placeat, unde maiores, recusandae adipisci totam amet vitae.</p>
    </Book>)
  // const data = bookInfo.map(book => 
  //   <Book bookinfo ={book} key={book.id}>
  //     <p className='book_desc-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate ratione quam perferendis asperiores pariatur minima natus culpa quo veritatis nobis dignissimos, placeat, unde maiores, recusandae adipisci totam amet vitae.</p>
  //   </Book>)


  return (
    <div>
      {data}
    </div>
  )
}

export default App

