//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import style from "./Nav.module.css";
import { Link } from "react-router-dom";//Componente Link de "react-router-dom" para crear enlaces a diferentes rutas de la aplicación.-

//2.DEFINICIÓN DEL COMPONENTE.-
const Nav = () => {
  

  //4.RENDERIZADO DEL COMPONENTE.-
  return (
    <nav className={style.navBar}>
      <div className={style.containerBtn}>
        <Link to={"/home"}>
          <button  className={style.navBtn}>
            Home
          </button>
        </Link>
        <Link to={"/form"}>
          <button className={style.navBtn}>New Dog</button>
        </Link>
        <Link to={"/about"}>
          <button className={style.navBtn}>About</button>
        </Link>
        <Link to={"/"}>
          <button className={style.navBtn}>Get Out</button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;

//4.RENDERIZADO DEL COMPONENTE.-
//Se crea un elemento <nav> con una clase CSS navBar para representar la barra de navegación.
// Dentro de un <div> con la clase CSS containerBtn, se crean varios botones, cada uno dentro de un componente Link de "react-router-dom". Esto crea enlaces a diferentes rutas de la aplicación.-
// Cada botón tiene una clase CSS navBtn definida en el archivo de estilos. Estos estilos se aplicarán a los botones.-

//5.ANÁLISIS DE CÓDIGO.-
//Este componente Nav se utiliza para mostrar una barra de navegación en la aplicación web. Incluye botones que enlazan a diferentes rutas de la aplicación. Los estilos de la barra de navegación se aplican mediante CSS.-
