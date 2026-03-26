import { motion } from "framer-motion";
import { Camera, Cpu, Globe, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Captura",
    description: "Visitamos tu espacio con equipos 360° profesionales y capturamos cada ángulo con la más alta resolución.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Procesamiento",
    description: "Procesamos y optimizamos las imágenes para crear una experiencia fluida e inmersiva en cualquier dispositivo.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Personalización",
    description: "Añadimos puntos de interés, información, marca personalizada y elementos interactivos a tu recorrido.",
  },
  {
    icon: Globe,
    step: "04",
    title: "Publicación",
    description: "Tu tour virtual queda listo para compartir en web, redes sociales o integrarse en cualquier plataforma.",
  },
];

const HowItWorks = () => {
  return (
    <section id="proceso" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Cómo Funciona</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Proceso <span className="text-gradient">simple y efectivo</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group"
            >
              <span className="text-primary/30 font-display text-5xl font-bold">{step.step}</span>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-4 mb-3 group-hover:glow-sm transition-shadow">
                <step.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
