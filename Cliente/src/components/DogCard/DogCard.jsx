//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import style from "./DogCard.module.css";//Hoja de estilo CSS que se encuentra en el mismo directorio que este componente.-
import { Link } from "react-router-dom";//Se importa el componente Link de la biblioteca "react-router-dom". Esto permite crear enlaces a otras rutas dentro de la aplicación.-
import dog404 from "../../Assets/dog404.jpg";

//2.DEFINICIÓN DEL COMPONENTE.-
//Este es un componente funcional de React llamado DogCard. Recibe varias propiedades como argumentos, incluyendo id, name, temperaments, minWeight, y image. Estas propiedades se utilizan para mostrar información sobre un perro en la tarjeta.-
const DogCard = ({id, name, temperament, minWeight, maxWeight, image, deleteDog, life_span}) => {
  return (
    <div className={style.containerCard}>
      {
        isNaN(id)
        ? <button onClick={() => deleteDog(id)}>x</button>
        : null
      }
      <Link to={`/detail/${id}`}>
        <h2 className={style.name}> { name } </h2>
      </Link>
      <h3>Weight: { minWeight } {' - '} { maxWeight } </h3>
      <h3>{life_span}</h3>
      <h5> { temperament } </h5>
      <img className={style.img} 
      src={
        image
        ? image
        : dog404 
        } alt={"No tiene imagen"} />
    </div>
  );
};
export default DogCard;

//3.ESTRUCTURA DEL COMPONENTE.-
//<Link to={/detail/${id}}>: Se utiliza el componente Link para crear un enlace a la ruta "/detail/id", donde id es el valor del prop id. Esto permite que el usuario haga clic en el nombre del perro (<h2>) y sea redirigido a una página de detalles específica para ese perro.-
//<h3>Weight: {minWeight}</h3>: Se muestra el peso mínimo del perro (minWeight) como un encabezado <h3>. El texto "Weight:" es estático, pero el valor del peso mínimo se muestra dinámicamente.-
//<h5>{temperaments}</h5>: Se muestra una lista de temperamentos del perro (temperaments) como un encabezado <h5>.-
//<img className={style.img} src={image} alt="No se encuentra la imágen!" />: Se muestra una imagen del perro (image) con una clase CSS img para aplicar estilos específicos. Si la imagen no se carga correctamente, se muestra el texto "No se encuentra la imágen!" como texto alternativo (alt).-

//4.ANÁLISIS DEL CÓDIGO.-
//Este componente DogCard se utiliza para representar tarjetas de perros en una aplicación React. Cada tarjeta muestra información sobre un perro, incluyendo su nombre, peso mínimo, temperamentos y una imagen. Además, permite al usuario hacer clic en el nombre del perro para acceder a una página de detalles específica para ese perro.-