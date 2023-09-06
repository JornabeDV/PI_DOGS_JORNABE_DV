//1.CONFIGURACIÓN DE LAS VARIABLES DE ENTORNO.-
require('dotenv').config();//Se utiliza la librería dotenv para cargar las variables de entorno definidas en un archivo .env en el proyecto.-
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;//Estas variables de entorno, como DB_USER, DB_PASSWORD, y DB_HOST, almacenan información confidencial, como credenciales de base de datos.

const { Sequelize } = require('sequelize');//Esta línea importa el constructor Sequelize de la biblioteca Sequelize.
const fs = require('fs');//Esta línea importa el módulo fs de Node.js. El módulo fs (FileSystem) proporciona funciones para interactuar con el sistema de archivos, como leer y escribir archivos, crear directorios y más. Se usa comúnmente para realizar operaciones de lectura y escritura en archivos en una aplicación Node.js.-
const path = require('path');//Esta línea importa el módulo path de Node.js. El módulo path proporciona utilidades para trabajar con rutas de archivos y directorios de manera que sea independiente de la plataforma. Se utiliza para manipular y construir rutas de archivos de manera segura y eficiente.-

//2.CREACIÓN DE UNA INSTANCIA DE SEQUELIZE.-
//Se crea una instancia de Sequelize llamada sequelize que se utilizará para interactuar con la base de datos PostgreSQL.-
//La URL de conexión se construye utilizando las variables de entorno DB_USER, DB_PASSWORD, y DB_HOST para conectarse a la base de datos llamada dogs.-
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, //Evita que Sequelize registre las consultas SQL en la consola. Esto es útil en producción para evitar la exposición de información confidencial.-
  native: false, // Indica que no se utilizará una extensión nativa (como pg-native) para acelerar las consultas.-
});
const basename = path.basename(__filename); //__filename: contiene la ruta completa del archivo actual en el que se ejecuta este código.-
//path.basename(__filename) toma esa ruta completa y extrae el nombre del archivo actual sin la ruta completa.-
//El resultado se almacena en la variable basename para su uso posterior. Contendrá el nombre del archivo actual sin la ruta completa, lo que a menudo es útil en aplicaciones para realizar diversas tareas basadas en el nombre del archivo actual, como cargar módulos dinámicamente o realizar configuraciones específicas según el archivo.-

//3.LECTURA DE MODELOS DESDE ARCHIVOS.-
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))//Se utiliza el módulo fs para leer todos los archivos dentro del directorio /models.-
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))// Se filtran los archivos para asegurarse de que tengan la extensión .js y no comiencen con un punto (archivos ocultos) ni sean el archivo actual (basename).
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file))); //Cada archivo de modelo (por ejemplo, dog.js o temperament.js) se requiere y se agrega al arreglo modelDefiners. Estos archivos probablemente definen los modelos de datos de Sequelize.-
  });

//4.INYECCIÓN DE LA CONEXIÓN (SEQUELIZE) EN LOS MODELOS.-
//Cada modelo (definido en los archivos en el paso anterior) recibe la instancia de Sequelize (sequelize) como argumento, lo que les permite asociarse y definir sus relaciones en la base de datos.-
modelDefiners.forEach(model => model(sequelize));

//5.CAPITALIZACIÓN DE LOS NOMBRES DE MODELOS.-
//Los nombres de los modelos se capitalizan para que la primera letra sea mayúscula (por ejemplo, dog se convierte en Dog). Esto es una convención común en Sequelize.-
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Le pasamos la instancia de Sequelize 

// Para relacionarlos hacemos un destructuring
//6.DEFINICIÓN DE RELACIONES ENTRE MODELOS.-
//Se definen las relaciones entre los modelos Dog y Temperaments. En este caso, se establece una relación de muchos a muchos utilizando la tabla intermedia "user_dogs" y se deshabilitan los registros de tiempo (timestamps: false).-
const { Dog, Temperaments } = sequelize.models;// Para relacionarlos hacemos un destructuring.-
Dog.belongsToMany(Temperaments, {through: "user_dogs", timestamps: false}); // Relacion de muchos a muchos. BELONGSTOMANY.
Temperaments.belongsToMany(Dog, {through: "user_dogs", timestamps: false});// Relacion de muchos a muchos. BELONGSTOMANY.

//7.EXPORTACIÓN DE MODELOS Y CONEXIÓN.-
//Se exportan los modelos definidos (ahora capitalizados) como propiedades y la instancia de Sequelize (sequelize) con el nombre conn. Esto permite que otros módulos de la aplicación importen y utilicen los modelos y la conexión de la base de datos.
module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};

//8.ANÁLISIS DEL CÓDIGO.-
//Este código configura y establece una conexión a una base de datos PostgreSQL utilizando la librería Sequelize, que es un Object-Relational Mapping (ORM) muy utilizada en aplicaciones Node.js para interactuar con bases de datos SQL.-

//Este código configura y conecta una base de datos PostgreSQL utilizando Sequelize, define modelos de datos, establece relaciones entre los modelos y exporta tanto los modelos como la conexión para su uso en otros módulos de la aplicación.