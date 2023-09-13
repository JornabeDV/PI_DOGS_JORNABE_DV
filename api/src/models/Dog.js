//1.IMPORTACIÓN DE SEQUELIZE.-
//Se importa el objeto DataTypes de Sequelize, que se utiliza para definir los tipos de datos que se utilizarán en el modelo.-
//Funciona como traductor entre Javascript y SQL(lenguaje de la base de datos).-
const { DataTypes } = require('sequelize');

//2.EXPORTACIÓN DE UNA FUNCIÓN QUE DEFINE EL MODELO.-
//Se exporta una función que define el modelo dog. Esta función toma como argumento sequelize, que es la instancia de Sequelize que se utiliza para interactuar con la base de datos.-
module.exports = (sequelize) => {
 
  //3.DEFINICIÓN DE LAS CARACTERÍSTICAS DEL MODELO DOG.-
  //Se define el modelo dog utilizando la función sequelize.define().-
    sequelize.define('dog', { //Un objeto con sus atributos, los cuales dentro tienen sus propiedades.-
    //id: Un identificador único en formato UUID (Universally Unique Identifier) que se genera automáticamente (defaultValue: DataTypes.UUIDV4) y se utiliza como clave primaria (primaryKey: true).-
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    //name: El nombre del perro, que es una cadena de caracteres (DataTypes.STRING) y no puede ser nulo (allowNull: false). Además, se debe ser único (unique: true).-
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //image: La URL de una imagen del perro, que es una cadena de caracteres (DataTypes.STRING).-
    image: {
      type: DataTypes.STRING,
    },
    //minHeight: La altura mínima del perro en centímetros, representadas como números enteros (DataTypes.INTEGER). Se valida que estén en el rango de 1 a 100.-
    minHeight: {
      type: DataTypes.INTEGER,
      validate: {min:1, max:100},
    },
    //maxHeight: La altura máxima del perro en centímetros, representadas como números enteros (DataTypes.INTEGER). Se valida que estén en el rango de 1 a 100.-
    maxHeight: {
      type: DataTypes.INTEGER,
      validate: {min:1, max:100},
    },
    //minWeight: El peso mínimo del perro en kilogramos, representados como números enteros (DataTypes.INTEGER). Se valida que estén en el rango de 1 a 100.-
    minWeight: {
      type: DataTypes.INTEGER,
      validate: {min:1, max:100},
    },
    // maxWeight: El peso máximo del perro en kilogramos, representados como números enteros (DataTypes.INTEGER). Se valida que estén en el rango de 1 a 100.-
    maxWeight: {
      type: DataTypes.INTEGER,
      validate: {min:1, max:100},
    },
    //life_span: La esperanza de vida del perro en años, representada como un número entero (DataTypes.INTEGER). Se valida que esté en el rango de 1 a 20 y no puede ser nula (allowNull: false).-
    life_span: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 20 },
      allowNull: false,
    },
    //created: Un valor booleano que indica si el registro fue creado (true por defecto) o no.-
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    //El objeto de configuración proporcionado como segundo argumento tiene timestamps: false, lo que significa que no se agregarán automáticamente los campos de registro de tiempo (createdAt y updatedAt) a los registros de este modelo.-
    timestamps: false,
  }
  );
};

//4.ANÁLISIS DEL CÓDIGO.-
//Este código define un modelo llamado dog utilizando Sequelize, una librería de JavaScript ampliamente utilizada para interactuar con bases de datos  relacionales.-
//Este código define el modelo dog en Sequelize, que representa a los perros y especifica las características de los datos que se almacenan en la tabla de perros en la base de datos. Esto incluye detalles como el nombre, la altura, el peso, la esperanza de vida, etc. Estas características son utilizadas por Sequelize para crear la tabla en la base de datos y facilitar las operaciones de lectura y escritura de datos en esa tabla.-