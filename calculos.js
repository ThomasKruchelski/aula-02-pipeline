function jurosCompostos(capitalInit, taxa, tempo) {
    const montante = capitalInit * Math.pow(1 + taxa / 100, tempo);
    return montante.toFixed(0)
}

function lucroInvestimento(capitalInit, taxa, tempo) {
    return jurosCompostos(capitalInit, taxa, tempo) - capitalInit;
}

function mostrarInvestimento(capitalInit, taxa, tempo) {
    const lucro = lucroInvestimento(capitalInit, taxa, tempo);
    return lucro.toFixed(0);
}

module.exports = {
    jurosCompostos,
    mostrarInvestimento,
    lucroInvestimento
};