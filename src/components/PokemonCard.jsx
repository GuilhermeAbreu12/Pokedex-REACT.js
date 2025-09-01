function PokemonCard({ pokemon }){
    
    const type = pokemon.types[0].type.name

    return (
        <div className={`card ${type}`}>
            <div className='card-image-container'>
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={`Imagem do ${pokemon.name}`} 
                    className='card-image'
                />
            </div>
            <div className='card-info'>
                <span className='card-number'>#{pokemon.id}</span>
                <h3 className='card-name'>{pokemon.name}</h3>
                <p className='card-type'>Type: {type}</p>
            </div>
        </div>
    )
}

export default PokemonCard;