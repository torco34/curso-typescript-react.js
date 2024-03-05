import React from 'react'
import img1 from "../../assets/img/img1.jpg";
export const Product = ({ user }: any) => {
    const handleEditarClick = () => {
        alert("hola producto")
    }
    return (
        <div>
            <article className='bg-yellow-300 border'>
                <img className="h-10 w-10 rounded-full mx-auto" src={img1} alt="img card" />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <button onClick={handleEditarClick}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>editar</button>

            </article>
        </div>
    )
}
