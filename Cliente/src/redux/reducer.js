//1.IMPORTACIÓN DE CONSTANTES DE ACTIONS.-
//Se importan las constantes de ACTIONS definidas previamente en el archivo "actions.js". Estas constantes se utilizan para identificar los tipos de acciones que se manejarán en el reducer.-
import {
  GET_DOGS,
  GET_DOG_DETAIL,
  GET_DOGS_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  FILTER_SOURCE,
  FILTER_TEMP,
  DELETE_DOG,
  ORDER_BY_LIFESPAN,
} from "./actions";

//2.DEFINICIÓN DEL ESTADO INICIAL.-
//Se define un estado inicial para la aplicación.-
const initialState = {
  dogs: [],//Un array vacío que almacenará la lista de perros.-
  dogDetail: [],//Un array vacío que almacenará los detalles de un perro específico.-
  dogsFilter: [],//Un array vacío que se utilizará para almacenar la lista de perros filtrados u ordenados.-
  temperaments: [],//Un array vacío que almacenará la lista de temperamentos de perros.-
  currentPage: 1,//Un número entero que representa la página actual en la paginación de resultados.-
};

//3.DEFINICIÓN DE ROOTREDUCER.-
//Es una función que toma dos argumentos: state y action.-
//Cada caso devuelve un nuevo objeto de estado utilizando el operador de propagación (...state) para copiar el estado actual y realizar las modificaciones necesarias en las propiedades relevantes.-
//Cada caso puede incluir lógica adicional, como ordenar o filtrar los datos según el tipo de acción.-
const rootReducer = (state = initialState, action) => {
  switch (action.type) { //La función switch se utiliza para determinar cómo actualizar el estado en función del tipo de acción (action.type) que se despacha.
    case GET_DOGS:
      return { ...state, dogs: action.payload, dogsFilter: action.payload };

    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogsFilter: action.payload,
      };
      
    case GET_DOG_DETAIL:
      return { ...state, dogDetail: action.payload };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case ORDER_BY_NAME:
      // Se crea una copia del array de perros actual usando el operador de propagación (spread operator).
      const sortName = [...state.dogsFilter].sort((a, b) => {
        // Se utiliza la función `sort` en la copia del array para ordenar los perros en función de sus nombres.
        if (a.name > b.name) {
          // Si el nombre de `a` es mayor (alfabéticamente) que el de `b`, se decide el orden.
          return action.payload === "A" ? 1 : -1;
          // Si `action.payload` es "A" (ascendente), se devuelve 1; de lo contrario, se devuelve -1 (descendente).
        } else if (a.name < b.name) {
          // Si el nombre de `a` es menor (alfabéticamente) que el de `b`, se decide el orden.
          return action.payload === "D" ? 1 : -1;
          // Si `action.payload` es "D" (descendente), se devuelve 1; de lo contrario, se devuelve -1 (ascendente).
        } else {
          // Si los nombres son iguales, se devuelve 0, lo que significa que no se cambia el orden relativo.
          return 0;
        }
      });
  
      // Se devuelve un nuevo objeto de estado que incluye la lista de perros ordenada en `dogsFilter`.
      return {
        ...state,
        dogsFilter: sortName,
    };
    case ORDER_BY_WEIGHT:
      const sortWeight = [...state.dogsFilter].sort((a, b) => {
        if (a.minWeight !== null && b.minWeight !== null) {
          if (a.minWeight > b.minWeight) {
            return action.payload === "A" ? 1 : -1;
          } else if (a.minWeight < b.minWeight) {
            return action.payload === "D" ? 1 : -1;
          } else return 0;
        }
      });
      return {
        ...state,
        dogsFilter: sortWeight,
      };
      case ORDER_BY_LIFESPAN:
        const sortLifeSpan = [...state.dogsFilter].sort((a, b) => {
          if (a.life_span !== null && b.life_span !== null) {
            if (a.life_span > b.life_span) {
              return action.payload === "A" ? 1 : -1;
            } else if (a.life_span < b.life_span) {
              return action.payload === "D" ? 1 : -1;
            } else return 0;
          }
        });
        return {
          ...state,
          dogsFilter: sortLifeSpan,
        };

    case FILTER_SOURCE:
      const filterBySource =
        action.payload === "All"
          ?[...state.dogs]
          : [...state.dogs].filter((dog) => {
            if(action.payload ==="true") {
              return dog.created === true;
            }
            return dog.created === false;
          });
      return {
        ...state,
        dogsFilter: filterBySource,
      };

    case FILTER_TEMP:
      const filterTemp = 
      action.payload === "All"
      ? [...state.dogs]
      : [...state.dogs].filter((dog) => {
        const apiTemp = dog.temperament ? dog.temperament.split(",").map((temp) => temp.trim()) : [];
        const bddTemp = Array.isArray(dog.temperaments) ? dog.temperaments.map((temp) => temp.name) : [];//Esta verificación se realiza para asegurarse de que dog.temperaments sea realmente un array antes de intentar acceder y mapear sus elementos.-
        return apiTemp.includes(action.payload) || bddTemp.includes(action.payload);
      });
      return {
        ...state,
        dogsFilter: filterTemp,
      };
    
    case DELETE_DOG:
      const uAllDogs = state.dogs.filter((dog) => dog.id !== action.payload);
      const uFilterDogs = state.dogsFilter.filter((dog) => dog.id !== action.payload);
      return { 
        ...state, 
        dogs: uAllDogs,
        dogsFilter: uFilterDogs
      };

    default:
      return { ...state };
  }
};



//4.EXPORTACIÓN DE ROOTREDUCER.-
//El rootReducer se exporta como el valor predeterminado del módulo, lo que permite utilizarlo en la configuración del almacenamiento Redux de la aplicación para gestionar el estado global.-
export default rootReducer;

//5.ANÁLISIS DEL CÓDIGO.-
//Este código define un reducer de Redux que gestiona el estado global de una aplicación relacionada con perros, incluyendo la carga de datos de perros, la gestión de detalles de perros, la ordenación y el filtrado de la lista de perros, así como la gestión de temperamentos de perros. El estado inicial se define en initialState, y el reducer se encarga de actualizar este estado en función de las acciones que se desencadenen en la aplicación.-