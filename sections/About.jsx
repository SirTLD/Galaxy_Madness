'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import React from 'react';

import styles from '../styles';

import { fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className='gradient-02 z-0' />
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title='| About Galaxity' textStyles='text-center' />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
            >
                <span className='font-extrabold text-white'>Galaxity</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it is really real, you can feel what you feel in this Galaxity
        world, because this is really the{' '}
                <span className='font-extrabold text-white'>
          madness of the Galaxity
                </span>{' '}
        of today, using only{' '}
                <span className='font-extrabold text-white'>VR</span> devices you can
        easily explore the Galaxity world you want, turn your dreams into
        reality. Let us
                <span className='font-extrabold text-white'>explore</span> of Galaxity
        by scrolling down
            </motion.p>
            <motion.img
                src='/arrow-down.svg'
                alt='arrow-down'
                variants={fadeIn('up', 'tween', 0.4, 1)}
                className='w-[18px] h-[28px] object-contain mt-[28px]'
            />
        </motion.div>
    </section>
);
export default About;