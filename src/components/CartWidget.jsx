import React from "react";

export default function CartWidget() {

    const carrito = {
        color: "black",
        width: "50px"
    }

    return (
        <>
            <button className="btn btn-primary"><img src="./img/cart3.svg" alt="carrito" style={carrito}/></button>
        </>
    )
}