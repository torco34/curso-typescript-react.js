import { useState } from 'react'
import { data } from './data'
interface Item {
    title: string
}
type changeEvent = React.ChangeEvent<HTMLInputElement>
export const Usereducer = () => {
    const [dataFilter, setDataFilter] = useState<Item[]>(data)
    const hendleOnchange = (event: changeEvent) => {
        const valueInput = event.target.value.toLowerCase()
        const filterItem = data.filter((datass) =>
            datass.title.toLowerCase().includes(valueInput)
        )
        setDataFilter(filterItem)
    }

  
    return (
        <div>
            <form action=''>
                <input type='text' onChange={hendleOnchange} />
            </form>
            <div className="container">
                <ul>{dataFilter.map((datass) => (
                    <li key={datass.title}>{datass.title}</li>
                ))}</ul>
            </div>
        </div>
    )
}
