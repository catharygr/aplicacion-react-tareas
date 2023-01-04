import React from 'react'
import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Tarea({texto, completada}) {
  return (
    <div className='tarea-contenedor'>
        <div className='tarea-texto'>
          {texto}
        </div>
        <div className='tarea-contendor-icono'>
             <AiOutlineCloseCircle  className='tarea-icono'/>
        </div>
    </div>
  )
}