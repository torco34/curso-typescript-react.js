import { Link } from "react-router-dom"



export const Nav = () => {
    return (
        <>
            <nav className='container'>
                <ul className="p-5">
                    <li className='list-inline-item '>
                        <Link to="/item" className="text-decoration-none custom-link">Item</Link>
                    </li>
                    <li className='list-inline-item'>
                        <Link to="/aplica" className="text-decoration-none custom-link">Editar</Link>
                    </li>
                    <li className='list-inline-item'>
                        <Link to="" className="text-decoration-none custom-link">link</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
