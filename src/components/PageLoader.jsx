import { motion } from 'framer-motion';
import { GiShipWheel, GiAnchor, GiSailboat } from 'react-icons/gi';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-primary-dark/90 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative w-64 h-64">
        {/* Outer Circle */}
        <motion.div
          className="absolute w-full h-full border-4 border-accent rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Middle Circle */}
        <motion.div
          className="absolute w-3/4 h-3/4 border-4 border-secondary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Inner Circle */}
        <motion.div
          className="absolute w-1/2 h-1/2 border-4 border-accent-light rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Icons */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GiShipWheel className="text-accent text-4xl" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GiAnchor className="text-secondary text-3xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GiSailboat className="text-accent-light text-3xl" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-white font-heading">Loading...</span>
        </motion.div>
      </div>
    </div>
  );
};

export default PageLoader; 