import React from 'react'

function character({ character }) {
    return (
        <div className='text-center p-5'>
            <h2>{character.name}</h2>
            <img className='img-fluid rounded-pill' src={character.image} alt={character.name} />
            <p className='p-2'>{character.origin.name}</p>
        </div>
    )
}

export default character