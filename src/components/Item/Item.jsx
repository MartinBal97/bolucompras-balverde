import React from "react"
import "../Item/Item.css"
//import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { Link } from 'react-router-dom'


export default function Item({ prod }) {

    return (
        <>
            <div className="contenedorItem">
                <div className="contenidoItem">

                    <img className="imagenItem" src={prod.pictureUrl} alt=""></img>
                   
                    <div className="itemCountEinfo">

                        <div className="nombreYprecio">
                            <p className="itemNombre">{prod.title}</p>
                            <p className="itemPrecio">Precio: {prod.price}</p>
                            <Link to={`/producto/${prod.id}`}><button className="botonVerMas">Ver más</button></Link>
                        </div>

                    </div>
                </div>    
            </div>           
        </>
    )
}