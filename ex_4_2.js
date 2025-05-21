function contarElementos(lista) {
    // Caso base: lista vazia
    if (lista.length === 0) {
        return 0;
    }
    // Caso recursivo: 1 + contagem do restante da lista
    else {
        return 1 + contarElementos(lista.slice(1));
    }
}

const lista = [1, 2, 3, 4];
console.log(contarElementos(lista)); // Saída: 4