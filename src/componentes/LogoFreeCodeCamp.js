import React from 'react'
import freeCodeCamp from '../imagenes/freecodecamp-logo.png'

export default function LogoFreeCodeCamp() {
  return (
    <div className='freecodecamp-logo-contenedor'>
    <img  
      className='freecodecamp-logo'
      src={freeCodeCamp}
      alt='Logo de freeCodecamp'  />
  </div>
  )
}