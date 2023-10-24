'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
// ${styles.paddings} is an example of a string interpolation or template literal in JavaScript. It's used to embed expressions inside template literals. In this case, it's used to dynamically assign a CSS class name to the className attribute of the <section> element.
// id="explore" assigns the id attribute to the <section> element. The id attribute uniquely identifies the element in the document. It can be useful for various purposes, including linking to specific sections of a webpage, applying styles using CSS, or targeting the element with JavaScript for interactivity or manipulation.
// giving id="explore" is going to allow us to scroll

// {...world} spreading the worlds
const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
