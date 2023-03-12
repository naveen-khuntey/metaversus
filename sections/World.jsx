'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World"
        textStyles="text-center"
      />
      <TitleText
        title={(
          <>
            Track friends around you and invite
            them to plar together in the same world
          </>
      )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full
        h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px]
          h-[70px] p-[6px] rounded-full bg-[#5d6680]"
        >
          <img
            src="people-01.png" alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-[12%] w-[70px]
          h-[70px] p-[6px] rounded-full bg-[#5d6680]"
        >
          <img
            src="people-02.png" alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px]
          h-[70px] p-[6px] rounded-full bg-[#5d6680]"
        >
          <img
            src="people-03.png" alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[15%] left-[60%] w-[180px]
          h-[100px] rounded-[24px] p-[6px] bg-[#5d6680]"
        >
          <img
            src="planet-05.png" alt="people"
            className="w-full h-full rounded-[24px]"
          />
          <h4 className="z-10 text-white absolute top-[40%] left-[10%]">
            +245 has joined
          </h4>
          <h4 className="z-10 pl-[10%] text-white absolute top-[60%] left-[10%]">
            Hwakins Lab
          </h4>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
