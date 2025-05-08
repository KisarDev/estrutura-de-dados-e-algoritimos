// Implementação de uma estrutura de dados pilha
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) {
            return "Underflow - A pilha está vazia";
        }
        return this.items.pop();
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
}

// Demonstração da pilha de execução (call stack) do JavaScript
function funcaoA() {
    console.log("Início da função A");
    console.log("Chamando função B...");
    funcaoB();
    console.log("Voltou para função A");
    console.log("Fim da função A");
}

function funcaoB() {
    console.log("  Início da função B");
    console.log("  Chamando função C...");
    funcaoC();
    console.log("  Voltou para função B");
    console.log("  Fim da função B");
}

function funcaoC() {
    console.log("    Início da função C");
    console.log("    Fim da função C");
}

console.log("Exemplo de Pilha de Execução:");
console.log("Chamando função A...");
funcaoA();

// Demonstração de estouro de pilha (stack overflow)
function causarStackOverflow(n = 0) {
    // Descomente abaixo para ver um stack overflow real
    // Cuidado: isso pode travar seu navegador/ambiente
    // if (n > 0 && n % 100 === 0) console.log(`Chamada número: ${n}`);
    // causarStackOverflow(n + 1);
}

// Exemplo de evento assíncrono (não bloqueia a pilha)
console.log("\nDemonstração de código assíncrono:");
console.log("1. Antes do setTimeout");
setTimeout(() => {
    console.log("4. Callback do setTimeout executado (depois que a pilha estiver vazia)");
}, 0);
console.log("2. Depois do setTimeout, mas antes da promise");
Promise.resolve().then(() => {
    console.log("3. Callback da promise executado (tem prioridade sobre setTimeout)");
});
console.log("5. Fim do código síncrono");