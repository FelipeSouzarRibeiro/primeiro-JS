function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img-txt')  
    var data = new Date()
    var hora = data.getHours()  

    msg.innerHTML = ` Agora são ${hora} horas` 


    if (hora >= 6 && hora < 12) {
            img.src = 'FOTOS/AMANHECER.png'
            document.body.style.backgroundColor = '#8ef1dc'
            document.body.style.color = '#000000'
    } else if (hora >= 12 && hora < 18) {
            img.scr = 'FOTOS/TARDE.png'
            document.body.style.backgroundColor = '#d8ad56'
             document.body.style.color = '#000000'
            ffffff

    } else if ( hora >= 18 && hora < 23) {
            img.src = 'FOTOS/NOITE.png'
            document.body.style.backgroundColor = '#282f7b'
             document.body.style.color = '#ffffff'

    } else {
            img.src = 'FOTOS/NOITE.png'
            document.body.style.backgroundColor = '#585656'
            document.body.style.color = '#ffffff'
    }

}

 