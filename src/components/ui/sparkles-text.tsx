'use client';

import { type CSSProperties, type ReactElement, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  repeatDelay: number;
}

interface SparklesTextProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the text
   * */
  as?: ReactElement;

  /**
   * @default ""
   * @type string
   * @description
   * The className of the text
   */
  className?: string;

  /**
   * @required
   * @type string
   * @description
   * The text to be displayed
   * */
  text: string;

  /**
   * @default 12
   * @type number
   * @description
   * The count of sparkles
   * */
  sparklesCount?: number;

  /**
   * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
   * @type string
   * @description
   * The colors of the sparkles
   * */
  colors?: {
    first: string;
    second: string;
  };
}

const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = { first: '#0088B3', second: '#A8D8EA' },
  className,
  sparklesCount = 12,
  ...props
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setSparkles([]);
      return;
    }

    // Fixed slots across the full width so stars don't cluster on one side
    const generateStar = (i: number): Sparkle => {
      const slot = (i + 0.5) / sparklesCount;
      const jitterX = (Math.random() - 0.5) * (70 / sparklesCount);
      const x = `${Math.min(94, Math.max(6, slot * 100 + jitterX))}%`;
      // Spread vertically around letter edges (top / mid / bottom)
      const band = i % 3;
      const yBase = band === 0 ? 8 : band === 1 ? 42 : 72;
      const y = `${yBase + (Math.random() - 0.5) * 18}%`;
      const color = i % 2 === 0 ? colors.first : colors.second;
      // Overlapping stagger: several sparkles visible at once
      const delay = (i / sparklesCount) * 1.8 + Math.random() * 0.35;
      const scale = Math.random() * 0.45 + 0.4;
      const repeatDelay = 0.2 + Math.random() * 0.55;
      return {
        id: `sparkle-${i}`,
        x,
        y,
        color,
        delay,
        scale,
        repeatDelay,
      };
    };

    setSparkles(Array.from({ length: sparklesCount }, (_, i) => generateStar(i)));
  }, [colors.first, colors.second, sparklesCount, prefersReducedMotion]);

  return (
    <span
      className={cn('relative inline-block font-bold', className)}
      {...props}
      style={
        {
          '--sparkles-first-color': `${colors.first}`,
          '--sparkles-second-color': `${colors.second}`,
        } as CSSProperties
      }
    >
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
      <strong className="relative z-10 font-[inherit]">{text}</strong>
    </span>
  );
};

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale, repeatDelay }) => {
  return (
    <span
      className="pointer-events-none absolute z-20"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      <motion.svg
        key={id}
        initial={{ opacity: 0, scale: 0, rotate: 40 }}
        animate={{
          opacity: [0, 0.95, 0],
          scale: [0, scale, 0],
          rotate: [40, 90, 130],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
          repeatDelay,
        }}
        width="18"
        height="18"
        viewBox="0 0 21 21"
      >
        <path
          d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
          fill={color}
        />
      </motion.svg>
    </span>
  );
};

export { SparklesText };
