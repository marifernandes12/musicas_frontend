
const urlBackend = "http://localhost:3000";
const listaMusicas = document.getElementById("listaMusicas");

async function buscarMusicas() {
    const resposta = await fetch(urlBackend);

    const musicas = await resposta.json();

    musicas.forEach((musica) => {
        listaMusicas.innerHTML += `
            <div class="musica">
                <h2>${musica.titulo}</h2>

                <p class="artista">${musica.artista}</p>

                <p class="detalhes">
                    Gênero: ${musica.genero} |
                    Ano: ${musica.ano} |
                    Duração: ${musica.duracao}
                </p>

                <div class="acoes">
                    <a href="editar.html?id=${musica.id}" class="editar">Editar</a>
                    <button class="apagar">Apagar</button>
                </div>
            </div>
        `;
    });
}

buscarMusicas();
