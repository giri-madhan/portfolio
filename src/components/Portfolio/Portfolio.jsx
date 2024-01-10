import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";
import SinglePortfolio from "./Widgets/SinglePortfolio";

// TODO: Update with real projects data
const items = [
  {
    id: 1,
    title: "E-Commerce",
    img: "https://raw.githubusercontent.com/codewithsadee/anon-ecommerce-website/master/website-demo-image/desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam quaerat quis maiores itaque iste non temporibus harum aliquam illum.",
  },
  {
    id: 2,
    title: "Todo tasks",
    img: "https://raw.githubusercontent.com/codewithsadee/anon-ecommerce-website/master/website-demo-image/desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam quaerat quis maiores itaque iste non temporibus harum aliquam illum.",
  },
  {
    id: 3,
    title: "Gramamr coach app",
    img: "https://raw.githubusercontent.com/codewithsadee/anon-ecommerce-website/master/website-demo-image/desktop.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam quaerat quis maiores itaque iste non temporibus harum aliquam illum.",
  },
  {
    id: 4,
    title: "Book Suggestions App",
    img: "https://raw.githubusercontent.com/codewithsadee/anon-ecommerce-website/master/website-demo-image/desktop.png",
    description:
      "Lorem    ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam quaerat quis maiores itaque iste non temporibus harum aliquam illum.",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <SinglePortfolio item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
