function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '/JavaScript/JavaScript - Curso Em Vídeo/Exercícios JavaScript/img/fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        img.src = '/JavaScript/JavaScript - Curso Em Vídeo/Exercícios JavaScript/img/fototarde.png'
    } else{
        img.src = '/JavaScript/JavaScript - Curso Em Vídeo/Exercícios JavaScript/img/fotonoite.png'
    }
}
