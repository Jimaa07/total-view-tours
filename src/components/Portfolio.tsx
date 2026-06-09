import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Explora nuestros <span className="text-gradient">tours 360°</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Navega por nuestra colección de tours virtuales realizados. Explora cada espacio desde cualquier ángulo sin salir de esta página.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-border/50 glass glow-sm"
        >
          <div className="aspect-[16/10] w-full">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              src="https://kuula.co/share/collection/7HQL1?logo=1&info=1&fs=1&vr=0&gyro=0&initload=0&thumbs=-1&margin=18&alpha=0.60&inst=es"
              title="Portafolio de Tours 360 - Total View Experience"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-6"
        >
          Usa el mouse o los controles en pantalla para explorar cada tour. También disponible en pantalla completa.
        </motion.p>
      </div>
    </section>
  );
};

export default Portfolio;