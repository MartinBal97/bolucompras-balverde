import React from "react";
import fotoCarrito from "../../cart3.svg"
import "../CartWidget/CartWidget.css"

export default function CartWidget() {

   

    return (
        <>
         <button className="btn btn-primary"><img className="carrito" src={fotoCarrito} alt="carrito"/><span className='badge'>0</span></button>
        </>
    )
}