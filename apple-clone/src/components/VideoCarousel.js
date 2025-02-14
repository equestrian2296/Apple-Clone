"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const videos = [
    { src: "/assets/videos/highlight-first.mp4", title: "So fast. So fluid.\nGet a feel for the all-new\nCamera Control." },
    { src: "/assets/videos/highlight-sec.mp4", title: "Capture the moment.\nRevolutionary new camera technology." },
    { src: "/assets/videos/highlight-fourth.mp4", title: "Unparalleled Performance.\nSmooth, efficient, powerful." }
  ];

  // Handle video initialization and preloading
  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.load();
      }
    });
  }, []);

  // Handle auto change and video play/pause
  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.play().catch(() => {
          // Handle autoplay restrictions
          const playButton = document.createElement('button');
          playButton.innerText = 'Play';
          playButton.className = 'absolute inset-0 flex items-center justify-center bg-black/50 text-white text-2xl';
          playButton.onclick = () => {
            currentVideo.play();
            playButton.remove();
          };
          currentVideo.parentElement.appendChild(playButton);
        });
      } else {
        currentVideo.pause();
      }
    }

    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (index !== activeIndex && video) {
        video.pause();
        video.currentTime = 0; // Reset video position
      }
    });

    // Auto change every 5 seconds if not hovered
    const interval = setInterval(() => {
      if (!isHovered && isPlaying) {
        setActiveIndex((prev) => (prev + 1) % videos.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isHovered, isPlaying, videos.length]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <div className="relative w-full h-[80vh] bg-black overflow-hidden text-white"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute inset-0 flex transition-transform duration-500"
           style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {videos.map((video, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              preload="auto"
            >
              <source src={video.src} type="video/mp4" />
            </video>
            
            <motion.div 
              className="absolute top-1/4 left-8 text-white text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {video.title.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button onClick={togglePlayPause} className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <div className="w-32 h-1 bg-white/30 rounded-full relative">
          <div className="absolute top-0 left-0 h-full bg-white rounded-full" 
               style={{ width: `${((activeIndex + 1) / videos.length) * 100}%` }}></div>
        </div>
      </div>

      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
        Prev
      </button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition">
        Next
      </button>
    </div>
  );
};

export default VideoCarousel;
