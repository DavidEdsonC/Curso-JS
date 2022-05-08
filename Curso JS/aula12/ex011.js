var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não vota')
}else if(idade < 16 || idade > 65){
    console.log('Voto opicional')
}else {
    console.log (`Voto obrogatório`)
}