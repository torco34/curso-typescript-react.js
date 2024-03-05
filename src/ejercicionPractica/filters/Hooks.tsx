import React, { useState } from 'react'
interface User {
    id: number;
    name: string;
    // ... otras propiedades según la estructura real de tu usuario
}
export const Hooks = () => {
    const [show, setShow] = useState<boolean>(true)

    const [users, setUsers] = useState<User[]>([]);
    return { setShow, show, users, setUsers }
}
