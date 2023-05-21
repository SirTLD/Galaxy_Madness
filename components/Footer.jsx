"use client";

import { motion } from "framer-motion";

import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

import styles from "../styles";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-graident" />
  </motion.footer>
);

export default Footer;
