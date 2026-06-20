
// MANIPULACION DE PROPIEDADES EN OBJETOS LITERALES

const libro = {
    titulo: 'El Matador',
    autor: 'Ramon Aguirre',
    anio: 1997,
    //Paso N7
    descripcion: function(){
        console.log("Este libro llamado " + this.titulo + " fue creado por " + this.autor);
    }
};

// Paso N2 dot notation
console.log(libro.titulo);
console.log(libro);
// Paso N3
console.log(libro["autor"]);
console.log(libro);
// Paso N4
libro.genero = "Genero Masculino";
console.log(libro);
// Paso N5
libro.anio = 2025;
console.log(libro);
// Paso 6
delete libro.genero;
console.log(libro);
// Paso 8
libro.descripcion();
