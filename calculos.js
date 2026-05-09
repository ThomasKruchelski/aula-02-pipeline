function jurosCompostos(capitalInit, taxa, tempo){
    const montante = capitalInit*Math.pow(1+taxa / 100, tempo)
    
    return montante.toFixed(0)
}

function mostrarInvestimento(capitalInit, taxa, tempo){

    const valorObtido = jurosCompostos(capitalInit, taxa, tempo) - capitalInit

    const resposta = "Em " + tempo + " meses, com o valor inicial de R$" + capitalInit + " você lucrou: R$" + valorObtido

    return resposta
}

module.exports = mostrarInvestimento;