import React from "react"
import "../Item/Item.css"
//import ItemCount from "../ItemCount/ItemCount"
//import atrapaMoscas from "../../img/atrapa-moscas.jpg"

export default function Item({ item }) {

   /* <div className="itemCount">
        <ItemCount stock={item.stock} />
    </div>*/

    return (
        <>
        <div className="contenedorItem">
                <img className="imagenItem" src={item.pictureUrl} alt=""></img>
                <div className="itemCountEinfo">
                    <div className="nombreYprecio">
                        <p className="itemMombre">{item.title}</p>
                        <p className="itemPrecio">Precio: ${item.price}</p>
                        <button className="botonVerMas">Ver más</button>
                    </div>

                </div>
        </div>           
        </>
    )
}