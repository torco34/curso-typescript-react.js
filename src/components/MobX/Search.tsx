import { observer } from 'mobx-react'
import { useStore } from './store/Store'
import { useState } from 'react'

export const Search = observer(() => {
    const [searchTerm, setSearchTerm] = useState("");
    const searchTerm = (e: any) => {
        const filteredArray = useStore.filterElements(searchTerm)
        console.log(filteredArray)
    }
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
})
