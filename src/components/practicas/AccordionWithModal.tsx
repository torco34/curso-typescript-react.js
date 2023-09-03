import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Modal, Form } from 'react-bootstrap';
import { Item } from './Item';
interface Props {
    handleonclick: () => void,
}
function AccordionWithModal() {
    const [showModal, setShowModal] = useState(false);
    const [addItem, setAddITem] = useState<string[]>([])
    const [activeKey, setActiveKey] = useState(null);
    const [never, setNever] = useState("")
    const [accordionContent, setAccordionContent] = useState("Accordion 1");
    const handleModalShow = () => setShowModal(true);

    const handleModalGuardar = () => {
        setShowModal(false);
        if (never.trim() !== "") {
            setAddITem([...addItem, never])
        }

    }
    // const handleonclick = (index: any) => {
    //     const addindex = addItem.filter((_, i) => i !== index)
    //     alert(addindex)
    //     // setAddITem(addindex)
    // }
    // const handleonclick = (index: number) => {
    //     const updatedItems = [...addItem];
    //     updatedItems.splice(index, 1);
    //     setAddITem(updatedItems);
    // };
    const handleItem = (item: any) => {
        setAccordionContent(` ${item}`);
        setActiveKey(null);
    };
    return (
        <div>
            <div className="row" >
                <div className="col-6">
                    <Accordion  >
                        <Accordion className="p-4 text-center  text-light" style={{ background: "#071352", }}>Javascript</Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>NIVEl</Accordion.Header>
                            <Accordion.Body>
                                <Button style={{ backgroundColor: "#010d3d", width: "100%" }} className="text-center " onClick={handleModalShow} >
                                    <h4 className="text-white">Crear niveles JavaScript</h4>
                                </Button>
                                <br />
                                <ul className='text-center'>{addItem.map((item, index) => <li onClick={() => handleItem(item)} key={index} >{item}</li>)}</ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>{accordionContent}</Accordion.Header>
                            <Accordion.Body>
                                <Button style={{ backgroundColor: "#010d3d", width: "100%" }} className="text-center " onClick={handleModalShow} >
                                    <h4 className="text-white">Crear
                                        {accordionContent} JavaScript</h4>
                                </Button>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
            <Modal show={showModal} onHide={handleModalGuardar}>
                <Modal.Header closeButton>
                    <Modal.Title>Formulario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombred</Form.Label>
                            <Form.Control type="text" value={never} placeholder="Nombre" onChange={(e) => setNever(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comentario</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalShow}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleModalGuardar}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AccordionWithModal;
