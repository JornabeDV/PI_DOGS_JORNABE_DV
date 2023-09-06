//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-  
import ReactDOM from 'react-dom/client'; // Importa el módulo ReactDOM para renderizar la aplicación en el DOM.-
import "./index.css"; // Importa un archivo de hoja de estilo CSS.-
import App from '../App/App.jsx'; // Importa el componente principal de la aplicación.-
import { BrowserRouter } from "react-router-dom"; // Importa el componente BrowserRouter de "react-router-dom" para gestionar las rutas.-
import { Provider } from 'react-redux'; // Importa el componente Provider de "react-redux" para proporcionar el almacenamiento Redux a la aplicación.-
import store from "../redux/store"; // Importa el almacenamiento Redux configurado previamente.-

//2.RENDERIZACIÓN DE LA APLICACIÓN.-
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)

//2.RENDERIZACIÓN DE LA APLICACIÓN.-
//ReactDOM.createRoot(document.getElementById('root')): Esto crea un "root" de ReactDOM que representa el punto de entrada de la aplicación en el DOM. Se utiliza document.getElementById('root') para seleccionar el elemento HTML con el ID "root" en el documento HTML.-

//.render(): Luego, se llama al método render() en este "root" de ReactDOM para renderizar la aplicación en el elemento con el ID "root".-

//<Provider store={store}>: El componente Provider de React Redux se utiliza para proporcionar el almacenamiento Redux (store) a todos los componentes de la aplicación. Esto permite que los componentes accedan al estado global de Redux y despachen acciones.-

//<BrowserRouter>: El componente BrowserRouter de "react-router-dom" se utiliza para configurar la navegación basada en rutas en la aplicación. Esto permite la navegación entre diferentes vistas o componentes en función de la URL.-

//<App />: El componente principal de la aplicación (App) se renderiza dentro del BrowserRouter. Este es el componente raíz de la aplicación y generalmente contiene la lógica principal y las rutas de la aplicación.-

//3.ANÁLISIS DEL CÓDIGO.-

//Este código es la entrada principal de la aplicación de React. Utiliza ReactDOM para renderizar el componente App dentro del elemento HTML con el ID "root". Además, utiliza BrowserRouter de "react-router-dom" para habilitar la navegación basada en rutas y el Provider de React Redux para proporcionar el almacenamiento Redux a la aplicación, lo que permite la gestión del estado global de la aplicación a través de Redux.