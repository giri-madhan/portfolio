import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Services.scss";
import { useRef } from "react";

const Services = () => {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },

    animate: {
      x: 0,
      y: 1,
      opacity: 1,

      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();

  const isInView = useInView(ref, {
    margin: "-100px",
  });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum,
            totam expedita voluptatum aspernatur dignissimos corporis ipsa error
            quisquam assumenda?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos
            magnam explicabo libero nesciunt modi voluptate ducimus dolorem odit
            vero.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur ea maiores optio vero natus. Pariatur porro laboriosam
            animi a odit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illum
            alias id modi ex? At, aliquid! Asperiores nisi tempore adipisci.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
