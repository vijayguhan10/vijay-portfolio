import React from "react";
import { motion } from "framer-motion";

// Dynamically import all images from the achievements folder
const images = import.meta.glob(
  "../assets/achievements/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true, as: "url" },
);
const galleryImages = Object.values(images);

export default function AchievementsGallery() {
  return (
    <section className="mono-section" id="gallery">
      <div className="mono-shell">
        <h2 className="text-2xl sm:text-4xl md:text-5xl mono-title text-center mb-4 sm:mb-6 tracking-tight">
          Achievements Gallery
        </h2>
        <p className="text-base sm:text-lg text-center mono-muted mb-8 sm:mb-16 max-w-3xl mx-auto">
          A curated showcase of my proudest accomplishments. Each image
          represents a meaningful milestone that has shaped my journey.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative overflow-hidden mono-card"
            >
              <div className="aspect-square min-h-[120px] sm:min-h-[180px] w-full ">
                <img
                  src={src}
                  alt={`Achievement ${idx + 1}`}
                  className="w-full h-full object-contain mono-media"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
