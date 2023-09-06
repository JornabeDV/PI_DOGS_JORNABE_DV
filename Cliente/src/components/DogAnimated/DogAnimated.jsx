import style from "./DogAnimated.module.css";

// import { motion } from "framer-motion";


const DogAnimated = () => {
  return (
    <div className={style.dogContainer}>
      <div
        className={style.dog}
        // initial={{ x: 0 }}
        // animate={{ x: "100vw" }}
        // transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <img  alt="Dog" className={style.image} />
      </div>
    </div>
  );
};

export default DogAnimated;
