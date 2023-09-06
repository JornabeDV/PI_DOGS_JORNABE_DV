//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import { Route, Routes } from "react-router-dom";//De la biblioteca "react-router-dom" para configurar rutas.-
import Nav from "../components/Nav/Nav";
import { Landing, Home, About, Detail, Form } from "../views/index";

//2.DEFINICIÓN DEL COMPONENTE.-
//Aquí se define la función App, que representa el componente principal de la aplicación.-
const App = () => {

  //3.
  return (
    <div>
          {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;

//3.ESTRUCTURA DEL COMPONENTE PRINCIPAL.-
//{location.pathname !== "/" && <Nav />}: Esto es una condición que verifica si la ubicación actual de la página no es la raíz ("/"), en cuyo caso se renderiza el componente.-
//Nav: se utiliza para la navegación en la aplicación.-
//<Routes>: Aquí se utiliza el componente Routes para definir las rutas de la aplicación. Dentro de este componente se definen varias rutas utilizando el componente.-
//Route: Cada ruta tiene un path (ruta) y un element (componente que se renderizará cuando se acceda a esa ruta).-
//<Route exact path="/" element={<Landing/>} />: Esta ruta corresponde a la página de inicio de la aplicación (ruta exacta "/"). Cuando el usuario accede a la ruta raíz, se renderiza el componente Landing.-
//<Route path="/home" element={<Home/>} />: Esta ruta corresponde a la página "Home". Cuando el usuario accede a la ruta "/home", se renderiza el componente Home.-
//<Route path="/form" element={<Form/>} />: Esta ruta corresponde a la página "Form". Cuando el usuario accede a la ruta "/form", se renderiza el componente Form.-
//<Route path="/about" element={<About/>} />: Esta ruta corresponde a la página "About". Cuando el usuario accede a la ruta "/about", se renderiza el componente About.-
//<Route path="/detail/:id" element={<Detail/>} />: Esta ruta corresponde a la página de detalles con un parámetro dinámico ":id". Cuando el usuario accede a una ruta como "/detail/1" o "/detail/2", se renderiza el componente Detail. El valor de ":id" se puede acceder dentro del componente Detail para mostrar información específica.-

//4.ANÁLISIS DEL CÓDIGO.-
//Este código configura las rutas de una aplicación React utilizando la biblioteca "react-router-dom". Dependiendo de la ruta a la que acceda el usuario, se renderizarán diferentes componentes en la interfaz de la aplicación. Además, se muestra el componente Nav en todas las rutas excepto en la ruta raíz ("/").-