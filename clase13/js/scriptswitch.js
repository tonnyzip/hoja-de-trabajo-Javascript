function salida1(){
    let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));
switch(dia) {
    case 1: alert("Lunes"); break;
    case 2: alert("Martes"); break;
    case 3: alert("Miércoles"); break;
    case 4: alert("Jueves"); break;
    case 5: alert("Viernes"); break;
    case 6: alert("Sábado"); break;
    case 7: alert("Domingo"); break;
    default: alert("Número no válido");
}
}

function salida2(){
    let letra = prompt("Ingresa una letra (A, B, C):").toUpperCase();
    switch(letra) {
        case 'A': alert("Excelente"); break;
        case 'B': alert("Bien"); break;
        case 'C': alert("Regular"); break;
        default: alert("Letra no válida");
    }
}

function salida3(){
    let mes = parseInt(prompt("Ingresa un número del 1 al 12:"));
    switch(mes) {
        case 1: alert("Enero"); break;
        case 2: alert("Febrero"); break;
        case 3: alert("Marzo"); break;
        case 4: alert("Abril"); break;
        case 5: alert("Mayo"); break;
        case 6: alert("Junio"); break;
        case 7: alert("Julio"); break;
        case 8: alert("Agosto"); break;
        case 9: alert("Septiembre"); break;
        case 10: alert("Octubre"); break;
        case 11: alert("Noviembre"); break;
        case 12: alert("Diciembre"); break;
        default: alert("Número no válido");
    }
    
}

function salida4(){
    let numero = parseInt(prompt("Ingresa un número:"));
    alert(numero % 2 === 0 ? "Par" : "Impar");
    
}

function salida5(){
    let color = prompt("Ingresa el color del semáforo (verde, amarillo, rojo):").toLowerCase();
    switch(color) {
        case 'verde': alert("Sigue"); break;
        case 'amarillo': alert("Precaución"); break;
        case 'rojo': alert("Detente"); break;
        default: alert("Color no válido");
    }
    
}