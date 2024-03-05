import { Link } from "react-router-dom"
import { Borrador } from "./Borrador"


export const PagesUseEffect = ({ }: any) => {
    return (

        <div className="container">
            <Link to="/efecto">editar</Link>
            <Borrador/>
        </div>

    )
}
