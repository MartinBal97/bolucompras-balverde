import React from "react";
import "../ItemDetail/ItemDetail.css"
import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ prod }) {

    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">

                <img className="imagenItem" src={prod.pictureUrl} alt="" />

                <div className="informacionDeCompra">
                    <h3 className="tituloInfoCompra">{prod.title}</h3>

                    <p className="descripcionItem">{prod.description}</p>
                    <p className="precioItem">{prod.price}</p>
                    <ItemCount stock={prod.stock} />
                </div>

            </div> 
        </div>
    )
}