import React from "react"
import ItemCount from "./ItemCount"

export default function Item({item}){

    
     
    return (
        <>
        <div className="contenedorItem">
            <div className="itemInformacion" >
                <p>{item.nombre}</p>
                <p>Stock disponible: {item.stock}</p>
            </div> 
            <ItemCount stock={item.stock} />
        </div>
        
        
        </>
    )
}