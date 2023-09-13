//1.IMPORTA ESTILOS Y LIBRERÍAS.-
import style from "./DogAnimated.module.css";
import { motion } from "framer-motion";//Se importa el componente motion de la librería framer-motion, que se utiliza para animar elementos en React.-
import dogImage from "../../Assets/dogGif.gif";

//2.DEFINICIÓN DEL COMPONENTE.-
//El componente es una función de React llamada DogAnimated.-
const DogAnimated = () => {
  //3.RENDERIZACIÓN DEL COMPONENTE.-
  return (
    <div className={style.dogContainer}>
      <motion.div
        className={style.dog}
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <img  alt="Dog" src={dogImage} className={style.image} />
        </motion.div>
    </div>
  );
};

//3.EXPORTACIÓN DEL COMPONENTE.-
export default DogAnimated;

//4.ANÁLISIS DEL CÓDIGO.-
//Este código crea un componente de React que muestra una animación de un perro moviéndose horizontalmente a lo largo de la ventana del navegador de manera infinita utilizando la librería framer-motion, y se aplican estilos CSS para darle formato.
