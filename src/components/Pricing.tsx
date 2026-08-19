import { motion } from "framer-motion";
import { Camera, Clapperboard, Sparkles, Star, Check, MessageCircle } from "lucide-react";

const packages = [
  {
    id: "fotos",
    name: "FOTOS",
    price: "Q150",
    description: "Para productos, negocios, emprendimientos o marca personal.",
    icon: Camera,
    features: [
      "10 fotografías seleccionadas y editadas",
      "Corrección de color e iluminación",
      "Entrega digital",
      "Formato optimizado para redes sociales",
    ],
    highlighted: false,
  },
  {
    id: "reel",
    name: "REEL",
    price: "Q175",
    description: "Un video corto y dinámico para mostrar un negocio, producto, servicio o marca.",
    icon: Clapperboard,
    features: [
      "1 reel de 20–40 segundos",
      "Edición y cortes",
      "Música",
      "Corrección básica de imagen",
      "Audio de calidad cuando el contenido lo requiera",
      "Entrega lista para redes sociales",
    ],
    highlighted: false,
  },
  {
    id: "contenido",
    name: "CONTENIDO",
    price: "Q275",
    description: "Fotografía y video en un mismo paquete para darle variedad a las redes sociales.",
    icon: Sparkles,
    features: [
      "10 fotografías editadas",
      "1 reel de 20–40 segundos",
      "Edición del video",
      "Audio de calidad cuando sea necesario",
      "Tomas estabilizadas",
      "Entrega digital",
    ],
    highlighted: true,
    badge: "Más popular",
  },
  {
    id: "contenido-plus",
    name: "CONTENIDO PLUS",
    price: "Q400",
    description: "Una opción más completa para crear diferentes piezas de contenido para un negocio o marca.",
    icon: Star,
    features: [
      "15 fotografías editadas",
      "2 reels de 20–40 segundos",
      "Edición de ambos videos",
      "Audio de calidad para hasta 2 personas",
      "Tomas estabilizadas",
      "Tomas creativas en 360° cuando el proyecto lo permita",
      "Entrega digital",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="paquetes" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Paquetes y Precios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Elige tu <span className="text-gradient">contenido ideal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Paquetes claros, precios transparentes y contenido profesional listo para impulsar tu negocio o marca.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-500 group ${
                pkg.highlighted
                  ? "bg-card border-2 border-primary/60 glow-md scale-[1.02] xl:scale-[1.03] z-10"
                  : "glass border border-border hover:border-primary/30"
              }`}
            >
              {pkg.highlighted && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                  pkg.highlighted ? "bg-primary/15" : "bg-primary/10"
                }`}>
                  <pkg.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight">{pkg.name}</h3>
              </div>

              <div className="mb-4">
                <span className="font-display text-4xl md:text-5xl font-bold text-foreground">{pkg.price}</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {pkg.description}
              </p>

              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`w-full text-center py-3.5 rounded-lg font-semibold text-sm transition-all ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90 glow-sm"
                    : "border border-border text-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                Me interesa
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <MessageCircle size={22} className="text-primary" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            ¿Tienes una idea diferente?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            También puedo crear contenido personalizado según lo que necesites: presentación de productos, videos hablando a cámara, entrevistas, testimonios, contenido para negocios y más.
            <br /><br />
            Cuéntame tu idea y preparemos una propuesta adaptada a tu proyecto.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity glow-sm"
          >
            Cotizar proyecto personalizado
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground/70 text-sm mt-10 max-w-xl mx-auto"
        >
          Precios de lanzamiento: estos son precios especiales de lanzamiento mientras continúo ampliando mi portafolio.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
