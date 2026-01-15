import React, { useEffect, useState } from 'react'

const App = () => {

  const [books,setBooks] = useState([])
  const [formData ,setFormData]=useState({tittle:"" , release_Year:""})
  const fetchBook=async()=>{
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/')
      const data=await response.json()
      setBooks(data)
    } catch (error) {
      
    }
  }

  const handleChange=(e)=>{
       setFormData({...formData ,[e.target.name]:e.target.value})
  }

 async function handleAddBook(){
  try {
    
  const response = await fetch('http://127.0.0.1:8000/api/books/create/', {
            method: 'POST', // சொல்ல வேண்டிய முறை
            headers: {
                'Content-Type': 'application/json', // என்ன டேட்டா அனுப்புகிறோம் என்ற தகவல்
            },
            body: JSON.stringify(formData), // ஆப்ஜெக்ட்டை ஸ்டிரிங்காக மாற்றுதல்
        })

        if (response.ok) {
        // 1. லிஸ்ட்டைப் புதுப்பித்தல்
        fetchBook() 
        // 2. பெட்டிகளை காலி செய்தல்
        setFormData({ tittle: "", release_Year: "" }) 
        alert("Book Added Successfully!")
      }

  } catch (error) {
    
  }
 }

 async function handleDelet(){
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/books/${id}/`,{
      method:'DELETE'
    })
    


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
        <input type="text" name='tittle' placeholder='Book Tittle...' onChange={handleChange}  value={formData.tittle}/>
        <input type="number" name='release_Year' placeholder='Release Date...' onChange={handleChange} value={formData.release_Year}/>
        <button onClick={()=>handleAddBook()}>Add Book</button>
      </div>

      
        <table>
          <thead>
            <tr>
              <td>Book Tittle</td>
            <td>Release Date</td>
            <td>Delete</td>
            </tr>
          </thead>

         <tbody>
  {books.map((item) => (
    <tr key={item.id}> 
      <td>{item.tittle}</td> 
      <td>{item.release_Year}</td>
      <td><button onClick={()=>handleDelet(item.id)}>DeleteBook</button></td>
    </tr>
  ))}
</tbody>
        </table>
      
    </>
  )
}

export default App
