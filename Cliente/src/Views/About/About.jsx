//1.IMPORTACIÓN DE ESTILOS CSS E IMAGENES.-
import style from "./About.module.css";
import reactLogo from "../../Assets/Img/image-4.png";
import javascriptLogo from "../../Assets/Img/image-3.png";
import reduxLogo from "../../Assets/Img/image-5.png";
import postgreLogo from "../../Assets/Img/image-9.png";
import sequelizeLogo from "../../Assets/Img/image-8.png"
import expressLogo from "../../Assets/Img/image-7.png"
import htmlLogo from "../../Assets/Img/image-2.png"
import nodeLogo from "../../Assets/Img/image-6.png"
import visualLogo from "../../Assets/Img/image-11.png"
import gitHubLogo from "../../Assets/Img/image-10.png"
import { Link } from "react-router-dom"




//2.DEFINICIÓN DEL COMPONENTE.-
const About = () => {
  return (
    <div className={style.container}>
      <h1>PROYECTO INDIVIDUAL  SOY HENRY</h1>
      <h2>BEJA ROSA, JORGE NAHUEL</h2>
        <div className={style.containerSon}>
          <h2 className={style.tecnoLogo}>TECNOLOGÍAS APLICADAS:</h2>
          <div className={style.containerLogo}>
            <h2 className={style.tecnoLogo}>FRONTEND:</h2>
              <img alt="react" src={reactLogo} className={style.logo}></img>
              <img alt="javacript" src={javascriptLogo} className={style.logo}></img>
              <img alt="redux" src={reduxLogo} className={style.logo}></img>
              <img alt="html" src={htmlLogo} className={style.logo}></img>
            <h2 className={style.tecnoLogo}>BACKEND:</h2>
              <img alt="redux" src={reduxLogo} className={style.logo}></img>
              <img alt="postgre" src={postgreLogo} className={style.logo}></img>
              <img alt="sequelize" src={sequelizeLogo} className={style.logo}></img>
              <img alt="express" src={expressLogo} className={style.logo}></img>
              <img alt="node" src={nodeLogo} className={style.logo}></img>
            <h2 className={style.tecnoLogo}>OTHERS:</h2>
            <img alt="visual" src={visualLogo} className={style.logo}></img>
            <img alt="gitHub" src={gitHubLogo} className={style.logo}></img>
          </div>
          <Link to={"/home"}>
            <button className={style.btnAbout}>Go Home!</button>
          </Link>
        </div>
    </div>
  );
};

//3.EXPORTACIÓN DEL COMPONENTE.-
export default About;
