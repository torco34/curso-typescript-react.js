import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ModalItem } from './ModalItem';
interface IProsp {

}
export const AccordionItem = ({ }: any) => {
  const [addItem, setAddItem] = useState<string[]>([])
  const [inputStad, setInputStad] = useState<string>("")
  const [pasar, setPasar] = useState<string>("")
  const [crearTema, setCrearTema] = useState<string[]>([])
  const [temas, setTemas] = useState<string>("")
  const crearItem = () => {
    if (inputStad.trim() !== "") {
      setAddItem([...addItem, inputStad])
      setInputStad("");
    }
  }
  const crearTemas = () => {
    if (temas.trim() !== "") {
      setCrearTema([...crearTema, temas])
    }

  }
  const pasarItem = (item: any) => {
    setPasar(`${item}`)
  }
  return (
    <>

      <Accordion defaultActiveKey={['0']} alwaysOpen>

        <Accordion.Item eventKey="0">
          <Accordion.Header>NIVEL</Accordion.Header>
          <Accordion.Body>
            <ModalItem setInputStad={setInputStad} crearItem={crearItem} text=" Crear niveles" />
            {inputStad}
            {addItem.map((item) => <div style={{ cursor: "pointer" }} onClick={() => pasarItem(item)}>{item}</div>
            )}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>TEMA {pasar}</Accordion.Header>

          <Accordion.Body>
            <ModalItem setInputStad={setTemas} crearItem={crearTemas} text={`Crear TEMA  ${pasar}`} />
            {crearTema.map((tema) => <div>{tema}</div>)}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </>
  )
}
