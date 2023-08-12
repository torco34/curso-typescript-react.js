import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { BsFillPencilFill } from "react-icons/bs";
// import { Modal } from 'react-modal';

const UseEfe: React.FC = () => {
    const [texto, setTexto] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar si el modal está abierto o cerrado

    useEffect(() => {
        const storedTexto = localStorage.getItem('texto');
        if (storedTexto) {
            setTexto(storedTexto);
        }
    }, []);

    const handleOnChange = (e: any) => {
        setTexto(e.target.value);
    }

    const handleGuardar = () => {
        localStorage.setItem('texto', texto);
        alert('Texto guardado correctamente.');
    }

    const handleEditar = () => {
        // Abre el modal cuando se hace clic en el botón de editar
        setModalIsOpen(true);
    }

    const handleCloseModal = () => {
        // Cierra el modal cuando se hace clic fuera del contenido o en el botón de cerrar
        setModalIsOpen(false);
    }

    const handleGuardarModal = () => {
        // Guarda el texto del modal y cierra el modal
        localStorage.setItem('texto', texto);
        setModalIsOpen(false);
        alert('Texto guardado correctamente.');
    }

    return (
        <div>
            <textarea value={texto} onChange={handleOnChange} />
            <p>Texto actual: {texto}</p>
            <button onClick={handleGuardar}>Guardar</button>
            <button onClick={handleEditar}><BsFillPencilFill /></button>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Editar Texto Modal"
            >
                <h2>Editar Texto</h2>
                <textarea value={texto} onChange={handleOnChange} />
                <button onClick={handleGuardarModal}>Guardar</button>
                <button onClick={handleCloseModal}>Cerrar</button>
            </Modal>
        </div>
    );
}

export default UseEfe;
