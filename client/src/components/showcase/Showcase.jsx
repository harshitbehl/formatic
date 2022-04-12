import React from "react";
import "./Showcase.scss";

import showcaseIllustration from "../../assets/svg/showcaseIllustration.svg";
import { motion } from "framer-motion";

function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase__container main-container">
        <div className="showcase__content-container">
          <h1>
            <motion.span
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              Omnipresent
            </motion.span>{" "}
            Take Home Task
          </h1>
          <p>Frontend Task, by Harshit Behl</p>
          <a href="#task-section">
            <motion.button
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: 2,
                delay: 1.5,
              }}
            >
              View Task
            </motion.button>
          </a>
        </div>
        <div className="showcase__graphic-container">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={showcaseIllustration}
            alt="Showcase Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
