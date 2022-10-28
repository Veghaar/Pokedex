const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('pokemon__image')

const fetchPokemon = async (pokemon) => {  
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    
    if(APIResponse.status = 200) {
        const data = await APIResponse.json(); 
        return data;

    }
    
}

const renderPokemon = (Pokemon) =>{

    const data = await fetchpokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']
    ['front_default'];

    input.value = '';  

}



Form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value);
    
});



http://1.bp.blogspot.com/-Yagdm7Jwus0/U_Kah27H9JI/AAAAAAAAK2Q/wa718ngNc3Q/s1600/Charizard%2B3.gif