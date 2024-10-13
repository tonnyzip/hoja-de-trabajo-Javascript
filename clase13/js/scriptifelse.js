function salida1(){
    let temperatura = parseInt(prompt("Introduce la temperatura:"));
    if (temperatura < 20) {
      alert("Hace frío");
    } else {
        alert("Hace calor");
    }
}

function salida2(){
    let edad2 = parseInt(prompt("Introduce tu edad:"));
    if (edad2 >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
    
}

function salida3(){
    let numParImpar = parseInt(prompt("Introduce un número:"));
    if (numParImpar % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
     
}

function salida4(){
    let notaExamen = parseInt(prompt("Introduce tu calificación (0-100):"));
    if (notaExamen >= 60) {
        alert("Has aprobado");
    } else {
        alert("No has aprobado");
    }
    
}

function salida5(){
    let numeroPosNeg = parseInt(prompt("Introduce un número:"));
    if (numeroPosNeg > 0) {
      alert("El número es positivo");
    } else if (numeroPosNeg < 0) {
        alert("El número es negativo");
    } else {
        alert("El número es cero");
    }
    
}