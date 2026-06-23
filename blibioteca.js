const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero) {
        const livro = {
            nome,
            autor,
            ano,
            genero,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);
    },

    mostrarLivros(){
        for(let i=0; i<this.livros.length; i++){
            const L= this.livros[i];
            console.log(L.nomet + " - " + L.autor + " - " + L.ano + " - " + L.genero);
        }
    }
};

biblioteca.adicionarLivros(
    "dom casmurro",
    "alto da coompadacida",
    1928,
    "terror cosmico"
);

biblioteca.adicionarLivros(
    "iracama",
    "maquiavel",
    1988,
    "o medico o monstro"
);

console.log(biblioteca.livros);