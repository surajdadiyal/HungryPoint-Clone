import { motion } from 'motion/react';
import React from 'react';

function Transition({ Component }) {
    if (!Component) {
        throw new Error('Component prop is required and should be a valid React component');
    }

    return (
        <>
            {/* Transition effect background */}
            <motion.div
                className="fixed top-0 left-0 w-full origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-black origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Render the actual component */}
            <motion.div
                key={Component}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <Component />
            </motion.div>
        </>
    );
}

export default Transition;
