import React, { useState } from 'react'

export const useHook = () => {
    const [times, setTimes] = useState<number>(0)
    const [value, setValue] = useState<string>("")
    const [addItem, setAddITem] = useState<string[]>([])

    return (
        { times, value, addItem, setTimes, setValue, setAddITem }
    )
}
