//1.IMPORTACIÓN DE AXIOS.-
import axios from "axios";//Se importa Axios, una biblioteca utilizada para hacer solicitudes HTTP, lo que permite realizar peticiones a una API externa para obtener y enviar datos.

//2.DEFINICIÓN DE CONSTANTES DE ACTIONS.-
//Estas constantes representan los tipos de acciones que se pueden despachar en la aplicación. Cada constante se utiliza como valor type en los objetos de acción para identificar el tipo de acción que se está realizando.-
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const ORDER_BY_LIFESPAN = "ORDER_BY_LIFESPAN";
export const FILTER_SOURCE = "FILTER_SOURCE";
export const FILTER_TEMP = "FILTER_TEMP";
export const DELETE_DOG = "DELETE_DOG";


//3.ACTIONS CREATORS.-

//getDogs: Un creador de acción asíncrono que realiza una solicitud HTTP GET para obtener datos sobre perros desde una API en http://localhost:3001/dogs. Luego, despacha la acción GET_DOGS con los datos obtenidos como carga (payload).-
export const getDogs = () => {
  return async (dispatch) => {
    const dogsData = await axios.get("http://localhost:3001/dogs");
    const dogs = dogsData.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

//getDogsByName: Un creador de acción asíncrono que toma un nombre como argumento y realiza una solicitud HTTP GET para obtener datos de perros con ese nombre específico desde la misma API. Luego, despacha la acción GET_DOGS_BY_NAME con los datos obtenidos como carga (payload).-
export const getDogsByName = (name) => {
  return async (dispatch) => {
    const dogData = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    const dog = dogData.data;
    dispatch({ type: GET_DOGS_BY_NAME, payload: dog });
  };
};

//getTemperaments: Un creador de acción asíncrono que realiza una solicitud HTTP GET para obtener una lista de temperamentos de perros desde la API en http://localhost:3001/temperaments. Luego, despacha la acción GET_TEMPERAMENTS con la lista de temperamentos obtenida como carga (payload).-
export const getTemperaments = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/temperaments");

    const temperamentsList = apiData.data.map((temp) => temp.name);

    return dispatch({ type: GET_TEMPERAMENTS, payload: temperamentsList });
  };
};

//getDogDetail: Un creador de acción asíncrono que toma un ID como argumento y realiza una solicitud HTTP GET para obtener detalles de un perro específico desde la misma API. Luego, despacha la acción GET_DOG_DETAIL con los detalles del perro obtenidos como carga.-
export const getDogDetail = (id) => {
  return async (dispatch) => {
    const dog = await axios.get(`http://localhost:3001/dogs/${id}`);
    const dogDetail = dog.data;
    dispatch({ type: GET_DOG_DETAIL, payload: dogDetail });
  };
};

//orderDogsByName: Un creador de acción que toma un valor de ordenamiento (order) y despacha la acción ORDER_BY_NAME con el valor de ordenamiento como carga.-
export const orderDogsByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order };
};

//orderDogsByWeight: Un creador de acción que toma un valor de ordenamiento por peso (orderByWeight) y despacha la acción ORDER_BY_WEIGHT con el valor de ordenamiento por peso como carga.-
export const orderDogsByWeight = (orderByWeight) => {
  return { type: ORDER_BY_WEIGHT, payload: orderByWeight };
};

export const orderDogsByLifeSpan = (orderDogsByLifeSpan) => {
  return { type: ORDER_BY_LIFESPAN, payload: orderDogsByLifeSpan };
};
//filterBySource: Un creador de acción que toma un valor de filtro por fuente (created) y despacha la acción FILTER_SOURCE con el valor de filtro por fuente como carga.-
export const filterBySource = (created) => {
  return { type: FILTER_SOURCE, payload: created };
};

//filterByTemperament: Un creador de acción que toma un valor de filtro por temperamento (temp) y despacha la acción FILTER_TEMP con el valor de filtro por temperamento como carga.-
export const filterByTemperament = (temp) => {
  return { type: FILTER_TEMP, payload: temp };
};

//deleteDog:
export const deleteDog = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3001/dogs/${id}`);
    return dispatch ({
      type: DELETE_DOG,
      payload: id,
    })
  }
};
//4.ANÁLISIS DEL CÓDIGO.-
//Estos creadores de acciones se utilizan en componentes React para despachar acciones que afectan el estado global de Redux y pueden activar cambios en la interfaz de usuario de la aplicación. Las acciones se envían a través del dispatch y son procesadas por los reducers de Redux para actualizar el estado de la aplicación.-