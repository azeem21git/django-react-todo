import React, { useEffect, useState } from 'react'

const App = () => {

  const [books,setBooks] = useState([])
  const fetchBook=async()=>{
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/')
      const data=await response.json()
      setBooks(data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
        fetchBook()
  },[])

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
            <tr>
              <td>Book Tittle</td>
            <td>Release Date</td>
            </tr>
          </thead>

         <tbody>
  {books.map((item) => (
    <tr key={item.id}> 
      <td>{item.tittle}</td> 
      <td>{item.release_Year}</td>
    </tr>
  ))}
</tbody>
        </table>
      
    </>
  )
}

export default App
