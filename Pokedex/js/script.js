const pokemonNome = document.querySelector('.pokemon_nome');
const pokemonNumero = document.querySelector('.pokemon_numero');
const pokemonImagem = document.querySelector('.pokemon_imagem');
const formulario = document.querySelector('.formulario');
const busca = document.querySelector('.busca');
const botaoProximo = document.querySelector('.bt_proximo');
const botaoAnterior = document.querySelector('.bt_anterior');
let buscaPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIresposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIresposta.status === 200) {
        const data = await APIresposta.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonNome.innerHTML = 'Carregando ...';
    pokemonNumero.innerHTML = '';

    const dados = await fetchPokemon(pokemon);  
   
    if (dados) {
        pokemonImagem.style.display = 'block';
        pokemonNome.innerHTML = dados.name;
        pokemonNumero.innerHTML = dados.id;
        pokemonImagem.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        busca.value = '';
        buscaPokemon = dados.id;
    } else {
        pokemonImagem.style.display = 'none';
        pokemonNome.innerHTML = 'Não encontrado';
        pokemonNumero.innerHTML = '';
    }
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(busca.value.toLowerCase());
});

botaoAnterior.addEventListener('click', () => {
    if (buscaPokemon > 1) {
    buscaPokemon--;
    renderPokemon(buscaPokemon);
    }
});

botaoProximo.addEventListener('click', () => {
    buscaPokemon++;
    renderPokemon(buscaPokemon);
});

renderPokemon(buscaPokemon);