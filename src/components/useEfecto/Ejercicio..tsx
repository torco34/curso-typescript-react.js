import React, { useEffect, useState } from 'react'
import { UserList } from './UserList';

export const Ejercicio = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`hola mundo eso se monto!`)
        return () => {
            console.log(`El componente se esta desmantando`)
        }

    }, []);

    useEffect(() => {
        console.log("se muestra cada ver que dony un click")
        document.title = `contadorer ${count}`
    }, [count])
    const incrementar = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>contador: {count}</p>
            <button className="btn btn-dark" onClick={incrementar}>incrementa</button>


            <UserList/>
        </div>
    )
}
