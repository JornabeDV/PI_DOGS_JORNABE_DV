//1.IMPORTACIÓN DE MÓDULOS Y ESTILOS.-
import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getDogsByName } from "../../redux/actions"; //Importa las actions de Redux.-

//2.DEFINICIÓN DEL COMPONENTE.-
const SearchBar = () => {
  //3.ESTADO LOCAL Y DISPATCH DE REDUX.-
  const [dogsByName, setDogsByName] = useState("");//creamos una variable de estado local llamada dogsByName, que almacena el nombre ingresado por el usuario en la barra de búsqueda mediante el uso del Hook useState.-
  const dispatch = useDispatch();//Creamos una función que utiliza el Hook useDispatch para despachar acciones Redux.-

  //4.MANEJO DE CAMBIOS EN LA BARRA DE BÚSQUEDA.-
  //La función handleChange se ejecuta cada vez que el usuario introduce texto en la barra de búsqueda. Actualiza el estado dogsByName con el valor ingresado por el usuario.-
  const handleChange = (event) => {
    setDogsByName(event.target.value);
  };
  //5.MANEJO DE L BÚSQUEDA.-

  const handleSearch = () => { //handleSearch se llama cuando el usuario hace clic en el botón "Search".-
    if (dogsByName.length === 0) { //Verifica si el campo de búsqueda (dogsByName) está vacío.-
      dispatch(getDogs()); // Si está vacío, se despacha la acción getDogs para obtener todos los perros.-
      return alert("Please input a name to start the search");//Se muestra una alerta pidiendo al usuario que ingrese un nombre para comenzar la búsqueda.-
    } else { //Si el campo de búsqueda no está vacío.-
      dispatch(getDogsByName(dogsByName));//Se despacha la acción getDogsByName con el nombre ingresado (dogsByName) como argumento para buscar perros por nombre. 
      setDogsByName("");//Luego, se restablece el campo de búsqueda a un valor vacío.-
    }
  };

  //6.RENDERIZADO DEL COMPONENTE.-
  return (
    <div className={style.searchBarContainer}>
      <input
        type="text"
        placeholder="Search by name"
        value={dogsByName}
        onChange={handleChange}
        className={style.input}
      ></input>
      <button onClick={handleSearch} className={style.btnSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

//6.RENDERIZADO DEL COMPONENTE.-
//Se renderiza un <div> que contiene la barra de búsqueda.-
// Se muestra un campo de entrada de texto (<input>) donde el usuario puede ingresar el nombre del perro que desea buscar. El valor de este campo está vinculado al estado dogsByName, y el evento onChange está configurado para llamar a handleChange cuando se produce un cambio en el campo.-
// Un botón "Search" (<button>) que llama a handleSearch cuando se hace clic en él.
// Se aplican estilos CSS a los elementos utilizando las clases CSS definidas en el archivo de estilos (SearchBar.module.css).

//7.ANÁLISIS DEL CÓDIGO.-
//El componente SearchBar proporciona una barra de búsqueda que permite al usuario buscar perros por nombre. Cuando se realiza una búsqueda, se utilizan acciones de Redux para buscar y mostrar los resultados en la aplicación.-