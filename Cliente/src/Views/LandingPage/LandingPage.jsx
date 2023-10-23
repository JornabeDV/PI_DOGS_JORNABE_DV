//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import { Link } from "react-router-dom";// Link función que permite direccionar a otro sitio de la web.-
import style from "./LandingPage.module.css";
import DogAnimated from "../../components/DogAnimated/DogAnimated";

//2.DEFINICIÓN DEL COMPONENTE.-
//Este componente representa la página de inicio de la aplicación.-
const Landing = () => {
  //3.RENDERIZACIÓN DEL COMPONENTE.-
  return (
    <div className={style.fullContainer}>
      <DogAnimated />
      <div className={style.container}>
        <h1 className={style.title}>DOGS WORLD</h1>
        <Link to={"/home"}>
          <button className={style.btn}>Go Home!</button>
        </Link>
      </div>
    </div>
  );
};

//5.EXPORTACIÓN DEL COMPONENTE.-
export default Landing;

//4.RENDERIZACIÓN DEL COMPONENTE.-
//Se crea la estructura JSX (JavaScript XML) que representa la interfaz de usuario de la página de inicio.-
//Se utiliza el componente <Link> de react-router-dom para crear un enlace a la ruta /home. Esto permite la navegación a la página de inicio de la aplicación cuando se hace clic en el botón "Click Me!".
//<dogAnimated /> representa un componente llamado DogAnimated, que muestra una animación o imagen de un perro animado en la página de inicio.-

//6.ANÁLISIS DEL CÓDIGO.-
//Este código representa un componente funcional de React llamado Landing que define la página de inicio de una aplicación. La página contiene información sobre la aplicación y un botón que permite navegar a la página principal (/home) de la aplicación cuando se hace clic en él. También muestra una animación de un perro (<dogAnimated />) en la página de inicio. Las clases de estilo se aplican a los elementos HTML mediante el uso de CSS modular.-