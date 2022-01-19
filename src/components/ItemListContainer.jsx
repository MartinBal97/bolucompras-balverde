import React, {useState} from "react";
import Item from "./Item"

export default function ItemListContainer () {

    const [arregloDeProductos, setArregloDeProductos] = useState([
        {nombre: 'Limpia vidrios magnetico ', stock: 12},
        {nombre: 'Masajeador ', stock: 4},
        {nombre: 'Atrapa moscas ', stock: 6}
    ])

    return (
        <>
        {
        arregloDeProductos.map(item=><div key={item.nombre}><Item item={item}/></div>)
        }
        </>
    )
}