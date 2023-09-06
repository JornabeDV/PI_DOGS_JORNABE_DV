//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import style from "./Nav.module.css";
import { Link } from "react-router-dom";//Componente Link de "react-router-dom" para crear enlaces a diferentes rutas de la aplicación.-
import { useEffect, useRef } from "react";//Hooks de React. useRef: es un React Hook que le permite hacer referencia a un valor que no es necesario para renderizar.-

//2.DEFINICIÓN DEL COMPONENTE.-
const Nav = () => {
  
  //3.CREACIÓN DE UNA REFERENCIA.-
  //Se crea una referencia llamada buttonRef utilizando el Hook useRef.-
  const buttonRef = useRef(null);

  //4.USO DE USEEFECCT PARA ESTABLECER ENFOQUE INICIAL.-
  //Se utiliza el Hook useEffect para realizar una acción después de que el componente se haya montado. En este caso, se establece el enfoque en el botón "Home" utilizando la referencia buttonRef y su método .focus(). El segundo argumento de useEffect (un arreglo vacío []) garantiza que esta acción se realice solo una vez al montar el componente.
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  //4.RENDERIZADO DEL COMPONENTE.-
  return (
    <nav className={style.navBar}>
      <div className={style.containerBtn}>
        <Link to={"/home"}>
          <button ref={buttonRef} className={style.navBtn}>
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
// El botón "Home" tiene una referencia ref={buttonRef}, lo que significa que se establecerá como el primer elemento enfocado cuando el componente se monte. Los demás botones no tienen esta referencia.-
// Cada botón tiene una clase CSS navBtn definida en el archivo de estilos. Estos estilos se aplicarán a los botones.-

//5.ANÁLISIS DE CÓDIGO.-
//Este componente Nav se utiliza para mostrar una barra de navegación en la aplicación web. Incluye botones que enlazan a diferentes rutas de la aplicación, y utiliza una referencia para enfocar automáticamente el botón "Home" cuando el componente se carga por primera vez. Los estilos de la barra de navegación se aplican mediante CSS.-
