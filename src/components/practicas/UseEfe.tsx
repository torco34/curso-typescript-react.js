import React, { useEffect } from 'react';

const UseEfe: React.FC = () =>{
    useEffect(() => {
        // Código de manipulación del DOM aquí
        const element = document.getElementById('myElement');
        element.textContent = 'Nuevo contenido';
        element.style.color = 'red';

        // Devuelve una función de limpieza en caso necesario
        return () => {
            // Código de limpieza aquí (opcional)
            element.textContent = '';
            element.style.color = '';
        };
    }, []); // El segundo argumento es un arreglo de dependencias vacío para ejecutar el efecto solo una vez

    return (
        <div>
            <p id="myElement">Contenido inicial</p>
        </div>
    );
}

export default UseEfe;
