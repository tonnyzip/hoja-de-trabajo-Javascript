function salida1(){
    let calificacion = parseInt(prompt("Introduce tu calificación:"));
if (calificacion >= 60) {
  alert("Has aprobado");
} else {
  alert("No has aprobado");
}
}

function salida2(){
    let numero = parseInt(prompt("Introduce un número:"));
    if (numero > 0) {
        alert("El número es positivo");
    } else if (numero < 0) {
        alert("El número es negativo");
    } else {
        alert("El número es cero");
    }
    
}

function salida3(){
    let dia = parseInt(prompt("Introduce un número del 1 al 7:"));
    switch (dia) {
      case 1:
        alert("Lunes");
        break;
      case 2:
        alert("Martes");
        break;
      case 3:
        alert("Miércoles");
        break;
      case 4:
        alert("Jueves");
        break;
      case 5:
        alert("Viernes");
        break;
      case 6:
        alert("Sábado");
        break;
      case 7:
        alert("Domingo");
        break;
      default:
        alert("Número inválido. Debe estar entre 1 y 7.");
    }
    
}

function salida4(){
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    alert(num1 > num2 ? "El primer número es mayor" : num2 > num1 ? "El segundo número es mayor" : "Ambos números son iguales");
    
}

function salida5(){
    let edad = parseInt(prompt("Introduce tu edad:"));
    if (edad >= 18) {
      alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
    
}

function salida6(){
    let numeroDiv = parseInt(prompt("Introduce un número:"));
    switch (true) {
      case (numeroDiv % 3 === 0 && numeroDiv % 5 === 0):
        alert("El número es divisible por 3 y 5");
        break;
      case (numeroDiv % 3 === 0):
        alert("El número es divisible por 3");
        break;
      case (numeroDiv % 5 === 0):
        alert("El número es divisible por 5");
        break;
      default:
        alert("El número no es divisible ni por 3 ni por 5");
    }
    
}