import React, { useState, useEffect } from 'react'
import UseEfe from './UseEfe'
import { Edictica } from './Edictica'
const Hijo = ({ data }) => {
    return <p>Soy el hijo: ;;; {data}</p>
}

export const Practica = () => {
    const [data, setData] = useState("soy la data del hook")
    function handleOnclick() {
        setData(" =>este es mi boton ")
    }
    return (
        <div>
            <Hijo data={data} />
            <button onClick={handleOnclick}>ver data</button>
            <div>
                < UseEfe />
                <Edictica />
            </div>
        </div>
    )
}



