import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-360.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tour virtual 360 de espacio de lujo"
          className="w-full h-full object-cover"
          width={1920}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Tours Virtuales 360°
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Experiencias inmersivas que
            <span className="text-gradient block mt-2">transforman espacios</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Creamos recorridos virtuales 360° de alta calidad que permiten a tus clientes explorar cada rincón de tu espacio desde cualquier dispositivo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity glow-md animate-pulse-glow"
            >
              Solicitar Demo
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 border border-border px-8 py-4 rounded-lg text-foreground hover:border-primary/50 transition-colors group"
            >
              <Play size={18} className="text-primary group-hover:scale-110 transition-transform" />
              Ver Proyectos
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={28} className="text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
