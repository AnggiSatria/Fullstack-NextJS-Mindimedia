"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => setShouldPlay(true), 800);
  };

  const handleClose = () => {
    setShouldPlay(false);
    setTimeout(() => setIsExpanded(false), 300);
  };

  return (
    <div className="w-full flex justify-center items-center py-20 bg-[#f4efe8] overflow-hidden">
      <motion.div
        layout
        onClick={!isExpanded ? handleExpand : undefined}
        className="relative w-full flex justify-center cursor-pointer"
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          layout
          className="relative overflow-hidden flex justify-center items-center border border-[#b59453] shadow-lg z-10"
          style={{
            width: isExpanded ? "100vw" : "65vw",
            height: isExpanded ? "100vh" : "90vw",
            maxWidth: isExpanded ? "100vw" : "37vw",
            maxHeight: isExpanded ? "100vh" : "49vw",
            borderTopLeftRadius: isExpanded ? "0px" : "500px",
            borderTopRightRadius: isExpanded ? "0px" : "500px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <ReactPlayer
            src="https://www.youtube.com/watch?v=pqkVOxt7Tk4"
            playing={shouldPlay}
            muted={!shouldPlay}
            loop
            controls={isExpanded}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: isExpanded
                ? "translate(0%, 0%) scale(1)"
                : "translate(-20%, 0%) scale(2.7)",
              objectFit: "cover",
              pointerEvents: "none",
              transition: "transform 1s ease-in-out",
            }}
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-5"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed top-6 right-6 z-20 text-white text-lg font-semibold bg-black/50 hover:bg-black/70 rounded-full px-4 py-2"
          >
            ✕ Close
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
