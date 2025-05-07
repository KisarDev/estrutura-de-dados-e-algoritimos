function buscaMenor(array) {
    let menor = array[0];
    let menor_indice = 0;
    for(let i = 1; i < array.length; i++) {
        if(array[i] < menor) {
            menor = array[i];
            menor_indice = i;
        }
    }
    return menor_indice;
}

function ordenacaoPorSelecao(array) {
    let arrayCopy = [...array];
    let arrayOrdenado = [];
    
    while (arrayCopy.length > 0) {
        let menor = buscaMenor(arrayCopy);
        arrayOrdenado.push(arrayCopy[menor]);
        arrayCopy.splice(menor, 1);
    }
    
    return arrayOrdenado;
}

lista_desordenada = [5, 3, 8, 1, 2];
console.log("lista ordenada: " + ordenacaoPorSelecao(lista_desordenada));