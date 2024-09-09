function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById ("campo-pesquisa").value

if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum jogo encontrado</p>"
    return 
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultados = "";
let nome = "";
let descricao = "";
let tags = "";

for(let dado of dados) {
    nome = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
                <h2>
                    <a href=${dado.jogar} target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}  
                </p>
                    <a href=${dado.link} target="_blank">Mais
                    Informações</a>
            </div>
`;
    }
    
}

if (!resultados) {
    resultados = "<p>Nenhum jogo foi encontrado</p>"
}

section.innerHTML = resultados
}