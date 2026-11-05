
const urlBackend = "http://localhost:3000";

// Pega o ID da música pela URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

// Campos do formulário
const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");
const genero = document.getElementById("genero");
const ano = document.getElementById("ano");
const duracao = document.getElementById("duracao");
const botaoSalvar = document.getElementById("botaoSalvar");

// Busca a música selecionada
async function buscarMusica() {
    try {
        const resposta = await fetch(`${urlBackend}/${id}`);

        if (!resposta.ok) {
            throw new Error("Não foi possível buscar a música.");
        }

        const musica = await resposta.json();

        titulo.value = musica.titulo;
        artista.value = musica.artista;
        genero.value = musica.genero;
        ano.value = musica.ano;
        duracao.value = musica.duracao;

    } catch (erro) {
        alert(erro.message);
    }
}

// Salva as alterações
async function salvarAlteracoes() {
    const musicaAtualizada = {
        titulo: titulo.value,
        artista: artista.value,
        genero: genero.value,
        ano: Number(ano.value),
        duracao: Number(duracao.value)
    };

    try {
        const resposta = await fetch(`${urlBackend}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(musicaAtualizada)
        });

        if (!resposta.ok) {
            throw new Error("Não foi possível atualizar a música.");
        }

        alert("Música atualizada com sucesso!");
        window.location.href = "index.html";

    } catch (erro) {
        alert(erro.message);
    }
}

botaoSalvar.addEventListener("click", salvarAlteracoes);

buscarMusica();
