const aluno = {
    nome: "Karine",
    idade: 15,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);

aluno.matricula = "2025A"; //Adicionar
aluno.idade = 18; // alterar

delete aluno.curso; // remover

console.log(aluno);
