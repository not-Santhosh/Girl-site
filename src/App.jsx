import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const songs = [
  "/EnDevathaye.mp3",
  "/Pogathey.mp3"
]; 

const stages = [
  { 
    title: "You weren't introduced", 
    text: "Where it all started, only your mother felt you the first luckiest woman to carry you and give you life. You were sunshine to me, even though the world had not yet witnessed you. Your mom was waiting to introduce you to the light without knowing that you were already the light. It was written to be mine, I had just been patiently waiting for this light 🤗✨",
    silhouette: "",
    bgGradient: "linear-gradient(to bottom, #FFDAB9, #d28b4c)" 
  },
  { 
    title: "A Precious Beginning", 
    text: "Your mom welcomed you to this world. You were her little light, and she gave you tiny fingers to hold her tight, a kind heart to treat people well, and bright eyes to see this colorful world. She gave you legs to bless the earth with your steps. Everyone who saw you on that special day felt lucky. Some were happy, some may have been sad, but if I had been there, I would have said, 'She is born, my sunshine is ready for the glow!' I would have shouted my love for you to the world 💖🥹",
    silhouette: "",
    bgGradient: "linear-gradient(to bottom, #FFE5B4, #FFD27F)" 
  },
  { 
    title: "Innocence", 
    text: "This is the moment when you made everyone the happiest, as everyone smiled seeing you. Every little action of yours was loved. Dad would say, 'My girl is growing up, look at her!' Mom missed the tiny girl who used to cry for food and hug her tight. But today, you were full of life and energy, like the morning sun ready to start its day. Sorry I was not there to play with you 😍",
    silhouette: "",
    bgGradient: "linear-gradient(to bottom, #FFDD99, #FFB84D)" 
  },
  { 
    title: "Next big step", 
    text: "The world was not the same when you experienced your first heat, like the noon sun at its peak. The once painless girl began to feel pain, something that would happen every single month. Things wouldn’t be the same as before, but you became stronger and wiser. The world began to see you differently some good, some bad. Your parents started to worry about you. My girl, you were no longer a little girl, but even this leads to good times that everyone hopes for ❤️",
    silhouette: "",
    bgGradient: "linear-gradient(to bottom, #FFC966, #FFA500)" 
  },
  { 
    title: "Whispers of Hope", 
    text: "Now you’ve grown up, starting to think for yourself and forming ideas about your life. The days feel like the evening sun, warm yet winding down. You face some problems, have things to say but sometimes can’t. You search for a good companion, take on work, and gain new responsibilities to handle 💓",
    silhouette: "",
    bgGradient: "linear-gradient(to bottom, #FFB347, #FF8C00)" 
  },
  { 
    title: "I Smiles With You", 
    text: "And then… my destiny came to me one fine day. Without a second thought, I just fell in love with you. It was as beautiful as watching the sunset from the shore a view impossible to forget. You weren’t my plan to love, but my heart whispered: 'Don’t miss her; she is the one you’ve been looking for all these years.' You are the one. I had never felt this way before you are the first, and the one I need to have by my side forever. Your eyes are so beautiful; I can’t lie when I see them. I got the lucky chance to propose I love you, and I want you in my life forever as my all time better half. Finally, I have seen my light 💕",
    silhouette: "",
    bgGradient: "linear-gradient(to bottom, #FF9933, #FF6600)" 
  },
  { 
    title: "My Future Blessings", 
    text: "I’m not just loving you, I choose you for this life to spend our days together. I want to marry you, have kids with you, grow together, and build a home filled with love. To smile together, fight together, care for each other, share secrets and gossip, have fun, go on dates without restrictions, eat together. Even when words are done, you’ll be in my arms, gazing at the moon and making it jealous of our love. We’ll make our home feel like a cool breeze, take care of our people, and I will protect you at any cost. In that very moment, you’ll feel how deeply I love you. I promise I love you, my Kanamma 💝",
    silhouette: "💘",
    bgGradient: "linear-gradient(to bottom,  #49569c, #2c3e78)" 
  },
  { 
    title: "Infinite Wonder ", 
    text: "After all, the cycle continues… You’ll be a mom one day (touch wood). You’ll carry our child, you’ll form our child, and my first child will always be you. Without you, nothing would make sense; it would never feel the same. You may not always be in perfect shape, and there might be times when you can’t do everything, but don’t worry — I’ll always be there with you. That motherly feeling, that magical bond, is the most beautiful experience in the world. And again, I love you, azhagiii 🤍",
    silhouette: "💕",
    bgGradient: "linear-gradient(to bottom, #0b1447, #2c3e78)" 
  }
];

const SlotTitle = () => {
  const text = "Happy Women’s Day, My Girl🤍";
  const chars = import.meta.env.VITE_PERSON_NAME;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split("").map((letter, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      iteration += 0.5;
      if (iteration >= text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-3xl md:text-4xl font-bold  text-white text-center drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
    >
      {display}
    </motion.h1>
  );
};

const Clouds = ({ count = 3 }) => {
  const cloudsArray = Array.from({ length: count });
  return (
    <>
      {cloudsArray.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-16 bg-white/70 rounded-full blur-sm z-0"
          style={{
            top: `${10 + i * 12}%`,
            left: `${-40 + i * 30}%`,
          }}
          animate={{ x: ["0%", "150%"] }}
          transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </>
  );
};

const Sun = ({ stageIndex }) => {
  // Only show sun for stages 1–5
  if (stageIndex < 1 || stageIndex > 5) return null;

  const sunPositions = [
    { top: "70%", right: "10%" }, // index 1 - sunrise
    { top: "55%", right: "10%" }, // index 2 - morning
    { top: "40%", right: "35%" }, // index 3 - noon
    { top: "50%", right: "55%" }, // index 4 - afternoon
    { top: "65%", right: "75%" }, // index 5 - sunset
  ];

  const pos = sunPositions[stageIndex - 1]; // -1 because our positions array starts at index 1

  return (
    <motion.div
      className="absolute w-24 h-24 rounded-full z-0 shadow-lg"
      style={{ backgroundColor: "#FFD166" }}
      animate={{ top: pos.top, right: pos.right }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  );
};

const Moon = () => (
  <motion.div
    className="absolute w-16 h-16 rounded-full top-16 left-16 z-0 shadow-lg"
    style={{ backgroundColor: "#ffffff" }}
    animate={{ opacity: [0.6, 4, 0.6] }}
    transition={{ repeat: Infinity, duration: 4 }}
  />
);

const Stars = () => {
  const starsArray = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 z-0">
      {starsArray.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3 }}
        />
      ))}
    </div>
  );
};

const Fireflies = () => {
  const firefliesArray = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 z-0">
      {firefliesArray.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 3 + Math.random() * 3, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // <- playlist index
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const musicRef = useRef(null);

  // --- Playlist useEffect ---
  useEffect(() => {
    if (started && musicRef.current) {
      musicRef.current.src = songs[currentSongIndex]; // update audio source
      musicRef.current.play().catch(e => console.log("Music play blocked", e));
    }
  }, [currentSongIndex, started]);

  const handleStart = (clientY) => {
    touchStartY.current = clientY;
    isDragging.current = true;
  };

  const handleEnd = (clientY) => {
    if (!isDragging.current) return;
    const deltaY = touchStartY.current - clientY;
    if (deltaY > 50 && index < stages.length - 1) setIndex(prev => prev + 1);
    else if (deltaY < -50 && index > 0) setIndex(prev => prev - 1);
    isDragging.current = false;
  };

  return (
    <motion.div
  animate={{ background: stages[index]?.bgGradient || "linear-gradient(to bottom, #FFE082, #FF8A3D)" }}
  transition={{ duration: 2 }}
  className="w-screen h-screen relative overflow-hidden select-none cursor-grab active:cursor-grabbing font-sans"
  onTouchStart={(e) => handleStart(e.touches[0].clientY)}
  onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientY)}
  onMouseDown={(e) => handleStart(e.clientY)}
  onMouseUp={(e) => handleEnd(e.clientY)}
  onMouseLeave={() => (isDragging.current = false)}
>
  {/* Background Music */}
  <audio 
  ref={musicRef} 
  onEnded={() => setCurrentSongIndex(prev => (prev + 1) % songs.length)} 
/>

  {!started ? (
    // --- WELCOME PAGE ---
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b4ea2] via-[#1fb6d5] via-[#ffe082] via-[#ff8a3d] to-[#c4002f]">
      <div className="absolute inset-0 flex items-center justify-center text-center p-6 z-10">
        <SlotTitle />
      </div>
      <div className="absolute bottom-[40%] w-full flex justify-center z-10">
        <button
          className="text-pink-600 font-bold text-sm underline-offset-8 decoration-pink-600 transition-all duration-500 hover:text-white hover:decoration-white uppercase tracking-[0.2em] drop-shadow-md hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
          onClick={() => setStarted(true)}
        >
          Come with me for a little journey ❤️
        </button>
      </div>
    </div>
  ) : (
    // --- MAIN STORY ---
    <>
      {/* SUN for stages 1–5 */}
      {index >= 1 && index <= 5 && (
        <motion.div
          className="absolute w-24 h-24 rounded-full shadow-lg z-0"
          style={{ backgroundColor: "#FFD166" }}
          animate={{
            top: (() => {
              switch (index) {
                case 1: return "70%";  // sunrise
                case 2: return "55%";  // morning
                case 3: return "40%";  // noon
                case 4: return "50%";  // afternoon
                case 5: return "65%";  // sunset
                default: return "50%";
              }
            })(),
            right: (() => {
              switch (index) {
                case 1: return "10%";
                case 2: return "10%";
                case 3: return "35%";
                case 4: return "55%";
                case 5: return "75%";
                default: return "50%";
              }
            })()
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      )}

      {/* CLOUDS: more in morning, fewer in afternoon, none in last stages */}
      {(() => {
        if (index >= 1 && index <= 3) return <Clouds count={5} />;
        else if (index >= 4 && index <= 5) return <Clouds count={2} />;
        else return null; // clear sky for last stages
      })()}

      {/* MOON: only for stages 6 and 7 */}
      {(index === 6 || index === 7) && (
        <motion.div
          className="absolute w-16 h-16 rounded-full top-16 left-16 z-0 shadow-lg"
          style={{ backgroundColor: "#ffffff" }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      )}

      {/* STARS + FIREFLIES: only for "Mother Again" (index 7) */}
      {index === 7 && <Stars />}
      {index === 7 && <Fireflies />}

      {/* MAIN MESSAGE BOX */}
      <AnimatePresence mode="wait">
        <div key={index} className="relative flex items-center justify-center w-full h-full p-6">
          {/* SILHOUETTE */}
          <motion.div
            key={`silhouette-${index}`}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 0.12, scale: 1.2, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute text-[18rem] md:text-[25rem] pointer-events-none select-none z-0"
          >
            {stages[index].silhouette}
          </motion.div>

          {/* MESSAGE BOX */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 p-14 md:p-20 rounded-[5px] shadow-2xl w-full max-w-xl min-h-[450px] flex flex-col items-center justify-center text-center z-20 border border-white relative"
          >
            <h2 className="text-3xl font-extrabold text-red-600 mb-8 italic">
              {stages[index].title}
            </h2>
            <div className="w-[90%] md:w-[70%]"> 
              <p className="font-serif text-zinc-700 font-bold text-xl leading-relaxed break-words">
                {stages[index].text}
              </p>
            </div>

            {/* Surprise button for last stage */}
            {index === stages.length - 1 && (
              <div className="absolute bottom-[-10%] flex justify-center w-full">
                <button
                  onClick={() => setShowSurprise(true)}
                  className="text-slate-200 font-bold text-sm underline-offset-8 decoration-yellow-300 transition-all duration-500 ease-in-out hover:text-rose-500 hover:decoration-yellow-500 uppercase tracking-[0.2em] drop-shadow-md hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                >
                  View My Wish💌
                </button>
              </div>
            )}

            <AnimatePresence>
  {showSurprise && (
      <motion.div
        className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-white p-16 rounded-1xl shadow-2xl text-center max-w-2xl mx-4 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, height: 0 }}
          animate={{ opacity: 1, scale: 1, height: "auto" }}
          exit={{ opacity: 0, scale: 0.8, height: 0 }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { type: "spring", stiffness: 120, damping: 15 },
            height: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <h2 className="text-3xl font-bold text-rose-500 mb-6">
            Happy Women’s Day! 💌
          </h2>
          <div className="px-6 py-4 max-h-[70vh] overflow-y-auto mx-auto text-justify leading-relaxed ">
            <p className="font-serif text-lg text-red-500 font-light leading-relaxed break-words">
              Everything in this world starts from darkness and ends in darkness 💯. Life begins in a mother’s womb and then comes into the light. That is how my life started inside the woman who carried me and loved me in every situation. When everyone disliked something about me, she was the one who praised even the smallest things I did ✨. She shaped not only my body but also my life ❤️. I love my mom, and after that I met another girl and fell in love with her 💖, and that girl is you 🫂❤️. Thank you for coming into my life pattu 💕. I have never been around many women so I may not know everything about how they feel, but I know how to treat them with respect. Not like a god and not with sympathy, but as women, girls, friends, daughters, or kids, whoever they are they deserve respect 🤝🏻. But your presence changed everything in my life. After you came, it all became more beautiful 🫂💖. With a single flower you made me feel like I was standing in a whole garden. Your simple words meant so much to me ❤️. As I said I have never been around girls much, but I promise I will take care of you not just because I love you 🤍 but because you mean so much to me pattu 🫂💕. You are the first woman who accepted me as a partner, the one who says I love you to me every day, the one who calls me handsome even when I do not feel like I am, the one who hugged me and kissed me. It is not about the touch but about the trust you placed in me 🥺💗. I found my destiny ❤️ and I will never take a chance to lose it. You are a precious gem to me 💕 and luckily I found you, and even more luckily that precious person chose me. Even with this long distance you miss me so much and I am sorry for that, but one beautiful day will come when you will never have to spend even a single day without me 🤍✨. I want you to be part of every simple moment in my life ❤️. My mom carried me for ten months but my girl is ready to carry me in her heart for a lifetime 🥺🫂, how lucky am I ✨. I want to spend my entire life with you pattu ❤️, so please do not give up on me 🫂. One day when my body loses its strength I want to rest in your arms, and even when we cannot speak many words we will still choose love in our old days. Being in my girl’s arms will always feel like a blessing. I am going to love you for my lifetime, will you be my forever pattu 💕. For the most beautiful woman in the world this is my wish for you, Happy Women’s Day 💖
            </p>
          </div>
          <button
            onClick={() => setShowSurprise(false)}
            className="text-zinc-500 font-bold text-sm underline-offset-8 decoration-yellow-300 transition-all duration-500 ease-in-out hover:text-rose-500 hover:decoration-yellow-500 uppercase tracking-[0.2em] drop-shadow-md hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
          >
            Close
          </button>
          </motion.div>
          </motion.div>
          )}
          </AnimatePresence>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )}
</motion.div>
  );
}