//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import style from "../DogsCards/DogsCards.module.css";
import { useState, useEffect } from "react";//Importación de Hooks de React.-
import { useSelector, useDispatch } from "react-redux";//Funciones de Redux.-
import {
  orderDogsByName,
  orderDogsByWeight,
  filterBySource,
  getTemperaments,
  orderDogsByLifeSpan,
  filterByTemperament,
  deleteDog
} from "../../redux/actions";//Acciones de Redux.-
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import DogCard from "../DogCard/DogCard";

//2.DEFINICIÓN DEL COMPONENTE.-
const DogsCards = () => {

  //3.CONFIGURACIÓN DE REDUX.-
  const dogsFilter = useSelector((state) => state.dogsFilter);//Se utiliza useSelector para obtener el estado dogsFilter del almacenamiento Redux.-
  let amount = dogsFilter.length;//Cantidad de elementos obtenidos del estado en el que se encuentra el array dogsFilter.-
  const dispatch = useDispatch();//Se utiliza useDispatch para obtener la función dispatch de Redux, que se utiliza para despachar acciones Redux y cambiar el estado global.-

  //4.MANEJO DE EVENTOS Y ACCIONES REDUX.-
  //Estas funciones se utilizan para manejar eventos de cambio en los selectores de ordenación y filtro en la interfaz. Cuando se produce un cambio, se despachan acciones Redux correspondientes, como orderDogsByName, orderDogsByWeight, y filterBySource, pasando el valor seleccionado como argumento.-
  const [filterName, setFilterName] = useState ("");
  const handleOrderByName = (event) => {
    dispatch(orderDogsByName(event.target.value));
    setFilterName(event.target.value);
    setCurrentPage(1);
  };
  const [filterWeight, setFilterWeight] = useState ("");
  const handleOrderByWeight = (event) => {
    dispatch(orderDogsByWeight(event.target.value));
    setFilterWeight(event.target.value);
    setCurrentPage(1);
  };
  const [filterLifeSpan, setFilterLifeSpan] = useState ("");
  const handleOrderLifeSpan = (event) => {
    dispatch(orderDogsByLifeSpan(event.target.value));
    setFilterLifeSpan(event.target.value);
    setCurrentPage(1);
  };
  const [filterSource, setFilterSource] = useState ("");
  const handleFilterSource = (event) => {
    dispatch(filterBySource(event.target.value));
    setFilterSource(event.target.value);
    setCurrentPage(1);
  };

  //5.OBTENCIÓN Y ORDENAMIENTO DE TEMPERAMENTOS.-
  //Se utiliza useSelector para obtener el estado temperaments del almacenamiento Redux. Luego, se ordenan alfabéticamente los temperamentos utilizando la función sort.-
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );

  //Se utiliza useEffect para realizar una llamada a la acción getTemperaments cuando el componente se monta por primera vez. Esto se hace pasando [dispatch] como segundo argumento, lo que indica que la acción se ejecutará una vez al montar el componente.-
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const [filterTemps, setFilterTemps] = useState ("All");
  const handleFilterByTemperament = (event) => {
    dispatch(filterByTemperament(event.target.value));
    setFilterTemps(event.target.value);

  };
  //ELIMINACIÓN DE CARD DOG.-
  const handleDeletedDog = (id) => {
    dispatch(deleteDog(id));
    setCurrentPage(1);
  };

  //6.CONFIGURACIÓN DE LA PAGINACIÓN.-
  //Aquí se configura la paginación. Se utiliza el estado local currentPage para realizar un seguimiento de la página actual y se calculan el número total de páginas (totalPages) y el rango de perros que se mostrarán en la página actual (currentDogs) en función de la página actual y la cantidad de elementos por página (itemsPerPage).
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalItems = dogsFilter.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);//Es una función de JavaScript que redondea hacia arriba un número decimal al número entero más cercano.

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDogs = dogsFilter.slice(startIndex, endIndex);

  //7.RENDERIZADO DEL COMPONENTE.-
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className={style.containerBtn}>
        <div className={style.searchBarContainer}>
          <SearchBar />
        </div>
        <div className={style.toolsContainer}>
          <span>Order By Name</span>
          <select onChange={handleOrderByName} value = {filterName} >
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <span>Order By Weight</span>
          <select onChange={handleOrderByWeight} value = {filterWeight} >
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <span>Order By LifeSpan</span>
          <select onChange={handleOrderLifeSpan} value = {filterLifeSpan} >
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <span>Filter By Source</span>
          <select onChange={handleFilterSource} value = {filterSource} >
            <option value="All">All</option>
            <option value="false">API</option>
            <option value="true">Postgres</option>
          </select>
          <span>Filter By Temperament</span>
          <select
            className={style.select}
            onChange={(e) => handleFilterByTemperament(e)}
            value = {filterTemps}
          >
            <option value="All">All</option>
            {temperaments.map((temp) => {
              return (
                <option key={temp} name={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={style.container}>
        {currentDogs.map((dog) => {
          let temperaments;

          if (typeof dog.temperament === "string") {
            temperaments = dog.temperament
          } else if (
            Array.isArray(dog.temperaments) &&
            dog.temperaments.length > 0
          ) {
            temperaments = dog.temperaments.map((t) => t.name).join(", ")
          } else {
            temperaments = ""
          }
          return (
          <DogCard
            key={dog.id}
            id={dog.id}
            name={dog.name}
            temperament={temperaments}
            minWeight={dog.minWeight} 
            maxWeight={dog.maxWeight} 
            life_span={dog.life_span}
            image={dog.image}
            deleteDog={handleDeletedDog}
          />
          )
        })}          
      </div>
      <div className={style.amountContainer}>
          <h3>The number of cards shown are {amount}</h3>
      </div>
    </div>
  );
};

export default DogsCards;

//7.RENDERIZADO DEL COMPONENTE.-
// El componente de paginación (Pagination).-
// Un contenedor que agrupa la barra de búsqueda y los selectores de orden y filtro.-
// El mapeo y renderizado de las tarjetas de perros utilizando el componente DogCard.-
// Un mensaje que muestra la cantidad de tarjetas de perros mostradas (cant).-

//8.ANÁLISIS DEL CÓDIGO.-
//Este componente DogsCards es una parte importante de una aplicación web relacionada con perros. Permite la visualización y manipulación de una lista de perros, incluyendo la paginación, ordenamiento y filtrado, utilizando Redux para gestionar el estado de la aplicación. Además, se utilizan componentes adicionales como Pagination y SearchBar para mejorar la experiencia del usuario.-