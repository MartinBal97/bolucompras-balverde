import React, {useEffect , useState} from "react"
import {useParams} from 'react-router-dom'
import productos from "../../api/productos.json"
import ItemList from "../ItemList/ItemList"

export default function Categorias() {
    
    const { categoriaName } = useParams();

    const [prod, setProd] = useState([productos])

    useEffect(() => {

        setProd(productos.filter(item => item.categoria === categoriaName))
       
    }, [categoriaName])

    return <ItemList prod={prod} />
              
}
