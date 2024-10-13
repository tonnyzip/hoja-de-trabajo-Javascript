function salida1(){
    let persona = {
        nombre: "Juan",
        edad: 25,
        ciudad: "Madrid"
    };
    alert(persona.nombre);
    alert(persona.edad);
    alert(persona.ciudad);
    
}

function salida2(){
    let coche = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020,
        descripcion: function() {
            alert(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
        }
    };
    coche.descripcion();
       
}

function salida3(){
    let rectangulo = {
        ancho: 5,
        alto: 10,
        calcularArea: function() {
            return this.ancho * this.alto;
        }
    };
    alert("Área del rectángulo: " + rectangulo.calcularArea());
    
}

function salida4(){
    let libro = {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        descripcion: function() {
            alert(`Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.año}`);
        }
    };
    libro.descripcion();
     
}

function salida5(){
    let usuario = {
        nombre: "Carlos",
        contraseña: "123456",
        verificarContraseña: function(password) {
            return this.contraseña === password ? "Contraseña correcta" : "Contraseña incorrecta";
        }
    };
    alert(usuario.verificarContraseña("123456"));
       
}

function salida6(){
    let gato = {
        nombre: "Mishi",
        edad: 3,
        descripcion: function() {
            return `El gato se llama ${this.nombre} y tiene ${this.edad} años.`;
        }
    };
    alert(gato.descripcion());
    
}