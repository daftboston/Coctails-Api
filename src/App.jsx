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
    /* axios
    .metodo("url")
    .then(respuesta=> console.log(respuesta))  then en caso de que la promesa se cumpla
    .catch.(erro=>console.error)   catch en caso de que la promesa no se cumpla */
   getData()
   },[name])
    
  const searchCoctail = (e) => {
    e.preventDefault()
    console.log(e.target[0].value);
    setName (e.target[0].value)
  }


const getData = () => {
  axios
  .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
  .then (resp => {console.log(resp.data.drinks)
  setCoctailData(resp.data.drinks)})
  .catch(error=> console.error(error))
}


  return (
    <div className="App">
      
          <form onSubmit={(e)=> searchCoctail(e)}>
             <input type="text" placeholder='buscar por nombre' />
             <button type='submit'></button>
          </form>
      <div className='container'>
        
          {
             coctailData.map((coctail, index)=> <CoctailCard key = {`coctail-${index}`} data={coctail}/>)
           }

      </div>
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more

      </p>
    </div>
  )
}

export default App
