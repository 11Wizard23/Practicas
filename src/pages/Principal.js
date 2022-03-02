import React from 'react'
import imgHeader from "../img/pru.jfif"

export default function Principal() {
  
  const datos = [123,234,345,456,567,678,789]

  const Cuadro = (props) => {
    const {numero} = props
    return (
      <div>
        <p>{numero}</p>
      </div>
    )
  }
  
  return (
    <div>
      <img src={imgHeader} alt="imgprueba"/>
      {
      datos.map((numero) => <Cuadro key={numero} numero={numero}/>)
      }  
  

    </div>
  )
}
