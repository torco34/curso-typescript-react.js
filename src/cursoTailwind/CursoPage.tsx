
import { Buttons } from "./Buttons"
export const CursoPage = () => {
    return (
        <>
            <div className="bg-white shadow px-6 h-16 flex items-center gap-3 ">
                <h2 className="text-3xl font-bold ">Curso de Tailwind</h2>
                <button className="font-bold ">Flexbox</button>
                <button className="font-bold ">Botones</button>
            </div>
            <Buttons />

        </>
    )
}
