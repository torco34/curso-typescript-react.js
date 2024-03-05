import { Boton } from "./Boton"


export const PagesFather = () => {
    const handleOnClick = () => {
        alert("hola mundo")
    }
    return (
        <div className='container'>
            <h2 className='text-center'>ejercicio Practica </h2>
           <Boton handleOnClick={handleOnClick}/>
        </div>
    )
}
