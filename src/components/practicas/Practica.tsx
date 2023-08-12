import React, { useState, useEffect } from 'react'
// import {UseEfe} from './UseEfe'

import { Editar } from './Editar'
import { Edictar } from './Edictar'
const Hijo = ({ data }) => {
    return <p>Soy el hijo: ;;; {data}</p>
}

export const Practica = () => {
    const [data, setData] = useState("soy la data del hook")
    function handleOnclick() {
        setData(" =>este es mi boton ")
    }
    const [texto, setTexto] = useState('');

    const handleTextoChange = (value) => {
        setTexto(value);
    };
    return (
        <div>
            <Hijo data={data} />
            <button onClick={handleOnclick}>ver data</button>
            <div>
                {/* < UseEfe /> */}
                <Edictar />
                {/* <Editar value={texto} onChange={handleTextoChange} /> */}
            </div>
        </div>
    )
}



