function salida1(){
    let num1=prompt("Ingrese num1: ")
    let num2=prompt("Ingrese num2: ")
    var n1=parseInt(num1);
    var n2=parseInt(num2);
    var resultado = sumarNumeros(n1, n2);
    alert("La suma es: " + resultado); 
}

function salida2() {
    let nom=prompt("Ingrese un nombre:")
    saludar(nom);
}

function salida3() {
    let area1=prompt("Ingrese area: ")
    var n1=parseInt(area1);
    var area = calcularAreaCirculo(n1);
    alert("El área del círculo es: " + area); 

}

function salida4() {
    let num1=prompt("Ingrese num1: ")
    let num2=prompt("Ingrese num2: ")
    var n1=parseInt(num1);
    var n2=parseInt(num2);
    var mayor = mayorNumero(n1, n2);
    alert("El mayor número es: " + mayor);  
}

function salida5(){
    let numero=prompt("INGRESE EL NUMERO: ")
    verificar=numero % 2===0
    if (verificar==0){
        alert("El numero es impar (FALSE)")
    }else alert("El numero es par (TRUE)")
}

function salida6() {
    var numeros = [5, 10, 15, 20, 25];
    var promedio = calcularPromedio(numeros);
    console.log("El promedio es: " + promedio);  
}

function sumarNumeros(a, b) {
    return a + b;
}

function saludar(nombre) {
    alert("Hola, " + nombre + "!");
}

function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function mayorNumero(a, b) {
    return a > b ? a : b;
}

function calcularPromedio(numeros) {
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}
