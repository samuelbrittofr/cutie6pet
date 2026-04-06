import { motion } from "framer-motion";
import gallery1 from "@/assets/hero-user-1.png";
import gallery2 from "@/assets/hero-user-2.png";
import gallery3 from "@/assets/hero-user-4.png";

const images = [
  { src: gallery1, alt: "Freshly groomed Shih Tzu at Cutie 6 Pet" },
  { src: gallery2, alt: "Happy customer with groomed puppy at Cutie 6 Pet" },
  { src: gallery3, alt: "Adorable dog after grooming session at Cutie 6 Pet" },
];

const PetGallery = () => (
  <section className="py-16">
    <div className="container">
      <div className="text-center mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Our Happy Clients</h2>
          <p className="text-muted-foreground text-sm mt-2">See some of the adorable pets we've groomed</p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-xl aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
              width={400}
              height={400}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PetGallery;
