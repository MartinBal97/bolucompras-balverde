import React from "react";
import fotoCarrito from "../img/cart3.svg" 

export default function CartWidget() {

    const carrito = {
        color: "black",
        width: "20px"
    }

    return (
        <>
            <button className="btn btn-primary"><img src={fotoCarrito} alt="carrito" style={carrito}/></button>
        </>
    )
}