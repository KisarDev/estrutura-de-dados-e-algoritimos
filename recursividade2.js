function soma(lista) {
    if(lista.length==0) {
        return 0
    }else if(lista.length==1){
        return lista[0]
    }
    else{
        return lista[0] + soma(lista.slice(1))
    }
}

const lista = [1,2,3,4]

console.log(soma(lista))