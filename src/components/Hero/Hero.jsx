import { motion } from "framer-motion";
import "./hero.scss";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      swaggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2>Giri Madhan</motion.h2>
          <motion.h1>Senior Software Engineer</motion.h1>
          <motion.div className="buttons">
            <motion.button>See the Latest Works</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            variants={textVariants}
            animate="scrollButton"
            alt="scroll"
            role="button"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Frontend Developer, React Develoepr, Senior Software Engineer
        </motion.div>
        <div className="imageContainer">
          <img src="/hero.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
