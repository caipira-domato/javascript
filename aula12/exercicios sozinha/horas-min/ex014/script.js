function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var segundos = data.getSeconds()
    
    msg.innerHTML = `Agora são ${hora} horas ${minute} minutos e ${segundos} segundos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#D09E17'
        
    } else if (hora >= 12 && hora < 18) {
       //BOA TARDE! 
       img.src = 'tarde.png'
       document.body.style.background = '#591902'
       
    } else if (hora >= 18) {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#464438'
        
    }
}




