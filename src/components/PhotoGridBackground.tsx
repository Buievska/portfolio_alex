"use client";
import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";

const CARDS_COUNT = 96;
const STATIC_DATA = Array.from({ length: CARDS_COUNT }, (_, i) => ({
  id: i,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 15,
  repeatDelay: Math.random() * 12,
  seed: Math.floor(Math.random() * 1000),
}));

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const PhotoCard = ({ data }: { data: (typeof STATIC_DATA)[0] }) => {
  return (
    <div className="relative p-[1px]">
      <motion.div
        className="relative aspect-square rounded-sm overflow-hidden bg-black"
        style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        animate={{
          boxShadow: [
            "0px 0px 0px rgba(255,255,255,0)",
            "0px 0px 20px rgba(255,255,255,0.35)",
            "0px 0px 0px rgba(255,255,255,0)",
          ],
          borderColor: [
            "rgba(255,255,255,0.05)",
            "rgba(255,255,255,0.5)",
            "rgba(255,255,255,0.05)",
          ],
        }}
        transition={{
          duration: data.duration,
          repeat: Infinity,
          delay: data.delay,
          repeatDelay: data.repeatDelay,
          ease: "easeInOut",
        }}
      >
        <motion.img
          src={`https://picsum.photos/seed/${data.seed}/120/120`}
          alt=""
          className="w-full h-full object-cover grayscale"
          initial={{ opacity: 0.05 }}
          animate={{
            opacity: [0.05, 0.35, 0.05],
          }}
          transition={{
            duration: data.duration,
            repeat: Infinity,
            delay: data.delay,
            repeatDelay: data.repeatDelay,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

const PhotoGridBackground = () => {
  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!isMounted) return <div className="absolute inset-0 bg-black" />;

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-4 p-6 w-full h-full opacity-70">
        {STATIC_DATA.map((card) => (
          <PhotoCard key={card.id} data={card} />
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,_transparent_15%,_black_85%)] pointer-events-none" />
      <div className="absolute inset-0 z-10 backdrop-blur-[0.5px] pointer-events-none" />
    </div>
  );
};

export default PhotoGridBackground;
