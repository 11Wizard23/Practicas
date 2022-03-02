import React , { useState , useEffect } from 'react'

export default function Aboutus() {

  
  const [form , setForm] = useState({
    usuario : "",
    contrasena: ""
  })

  useEffect(() => {
    console.log("@Iniciando Efecto")
  } , [])
  
  function cambiarForm (e) {
    setForm(form => ({
      ...form,
      [e.target.name] : e.target.value
    }))
  }

  function imprimirDatos () {
    console.log(form.usuario , form.contrasena)
  }


  return (
    <div>
      <input name="usuario" type="text" onChange={cambiarForm}  value={form.usuario}/>
      <input name="contrasena" type="text" onChange={cambiarForm} value={form.contrasena}/>
      <button onClick={imprimirDatos} > Enviar </button>
    
    </div>
  )
}
