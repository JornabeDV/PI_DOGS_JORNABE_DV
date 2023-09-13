//1.IMPORTACIÓN DEL MÓDULO DE ESTILOS.-
import style from "./DogCardDetail.module.css";
import { Link } from "react-router-dom";//Componente Link de "react-router-dom" para crear enlaces a diferentes rutas de la aplicación.

//2.DEFINICIÓN DEL COMPONENTE.-
//Este es un componente funcional de React llamado DogCardDetail. Recibe varias propiedades como argumentos, incluyendo name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments e image. Estas propiedades se utilizan para mostrar información detallada sobre un perro en la tarjeta de detalle.-
const DogCardDetail = ({name, minHeight, maxHeight, minWeight, maxWeight, life_span, image, temperament}) => {
  return (
    <div className={style.card}>
      <div className={style.textDetail}>
        <h3>{name}</h3>
        <h3>Height | {minHeight + " - " + maxHeight + " [cm.]"}</h3>
        <h3>Weight | {minWeight + " - " + maxWeight + " [kg.]"}</h3>
        <h3>Life Span | {life_span}</h3>
        <h3>Temperaments | {temperament}</h3>
        <Link to={"/home"}>
        <button className={style.btn}>Go Home!</button>
        </Link>
      </div>
        <img className={style.img} src={image} alt={"No tiene imagen"}></img>
    </div>
  );
};
export default DogCardDetail;

//3.ANÁLISIS DEL CÓDIGO.-
//Este componente DogCardDetail se utiliza para mostrar detalles sobre un perro en una tarjeta individual. Muestra información como nombre, altura, peso, esperanza de vida, temperamentos y una imagen del perro, todo ello con estilos personalizados aplicados a través de CSS.-
