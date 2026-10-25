import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const opacity = useTransform(scrollY, [0, 600], [0.75, 0.15]);

  // High quality futuristic 3D digital flow / cyber data wave video
  const videoSrc =
    "https://videos.pexels.com/video-files/28561463/12421439_3840_2160_30fps.mp4";
  const fallbackVideoSrc =
    "https://videos.pexels.com/video-files/32399073/13820343_3840_2160_30fps.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });
  }, []);

  return (
    <motion.div
      style={{ y, opacity }}
      className="pointer-events-none absolute inset-0 -z-20 h-[120%] w-full overflow-hidden"
    >
      {/* 3D Background Video with slow zoom */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="animate-video-zoom h-full w-full object-cover object-center filter brightness-[0.75] contrast-[1.15]"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={fallbackVideoSrc} type="video/mp4" />
      </video>

      {/* Futuristic Scanline and Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-25" />

      {/* Layered Gradient Overlays for Maximum Readability & Apple-Style Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/70 to-[#0B0F19]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0%,rgba(11,15,25,0.85)_70%,#0B0F19_100%)]" />

      {/* Top and Bottom soft blend */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0B0F19] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0F19] to-transparent" />
    </motion.div>
  );
}
