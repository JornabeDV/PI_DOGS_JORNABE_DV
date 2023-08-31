//1.IMPORTS Y CONFIGURACIÓN.-
const {Dog} = require ("../db"); // Se importa el modelo Dog desde el módulo ../db. Este modelo está definido utilizando Sequelize y representa la estructura de la tabla de perros en la base de datos.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función asincrónica llamada postDogs que acepta varios parámetros que representan las características de un perro que se va a crear en la base de datos.-
const postDogs = async (name, minHeigth, maxHeight, minWeight, maxWeight, life_span) => 

// La función create() es un método proporcionado por Sequelize que crea un nuevo registro en la base de datos utilizando el modelo Dog.-
// Se pasa un objeto con las propiedades del nuevo perro que se desea crear. Estas propiedades se obtienen de los parámetros pasados a la función postDogs.-
await Dog.create({name, minHeigth, maxHeight, minWeight, maxWeight, life_span});

//3.EXPORTACIÓN DE LA FUNCIÓN.-
// La función postDogs se exporta para que pueda ser utilizada en otros módulos. Esto permite que otros componentes del proyecto creen nuevos registros de perros en la base de datos de manera sencilla.-
module.exports = postDogs;

// Este código define una función que toma los datos de un perro como parámetros y crea un nuevo registro de perro en la base de datos utilizando el modelo Dog y el método create() proporcionados por Sequelize.-