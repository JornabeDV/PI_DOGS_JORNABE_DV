//1.IMPORTACIÓN DE SEQUELIZE.-
//Se importa el objeto DataTypes de Sequelize, que se utiliza para definir los tipos de datos que se utilizarán en el modelo.-
const { DataTypes } = require('sequelize');

//2.EXPORTACIÓN DE UNA FUNCIÓN QUE DEFINE EL MODELO.-
//Se exporta una función que define el modelo temperaments. Esta función toma como argumento sequelize, que es la instancia de Sequelize que se utiliza para interactuar con la base de datos.-
module.exports = (sequelize) => {
  //3.DEFINICIÓN DE LAS CARACTERÍSTICAS DEL MODELO "temperaments".-
  //Se define el modelo temperaments utilizando la función sequelize.define().-
  sequelize.define('temperaments', {
    //id: Un identificador único en formato UUID (Universally Unique Identifier) que se genera automáticamente (defaultValue: DataTypes.UUIDV4) y se utiliza como clave primaria (primaryKey: true).-
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    //name: El nombre del temperamento, que es una cadena de caracteres (DataTypes.STRING) y no puede ser nulo (allowNull: false). Además, se debe ser único (unique: true).-
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
    //El objeto de configuración proporcionado como segundo argumento tiene timestamps: false, lo que significa que no se agregarán automáticamente los campos de registro de tiempo (createdAt y updatedAt) a los registros de este modelo.-
  }, {
    timestamps: false,
  }
  );
};

//4.ANÁLISIS DEL CÓDIGO.-
// Este código define el modelo temperaments en Sequelize, que representa los temperamentos de los perros y especifica las características de los datos que se almacenan en la tabla de temperamentos en la base de datos. Esto incluye detalles como el nombre del temperamento. Estas características son utilizadas por Sequelize para crear la tabla en la base de datos y facilitar las operaciones de lectura y escritura de datos en esa tabla.