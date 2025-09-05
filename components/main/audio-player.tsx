"use client";

import { useEffect, useRef, useState } from "react";

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const onCanPlay = () => setIsReady(true);
    audioEl.addEventListener("canplay", onCanPlay);

    // Attempt autoplay with sound on mount
    audioEl.muted = false;
    audioEl.volume = 0.35;
    audioEl.play().catch(() => {
      // Autoplay may be blocked; fallback to muted and try again
      audioEl.muted = true;
      setIsMuted(true);
      audioEl.play().catch(() => {});
    });

    return () => {
      audioEl.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  const toggleMute = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    const nextMuted = !isMuted;
    audioEl.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      audioEl.play().catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-[60] flex items-center gap-1 sm:gap-2 bg-[rgba(3,0,20,0.6)] backdrop-blur-md border border-[#2A0E61] rounded-full px-2 sm:px-3 py-1 sm:py-2 text-gray-200 text-xs sm:text-sm">
      <audio ref={audioRef} src="/space-120280.mp3" loop autoPlay playsInline />
      <button onClick={toggleMute} className="text-xs sm:text-sm cursor-pointer">
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <span className="text-[10px] sm:text-xs opacity-70">{isReady ? "Music" : "Loading"}</span>
    </div>
  );
};


