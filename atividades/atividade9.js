function horaAtual(hora, nome){
    if (hora >= 0 && hora < 11){
        console.log(`Bom dia, ${nome}!`);

    } else if (hora >= 12 && hora <= 17){
        console.log(`Boa tarde, ${nome}!`);

    } else if (hora >= 18 && hora <= 23){
        console.log(`Boa noite, ${nome}!`);

    } else {
        console.log("Horário inválido...");
    }
}
