
//1.DEFINICIÓN DE LA FUNCIÓN.-
const validate = (data) => {
  
  //2.CREACIÓN DE VARIABLES.-

  //Esta variable contiene una expresión regular que se utiliza para validar si una URL es válida para una imagen. La expresión regular busca URLs que comiencen con "http://" o "https://" y que terminen con una extensión de imagen válida (png, gif, webp, jpeg o jpg).-
  let regexURLImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  
  //Se inicializa como un objeto vacío que se utilizará para almacenar los mensajes de error encontrados durante la validación.-
  const errors = {};
  
  //3.VALIDACIÓN DE CAMPOS.-
  // Verifica si el campo name está vacío y agrega un mensaje de error si es así.-
  if (!data.name) {
    errors.name = "Name is required!";
  }
  //Verifica si alguno de los campos de altura (height_min o height_max) está vacío y agrega un mensaje de error si es así.-
  if (!data.minHeight || !data.maxHeight) {
    errors.height = "Both height values are required!";
  //Verifica si los valores de altura son números positivos. Si no lo son, se agrega un mensaje de error.-
  } else if (data.minHeight <= 0 || data.maxHeight <= 0) {
    errors.height = "Both height values must be positive numbers!";
  }
  //Verifica si alguno de los campos de peso (weight_min o weight_max) está vacío y agrega un mensaje de error si es así.-
  if (!data.minWeight || !data.maxWeight) {
    errors.weight = "Both weight values are required!";
  //Verifica si los valores de peso son números positivos. Si no lo son, se agrega un mensaje de error.-
  } else if (data.minWeight <= 0 || data.maxWeight <= 0) {
    errors.weight = "Both weight values must be positive numbers!";
  }
  //Verifica si el campo life_span está vacío y agrega un mensaje de error si es así.
  if (!data.life_span) {
    errors.life_span = "Life Span is required!";
  }
  //Verifica si el campo image está vacío o si la URL de la imagen no cumple con la expresión regular regexURLImage. Si no se proporciona una URL válida de imagen, se agrega un mensaje de error.
  if (!data.image || !regexURLImage.test(data.image)) {
    errors.image = "Image URL is required and must be a URL of an image!";
  }
  //Devuelve el objeto errors que contiene mensajes de error para cada campo que no haya pasado la validación.-
  return errors;
};

//4.EXPORTACIÓN LA FUNCIÓN.-
export default validate;

//5.ANÁLISIS DEL CÓDIGO.-
//Esta función validate se utiliza para validar los datos ingresados en un formulario. Comprueba que los campos obligatorios no estén vacíos, que los campos numéricos sean números positivos y que la URL de la imagen sea una URL válida para una imagen. Si encuentra errores, los devuelve en un objeto de errores.-