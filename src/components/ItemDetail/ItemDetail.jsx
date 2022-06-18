import React, {useState} from "react";
import {Link} from "react-router-dom"
import "../ItemDetail/ItemDetail.css"
import "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ prod, added }) {

    const [muestraItemCount, setMuestraItemCount] = useState([true])

    function onAdd({cantidad}) {
        if (cantidad > 0) {
            alert(`Se agregaron ${cantidad} productos al carrito`)
            setMuestraItemCount(false)
        } else {
            alert(`Coloque la cantidad correctamente`)
        }
    }

    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <img className="imagenItem" src={prod.pictureUrl} alt="" />

                <div className="informacionDeCompra">
                    <h3 className="tituloInfoCompra">{prod.title}</h3>

                    <p className="descripcionItem">{prod.description}</p>
                    <p className="precioItem">{prod.price}</p>
                    {
                    (muestraItemCount) ?
                        <ItemCount onAdd={onAdd} stock={prod.stock} />
                    :
                        <Link to='/cart'><button className="btn btn-primary"> Terminar compra </button></Link> 
                    }       
                </div>
            </div> 
        </div>
    )
}