import React, { useEffect, useState } from "react";


export default function ConsumiendoApis() {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json))
    });
/*
    <>
    {
    json.map(elemento => <ItemListContainer elemento={elemento}) />
    }
    </>*/
    return (
    <>
    </>
    )

}
