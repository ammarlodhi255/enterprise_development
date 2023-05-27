import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export default function FilterProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeUsers, setActiveUsers] = useState(['Ammar', 'Ahmed', 'Muzamil'])
    const [users, setUsers] = useState(['Sana', 'Abdullah', 'Toufeeque'])
    const isActive = searchParams.get('filter') === 'active';

    return <>
        <button onClick={ () => setSearchParams({ filter: 'active' }) }>Show Active</button>
        <button onClick={ () => setSearchParams({}) }>Reset</button>

        { isActive ? activeUsers.map( activeUser => (<h1> {activeUser}</h1>)) : 
        users.map( user => (<h1> {user}</h1>))}
    </>
}