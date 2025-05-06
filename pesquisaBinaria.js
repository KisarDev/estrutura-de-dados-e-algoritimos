function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;
    
    while (baixo <= alto) {
        let meio = (baixo + alto) / 2;
        let chute = lista[meio];
        if (chute === item) {
            return meio;
        }
        if (chute > item) {
            baixo = meio - 1;
        }
        else {
            alto = meio + 1;
        }

    }
    return null;
}

minha_lista = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(pesquisaBinaria(minha_lista, 3)); // 1