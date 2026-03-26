import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Contacto</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              ¿Listo para una <span className="text-gradient">experiencia total</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada sin compromiso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Teléfono</label>
                <input
                  type="tel"
                  placeholder="+52 (555) 123-4567"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Tipo de Proyecto</label>
                <select className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                  <option value="">Seleccionar...</option>
                  <option value="realestate">Bienes Raíces</option>
                  <option value="hospitality">Hotelería / Turismo</option>
                  <option value="cultural">Museos / Galerías</option>
                  <option value="commercial">Comercial</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm text-muted-foreground font-medium">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity glow-sm"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10 pt-8 border-t border-border/50">
              <a href="mailto:info@totalviewexperience.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail size={16} className="text-primary" /> info@totalviewexperience.com
              </a>
              <a href="tel:+525551234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone size={16} className="text-primary" /> +52 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
