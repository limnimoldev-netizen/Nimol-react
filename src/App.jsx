import { useEffect, useState } from 'react'


function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
      const respose = await fetch ('/data/categories.json')
      const data = await respose.json()
      
      setCategories(data)
    }
     fetchData()

  },[]);


  return (
   <div>
      <h1>Hello Home page</h1>
      <h2>categories</h2>

      {categories.map((category) => (
      <p key={category.id}> 
        {category.name}
       
      </p>
    ))}
  
    </div>
    
  ) 
}

export default App
