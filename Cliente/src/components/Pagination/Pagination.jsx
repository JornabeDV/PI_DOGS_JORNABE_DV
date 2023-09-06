//1.IMPORTACIÓN DE MÓDULOS Y ESTILOS.-
import style from "./Pagination.module.css"; //Importa el archivo CSS con los estilos.-

//2.DEFINICIÓN DEL COMPONENTE.-
//Este es un componente funcional de React llamado Pagination. Recibe tres propiedades como argumentos:
//currentPage: Número de la página actual.
//totalPages: Número total de páginas disponibles.
//onPageChange: Una función que se llama cuando se hace clic en un botón de paginación para cambiar de página.
const Pagination = ({ currentPage, totalPages, onPageChange }) => { //Traemos las propiedades de DogsCards

  //3.LÓGICA PARA DETERMINAR QUE BOTONES MOSTRAR.-
  //Estas variables booleanas se utilizan para controlar la visibilidad de los botones de paginación en función de la página actual y el número total de páginas disponibles, asegurando que solo se muestren los botones de navegación relevantes para la situación actual del usuario.- 
  const showFirstButton = currentPage > 2;
  const showPrevButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;
  const showLastButton = currentPage < totalPages - 1;

  //4.RENDERIZADO DEL COMPONENTE.-
  return (
    <div className={style.paginationContainer}>
      <div className={style.pagination}>
        {showFirstButton && (
          <span
            title="First page"
            className={style.pageLink}
            onClick={() => onPageChange(1)}
          >
            <>&#8810;</>
          </span>
        )}
        {showPrevButton && (
          <span
            title="Previous page"
            className={style.pageLink}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <>&#8630;</>
          </span>
        )}
        <span className={`${style.pageLink} ${style.currentPage}`}>
          {currentPage}
        </span>
        {showNextButton && (
          <span
            title="Next page"
            className={style.pageLink}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <>&#8631;</>
          </span>
        )}
        {showLastButton && (
          <span
            title="Last page"
            className={style.pageLink}
            onClick={() => onPageChange(totalPages)}
          >
            <>&#8811;</>
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;

//4.RENDERIZADO DEL COMPONENTE.-
//Se crea un contenedor <div> con la clase CSS paginationContainer que contiene los elementos de paginación.
// Dentro del contenedor, se encuentra otro <div> con la clase CSS pagination que contiene los botones de paginación.
// Los botones de paginación se muestran condicionalmente dependiendo de las variables booleanas showFirstButton, showPrevButton, showNextButton, y showLastButton.
// Cada botón tiene un atributo title que muestra un tooltip al pasar el cursor sobre él, una clase CSS pageLink que aplica estilos específicos y un evento onClick que llama a la función onPageChange para cambiar de página según la acción del usuario.

//5.ANÁLISIS DEL CÓDIGO.-
//El componente Pagination es una barra de paginación que se utiliza para navegar a través de un conjunto de datos paginado. Los botones de paginación se muestran u ocultan dinámicamente según la página actual y el número total de páginas disponibles, y se aplican estilos de acuerdo con las clases CSS definidas en el archivo de estilos.