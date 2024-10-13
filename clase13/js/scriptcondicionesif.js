function salida1(){
    let numero10 = parseInt(prompt("Introduce un número:"));
    if (numero10 > 10) {
      alert("El número es mayor que 10");
    }
}

function salida2(){
    let edadUsuario = parseInt(prompt("Introduce tu edad:"));
    if (edadUsuario > 18) {
        alert("Eres mayor de 18 años");
    }
    
}

function salida3(){
    let nota = parseInt(prompt("Introduce tu calificación (0-100):"));
    if (nota > 50) {
      alert("Aprobado");
    }
    
}

function salida4(){
    let numeroPositivo = parseInt(prompt("Introduce un número:"));
    if (numeroPositivo > 0) {
      alert("El número es positivo");
    }
    
}

function salida5(){
    let numA = parseInt(prompt("Introduce el primer número:"));
    let numB = parseInt(prompt("Introduce el segundo número:"));
    if (numA > numB) {
      alert("El primer número es mayor");
    } else if (numB > numA) {
        alert("El segundo número es mayor");
    }
    
}
