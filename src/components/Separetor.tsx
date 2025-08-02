import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Separator = ({ 
  color = "rgb(101, 253, 235)", 
  direction = "right",
  marginY = "2rem",
  glowIntensity = 0.6,
  glowSize = "200px"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  // Definisce i percorsi SVG per direzione destra (linee più spesse)
  const rightPaths = [
    "M 1555.02 0.813 L 419.227 0.813 L 419.227 15.578 L 1555.02 15.578 Z",
    "M 2255.05 15.578 L 751.766 15.578 L 751.766 30.344 L 2255.05 30.344 Z",
    "M 2208.17 35.875 L 0.484 35.875 L 0.484 50.641 L 2208.17 50.641 Z",
    "M 2160.91 50.64 L 473.262 50.64 L 473.262 65.406 L 2160.91 65.406 Z",
    "M 1944.286 70.937 L 302.875 70.937 L 302.875 85.703 L 1944.286 85.703 Z",
    "M 2333.806 85.703 L 873.069 85.703 L 873.069 100.469 L 2333.806 100.469 Z"
  ];

  // Definisce i percorsi SVG per direzione sinistra (invertiti e linee più spesse)
  const leftPaths = [
    "M -421.27 0.813 L 714.523 0.813 L 714.523 15.578 L -421.27 15.578 Z",
    "M -1121.3 15.578 L 382.234 15.578 L 382.234 30.344 L -1121.3 30.344 Z",
    "M -1074.42 35.875 L 1133.516 35.875 L 1133.516 50.641 L -1074.42 50.641 Z",
    "M -1027.16 50.64 L 660.738 50.64 L 660.738 65.406 L -1027.16 65.406 Z",
    "M -810.536 70.937 L 831.125 70.937 L 831.125 85.703 L -810.536 85.703 Z",
    "M -1200.056 85.703 L 260.931 85.703 L 260.931 100.469 L -1200.056 100.469 Z"
  ];

  const paths = direction === "left" ? leftPaths : rightPaths;



  const fillFade = (fill, delay = 1.6) => ({
    fill,
    stroke: "none",
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : { opacity: 0 },
    transition: { delay, duration: 0.5 },
  });

  const strokeFadeOut = (strokeColor, strokeWidth, delay = 1.6) => ({
    stroke: strokeColor,
    strokeWidth,
    fill: "none",
    initial: { pathLength: 0, opacity: 1 },
    animate: isInView ? { 
      pathLength: [0, 1, 1, 1], 
      opacity: [1, 1, 1, 0] 
    } : { pathLength: 0, opacity: 1 },
    transition: { 
      pathLength: { duration: 1.5, ease: "easeInOut", times: [0, 0.75, 0.95, 1] },
      opacity: { duration: 0.3, delay, ease: "easeOut", times: [0, 0.75, 0.95, 1] }
    },
  });

  const secondaryStrokeFadeOut = (delay = 2) => ({
    stroke: "rgba(191, 194, 207, 0.4)",
    strokeWidth: 1.5,
    fill: "none",
    initial: { pathLength: 0, opacity: 1 },
    animate: isInView ? { 
      pathLength: [0, 1, 1, 1], 
      opacity: [1, 1, 1, 0] 
    } : { pathLength: 0, opacity: 1 },
    transition: { 
      pathLength: { duration: 2, ease: "easeInOut", delay: 0.3, times: [0, 0.75, 0.95, 1] },
      opacity: { duration: 0.3, delay, ease: "easeOut", times: [0, 0.75, 0.95, 1] }
    },
  });

  // Converti il colore RGB in formato utilizzabile per il bagliore
  const getRgbValues = (rgbString) => {
    const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : [101, 253, 235];
  };

  const [r, g, b] = getRgbValues(color);

  return (
    <div style={{ 
      margin: `${marginY} 0`,
      position: 'relative'
    }}>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { 
            opacity: [0, 0.5, 0.3], 
            scaleX: [0, 1.2, 1]
          } : { opacity: 0, scaleX: 0 }}
          transition={{ 
            opacity: { duration: 2, ease: "easeOut", delay: 1.8, times: [0, 0.6, 1] },
            scaleX: { duration: 2.5, ease: "easeOut", delay: 1.6 }
          }}
          style={{
            position: 'absolute',
            top: '-100%',
            left: direction === "left" ? '-30%' : '0%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: glowSize,
            background: `radial-gradient(ellipse 80% 50% at center, rgba(${r}, ${g}, ${b}, ${glowIntensity}) 0%, rgba(${r}, ${g}, ${b}, ${glowIntensity * 0.3}) 40%, transparent 70%)`,
            filter: 'blur(20px)',
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden'
          }}

        />
        
     

      <svg
        ref={ref}
        viewBox="-583.75 0 2335 110"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          width: "100%", 
          height: "auto",
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* STROKE PATHS PRINCIPALI (che scompaiono dopo il fill) */}
        <motion.path
          d={paths[0]}
          {...strokeFadeOut(color, 2)}
        />
        <motion.path
          d={paths[1]}
          {...strokeFadeOut(color, 2)}
        />
        
        {/* STROKE PATHS SECONDARI (che scompaiono dopo il fill) */}
        <motion.path
          d={paths[2]}
          {...secondaryStrokeFadeOut(2.3)}
        />
        <motion.path
          d={paths[3]}
          {...secondaryStrokeFadeOut(2.3)}
        />
        <motion.path
          d={paths[4]}
          {...secondaryStrokeFadeOut(2.5)}
        />
        <motion.path
          d={paths[5]}
          {...secondaryStrokeFadeOut(2.5)}
        />
      
        {/* FILL PATHS PRINCIPALI (fade in dopo stroke) */}
        <motion.path
          d={paths[0]}
          {...fillFade(color)}
        />
        <motion.path
          d={paths[1]}
          {...fillFade(color)}
        />
        
        {/* FILL PATHS SECONDARI */}
        <motion.path
          d={paths[2]}
          {...fillFade("rgba(65, 66, 67, 0.3)", 2)}
        />
        <motion.path
          d={paths[3]}
          {...fillFade("rgba(65, 66, 67, 0.3)", 2)}
        />
        <motion.path
          d={paths[4]}
          {...fillFade("rgba(65, 66, 67, 0.2)", 2.2)}
        />
        <motion.path
          d={paths[5]}
          {...fillFade("rgba(65, 66, 67, 0.2)", 2.2)}
        />
      </svg>
    </div>
  );
};

export default Separator;