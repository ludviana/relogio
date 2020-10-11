const hour = window.document.getElementById("hora")
const datas = window.document.getElementById("data")

function horas(){
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    
    
    hour.innerText=`${hora}:${zero(minuto)}:${zero(segundo)}`
    setTimeout('horas()', 1000)
};

function diaAtual(){
    let data = new Date()
    let diaMes = data.getDate();
    let dia = data.getDay();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    switch (dia){
        case 1: dia = "Segunda-feira";
            break
        case 2: dia = "Terça-feira";
            break
        case 3: dia = "Quarta-feira";
            break
        case 4: dia = "Quinta-feira";
            break
        case 5: dia = "Sexta-feira";
            break
        case 6: dia = "Sabado";
            break
        case 7: dia = "Domingo";
            break
    };

    switch (mes){
        case 0: mes = "Jan";
            break
        case 1: mes = "Fev";
            break
        case 2: mes = "Mar";
            break
        case 3: mes = "Abr";
            break
        case 4: mes = "Mai";
            break
        case 5: mes = "Jun";
            break
        case 6: mes = "Jul";
            break
        case 7: mes = "Ago";
            break
        case 8: mes = "Set";
            break
        case 9: mes = "Out";
            break
        case 10: mes = "Nov";
            break
        case 11: mes = "Dez";
            break
    }

    return datas.innerHTML=`${zero(diaMes)}/${mes}/${ano} <br> ${dia}`;

    
};


function zero(a){
    if (a<10){
        return a = "0"+a;
    } else{
        return a;
    }
};

