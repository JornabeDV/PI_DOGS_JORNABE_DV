//1.IMPORTACIÓN DE MÓDULOS Y FUNCIONES DE REDUX.-
//applyMiddleware: Una función de Redux que permite la aplicación de middleware a las acciones despachadas. En este caso, se utilizará para aplicar el middleware thunkMiddleware.-
//compose: Una función de Redux que permite combinar varias funciones juntas. Se utiliza para combinar el middleware y la extensión de Redux DevTools.-
//createStore: Una función de Redux que crea la tienda de Redux.-
import {applyMiddleware, compose, createStore, } from 'redux'
import rootReducer from "./reducer"
import thunkMiddleware from "redux-thunk"

//2.CONFIGURACIÓN DE REDUX DEVTOOLS.-
//Esta línea configura la extensión de Redux DevTools para la aplicación. Si la extensión está habilitada en el navegador, se utilizará para mejorar la experiencia de desarrollo. Si la extensión no está disponible, se utilizará compose por defecto.-
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//3.CREACIÓN DE LA TIENDA REDUX.-
const store = createStore (
    rootReducer,//Se importa desde el archivo "reducer.js", es el que se utilizará para gestionar el estado global de la aplicación.-
    composeEnhancer(applyMiddleware(thunkMiddleware)) //Aquí se combina el middleware thunkMiddleware (que permite manejar acciones asíncronas) con la extensión de Redux DevTools (si está disponible) utilizando la función composeEnhancer. Luego, esta composición se pasa como segundo argumento a createStore para crear la tienda de Redux.-
);

//4.EXPORTACIÓN DE LA TIENDA REDUX.-
//Se exporta como el valor predeterminado del módulo, lo que permite que otros componentes y módulos de la aplicación accedan a la tienda y utilicen su estado global para gestionar datos y acciones.-
export default store;

//5.ANÁLISIS DEL CÓDIGO.-
//Este código configura y crea la tienda (store) de Redux para la aplicación.-