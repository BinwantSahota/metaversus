'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
// typingtext component it is excepting 2 props title and textstyles
// arry.from(title) splits the characters in the title into an array then we gonna map those letters , parenthesis are used instead of curly brackets to get instant return
// then the letter is rendered whenever space is encountered it replaces it with ascii character
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
