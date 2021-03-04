import { motion, AnimatePresence } from 'framer-motion';
import { Location } from 'history';
import { memo } from 'react';
import { Switch } from 'react-router-dom';

export default memo(function AnimatedSwitch({
  location,
  children,
}: {
  location: Location<unknown>;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        key={location.pathname}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          opacity: { duration: 0.3 },
        }}
      >
        <Switch location={location}>{children}</Switch>
      </motion.div>
    </AnimatePresence>
  );
});

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};
