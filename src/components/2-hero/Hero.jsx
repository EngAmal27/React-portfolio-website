import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import Portfolio from "../../../public/me-modified.png";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src={Portfolio}
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Dev Aml Front-end Developer UI/Ux Designer  And Instructor
        </motion.h1>

        <div className="all-icons flex">
          <a
            href="https://twitter.com/EngAmalAhmed1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <div className="icon icon-twitter"></div>
          </a>
          <a
            href="https://www.instagram.com/dev_aml27/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon icon-instagram"></div>
          </a>

          <a
            href="https://github.com/EngAmal27"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>

          <a
            href="https://linkedin.com/in/amal-ahmed-174392217

            "
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
       
      </div>
    </section>
  );
};

export default Hero;
