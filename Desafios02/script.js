function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menino1.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem1.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem1.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso1.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menina1.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem2.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher1.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa1.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = 'Detectamos ${gênero} com ${idade} anos. '
        res.appendChild(img)
    }
}