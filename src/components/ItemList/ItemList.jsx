import React from "react";
import Item from "../Item/Item"

export default function ItemList({ todosLosProductos }) {

    return (
        <>
            
            <div className="flex">
                {todosLosProductos.map(item => <Item item={item} key={item.id} />)}
            </div>
            
        </>
    )


}