import { useState } from 'react'

export default function Player({ playerName, playerSymbol, isActive, onChangeName}) {
    const [ name, setName ] = useState(playerName)
    const [ isEditing, setIsEditing ] = useState(false)

    function handleEditClick() {
        setIsEditing(editing => !editing)
        if(isEditing) {
            onChangeName(playerSymbol, name)
        }
    }

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {!isEditing ? 
                    <span className="player-name">{name}</span> : 
                    <input type='text' required value={name} onChange={e => setName(e.target.value)} />}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {!isEditing ? "Editar" : "Salvar"}
            </button>
        </li>
    )
}