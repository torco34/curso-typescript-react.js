import { useState } from "react"
import { Button } from "react-bootstrap"

import { useHook } from "./useHook"
export const Time = () => {

    const { times, setTimes, value, setValue, addItem, setAddITem } = useHook()
    const showResult = () => {
        setTimes(times + 1)
    }

    const showResta = () => {
        setTimes(times - 1)
    }
    const showReset = () => {
        setTimes(0)
    }
    const handleCrear = () => {

        setValue("")
        if (value.trim() !== "") {
            setAddITem([...addItem, value])
        }


    }
    const handleSubmi = (e: any) => {
        e.preventDefault()
    }
    return (
        <div>
            <Button onClick={showResult}>+</Button>
            <Button onClick={showResta}>-</Button>
            <Button onClick={showReset}>reset</Button>
            <form action="" onSubmit={handleSubmi}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="buscar..." />
                <button onClick={handleCrear}>crear</button>
            </form>
            <p>{times} { }</p>

            {addItem.map((item: any, index: any) => <p>{item}</p>)}

        </div>
    )
}
