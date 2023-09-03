import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ModalItem } from './ModalItem';
interface IProsp {

}
export const AccordionItem = ({ }: any) => {
  const [addItem, setAddItem] = useState<string[]>([])
  const [inputStad, setInputStad] = useState<string>("")

  return (
    <>

      <Accordion defaultActiveKey={['0']} alwaysOpen>

        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <ModalItem setInputStad={setInputStad} />
            {inputStad}
            {addItem.map((item, index) => <div>{item}</div>
            )}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </>
  )
}
