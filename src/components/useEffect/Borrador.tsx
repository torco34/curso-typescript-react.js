import React, { useState } from "react";

interface Props {

}

export const Borrador = ({ }: Props) => {
    const [addItem, setAddItem] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [items, setItems] = useState<string[]>([]);



    const handleChanges = () => {
        if (inputValue.trim() !== "") {
            
        }

    }




        return (
            <div className="container p-4">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleChanges} className="btn btn-info">agregar</button>
                {items.map((item) => (<div>{item}</div>))}
            </div>
        );
    };
