//1.IMPORTACIÓN DE MÓDULOS Y COMPONENTES.-
import axios from "axios";//Se importa Axios para realizar solicitudes HTTP.-
import style from "./Form.module.css";//Se importan módulos de estilos CSS locales.-
import { useState, useEffect } from "react";//Se importa el hook useState de React para gestionar el estado del formulario.Se importa useEffect de React, que se utilizará para realizar efectos secundarios en el componente.-
import { useNavigate } from "react-router-dom";//Se utiliza useNavigate de react-router-dom para navegar a otras rutas después de enviar el formulario.-
import validate from "./validation";//Se importa una función de validación.-
import { useSelector, useDispatch } from "react-redux";//Se importa useSelector y useDispatch de Redux, que se utilizarán para acceder al estado global de Redux y despachar acciones.-
import { getTemperaments } from "../../redux/actions";//Se importa la acción getTemperaments desde Redux.-

//2.DEFINICIÓN DEL COMPONENTE.-
const Form = () => {
  const navigate = useNavigate();
  
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  //3.CONFIGURACIÓN DEL ESTADO INICIAL.-
  //Se inicializa el estado del formulario utilizando el hook useState. Se definen las propiedades del perro y se establecen en valores iniciales en blanco o nulos.-
  const [dogData, setDogData] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperaments: [],
    image: "",
  });

  //4.CONFIGURACIÓN DEL ESTADO DE ERRORES.-
  //Se inicializa el estado de errores, que se utilizará para mostrar mensajes de error cuando el usuario ingrese datos incorrectos en el formulario.-
  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: "",
    image: "",
  });

  //5.CONFIGURACIÓN ESTADO DEL BOTÓN DE ENVÍO.-
  const [disabled, setDisabled] = useState(true);

  //6.FUNCIONES PARA MANEJAR CAMBIOS.-
  //Se utiliza para manejar la selección de temperamentos desde un menú desplegable.-
  function handleSelect(e) {
    setDogData({
      ...dogData,
      temperaments: [...dogData.temperaments, e.target.value],
    });
  }
  //Se utiliza para eliminar un temperamento seleccionado.-
  function handleDelete(el) {
    setDogData({
      ...dogData,
      temperaments: dogData.temperaments.filter((temp) => temp !== el),
    });
  }
  //Se utiliza para habilitar o deshabilitar el botón de envío según si hay errores en el formulario.-
  const btnState = (err) => {
    if (Object.keys(err).length === 0) setDisabled(false);
  };

  //Función handleChange para manejar cambios en los campos del formulario.-
  //Esta función se ejecuta cada vez que un campo del formulario cambia. Actualiza el estado del formulario, valida los datos y establece los errores correspondientes. Luego, llama a btnState para determinar si el botón de envío debe estar habilitado o deshabilitado.-
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({ ...dogData, [property]: value });
    setDogData({ ...dogData, [property]: value });
    setErrors(validate({ ...dogData, [property]: value }));
    btnState(validate({ ...dogData, [property]: value }));
  };

  //Función handleSubmit para manejar el envío del formulario.-
  //Realiza una solicitud HTTP POST a la URL "http://localhost:3001/dogs" con los datos del perro.-
  //Muestra una alerta con la respuesta de la solicitud (éxito o error).-
  //Navega a la ruta "/home" después de enviar el formulario.-
  const handleSubmit = async (event) => {
    event.preventDefault();//No puedo actualizar la página hasta completar el form.-
    try {
      await axios.post("http://localhost:3001/dogs", dogData);
      alert("Dog Create!");
      // Utiliza navigate("/home") para redireccionar a la página de inicio
      navigate("/home");
    } catch (error) {
      alert(error.response.data.errors.join("\n"));
    }
  };

  //7.RENDERIZACIÓN DEL COMPONENTE.-
  //El componente se renderiza dentro de un formulario (<form>) que contiene campos para ingresar los detalles del perro, como nombre, altura, peso, etc. Los mensajes de error se muestran junto a los campos si se detectan errores de validación. El usuario puede seleccionar temperamentos desde un menú desplegable y eliminarlos si es necesario. El botón de envío solo está habilitado si no hay errores en el formulario.-
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <h1>Create New Dog</h1>
          <div className={style.containerInput}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={dogData.name}
              onChange={handleChange}
              className={errors.name ? style.error : style.success}
            />
            <p className={errors.name ? style.errorMsj : null}>
              {errors.name}
            </p>
          </div>
          <div className={style.containerInput}>
            <h4>Heights (cm)</h4>
            <div className={style.heightInput}>
              <label htmlFor="minHeight">Min</label>
              <input
                type="number"
                name="minHeight"
                value={dogData.minHeight}
                onChange={handleChange}
                className={errors.height ? style.error : style.success}
              />
              <label htmlFor="maxHeight">Max</label>
              <input
                type="number"
                name="maxHeight"
                value={dogData.maxHeight}
                onChange={handleChange}
                className={errors.height ? style.error : style.success}
              />
            </div>
            <p className={errors.height ? style.errorMsj : null}>
              {errors.height}
            </p>
          </div>
          <div className={style.containerInput}>
            <h4>Weight (kg.)</h4>
            <div className={style.heightInput}>
              <label htmlFor="minWeight">Min</label>
              <input
                type="number"
                name="minWeight"
                value={dogData.minWeight}
                onChange={handleChange}
                className={errors.weight ? style.error : style.success}
              />
              <label htmlFor="maxWeight">Max</label>
              <input
                type="number"
                name="maxWeight"
                value={dogData.maxWeight}
                onChange={handleChange}
                className={errors.weight ? style.error : style.success}
              />
            </div>
            <p className={errors.weight ? style.errorMsj : null}>
              {errors.weight}
            </p>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="life_span">Life Span</label>
            <input
              type="text"
              name="life_span"
              value={dogData.life_span}
              onChange={handleChange}
              className={errors.life_span ? style.error : style.success}
            />
            <p className={errors.life_span ? style.errorMsj : null}>
              {errors.life_span}
            </p>
          </div>
          <div className={style.containerInput}>
            <label>Temperaments</label>
            <select className={style.select} onChange={(e) => handleSelect(e)}>
              {temperaments.map((temp) => {
                return (
                  <option key={temp} name={temp}>
                    {temp}
                  </option>
                );
              })}
            </select>
            <div>
              {dogData.temperaments.map((e) => (
                <div className={style.tempContainer} key={e}>
                  <button
                    className={style.buttonDelete}
                    onClick={() => handleDelete(e)}
                  >
                    x
                  </button>
                  <p className={style.spanTemp}>{e}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              name="image"
              value={dogData.image}
              placeholder="http://webImage.png"
              onChange={handleChange}
              className={errors.image ? style.error : style.success}
            />
            <p className={errors.image ? style.errorMsj : null}>
              {errors.image}
            </p>
          </div>
          <div className={style.containerInput}>
            <button
              disabled={disabled}
              type="submit"
              className={disabled ? style.btnDisabled : style.btnEnabled}
            >
              Save Dog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

//8.EXPORTACIÓN DEL COMPONENTE.-
export default Form;

//9.ANÁLISIS DEL CÓDIGO.-
//Este componente Form se utiliza para crear un nuevo perro proporcionando detalles como nombre, altura, peso, temperamentos, etc. Los datos se envían al servidor mediante una solicitud HTTP POST y se muestra una alerta de éxito o error. El formulario también realiza validación de entrada y muestra mensajes de error en consecuencia.-
