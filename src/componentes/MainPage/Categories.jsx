import React from "react"
import { Link } from "react-router-dom"


const Categories = () => {

  const data = [
    {

      cateImg: "./imagenes/categorias/cat1.png",
      cateName: "inmuebles",
      path: '/inmuebles'

    },
    {
      cateImg: "./imagenes/categorias/cat2.png",
      cateName: "Vehiculos",
      path: '/vehiculos'
    },
    {
      cateImg: "./imagenes/categorias/cat3.png",
      cateName: "Hogar",
      path: '/hogar'
    },
    {
      cateImg: "./imagenes/categorias/cat4.png",
      cateName: "Moda",
      path: '/moda'
    },
    {
      cateImg: "./imagenes/categorias/cat5.png",
      cateName: "Futuros Padres",
      path: '/futurosPadres'
    },
    {
      cateImg: "./imagenes/categorias/cat6.png",
      cateName: "Mascotas",
      path: '/mascotas'
    },
    {
      cateImg: "./imagenes/categorias/cat7.png",
      cateName: "Electronica",
      path: '/electronica'
    },
    {
      cateImg: "./imagenes/categorias/cat8.png",
      cateName: "Servicios",
      path: '/servicios'
    },
    {
      cateImg: "./imagenes/categorias/cat9.png",
      cateName: "Negocios",
      path: '/negocios'
    },
    {
      cateImg: "./imagenes/categorias/cat10.png",
      cateName: "Empleo",
      path: '/empleo'
    },

  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
           
            <div className='box f_flex' key={index}>
              <Link to={value.path}>
                 <img src={value.cateImg} />
              </Link>
             
              <Link to={value.path}>
              
              <span>{value.cateName}</span>
              </Link> 
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
