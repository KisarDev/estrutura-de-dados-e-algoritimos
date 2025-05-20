//caso base
lista = [0] // 0
// caso base 2
lista = [1,1] // 1

function dividirConquistar(lista) {
    // Caso base: lista vazia
    if (lista.length < 1) {
        return 0;
    } 

     // Caso base: lista com um elemento
    else if (lista.length === 1) {
        return lista[0];
    }

    // Caso recursivo: primeiro elemento + soma do restante
    else {
        return lista[0] + somaLista(lista.slice(1));
    }



}