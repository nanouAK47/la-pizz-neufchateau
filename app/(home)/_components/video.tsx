"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handlePlayPauseClick = () => {
    if (vidRef.current) {
      setPlayVideo(!playVideo);
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  };

  return (
    <section className="flex-center app-bg relative sm:hidden">
      <video ref={vidRef} src="/video.mp4" loop controls={false} muted />

      <div className="flex-center w-full h-full absolute inset-0 bg-[#000000b3]">
        <div
          className="flex-center w-12 h-12 rounded-full border border-golden cursor-pointer"
          onClick={handlePlayPauseClick}
        >
          {playVideo ? (
            <Pause width={30} height={30} className="text-white opacity-50" />
          ) : (
            <Play width={30} height={30} className="text-white opacity-50" />
          )}
        </div>
      </div>
    </section>
  );
}
