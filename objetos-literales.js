
// MANIPULACION DE PROPIEDADES EN OBJETOS LITERALES

const libro = {
  titulo: 'El Matador',
  autor: 'Ramon Aguirre',
  anio: 1997,
  descripcion: function () {
    console.log(
      "Este libro llamado " + this.titulo + " fue creado por " + this.autor
    );
  }
};

// Paso N2 dot notation / bracket con variable
console.log(libro.titulo); // "El Matador"

// Paso N3
const elAutor = "autor";
console.log(libro[elAutor]);

// Paso N4: agregar con bracket
const nuevaProp = "genero";
libro[nuevaProp] = "Novela";
console.log(libro);

// Paso N5: modificar
libro.anio = 2025;
console.log(libro);

// Paso N6: (tu consola)
console.log(libro);

// Paso N7: validación antes de eliminar
if ("genero" in libro) {
  delete libro.genero;
}

// Paso N8
libro.descripcion();
