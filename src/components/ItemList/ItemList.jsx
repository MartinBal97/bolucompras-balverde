import React from "react";
import Item from "../Item/Item"
import "../ItemList/ItemList.css"


export default function ItemList({ prod }) {

    return (
        <>
            
            <div className="grid">
                {prod.map((e,i) => <Item prod={e} key={i} />)}
            </div>
            
        </>
    )
    

}