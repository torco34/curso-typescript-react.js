
import { observer } from 'mobx-react-lite';
import { useStore } from './store/Store';


export const View = observer(() => {
    const store = useStore
    return (
        <>   <ul>
            {store.array.map((element, index) => (
                <li key={index}>
                    {element.nombre}
                </li>
            ))}
        </ul></>
    )
})