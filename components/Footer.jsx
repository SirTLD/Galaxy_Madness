'use client';

import { motion } from 'framer-motion';

import { socials } from '../constants';
import React from 'react';
import { footerVariants } from '../utils/motion';

import styles from '../styles';

const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial='hidden'
        whileInView='show'
        className={`${styles.paddings} py-8 relative`}
    >
        <div className='footer-graident' />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className='flex items-center justify-between flex-wrap gap-5'>
                <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
          Enter the Galaxity
                </h4>
                <button
                    type='button'
                    className='flex item-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'
                >
                    <img
                        src='/headset.svg'
                        alt='headset'
                        className='w-[24px] object-contain'
                    />
                    <span className='font-normal text-[16px] text-white'>
            ENTER GALAXITY
                    </span>
                </button>
            </div>
            <div className='flex flex-col'>
                <div className='mb-[50px] opacity-10 bg-white h-[2px]' />
                <div className='flex item-center justify-between gap-4 flex-wrap'>
                    <h4 className='font-extrabold text-[24px] text-white'>Galaxity </h4>
                    <p className='font-normal text-white opacity-50 text-[14px]'>
            Copyright © 2020 - 2023 Galaxicity. All rights reserved.
                    </p>
                    <div className='flex gap-4'>
                        {socials.map((social) => (
                            <img
                                key={social.name}
                                src={social.url}
                                alt={social.name}
                                className='w-[24px] h-[24px] object-contain cursor-pointer'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
);

export default Footer;
