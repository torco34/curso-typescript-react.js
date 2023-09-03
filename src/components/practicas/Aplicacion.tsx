import React, { useState } from 'react'
import { data } from '../filter/pages/data'
interface Iprops {
    title: string,

}
export const Aplicacion = () => {
    const [item, setItem] = useState<Iprops[]>(data);

    const hendleElimin = (index: number) => {
        const elimina = item.filter((_, i) => i !== index)
        setItem(elimina)
    }


    return (
        <div className='container'>
            {item.map((ite, index) => (
                <li>{ite.title}
                    <button onClick={() => hendleElimin(index)} className='btn btn-danger'>elimina</button></li>

            ))}


        </div>
    )
}
