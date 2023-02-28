import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { FunctionComponent, PropsWithChildren, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

type TransitionProps = PropsWithChildren<{
  animate?: {
    opacity?: number | number[];
    rotate?: number | number[];
    scale?: number | number[];
    borderRadius?: string | string[];
  };
  transition?: {
    duration?: number;
    ease?: string;
    times?: number[];
    delay?: number;
    repeat?: number;
    repeatDelay?: number;
  };
  key: string;
}>;

export const TransitionMotion: FunctionComponent<TransitionProps> = ({
  children,
  animate,
  transition,
  key,
}) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      ...animate,
      transition: {
        duration: 0.5,
        ...transition,
      },
    },
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
        variants={variants}
        ref={ref}
        style={{ width: '100%' }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
