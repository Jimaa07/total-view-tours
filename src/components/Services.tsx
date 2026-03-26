import { motion } from "framer-motion";
import { Building2, Landmark, Hotel } from "lucide-react";
import serviceRealestate from "@/assets/service-realestate.jpg";
import serviceMuseum from "@/assets/service-museum.jpg";
import serviceHotel from "@/assets/service-hotel.jpg";

const services = [
  {
    icon: Building2,
    title: "Bienes Raíces",
    description: "Tours virtuales para propiedades residenciales y comerciales que incrementan las ventas y reducen visitas innecesarias.",
    image: serviceRealestate,
  },
  {
    icon: Landmark,
    title: "Museos y Galerías",
    description: "Experiencias culturales inmersivas que permiten explorar exposiciones y espacios artísticos desde cualquier lugar del mundo.",
    image: serviceMuseum,
  },
  {
    icon: Hotel,
    title: "Hoteles y Turismo",
    description: "Recorridos que muestran la experiencia completa de hospedaje, generando confianza y aumentando las reservas directas.",
    image: serviceHotel,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Nuestros Servicios</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Sectores que <span className="text-gradient">transformamos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="relative p-6 -mt-16 z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
