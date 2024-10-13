function salida1(){
    let numeros = [10, 20, 30, 40, 50];
    console.log("Primer elemento:", numeros[0]);
    console.log("Último elemento:", numeros[numeros.length - 1]);
}

function salida2(){
    let ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];
    alert("Segunda ciudad: " +ciudades[1]);
}

function salida3(){
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Ingresa un número:"));
        numeros.push(numero);
    }
    let suma = numeros.reduce((a, b) => a + b, 0);
    alert("Suma total: " +suma);
}

function salida4(){
    let palabras = ["casa", "árbol", "sol", "luna", "cielo"];
    palabras.forEach(palabra => alert(palabra));
}

function salida5(){
    let nombres = [];
    for (let i = 0; i < 5; i++) {
        let nombre = prompt("Ingresa un nombre:");
        nombres.push(nombre);
    }
    alert("Nombres:", nombres);    
}

function salida6(){
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Ingresa un número:"));
        numeros.push(numero);
    }
    let mayores50 = numeros.filter(num => num > 50).length;
    alert("Números mayores a 50:", mayores50);    
}