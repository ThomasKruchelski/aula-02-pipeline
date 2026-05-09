 function soma(num1,num2){
    return num1 + num2
}

function jurosCompostos(capitalInit, taxa, tempo){
    const montante = capitalInit*Math.pow(1+taxa / 100, tempo)
    
    return montante.toFixed(0)
}

module.exports = jurosCompostos;