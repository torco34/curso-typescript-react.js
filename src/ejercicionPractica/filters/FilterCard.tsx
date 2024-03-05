// ... (importaciones)

import { useEffect, useState } from "react";
// import { Hooks } from "./Hooks";
// import { Card } from "./Card";

interface User {
    id: number;
    name: string;
    email: string
    // ... otras propiedades según la estructura real de tu usuario
}

export const FilterCard = () => {
    // const { setUsers, users } = Hooks()
    const [users, setUsers] = useState <User[]>([]);
    const [editedUser, setEditedUser] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handleSaveClick = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedUser),
            });

            if (response.ok) {
                // Actualizar el estado local con la respuesta de la API
                const updatedUsers = users.map((user: any) =>
                    user.id === editedUser.id ? editedUser : user
                );
                setUsers(updatedUsers);
                setEditedUser(null); // Limpiar el usuario editado después de guardar
            } else {
                console.error('Error al guardar los cambios en el servidor');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud de edición:', error);
        }
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setEditedUser((prevUser: any) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const handleEditClick = (user: any) => {
        setEditedUser(user);
        console.log(user)
    };
    return (
        <div className="mx-auto bg-orange-300 max-w-6xl grid grid-cols-4 gap-4 p-4 ">
            {users.map((user: User) => (
                <div key={user.id} className="bg-yellow-200 p-3 rounded shadow">
                    {/* <Card user={user} handleEditName={handleEditName} /> */}
                    {user.name} - {user.email}{' '}
                    <button className="btn bg-cyan-600" onClick={() => handleEditClick(user)}>Editar</button>
                </div>
            ))}
            {editedUser && (
                <div className="bg-yellow-200 p-2">
                    <h2>Editar Usuario</h2>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={editedUser.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Correo Electrónico:
                        <input
                            type="text"
                            name="email"
                            value={editedUser.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button className="btn bg-slate-700" onClick={handleSaveClick}>Guardar Cambios</button>
                </div>
            )}
        </div>
    );
};
