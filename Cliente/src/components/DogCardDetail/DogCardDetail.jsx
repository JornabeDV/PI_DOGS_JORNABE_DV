//1.IMPORTACIÓN DEL MÓDULO DE ESTILOS.-
import style from "./DogCardDetail.module.css";

//2.DEFINICIÓN DEL COMPONENTE.-
//Este es un componente funcional de React llamado DogCardDetail. Recibe varias propiedades como argumentos, incluyendo name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments e image. Estas propiedades se utilizan para mostrar información detallada sobre un perro en la tarjeta de detalle.-
const DogCardDetail = ({ name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperament, image }) => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.nameTitle}>{ name }</h2>
        <h2>Height | { minHeight + " - " + maxHeight + " [cm.]" }</h2>
        <h2>Weight | { minWeight + " - " + maxWeight + " [kg.]" }</h2>
        <h2>Life Span | { life_span }</h2>
        <h2>Temperaments | { temperament }</h2>
      </div>
      <div className={style.imgContainer}>
        <img className={style.img} src={ image } alt={"No tiene imagen"}></img>
      </div>
    </div>
  );
};
export default DogCardDetail;

//3.ANÁLISIS DEL CÓDIGO.-
//Este componente DogCardDetail se utiliza para mostrar detalles detallados sobre un perro en una tarjeta de detalle. Muestra información como nombre, altura, peso, esperanza de vida, temperamentos y una imagen del perro, todo ello con estilos personalizados aplicados a través de CSS.-
