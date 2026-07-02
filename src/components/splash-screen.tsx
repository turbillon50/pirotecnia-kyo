'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  // hide after 2.6 s → exit transition 0.4 s = 3 s total
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  // particle offsets (generated once)
  const particles = useMemo(
    () =>
      Array.from({ length: 5 }).map(() => ({
        dx: (Math.random() - 0.5) * 40,
        dy: (Math.random() - 0.5) * 40,
      })),
    []
  );

  // SVG path for the fuse
  const fusePath = 'M0,100 C30,70 70,30 100,0';

  const pathVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1.4, ease: 'linear' } },
  };

  const sparkVariants: Variants = {
    hidden: { cx: 0, cy: 100 },
    visible: {
      cx: [0, 50, 100],
      cy: [100, 50, 0],
      transition: { duration: 1.4, ease: 'linear' },
    },
  };

  const flashVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 0.9, 0],
      transition: { duration: 0.35, delay: 1.4, ease: 'easeOut' },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1.4, ease: 'easeOut' },
    },
  };

  const containerExit = { opacity: 0, transition: { duration: 0.4 } };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={containerExit}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
            overflow: 'hidden',
          }}
        >
          {/* Fuse and Spark */}
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ duration: 1.7, times: [0, 0.82, 1], ease: 'easeOut' }}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blurred" />
                <feMerge>
                  <feMergeNode in="blurred" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d={fusePath}
              stroke="#FFD700"
              strokeWidth={2}
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Spark */}
            <motion.circle
              r={4}
              fill="#FFD700"
              filter="url(#glow)"
              variants={sparkVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Particles */}
            {particles.map((p, i) => (
              <motion.circle
                key={i}
                r={3}
                fill="#FF6B00"
                cx={0}
                cy={100}
                animate={{
                  cx: [0, p.dx + 100],
                  cy: [100, p.dy],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: 'easeOut',
                }}
              />
            ))}
          </motion.svg>

          {/* Flash overlay */}
          <motion.div
            variants={flashVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(45deg, #fff, #ff6b00)',
            }}
          />

          {/* Main image */}
          <motion.img
            src="/brand/cartel.jpg"
            alt="Pirotecnia KYO"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              userSelect: 'none',
            }}
            draggable={false}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}