import React, { useState, useEffect } from "react";
import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList"
import ajustadorAnillos from "../../img/ajustadorAnillos.png"
import atrapaMoscas from "../../img/atrapa-moscas.jpg"
import carTool from "../../img/cartool-emergency.jpg"
import cortadorPizza from "../../img/cortador-pizza.jpg"

export default function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([])

    const promesaItems = new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve ([
                {id:1, title: 'Ajustador de anillos',description: 'Sirve para poder ajustar tus anillos a la medida de tu dedo',price: 0.50, pictureUrl:ajustadorAnillos },
                {id:2, title: 'Atrapa moscas',description: 'Trampa para moscas',price: 7, pictureUrl:atrapaMoscas },
                {id:3, title: 'Car tool emergency',description: 'En caso de que necesites cortar el cinturos de seguridad o romper el vidrio facilmente esta herramienta te ayudará',price: 3.50, pictureUrl:carTool },
                {id:4, title: 'Cortador de pizza',description: 'Cortador de pizza en forma de bicicleta',price: 4, pictureUrl:cortadorPizza}
            ])
        }, 2000);
    })

    useEffect(() => {
        promesaItems.then((res) => {
            setTodosLosProductos(res)
        })
    }, []);

    return (
        <>
            {(todosLosProductos.length > 0)?
            <>
                <div className="contenedorPrincipalDeItems">
                    <ItemList todosLosProductos={todosLosProductos} />
                </div>
            </>
            :
            <>
                <div>
                    Cargando...
                </div>
            </>
            }
        </>
    )
}