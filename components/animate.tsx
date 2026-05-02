'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Variant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'

const variants: Record<Variant, { hidden: object; visible: object }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
}

interface AnimateProps {
  children: React.ReactNode
  className?: string
  variant?: Variant
  delay?: number
  duration?: number
  once?: boolean
}

export function Animate({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.55,
  once = true,
}: AnimateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container — children animate in sequence
interface StaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
  childVariant?: Variant
  childDuration?: number
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
  childVariant = 'fadeUp',
  childDuration = 0.5,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={variants[childVariant]}
              transition={{ duration: childDuration, ease: [0.22, 1, 0.36, 1] }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}

// Counter animation for numbers
interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function CountUp({ end, suffix = '', prefix = '', duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span>
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          {inView ? (
            <MotionCount end={end} suffix={suffix} duration={duration} />
          ) : (
            '0'
          )}
        </motion.span>
      </motion.span>
    </motion.span>
  )
}

function MotionCount({ end, suffix, duration }: { end: number; suffix: string; duration: number }) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
    >
      <motion.span
        initial="0"
        animate={String(end)}
        transition={{ duration }}
      />
      {end}{suffix}
    </motion.span>
  )
}
