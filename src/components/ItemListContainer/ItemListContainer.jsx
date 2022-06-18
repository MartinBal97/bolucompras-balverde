import React, { useState, useEffect } from "react";
import "../ItemListContainer/ItemListContainer.css";
import { Spinner } from 'react-bootstrap'
import ItemList from "../ItemList/ItemList"
import productos from "../../api/productos.json"

export default function ItemListContainer() {

    const [prod, setProd] = useState([])

    useEffect(() => {
        
        setTimeout(() => {
            setProd(productos)
        }, 2000);
    
    }, []);

    return (
        <>
        {
        (prod.length > 0)?
            <div className="contenedorPrincipalDeItems">
                <ItemList prod={prod} />
            </div>
            :
            <div className="spinner">
                <Spinner animation="border" variant="success" />
            </div>
        }
        </>
    )
}