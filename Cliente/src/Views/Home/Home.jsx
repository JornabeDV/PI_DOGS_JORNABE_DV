//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import DogsCards from "../../components/DogsCards/DogsCards";
import { useEffect } from "react";//Es un Hook de React que se utiliza para realizar efectos secundarios en un componente funcional.-
import { useDispatch } from "react-redux";//Es un Hook proporcionado por react-redux que se utiliza para obtener una función dispatch que permite enviar acciones a la tienda Redux.-
import { getDogs } from "../../redux/actions";//Acción de Redux que se utiliza para obtener datos relacionados con perros.-

//2.DEFINICIÓN DEL COMPONENTE.-
//Se define un componente funcional llamado Home. Los componentes funcionales son una forma de definir componentes en React.-
const Home = () => {
  //3.USO HOOKS.-
  //Se utiliza el Hook useDispatch para obtener una función dispatch que se usará para enviar acciones a la tienda Redux.-
  const dispatch = useDispatch();
  //Se utiliza el useEffect para realizar efectos secundarios en el componente.
  //Dentro del useEffect, se llama a dispatch(getDogs()), lo que implica que se envía una acción getDogs a la tienda Redux. Esto desencadenará una solicitud para obtener datos de perros.-
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  //4.RENDERIZACIÓN DEL COMPONENTE.-
  //Se renderiza el componente DogsCards. Esto significa que el componente DogsCards se mostrará en el lugar donde se coloque este componente Home.-
  return (
    <div>
      <DogsCards />
    </div>
  );
};

//5.EXPORTACIÓN DEL COMPONENTE.-
export default Home;

//6.ANÁLISIS DEL CÓDIGO.-
//Este código representa un componente funcional de React llamado Home que utiliza Redux para obtener datos relacionados con perros y renderiza el componente DogsCards. La acción getDogs se desencadena cuando el componente se monta (gracias al uso de useEffect). El componente DogsCards mostrará las tarjetas de los perros en la interfaz de usuario de la aplicación.-
