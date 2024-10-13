function salida1(){
    let personas = [
        { nombre: "Juan", edad: 25 },
        { nombre: "María", edad: 30 },
        { nombre: "Pedro", edad: 35 }
    ];
    personas.forEach(persona => console.log(persona.nombre));
    
}

function salida2(){
    let coches = [
        { marca: "Toyota", modelo: "Corolla" },
        { marca: "Honda", modelo: "Civic" },
        { marca: "Ford", modelo: "Focus" },
        { marca: "BMW", modelo: "Serie 3" },
        { marca: "Mercedes", modelo: "Clase C" }
    ];
    coches.forEach(coche => console.log(coche.modelo));
    
}

function salida3(){
    let productos = [
        { nombre: "Televisor", precio: 150 },
        { nombre: "Auriculares", precio: 50 },
        { nombre: "Teléfono", precio: 200 }
    ];
    productos.filter(producto => producto.precio > 100).forEach(producto => console.log(producto.nombre));
    
}

function salida4(){
    let alumnos = [
        { nombre: "Ana", nota: 85 },
        { nombre: "Luis", nota: 45 },
        { nombre: "Carmen", nota: 75 },
        { nombre: "Pablo", nota: 50 }
    ];
    alumnos.filter(alumno => alumno.nota >= 60).forEach(alumno => console.log(alumno.nombre));
    
}

function salida5(){
    let libros = [
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
        { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
        { titulo: "1984", autor: "George Orwell" }
    ];
    libros.forEach(libro => console.log(libro.titulo));
      
}

function salida6(){
    let peliculas = [
        { titulo: "Inception", director: "Christopher Nolan", año: 2010 },
        { titulo: "The Matrix", director: "Lana y Lilly Wachowski", año: 1999 },
        { titulo: "Parasite", director: "Bong Joon-ho", año: 2019 }
    ];
    peliculas.forEach(pelicula => {
        console.log(`${pelicula.titulo}, dirigida por ${pelicula.director} en el año ${pelicula.año}.`);
    });
    
}