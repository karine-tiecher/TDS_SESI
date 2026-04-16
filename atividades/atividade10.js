const itensHardware = ["Mouse", "Monitor", "Cabo USB", "Placa de Vídeo", "Teclado"];

itensHardware.push("Headset");
itensHardware.shift(0);

console.log(itensHardware);

11
const alunos = ["Yohanna", "Yara", "Rafael", "Bruno", "Bianca", "Alana", "Isabela", "Giovanna", "Eduarda", "Felipe"];

if(alunos.includes(alunos["Lucas"]) == true){
    console.log(`O usuário foi encontrado!`);
} else {
    console.log(`O usuário não foi encontrado.`);
}