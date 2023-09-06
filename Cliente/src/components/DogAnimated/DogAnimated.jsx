import style from "./DogAnimated.module.css";

import { motion } from "framer-motion";
import dogImage from "../../Assets/dogGif.gif";

const DogAnimated = () => {
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

export default DogAnimated;
