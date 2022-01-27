import React, { useState, useEffect } from "react";
//import { Spinner } from 'react-bootstrap'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import productos from "../../api/productos.json"



export default function ItemDetailContainer() {

    
    const [prod, setProd] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const GetItem = new Promise((resolve, reject) => {

            setTimeout(() => {
                const producto = productos.filter((e) => e.id === id)
                resolve(producto[0])
            }, 2000);
        })

        GetItem.then((res) => {
            setProd(res)
        })

        GetItem.catch((err) => {
            setProd(err)
        })

    }, []);

    return <ItemDetail prod={prod} />
        
            
             
    
       
    
}