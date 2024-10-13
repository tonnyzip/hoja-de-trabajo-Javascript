function salida1(){
    for (let i = 1; i <= 10; i++) {
        alert(i);
    } 
}

function salida2(){
    let suma = 0;
    let i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert("La suma es: " + suma);
    
}

function salida3(){
    let num = parseInt(prompt("Ingresa un número:"));
    for (let i = 1; i <= 10; i++) {
        alert(`${num} x ${i} = ${num * i}`);
    }
    
}

function salida4(){
    let count = 0;
    let num = 0;
    while (count < 10) {
        if (num % 2 === 0) {
            alert(num);
            count++;
        }
        num++;
    }
    
}

function salida5(){
    let numero;
    do {
        numero = parseInt(prompt("Ingresa un número (negativo para salir):"));
    } while (numero >= 0);
    
}

function salida6(){
    let palabra = prompt("Ingresa una palabra:");
    let count = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a' || palabra[i] === 'A') {
            count++;
        }
    }
    alert("La letra 'a' aparece " + count + " veces.");
    
}