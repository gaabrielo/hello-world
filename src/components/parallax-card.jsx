import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import bgImage from '../assets/parallax/bg.png';
import midImage from '../assets/parallax/parallax-2.png';
import frontImage from '../assets/parallax/parallax-1.png';
import { cn } from '../utils/cn';

/**
 * ParallaxCard Component
 * * @param {boolean} globalTrigger - If true, animation reacts to mouse movement anywhere on screen.
 * If false (default), reacts only when hovering the card.
 * @param {string} bgImage - Path to the background layer image
 * @param {string} midImage - Path to the middle floating rocks layer image
 * @param {string} frontImage - Path to the foreground man/hill layer image
 */
export const ParallaxCard = ({
  globalTrigger = false,
  className = '',
  // bgImage = '/path-to-your-bg-layer.png',
  // midImage = '/path-to-your-mid-rocks-layer.png',
  // frontImage = '/path-to-your-front-man-layer.png',
}) => {
  const containerRef = useRef(null);

  // 1. Motion Values: We track X and Y mouse position normalized between -1 and 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Springs: Add physics to make the movement smooth (no jitter)
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Transforms: Map the smooth mouse values to actual pixel movement.
  // The 'depth' is determined by how many pixels we move.
  // Background moves LESS (far away), Foreground moves MORE (close).

  // Background: Moves slightly opposite to mouse (or with, depending on desired feel)
  const bgX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const bgY = useTransform(smoothY, [-1, 1], [-15, 15]);

  // Middle (Floating Rocks): Moves moderately
  const midX = useTransform(smoothX, [-1, 1], [-50, 50]);
  const midY = useTransform(smoothY, [-1, 1], [-50, 50]);

  // Foreground (Man): Moves the most
  const frontX = useTransform(smoothX, [-1, 1], [-25, 25]);
  const frontY = useTransform(smoothY, [-1, 1], [-25, 25]);

  // 4. Mouse Handler Logic
  const handleMouseMove = (e) => {
    // If not global, and we are not hovering the container, do nothing
    if (!globalTrigger && !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Calculate center of the target area
    let centerX = 0;
    let centerY = 0;

    if (!globalTrigger) {
      // If not global, use the center of the card
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    } else {
      // If global, use the center of the window
      centerX = window.innerWidth / 2;
      centerY = window.innerHeight / 2;
    }

    // If global, use window coordinates. If local, we still compare to the card's center.
    // However, for Global mode, we might want to track based on window center or card center.
    // Here we stick to card center for the parallax focal point.

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // Normalize values to range approx -1 to 1 based on card dimensions
    // We divide by half the width/height
    mouseX.set(x / (rect.width / 2));
    mouseY.set(y / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    if (!globalTrigger) {
      // Reset to center when mouse leaves the card
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  useEffect(() => {
    if (globalTrigger) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [globalTrigger]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-[480px] overflow-clip rounded-[2.5rem]',
        className
      )}
      onMouseMove={!globalTrigger ? handleMouseMove : undefined}
      onMouseLeave={!globalTrigger ? handleMouseLeave : undefined}
    >
      {/* Container for the image layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Layer 3: Background (Furthest) */}
        <motion.div
          style={{ x: bgX, y: bgY, scale: 1.25 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={bgImage}
            alt="Background Sci-Fi"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Layer 2: Middle (Floating Rocks) */}
        <motion.div
          style={{ x: midX, y: midY, scale: 1.1 }}
          className="absolute inset-0 z-10"
        >
          <img
            src={midImage}
            alt="Floating Rocks"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Layer 1: Foreground (Man on Hill) */}
        <motion.div
          style={{ x: frontX, y: frontY, scale: 1.1 }}
          className="absolute inset-0 z-20"
        >
          <img
            src={frontImage}
            alt="Man on Hill"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Optional: Overlay Gradient/Vignette to blend edges if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-30 pointer-events-none" />
      </div>
    </div>
  );
};
