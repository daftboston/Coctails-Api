import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CoctailCard from './components/CoctailCard'


function App() {
  
   const[coctailData, setCoctailData] = useState([])

   const [name, setName] = useState ("")



   //Con el useEffect se consume la api de axios
   useEffect(() => { 
   getData()
   },[name])
    
  const searchCoctail = (e) => {
    e.preventDefault()   
    setName (e.target[0].value)
  }


const getData = () => {
  axios
  .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)

  .then (resp => {console.log(resp.data.drinks)
  setCoctailData(resp.data.drinks)
  })

  .catch(error=> {
    console.error(error)
   setCoctailData([])
  })
}


  return (
    <div className="App">
      
          <form  onSubmit={(e)=> searchCoctail(e)}>
             <input type="text" placeholder='Search by name' />
             <button  type='submit'><i className='bx bx-drink'></i></button>
             
          </form>

      <div className='container'>
        
        
          {coctailData !== null
          ? 
             coctailData.map((coctail, index)=> (<CoctailCard key = {`coctail-${index}`} data={coctail}/>)
             )
             : 
             <h2>No hay resultados  <i className='bx bx-sad'></i></h2>
           }

      </div>
    
      
    </div>
  )
}

export default App
