//1.IMPORTACIÓN DE CONTROLADORES Y MODELOS.-
const postDogs = require ("../Controllers/postDogs")//Esta función se utiliza para crear un nuevo registro de perro en la base de datos.-   
const {Temperaments, Dog} = require('../db');//Este modelo representa la tabla que contiene información sobre los temperamentos de los perros.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función llamada postDogsHandler que manejará la solicitud para crear un nuevo perro en la base de datos. Esta función toma dos parámetros: req (la solicitud HTTP) y res (la respuesta HTTP).-
const postDogsHandler = async (req, res) => {
    //3.EXTRACCIÓN DE DATOS DEL CUERPO DE LA SOLICITUD(REQ.BODY).-
    //Se extraen los datos necesarios para crear un nuevo perro a partir del cuerpo (body) de la solicitud HTTP. DESTRUCTURING.-
    const {name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments, image} = req.body;
        
    const errors = [];

    const existingDog = await Dog.findOne({
        where: {
            name: name
        }
    });

    if (existingDog) {
        errors.push('El nombre ya existe en la base de datos!');
    }
    if (errors.length > 0) {
        return res.status(400).json ({errors});
    }
    try {
        //4.CREACIÓN DEL NUEVO PERRO EN LA BASE DE DATOS.-
        //Se llama a la función postDogs para crear un nuevo registro de perro en la base de datos. Esta función toma como parámetros todos los datos necesarios para crear un perro.-
        const newDog = await postDogs(name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments, image);// el postDogs(...) es una promesa que el await espera que se resuelva. La variable newDog contendrá el objeto del perro recién creado en la base de datos.-

        //5.ASOCIACIÓN DE TEMPERAMENTOS AL NUEVO PERRO.-
        //Se busca en la base de datos los temperamentos especificados en la solicitud utilizando el modelo Temperaments. Los temperamentos se obtienen del cuerpo de la solicitud y se buscan en la tabla de temperamentos.-
        const temperamentsDb = await Temperaments.findAll({
            where: {
                name: temperaments,
            }
        });
        newDog.addTemperaments(temperamentsDb); //Se utiliza el método addTemperaments para asociar estos temperamentos al nuevo perro creado en la base de datos.-

        //6.RESPUESTA DE LA SOLICITUD.-
        //Si la creación del perro y la asociación de los temperamentos se realizan con éxito, se devuelve una respuesta HTTP con un estado 201 (creado) y el objeto del perro recién creado en formato JSON.-
        res.status(201).json(newDog);    
    } catch (error) {
        //7.MANEJO DE ERROES.-
        //Si ocurre algún error durante el proceso, se captura y se devuelve una respuesta HTTP con un estado 400 (solicitud incorrecta) y un mensaje de error en formato JSON.-
        res.status(400).json({message: error.message})        
    }
};
 
//8.EXPORTACIÓN DE LA FUNCIÓN.-
//La función postDogsHandler se exporta para que pueda ser utilizada en otros módulos.-
module.exports = postDogsHandler;

//9.ANÁLISIS DEL CÓDIGO.-
//Este código maneja una solicitud HTTP para crear un nuevo registro de perro en la base de datos. También permite asociar uno o varios temperamentos al perro creado. Los datos se extraen del cuerpo de la solicitud, se crea el perro en la base de datos, se asocian los temperamentos y se devuelve una respuesta HTTP con los resultados o un mensaje de error en caso de que ocurra un problema.-