import React, { useState } from 'react'

const App = () => {

  const [books,setBooks] = useState([])
  const fetchBook=async()=>{
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books')
      const data=await response.json()
      setBooks(response.data)
    } catch (error) {
      
    }
  }

  return (
    <>
      <h1>Book shop Booling</h1>

      <div>
        <input type="text" placeholder='Book Tittle...' />
        <input type="number" placeholder='Release Date...' />
        <button>Add Book</button>
      </div>

      
        <table>
          <thead>
            <td>Book Tittle</td>
            <td>Release Date</td>
          </thead>

          <tbody>
            <tr id='books.id'>
              {
                 books.map((item)=>{
                  <td>{item.tittle}</td>
                 })
              }
            </tr>
          </tbody>
        </table>
      
    </>
  )
}

export default App
