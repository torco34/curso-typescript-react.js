import React, { useState, useEffect } from 'react';
import img1 from "../../assets/img/img1.jpg";
import { Hooks } from './Hooks';

interface CardProps {
    user: { id: number; name: string };
    handleEditName: any;
}

export const Card = ({ user, handleEditName }: CardProps) => {
    const { show, setShow, setUsers, users } = Hooks();
    const [editedName, setEditedName] = useState(user.name);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Actualizar el estado inicial de editedName cuando cambia el nombre del usuario
        setEditedName(user.name);
    }, [user.name]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedName(e.target.value);
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: editedName }),
            });

            if (response.ok) {
                const updatedUsers = users.map(u => (u.id === user.id ? { ...u, name: editedName } : u));
                setUsers(updatedUsers);
                setShow(false);
                setIsEditing(false);
            } else {
                console.error('Error updating name');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEdit = () => {
        setShow(true);
        setIsEditing(true);
    };

    return (
        <>
            <div className="h-90 w-90 mx-auto grid justify-center space-y-4">
                <img className="h-10 w-10 rounded-full mx-auto" src={img1} alt="img card" />
                <p className='space-y-3'>{user.name}</p>
                {show && (
                    <div>
                        <input
                            type="text"
                            placeholder='Editar nombre'
                            value={editedName}
                            onChange={handleChange}
                        />
                        {isEditing ? (
                            <button
                                onClick={handleSave}
                                className='btn bg-sky-700 text-sky-200 hover:bg-sky-600 hover:text-sky-300'
                            >
                                Guardar
                            </button>
                        ) : (
                            <button
                                onClick={handleEdit}
                                className='btn bg-sky-700 text-sky-200 hover:bg-sky-600 hover:text-sky-300'
                            >
                                Editar
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
