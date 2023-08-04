import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';

export const Edictica = () => {
    const [text, setText] = useState('');

    const handleSave = () => {
        // Convertir el contenido de texto en un Blob
        const blob = new Blob([text], { type: 'text/plain' });

        // Crear un objeto URL para el Blob
        const url = URL.createObjectURL(blob);

        // Crear un enlace invisible y hacer clic en él para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = 'archivo_de_texto.txt';
        document.body.appendChild(a);
        a.click();

        // Liberar el objeto URL
        URL.revokeObjectURL(url);
    };

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Text Editor</Navbar.Brand>
            </Navbar>
            <Form>
                <FormControl
                    as="textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ height: '300px', marginTop: '20px' }}
                />
            </Form>
            <Button variant="primary" onClick={handleSave} style={{ marginTop: '10px' }}>
                Guardar
            </Button>
        </Container>
    );
};


