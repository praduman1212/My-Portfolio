"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full py-14">
      {/* Portrait - shows only when decrypted */}
      <AnimatePresence>
        {isDecrypted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-[1] flex items-center justify-center"
          >
            <div className="relative flex flex-col items-center rounded-3xl overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-600/40 to-cyan-600/40 shadow-[0_0_80px_rgba(112,66,248,0.35)] p-4">
              <Image
                src="/formal pic.png"
                alt="Praduman portrait"
                width={320}
                height={320}
                className="object-cover rounded-2xl"
                draggable={false}
                priority
              />

              {/* Encrypt button under the image */}
              <div
                onClick={() => setIsDecrypted((prev) => !prev)}
                className="Welcome-box mt-4 px-[20px] py-[8px] z-[20] border border-[#7042F88B] opacity-[0.95] bg-black/40 rounded-xl backdrop-blur-sm cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(112,66,248,0.6)] transition"
              >
                <h1 className="Welcome-text text-[14px] tracking-wide text-gray-200">
                  Encrypt
                </h1>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          security.
        </motion.div>
      </div>

      {/* Lock animation + Decrypt button */}
      {!isDecrypted && (
        <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <Image
              src="/lock-top.png"
              alt="Lock top"
              width={50}
              height={50}
              className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
            <Image
              src="/lock-main.png"
              alt="Lock main"
              width={70}
              height={70}
              className="z-10"
            />
          </div>

          {/* Decrypt button under lock */}
          <div
            onClick={() => setIsDecrypted(true)}
            className="Welcome-box mt-4 px-[20px] py-[8px] z-[20] border border-[#7042F88B] opacity-[0.95] bg-black/40 rounded-xl backdrop-blur-sm cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(112,66,248,0.6)] transition"
          >
            <h1 className="Welcome-text text-[14px] tracking-wide text-gray-200">
              Decrypt
            </h1>
          </div>
        </div>
      )}

      {/* Subtitle */}
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      {/* Video background */}
      <div className="w-full flex items-start justify-center absolute z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto opacity-40"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
