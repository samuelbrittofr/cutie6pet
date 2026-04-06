import { motion } from "framer-motion";

type HeroDoodleSlideProps = {
  variant: 0 | 1 | 2 | 3;
};

const themes = [
  {
    bg: "bg-[radial-gradient(circle_at_18%_28%,#ffe4a3_0,#ffd27a_30%,#fbbf24_56%,#f59e0b_100%)]",
    floor: "#fca311",
    shirt: "#60a5fa",
    dogBody: "#fffaf0",
    catBody: "#f5f7ff",
  },
  {
    bg: "bg-[radial-gradient(circle_at_25%_20%,#ffe9cf_0,#ffd6a8_34%,#f7b267_68%,#f79d65_100%)]",
    floor: "#f59e0b",
    shirt: "#22c55e",
    dogBody: "#fff6ea",
    catBody: "#f6f6ff",
  },
  {
    bg: "bg-[radial-gradient(circle_at_25%_22%,#fff0b8_0,#ffe08a_34%,#facc15_65%,#eab308_100%)]",
    floor: "#fb923c",
    shirt: "#a78bfa",
    dogBody: "#fff9f2",
    catBody: "#f1f5f9",
  },
  {
    bg: "bg-[radial-gradient(circle_at_24%_25%,#ffe5d0_0,#ffcab0_34%,#fda085_67%,#f97373_100%)]",
    floor: "#f97316",
    shirt: "#06b6d4",
    dogBody: "#fff5ec",
    catBody: "#f8fafc",
  },
] as const;

const moods = [
  {
    floatY: [0, -8, 0],
    floatDuration: 4.5,
    blinkDogDuration: 4.8,
    blinkCatDuration: 4.4,
    dogEyeXLeft: [268, 273, 269],
    dogEyeXRight: [332, 338, 333],
    catEyeXLeft: [669, 664, 668],
    catEyeXRight: [731, 724, 730],
    dogSmile: ["M278 334 Q300 352 322 334", "M278 336 Q300 346 322 336", "M278 334 Q300 352 322 334"],
    catSmile: ["M680 336 Q700 352 720 336", "M680 338 Q700 344 720 338", "M680 336 Q700 352 720 336"],
    blushDog: [0.35, 0.75, 0.35],
    blushCat: [0.4, 0.8, 0.4],
  },
  {
    floatY: [0, -4, 2, 0],
    floatDuration: 5.2,
    blinkDogDuration: 3.9,
    blinkCatDuration: 5.2,
    dogEyeXLeft: [268, 262, 270, 268],
    dogEyeXRight: [332, 326, 334, 332],
    catEyeXLeft: [669, 676, 668, 669],
    catEyeXRight: [731, 738, 730, 731],
    dogSmile: ["M278 336 Q300 346 322 336", "M278 332 Q300 360 322 332", "M278 336 Q300 346 322 336"],
    catSmile: ["M680 338 Q700 344 720 338", "M680 333 Q700 358 720 333", "M680 338 Q700 344 720 338"],
    blushDog: [0.25, 0.9, 0.25],
    blushCat: [0.25, 0.85, 0.25],
  },
  {
    floatY: [0, -10, 0, -5, 0],
    floatDuration: 4,
    blinkDogDuration: 3.4,
    blinkCatDuration: 3.6,
    dogEyeXLeft: [268, 276, 268, 262, 268],
    dogEyeXRight: [332, 340, 332, 324, 332],
    catEyeXLeft: [669, 661, 669, 677, 669],
    catEyeXRight: [731, 723, 731, 739, 731],
    dogSmile: ["M278 334 Q300 352 322 334", "M278 340 Q300 340 322 340", "M278 334 Q300 352 322 334"],
    catSmile: ["M680 336 Q700 352 720 336", "M680 341 Q700 339 720 341", "M680 336 Q700 352 720 336"],
    blushDog: [0.5, 0.95, 0.5],
    blushCat: [0.45, 0.9, 0.45],
  },
  {
    floatY: [0, -6, 0],
    floatDuration: 6,
    blinkDogDuration: 5.6,
    blinkCatDuration: 5.4,
    dogEyeXLeft: [268, 264, 268],
    dogEyeXRight: [332, 328, 332],
    catEyeXLeft: [669, 673, 669],
    catEyeXRight: [731, 735, 731],
    dogSmile: ["M278 336 Q300 346 322 336", "M278 333 Q300 355 322 333", "M278 336 Q300 346 322 336"],
    catSmile: ["M680 338 Q700 344 720 338", "M680 334 Q700 354 720 334", "M680 338 Q700 344 720 338"],
    blushDog: [0.2, 0.6, 0.2],
    blushCat: [0.25, 0.65, 0.25],
  },
] as const;

const HeroDoodleSlide = ({ variant }: HeroDoodleSlideProps) => {
  const theme = themes[variant];
  const mood = moods[variant];
  return (
    <div className={`absolute inset-0 ${theme.bg}`}>
    <motion.div
      className="absolute inset-0"
      animate={{ opacity: [0.95, 1, 0.95] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.svg
      viewBox="0 0 1000 560"
      className="w-full h-full"
      aria-label="Cute doodle dog and cat looking at their human"
      animate={{ y: mood.floatY }}
      transition={{ duration: mood.floatDuration, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="0" y="440" width="1000" height="120" fill={theme.floor} />

      <g>
        <circle cx="500" cy="240" r="42" fill="#ffe7cf" />
        <rect x="455" y="280" width="90" height="170" rx="35" fill={theme.shirt} />
      </g>

      <g>
        <ellipse cx="300" cy="300" rx="130" ry="120" fill={theme.dogBody} />
        <ellipse cx="210" cy="215" rx="38" ry="68" fill="#f4c7b5" transform="rotate(-20 210 215)" />
        <ellipse cx="390" cy="215" rx="38" ry="68" fill="#f4c7b5" transform="rotate(20 390 215)" />
        <ellipse cx="300" cy="322" rx="66" ry="48" fill="#f5d7a5" />
        <circle cx="260" cy="285" r="23" fill="#ffffff" />
        <circle cx="340" cy="285" r="23" fill="#ffffff" />
        <motion.g
          animate={{ scaleY: [1, 1, 0.12, 1, 1] }}
          transition={{ duration: mood.blinkDogDuration, repeat: Infinity, repeatDelay: 1.1 }}
          style={{ transformOrigin: "300px 285px" }}
        >
          <circle cx="260" cy="285" r="23" fill="#ffffff" />
          <circle cx="340" cy="285" r="23" fill="#ffffff" />
        </motion.g>
        <motion.circle cx="268" cy="287" r="8" fill="#111827" animate={{ cx: mood.dogEyeXLeft }} transition={{ duration: 2.6, repeat: Infinity }} />
        <motion.circle cx="332" cy="287" r="8" fill="#111827" animate={{ cx: mood.dogEyeXRight }} transition={{ duration: 2.6, repeat: Infinity }} />
        <ellipse cx="300" cy="314" rx="10" ry="8" fill="#111827" />
        <motion.path
          d="M278 334 Q300 352 322 334"
          fill="none"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ d: mood.dogSmile }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="235" cy="323" r="10" fill="#fb7185" animate={{ opacity: mood.blushDog }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.circle cx="365" cy="323" r="10" fill="#fb7185" animate={{ opacity: mood.blushDog }} transition={{ duration: 1.8, repeat: Infinity }} />
      </g>

      <g>
        <ellipse cx="700" cy="300" rx="122" ry="112" fill={theme.catBody} />
        <polygon points="620,230 660,165 690,236" fill="#e5e7eb" />
        <polygon points="780,230 740,165 710,236" fill="#e5e7eb" />
        <ellipse cx="700" cy="328" rx="58" ry="42" fill="#f9e2d2" />
        <circle cx="662" cy="286" r="21" fill="#ffffff" />
        <circle cx="738" cy="286" r="21" fill="#ffffff" />
        <motion.g
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{ duration: mood.blinkCatDuration, repeat: Infinity, repeatDelay: 1 }}
          style={{ transformOrigin: "700px 286px" }}
        >
          <circle cx="662" cy="286" r="21" fill="#ffffff" />
          <circle cx="738" cy="286" r="21" fill="#ffffff" />
        </motion.g>
        <motion.circle cx="669" cy="288" r="7" fill="#111827" animate={{ cx: mood.catEyeXLeft }} transition={{ duration: 2.3, repeat: Infinity }} />
        <motion.circle cx="731" cy="288" r="7" fill="#111827" animate={{ cx: mood.catEyeXRight }} transition={{ duration: 2.3, repeat: Infinity }} />
        <polygon points="700,308 688,320 712,320" fill="#f97316" />
        <motion.path
          d="M680 336 Q700 352 720 336"
          fill="none"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ d: mood.catSmile }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="638" cy="323" r="9" fill="#fb7185" animate={{ opacity: mood.blushCat }} transition={{ duration: 1.7, repeat: Infinity }} />
        <motion.circle cx="762" cy="323" r="9" fill="#fb7185" animate={{ opacity: mood.blushCat }} transition={{ duration: 1.7, repeat: Infinity }} />
      </g>
    </motion.svg>
  </div>
  );
};

export default HeroDoodleSlide;
