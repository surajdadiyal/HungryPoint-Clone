import React, { useEffect } from 'react';
import { loader } from '../db/loader';
import { motion } from 'framer-motion';

function Loader({ setIsLoading }) {

    // Animation variants for staggered images
    const staggerImage = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,  // Reduced to create a quicker stagger
                delayChildren: 0.1,    // Reduced delay to make the images show up faster
                ease: "easeInOut",     // Smooth easing for transition
            }
        }
    };

    // Smooth scaling for each image with instant opacity change
    const imageScale = {
        hidden: {
            opacity: 0,
            scale: 0.2,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,       // Slightly higher stiffness for a quicker bounce
                damping: 25,          // Reduced damping to allow quicker scaling
                duration: 0.7,        // Reduced duration for quicker transition
            }
        }
    };

    // Last image animation to appear with a slight delay for smoothness
    const imageScaleLast = {
        hidden: {
            opacity: 0,
            scale: 0.2,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 1,            // Still provide delay for the last image to pop in later
                type: "tween",
                duration: 0.8,       // Duration for the last image
                ease: "easeInOut",   // Smooth transition ease
            }
        }
    };

    // Set loading state to false after animation completion
    const setLoadingToFalse = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjusted to match the animation time
    };

    // Effect for immediate animation rendering
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Delays the change in state to match animation timing
        return () => clearTimeout(timeout);
    }, [setIsLoading]);

    return (
        <div className="h-screen flex justify-between items-center px-8">
            <p className="text-sm font-semibold">Made with 💖 by</p>

            <motion.div
                className="w-[350px] h-[170px] relative overflow-hidden"
                variants={staggerImage}
                initial="hidden"
                animate="show"
                layoutId="smooth-transition"
            >
                {loader && loader.length > 0 && loader.map(({ name, url, zIndex }, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-full h-full"
                        style={{ zIndex: zIndex }}
                        variants={imageScale}  // Apply scaling to each image
                        layoutId="smooth-transition"
                    >
                        <img
                            src={url}
                            alt={name}
                            className="object-cover absolute w-full h-full"
                        />
                    </motion.div>
                ))}

                <motion.div
                    variants={imageScaleLast}
                    onAnimationComplete={setLoadingToFalse}
                    layoutId="smooth-transition"
                    className="relative z-50"
                >
                    <img
                        src="https://hungrypoint.in/img/Main-Banner-New1.webp"
                        alt="loader img"
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </motion.div>

            <p className="text-sm font-semibold">Suraj Kumar</p>
        </div>
    );
}

export default Loader;
