function salida1(){
    let edad = parseInt(prompt("Ingresa tu edad:"));
    alert(edad >= 18 ? "Mayor de edad" : "Menor de edad");
}

function salida2(){
    let numero = parseInt(prompt("Ingresa un número:"));
    alert(numero % 2 === 0 ? "Par" : "Impar");    
}

function salida3(){
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    alert(num1 > num2 ? num1 : num2); 
}

function salida4(){
    let temperatura = parseInt(prompt("Ingresa la temperatura:"));
    alert(temperatura >= 25 ? "Calor" : "Frío");
      
}

function salida5(){
    let nacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
    let edadActual = new Date().getFullYear() - nacimiento;
    alert(edadActual >= 18 ? "Puede votar" : "No puede votar");
}