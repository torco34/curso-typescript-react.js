import React from 'react'
import { Buttons } from './Buttons'
import { Link } from 'react-router-dom'
import { ModalComponent } from './ModalComponent'

export const PagesButton = () => {
    const onClick1 = () => {
        alert("este boton es reutilizable #1")
    }
    const onClick2 = () => {
        alert("este boton es reutilizable #2")
    }
    const onClick3 = () => {

        alert("este boton es reutilizable #3")
    }
    return (
        <div className='container'>
            <h2>Componentes Reutilizable</h2>
            <nav>
                <ul className='list-unstyled '>
                    <li className='list-inline-item'>
                        <Link to="/boton" className='text-decoration-none custom-link'>Buton</Link>
                    </li>
                    <li className='list-inline-item'>
                        <Link to="/boton" className='text-decoration-none custom-link'>Componente</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <p>Son botones y modales listo para usar Reutilizable</p>
            <hr />
            <Buttons variant="outline-secondary" text="Botón 1" id={1} onClick={onClick1} />
            <Buttons variant="outline-success" text="Botón 2" id={2} onClick={onClick2} />
            <Buttons variant="outline-primary" text="Botón 3" id={3} onClick={onClick3} />
            <ModalComponent
                variant="outline-info"
                modales="Modal"
                text="Este es un modal Reutilizable"
                title="Modal de bootstrap"
                close="Cerrar"
                ver="ver otro" />
            <ModalComponent
                variant="outline-danger"
                modales="Modal #2"
                text="Este es un modal Reutilizable es el misimo pero com mejoras"
                title="Modal de bootstrap segundo modal"
                close="Cerrar "
                ver="ver" />

        </div>
    )
}
