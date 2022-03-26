const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

// console.log({ form, searchImput, songsContainer, prevAndNextContainer })

const apiURL = 'https://api.lyrics.ovh'

const fetchSongs = term => {
    
}

form.addEventListener('submit', event => {
    event.preventDefault(); // evita o recarregamento da página ao enviar o form

    const searchTerm = searchInput.value.trim(); // trim() retorna a String, sem qualquer espaço em branco (ou tabulação ou linha) que tenha ficado no começo ou no final da String.

    // console.log(searchTerm)

    if (!searchTerm){
        //console.log(songsContainer.innerHTML);
        // O innerHTML pode ser usado como um getter ou como um setter, neste caso está fazendo o papel de getter, pois está obtendo o valor dentro da UL com ID songsContainer

        // fazendo papel de setter
        songsContainer.innerHTML = `<li class="warning-message">A pesquisa não pode ser vazia.</li>`
    }

    fetchSongs(searchTerm)

    
})