import { motion } from "framer-motion";

const HeroDoodleSlide = () => (
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,#ffe4a3_0,#ffd27a_30%,#fbbf24_56%,#f59e0b_100%)]">
    <motion.div
      className="absolute inset-0"
      animate={{ opacity: [0.95, 1, 0.95] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.svg
      viewBox="0 0 1000 560"
      className="w-full h-full"
      aria-label="Cute doodle dog and cat looking at their human"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="0" y="440" width="1000" height="120" fill="#fca311" />

      <g>
        <circle cx="500" cy="240" r="42" fill="#ffe7cf" />
        <rect x="455" y="280" width="90" height="170" rx="35" fill="#60a5fa" />
      </g>

      <g>
        <ellipse cx="300" cy="300" rx="130" ry="120" fill="#fffaf0" />
        <ellipse cx="210" cy="215" rx="38" ry="68" fill="#f4c7b5" transform="rotate(-20 210 215)" />
        <ellipse cx="390" cy="215" rx="38" ry="68" fill="#f4c7b5" transform="rotate(20 390 215)" />
        <ellipse cx="300" cy="322" rx="66" ry="48" fill="#f5d7a5" />
        <circle cx="260" cy="285" r="23" fill="#ffffff" />
        <circle cx="340" cy="285" r="23" fill="#ffffff" />
        <motion.g
          animate={{ scaleY: [1, 1, 0.12, 1, 1] }}
          transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.2 }}
          style={{ transformOrigin: "300px 285px" }}
        >
          <circle cx="260" cy="285" r="23" fill="#ffffff" />
          <circle cx="340" cy="285" r="23" fill="#ffffff" />
        </motion.g>
        <motion.circle cx="268" cy="287" r="8" fill="#111827" animate={{ cx: [268, 273, 269] }} transition={{ duration: 2.4, repeat: Infinity }} />
        <motion.circle cx="332" cy="287" r="8" fill="#111827" animate={{ cx: [332, 338, 333] }} transition={{ duration: 2.4, repeat: Infinity }} />
        <ellipse cx="300" cy="314" rx="10" ry="8" fill="#111827" />
        <motion.path
          d="M278 334 Q300 352 322 334"
          fill="none"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ d: ["M278 334 Q300 352 322 334", "M278 336 Q300 346 322 336", "M278 334 Q300 352 322 334"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="235" cy="323" r="10" fill="#fb7185" animate={{ opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.circle cx="365" cy="323" r="10" fill="#fb7185" animate={{ opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 1.8, repeat: Infinity }} />
      </g>

      <g>
        <ellipse cx="700" cy="300" rx="122" ry="112" fill="#f5f7ff" />
        <polygon points="620,230 660,165 690,236" fill="#e5e7eb" />
        <polygon points="780,230 740,165 710,236" fill="#e5e7eb" />
        <ellipse cx="700" cy="328" rx="58" ry="42" fill="#f9e2d2" />
        <circle cx="662" cy="286" r="21" fill="#ffffff" />
        <circle cx="738" cy="286" r="21" fill="#ffffff" />
        <motion.g
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{ duration: 4.4, repeat: Infinity, repeatDelay: 1 }}
          style={{ transformOrigin: "700px 286px" }}
        >
          <circle cx="662" cy="286" r="21" fill="#ffffff" />
          <circle cx="738" cy="286" r="21" fill="#ffffff" />
        </motion.g>
        <motion.circle cx="669" cy="288" r="7" fill="#111827" animate={{ cx: [669, 664, 668] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <motion.circle cx="731" cy="288" r="7" fill="#111827" animate={{ cx: [731, 724, 730] }} transition={{ duration: 2.2, repeat: Infinity }} />
        <polygon points="700,308 688,320 712,320" fill="#f97316" />
        <motion.path
          d="M680 336 Q700 352 720 336"
          fill="none"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ d: ["M680 336 Q700 352 720 336", "M680 338 Q700 344 720 338", "M680 336 Q700 352 720 336"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="638" cy="323" r="9" fill="#fb7185" animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 1.7, repeat: Infinity }} />
        <motion.circle cx="762" cy="323" r="9" fill="#fb7185" animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 1.7, repeat: Infinity }} />
      </g>
    </motion.svg>
  </div>
);

export default HeroDoodleSlide;
