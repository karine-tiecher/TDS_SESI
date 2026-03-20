function criarCalculadorDesconto (desconto) {
    return function(preco){
        return preco - (preco * desconto);
    }
}

const desconto10 = criarCalculadorDesconto(0.10);
const desconto20 = criarCalculadorDesconto(0.20);

console.log(desconto10(200));
console.log(desconto20(1230));

