'use client'

import { motion } from 'framer-motion'

interface NairobiSkylineProps {
  className?: string
}

export default function NairobiSkyline({ className = '' }: NairobiSkylineProps) {
  // Technical blueprint / line-drawing style
  // Thin precise lines, minimal fills, architectural feel
  const lineColor = '#D9D7D0'       // granite-200 for subtle lines
  const accentLine = '#B8B4AA'      // granite-300 for secondary
  const highlightColor = '#DEB526'  // compass yellow for key accents
  const thinStroke = 0.75
  const stroke = 1

  return (
    <svg
      viewBox="0 0 1440 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-label="Nairobi skyline - architectural line drawing"
    >
      {/* Subtle grid background pattern */}
      <defs>
        <pattern id="gridSmall" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={lineColor} strokeWidth={0.3} opacity="0.4" />
        </pattern>
        <pattern id="gridLarge" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M 200 0 L 0 0 0 200" fill="none" stroke={lineColor} strokeWidth={0.5} opacity="0.3" />
        </pattern>
        {/* Glow for highlighted windows */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Grid background */}
      <rect width="1440" height="680" fill="url(#gridSmall)" />
      <rect width="1440" height="680" fill="url(#gridLarge)" />

      {/* === DISTANT BUILDINGS (far background) — very faint === */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {/* Background cluster left */}
        <rect x="50" y="380" width="28" height="100" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="85" y="395" width="22" height="85" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="115" y="405" width="18" height="75" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="140" y="390" width="25" height="90" stroke={accentLine} strokeWidth={thinStroke} rx="1" />

        {/* Background cluster right */}
        <rect x="1220" y="385" width="25" height="95" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="1255" y="400" width="20" height="80" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="1282" y="410" width="30" height="70" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="1320" y="395" width="22" height="85" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="1350" y="415" width="18" height="65" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
        <rect x="1380" y="405" width="25" height="75" stroke={accentLine} strokeWidth={thinStroke} rx="1" />
      </motion.g>

      {/* === MIDGROUND BUILDINGS — medium opacity, more detail === */}
      <motion.g
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Left cluster */}
        <rect x="180" y="340" width="35" height="140" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {/* Floor lines */}
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <line key={`fl1-${i}`} x1="180" y1={350 + i*15} x2="215" y2={350 + i*15} stroke={lineColor} strokeWidth={0.3} />
        ))}

        <rect x="222" y="360" width="30" height="120" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {[0,1,2,3,4,5,6].map(i => (
          <line key={`fl2-${i}`} x1="222" y1={370 + i*15} x2="252" y2={370 + i*15} stroke={lineColor} strokeWidth={0.3} />
        ))}

        <rect x="260" y="320" width="40" height="160" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={`fl3-${i}`} x1="260" y1={330 + i*15} x2="300" y2={330 + i*15} stroke={lineColor} strokeWidth={0.3} />
        ))}

        {/* Right mid cluster */}
        <rect x="1060" y="340" width="38" height="140" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <line key={`fr1-${i}`} x1="1060" y1={350 + i*15} x2="1098" y2={350 + i*15} stroke={lineColor} strokeWidth={0.3} />
        ))}

        <rect x="1106" y="320" width="35" height="160" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={`fr2-${i}`} x1="1106" y1={330 + i*15} x2="1141" y2={330 + i*15} stroke={lineColor} strokeWidth={0.3} />
        ))}

        <rect x="1148" y="355" width="30" height="125" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <rect x="1185" y="370" width="28" height="110" stroke={lineColor} strokeWidth={stroke} rx="1" />
      </motion.g>

      {/* === FOREGROUND LANDMARKS — full opacity, detailed === */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {/* — UAP / Generic tall building left-center — */}
        <rect x="340" y="280" width="42" height="200" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <rect x="342" y="272" width="38" height="12" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <line x1="361" y1="272" x2="361" y2="258" stroke={lineColor} strokeWidth={stroke} />
        {/* Window grid */}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(row =>
          [0,1,2].map(col => (
            <rect
              key={`uap-${row}-${col}`}
              x={346 + col * 12}
              y={290 + row * 16}
              width={7}
              height={10}
              stroke={lineColor}
              strokeWidth={0.4}
              rx={0.5}
            />
          ))
        )}

        {/* — Nation Centre — */}
        <rect x="400" y="300" width="50" height="180" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <rect x="403" y="292" width="44" height="12" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {[0,1,2,3,4,5,6,7,8,9].map(row =>
          [0,1,2,3].map(col => (
            <rect
              key={`nation-${row}-${col}`}
              x={406 + col * 11}
              y={308 + row * 17}
              width={6}
              height={11}
              stroke={lineColor}
              strokeWidth={0.4}
              rx={0.5}
            />
          ))
        )}

        {/* — Hilton (cylindrical shape) — */}
        <path
          d="M480 480 L480 330 Q480 318 505 318 Q530 318 530 330 L530 480"
          stroke={lineColor}
          strokeWidth={stroke}
          fill="none"
        />
        <ellipse cx="505" cy="320" rx="25" ry="7" stroke={lineColor} strokeWidth={stroke} fill="none" />
        {/* Horizontal floor bands */}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={`hilton-${i}`} x1="480" y1={335 + i*15} x2="530" y2={335 + i*15} stroke={lineColor} strokeWidth={0.3} />
        ))}

        {/* — Teleposta Towers (twin) — */}
        <rect x="560" y="270" width="32" height="210" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <rect x="600" y="285" width="32" height="195" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {/* Antennas */}
        <line x1="576" y1="270" x2="576" y2="252" stroke={lineColor} strokeWidth={stroke} />
        <line x1="616" y1="285" x2="616" y2="269" stroke={lineColor} strokeWidth={stroke} />
        {/* Window grid - left tower */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(row =>
          [0,1].map(col => (
            <rect
              key={`tele1-${row}-${col}`}
              x={566 + col * 13}
              y={278 + row * 16}
              width={7}
              height={10}
              stroke={lineColor}
              strokeWidth={0.4}
              rx={0.5}
            />
          ))
        )}
        {/* Window grid - right tower */}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(row =>
          [0,1].map(col => (
            <rect
              key={`tele2-${row}-${col}`}
              x={606 + col * 13}
              y={293 + row * 16}
              width={7}
              height={10}
              stroke={lineColor}
              strokeWidth={0.4}
              rx={0.5}
            />
          ))
        )}

        {/* ====== KICC (Main landmark - center) ====== */}
        {/* Main cylindrical tower */}
        <path
          d="M700 480 L700 200 Q700 182 730 182 Q760 182 760 200 L760 480"
          stroke={lineColor}
          strokeWidth={1.2}
          fill="none"
        />
        {/* Top dome */}
        <ellipse cx="730" cy="185" rx="32" ry="10" stroke={lineColor} strokeWidth={1.2} fill="none" />
        {/* Observation deck */}
        <ellipse cx="730" cy="180" rx="22" ry="6" stroke={lineColor} strokeWidth={stroke} fill="none" />
        {/* Spire */}
        <line x1="730" y1="180" x2="730" y2="148" stroke={lineColor} strokeWidth={1.2} />
        {/* Spire tip - highlighted */}
        <motion.circle
          cx="730" cy="145" r="3"
          fill={highlightColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ duration: 2, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
          filter="url(#glow)"
        />
        {/* KICC amphitheatre base */}
        <path
          d="M670 480 Q670 455 730 455 Q790 455 790 480"
          stroke={lineColor}
          strokeWidth={1.2}
          fill="none"
        />
        <path
          d="M662 480 L662 468 Q662 452 730 452 Q798 452 798 468 L798 480"
          stroke={lineColor}
          strokeWidth={stroke}
          fill="none"
        />
        {/* KICC vertical window strips */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(row =>
          [0,1,2].map(col => (
            <rect
              key={`kicc-${row}-${col}`}
              x={712 + col * 12}
              y={195 + row * 16}
              width={5}
              height={11}
              stroke={lineColor}
              strokeWidth={0.4}
              rx={0.5}
            />
          ))
        )}
        {/* Horizontal floor bands on KICC */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(i => (
          <line key={`kicc-floor-${i}`} x1="700" y1={200 + i*17} x2="760" y2={200 + i*17} stroke={lineColor} strokeWidth={0.2} />
        ))}

        {/* ====== Times Tower (tallest) ====== */}
        <rect x="840" y="170" width="48" height="310" stroke={lineColor} strokeWidth={1.2} rx="1" />
        {/* Stepped top */}
        <rect x="844" y="158" width="40" height="16" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <rect x="848" y="148" width="32" height="14" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {/* Antenna */}
        <line x1="864" y1="148" x2="864" y2="125" stroke={lineColor} strokeWidth={1.2} />
        {/* Window grid */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(row =>
          [0,1,2,3].map(col => (
            <rect
              key={`times-${row}-${col}`}
              x={846 + col * 10}
              y={178 + row * 16}
              width={6}
              height={10}
              stroke={lineColor}
              strokeWidth={0.4}
              rx={0.5}
            />
          ))
        )}

        {/* — I&M Bank Tower — */}
        <rect x="920" y="290" width="40" height="190" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <rect x="923" y="280" width="34" height="14" stroke={lineColor} strokeWidth={stroke} rx="1" />
        <line x1="940" y1="280" x2="940" y2="268" stroke={lineColor} strokeWidth={stroke} />
        {[0,1,2,3,4,5,6,7,8,9,10].map(row =>
          [0,1,2].map(col => (
            <rect
              key={`im-${row}-${col}`}
              x={926 + col * 11}
              y={298 + row * 17}
              width={6}
              height={11}
              stroke={lineColor}
              strokeWidth={0.4}
              rx={0.5}
            />
          ))
        )}

        {/* — Additional right buildings — */}
        <rect x="975" y="335" width="35" height="145" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`rb1-${i}`} x1="975" y1={345 + i*16} x2="1010" y2={345 + i*16} stroke={lineColor} strokeWidth={0.3} />
        ))}
        <rect x="1018" y="310" width="30" height="170" stroke={lineColor} strokeWidth={stroke} rx="1" />
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={`rb2-${i}`} x1="1018" y1={320 + i*16} x2="1048" y2={320 + i*16} stroke={lineColor} strokeWidth={0.3} />
        ))}
      </motion.g>

      {/* === HIGHLIGHTED WINDOWS — select few windows glow compass yellow === */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        {/* Scattered lit windows across buildings */}
        {[
          // KICC windows
          { x: 712, y: 227 }, { x: 724, y: 259 }, { x: 736, y: 291 },
          { x: 712, y: 323 }, { x: 736, y: 355 }, { x: 724, y: 387 },
          // Times Tower windows
          { x: 846, y: 210 }, { x: 866, y: 242 }, { x: 856, y: 306 },
          { x: 846, y: 370 }, { x: 876, y: 338 }, { x: 866, y: 402 },
          // Nation Centre
          { x: 406, y: 342 }, { x: 428, y: 376 }, { x: 417, y: 410 },
          // I&M
          { x: 926, y: 332 }, { x: 948, y: 366 }, { x: 937, y: 417 },
          // Teleposta
          { x: 566, y: 310 }, { x: 579, y: 374 }, { x: 606, y: 325 },
        ].map((win, i) => (
          <motion.rect
            key={`glow-${i}`}
            x={win.x}
            y={win.y}
            width={5}
            height={8}
            fill={highlightColor}
            rx={0.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.5, 0.9] }}
            transition={{
              duration: 3,
              delay: 2.5 + i * 0.15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            filter="url(#glow)"
          />
        ))}
      </motion.g>

      {/* === GROUND LINE === */}
      <motion.line
        x1="0" y1="480" x2="1440" y2="480"
        stroke={lineColor}
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Subtle ground detail — cross-hatching below skyline */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(i => (
          <line key={`ground-${i}`} x1={i * 85} y1="485" x2={i * 85 + 42} y2="500" stroke={lineColor} strokeWidth={0.4} />
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(i => (
          <line key={`ground2-${i}`} x1={i * 85 + 42} y1="485" x2={i * 85} y2="500" stroke={lineColor} strokeWidth={0.4} />
        ))}
      </motion.g>

      {/* Coordinate markers — architectural blueprint touch */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* Horizontal measurement lines */}
        <line x1="660" y1="145" x2="660" y2="155" stroke={lineColor} strokeWidth={0.5} />
        <line x1="660" y1="150" x2="800" y2="150" stroke={lineColor} strokeWidth={0.3} strokeDasharray="4 2" />
        <line x1="800" y1="145" x2="800" y2="155" stroke={lineColor} strokeWidth={0.5} />

        {/* Vertical measurement */}
        <line x1="825" y1="125" x2="835" y2="125" stroke={lineColor} strokeWidth={0.5} />
        <line x1="830" y1="125" x2="830" y2="480" stroke={lineColor} strokeWidth={0.3} strokeDasharray="4 2" />
        <line x1="825" y1="480" x2="835" y2="480" stroke={lineColor} strokeWidth={0.5} />
      </motion.g>
    </svg>
  )
}
