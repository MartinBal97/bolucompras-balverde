import '../ItemCount/ItemCount.css'
import React, {useState} from "react"

export default function ItemCount({stock, onAdd}) {

    const [cantidad, setCantidad] = useState(1);

    function restar() {if (cantidad > 0) {setCantidad(cantidad - 1) }}
    function sumar() {if (cantidad < stock) { setCantidad(cantidad + 1)}}

    

    return (
        
        <div className="contenedorItemCount" >
            <div className="contenedorBotones">
                <button className="btn" onClick={() => restar()}> -</button>
                <p className="cantidadItems">{cantidad}</p>
                <button className="btn" onClick={() => sumar()}>+ </button>
            </div>
            
            <button onClick={() => onAdd({cantidad})} className="btn-agregarCarrito" disabled={stock < 1} >Agregar al carrito</button>
        </div>

    )
}