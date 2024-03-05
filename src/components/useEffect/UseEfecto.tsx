import React, { useEffect, useState } from "react";
import { Editar } from "../practicas/Editar";
import { Alert } from "react-bootstrap";

interface Props {
  indexToRemove: number
}

export const UseEfecto = ({ }: Props) => {
  const [addItem, setAddItem] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editarInput, setEditarInput] = useState<number | null>(null)
  const [searchText, setSearchText] = useState<string>("");
  const handleAddItem = () => {

    if (inputValue.trim() !== "") {
      if (editarInput !== null) {
        const upDateItems = [...addItem]
        upDateItems[editarInput] = inputValue
        setAddItem(upDateItems)
        setEditarInput(null)
      } else {
        setAddItem([...addItem, inputValue]);
      }

      setInputValue("");
    }
  };

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedItems = [...addItem];
    updatedItems.splice(indexToRemove, 1);
    setAddItem(updatedItems);
  };
  const handleEditar = (indexToEdit: number,) => {
    setInputValue(addItem[indexToEdit])
    setEditarInput(indexToEdit)
  }



  return (
    <div className="container p-4">

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>{editarInput !== null ? "Guardar" : "Crear"}</button>
      <ul>
        {addItem.map((item, index) => (
          <div key={index}>
            <div className="card text-center p-4 m-3 ">{item}  <button
              onClick={() => handleRemoveItem(index)}
              className="btn btn-danger">
              eliminar
            </button>
              <button
                onClick={() => handleEditar(index)}
                className="btn btn-dark">
                {editarInput === index ? "cancelar" : "Editar"}
              </button>
            </div>
          </div>
        ))}
      </ul>

    </div>
  );
};
