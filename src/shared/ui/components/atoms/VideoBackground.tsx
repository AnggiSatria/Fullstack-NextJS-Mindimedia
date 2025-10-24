"use client";
import ReactPlayer from "react-player";

export default function VideoBackground() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ReactPlayer
        src="https://www.youtube.com/embed/pqkVOxt7Tk4?enablejsapi=1&autoplay=0&loop=1&controls=0&rel=0&playlist=pqkVOxt7Tk4&vq=hd1440&origin=https%3A%2F%2Fulamanbali.com&widgetid=1&forigin=https%3A%2F%2Fulamanbali.com%2F&aoriginsup=1&vf=2"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-0%, -0%) scale(1.7)",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
