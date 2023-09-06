//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import DogCardDetail from "../../components/DogCardDetail/DogCardDetail";//Se utilizará para mostrar los detalles del perro.-
import { useParams } from "react-router-dom";//Se importa el hook useParams de react-router-dom, que permite acceder a los parámetros de la URL dinámica.-
import { useEffect } from "react";//Se importa useEffect de React, que se utilizará para realizar efectos secundarios en el componente.-
import { useSelector, useDispatch } from "react-redux";//Se importa useSelector y useDispatch de Redux, que se utilizarán para acceder al estado global de Redux y despachar acciones.-
import style from "./Detail.module.css";//Se importa un archivo de estilos CSS.-
import { getDogDetail } from "../../redux/actions";//Se importa la actions para ...

//2.DEFINICIÓN DEL COMPONENTE.-
const Detail = () => {
  //3.OBTENCIÓN DEL PARÁMETRO ID DE LA URL.-
  //Se utiliza el hook useParams para obtener el valor del parámetro id de la URL. Este valor se utilizará para realizar una solicitud para obtener los detalles del perro con el ID correspondiente.-
  const { id } = useParams(); //Devuelve un objeto con las propiedades y el valor de los segmentos dinamicos de la URL.-
  
  //4.INICIALIZACIÓN DE VARIABLES Y DESPACHO DE UNA ACCIÓN.-
  const dispatch = useDispatch();//Se inicializa una variable dispatch utilizando el hook useDispatch. Esta variable se utilizará para despachar la acción getDogDetail para obtener los detalles del perro.-
  const dog = useSelector((state) => state.dogDetail);//Se utiliza el selector useSelector para acceder al estado global de Redux y obtener los detalles del perro. La variable dog contendrá los detalles del perro que se obtendrán del estado global.

  //5.EFECTO SECUNDARIO PARA OBTENER DETALLES DEL PERRO.-
  //Se utiliza el hook useEffect para realizar una acción de obtención de detalles del perro cuando el valor de id cambia. El useEffect se ejecutará cada vez que id cambie y despachará la acción getDogDetail con el ID como argumento.-
  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [id]);

  //6.RENDERIZACIÓN DEL COMPONENTE.-
  //Se utiliza un mapeo (map) en el array dog para renderizar el componente DogCardDetail con los detalles del perro. Cada detalle se pasa como propiedades al componente DogCardDetail.-
  return (
    <div className={style.container}>
      {dog.map(({id, name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament, image}) => (
        <DogCardDetail
          key={id}
          name={name}
          minHeight={minHeight}
          maxHeight={maxHeight}
          minWeight={minWeight}
          maxWeight={maxWeight}
          life_span={life_span}
          temperament={temperament}
          image={image}
        />
      ))}
    </div>
  );
};

//7.EXPORTACIÓN DEL COMPONENTE.-
export default Detail;

//8.ANÁLISIS DEL CÓDIGO.-
//Este componente Detail se encarga de obtener y mostrar los detalles de un perro específico utilizando Redux para gestionar el estado global y useParams para obtener el ID del perro desde la URL dinámica. Luego, muestra los detalles utilizando el componente DogCardDetail.-