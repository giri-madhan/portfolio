import { motion } from "framer-motion";
import "./Navbar.scss";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Giri Madhan
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/instagram.png" alt="instagram" />
          </a>
          {/* <a href="#">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/github.png" alt="github" />
          </a> */}
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
