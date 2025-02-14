import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-between pt-20 pb-10 bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.5 }}
        className="absolute w-[80%] md:w-[70%] z-0"
      >
        <Image
          src="/assets/images/herobgf.png"
          alt="iPhone 16 Pro"
          width={1900}
          height={900}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 3 }}
        className="text-center relative z-10"
      >
        <h1 className="text-5xl md:text-3xl mt-4 font-bold text-white drop-shadow-[0_0_80px_rgba(255,255,255,1)] shadow-2xl">
          iPhone 16 Pro
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 3 }}
          className="text-6xl md:text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#dddddd] to-[#ffbb00] drop-shadow-[0_0_60px_rgba(255,255,255,1)] shadow-2xl"
        >
          Hello, Apple Intelligence.
        </motion.p>
      </motion.div>
      
      <div className="flex justify-center gap-4 relative z-10 mt-10">
        <button className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-full shadow-2xl hover:bg-gray-300 transition text-lg">
          Learn More
        </button>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-2xl hover:bg-blue-700 transition text-lg">
          Buy
        </button>
      </div>
    </section>
  );
}
