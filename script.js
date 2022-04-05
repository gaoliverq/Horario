
function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('dia')
    var data = new Date()
    var hora = 23 //data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML= `Agora são <strong>${hora} horas e ${minutos} minutos</strong>.`
    if(hora >= 0 && hora < 12){
        img.src ='manha.png'
        document.body.style.background = '#FDD391'
    } else if (hora >= 12&& hora <18){
        img.src ='tarde.png'
        document.body.style.background = '#D18A55'
    } else {
        img.src ='noite.png'
        document.body.style.background = '#01174F'
        document.getElementById('principal').style.color = '#fff'
        document.querySelector('.digital').style.color = '#fff'
    }
}

function refreshtime(){
    var display = document.querySelector('.digital')

    var agora = new Date()

    var hora = timefix(agora.getHours()) + ':' + timefix(agora.getMinutes()) + ':' + timefix(agora.getSeconds())

    display.textContent = hora
}

function timefix(numero){
    if (numero < 10){
        numero = '0' + numero
    }
    return numero
}

refreshtime()
setInterval(refreshtime, 1000)


    var dia = document.querySelector('.dia')

    var diahoje = new Date()

    var ddata = timefix(diahoje.getDate()) + '.' + timefix((diahoje.getMonth() + 1))  + '.' + timefix(diahoje.getFullYear()) 

    dia.textContent = ddata