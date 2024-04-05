"use client"
import Axios from 'axios'
import { useState } from 'react'

export default function Home() {

  const [user, setUser] = useState({})
  
  const registro = async (e : any) => {

    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    try {
      const res = await Axios.post("http://localhost:4000/users", {
      email: formData.get("email"),
      password: formData.get("password"),
      data: {
        name: formData.get("name"),
        lastname : formData.get("lastname"),
        role : formData.get("role"),
      }
    });
    if(res.data){
      console.log(res.data);
      setUser(res.data)
      alert("Se registro el usuario correctamente")
    }else {
      alert("No se pudo registrar el usuario, revise los campos")      
    }
    } catch (error) {
      alert("Error al procesar la peticion")
    }
    
  }

  return (
    <main >
      <form action="" onSubmit={registro}>
        <h1>Registro(Crear ususario)</h1><br />
        <input type="text" placeholder='nombre' name="name" /><br />
        <input type="text" placeholder='apellido' name="lastname" /><br />
        <input type="text" placeholder='cargo' name="role" /><br />
        <input type="text" placeholder='correo' name="email" /><br />
        <input type="password" placeholder='contraseña' name="password" /><br />
        <button>Registrar</button>
      </form>
    </main>
  );
}
