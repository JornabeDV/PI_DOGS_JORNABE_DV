//1.IMPORTS Y CONFIGURACIÓN.-
const {Dog} = require('../db');//Se importa el modelo Dog desde el módulo ../db. Esto proporciona acceso al modelo definido en Sequelize que representa la tabla de perros en la base de datos.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función asíncrona llamada deleteDogsHandler que manejará la solicitud de eliminación de un perro. Esta función toma dos parámetros: req (la solicitud HTTP) y res (la respuesta HTTP).-
const deleteDogsHandler = async (req, res) => {
    try {
        //3.EXTRACCIÓN DEL ID Y ELIMINACIÓN DEL PERRO.-
        const {id} = req.params;//Se extrae el parámetro ID de la URL de la solicitud. Este ID es utilizado para identificar el perro que se desea eliminar.-
        await Dog.destroy({where: {id}});//Se utiliza el método destroy() proporcionado por Sequelize en el modelo Dog para eliminar el perro de la base de datos. La opción where especifica que se debe eliminar el registro que tenga el ID correspondiente.-

        //4.RESPUESTAS DE LA SOLICITUD.-
        return res.status(200).send('Perro eliminado con exito.');//Si la eliminación se realiza con éxito, se devuelve una respuesta con un estado HTTP 200 (éxito) y un mensaje indicando que el perro se eliminó correctamente.-

    } catch (error) {
        return res.status(400).send('No existen perros con ese ID en la base de datos.')//Si ocurre un error (por ejemplo, si no se encuentra un perro con el ID proporcionado en la base de datos), se devuelve una respuesta con un estado HTTP 400 (solicitud incorrecta) y un mensaje indicando que no se encontraron perros con ese ID en la base de datos.-
    }
};

//5.EXPORTACIÓN DE LA FUNCIÓN.-
//La función deleteDogsHandler se exporta para que pueda ser utilizada en otros módulos, probablemente en el contexto de un enrutador de Express u otra aplicación web.-
module.exports = deleteDogsHandler;

//6.ANÁLISIS DEL CÓDIGO.-
//Este código define una función que maneja la solicitud de eliminación de un perro de la base de datos utilizando el modelo Dog y el método destroy() de Sequelize. Dependiendo del resultado, devuelve respuestas HTTP apropiadas con mensajes informativos.-