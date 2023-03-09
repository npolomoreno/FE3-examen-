import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  
  const [user, setUser] = useState({
    pelicula: '',
    libro:''
  })

  const [show, setShow] = useState(false)
  const [err,setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // primera validación
    if(user.libro.length > 3 && user.libro.charAt(0) != '' && user.pelicula.length >= 6 ){
      setShow(true)
      setErr(false)
    } else{
      setShow(false)
      setErr(true)
    }

  }

  return (
    <div className="App">
      <h3>Preferidos</h3>
      <form onSubmit={handleSubmit}>       
        {

        <div className='parent-div'> 
        <label> Ingresa tu libro favorito </label>
        <input type="text" value = {user.libro} onChange={(e)=> setUser({...user,libro: e.target.value})} />
        <label >Escribe tu pelicula favorita </label>
        <input type="text" value = {user.pelicula} onChange={(e)=> setUser({...user,pelicula: e.target.value})} />
        
        <button>Enviar</button>
        </div>
        }
      
      </form>
      {err ? "Por favor chequea que la información sea correcta":null}
      {show ?  <Card libro={user.libro} pelicula = {user.pelicula}/>: null }
    </div>
  )
}

export default App
