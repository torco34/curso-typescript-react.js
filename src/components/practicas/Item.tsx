import { useState } from "react"
import { Button } from "react-bootstrap"
import { Nav } from "./Nav"


export const Item = () => {
    const [items, setItems] = useState<string[]>([])
    const [newItem, setNewItem] = useState<string>("")
    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem])
            setNewItem('')
        }
    }

    const removeItem = (index: number) => {
        const updatedItem = items.filter((_, i) => i !== index);
        setItems(updatedItem)
    }

    return (
        <>

            <div className="container p-4">
                <Nav />
                <h2 className="text-center p-3">Pages de creo un elements y lo elimin PRACTICE</h2>
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                <Button onClick={addItem} className="btn ">Agregar</Button>
                <ul >
                    {items.map((item, index) => (
                        <li key={index}>
                            {item}
                            <Button onClick={() => removeItem(index)} className="btn btn-danger">Eliminar</Button>
                        </li>
                    ))}

                </ul>
            </div>


        </>
    )
}
