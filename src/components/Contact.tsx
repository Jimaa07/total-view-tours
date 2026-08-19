import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Upload, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const MAX_IMAGES = 6;
const MAX_SIZE = 8 * 1024 * 1024; // 8MB

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const valid: File[] = [];
    for (const f of files) {
      if (!f.type.startsWith("image/")) {
        toast.error(`${f.name}: solo se permiten imágenes.`);
        continue;
      }
      if (f.size > MAX_SIZE) {
        toast.error(`${f.name}: supera 8MB.`);
        continue;
      }
      valid.push(f);
    }
    const combined = [...images, ...valid].slice(0, MAX_IMAGES);
    if (images.length + valid.length > MAX_IMAGES) {
      toast.error(`Máximo ${MAX_IMAGES} imágenes.`);
    }
    setImages(combined);
    e.target.value = "";
  };

  const removeImage = (idx: number) => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const uploadImages = async (): Promise<string[]> => {
    const urls: string[] = [];
    const folder = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    for (const file of images) {
      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `${folder}/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from("property-images").upload(path, file, {
        contentType: file.type,
        upsert: false,
      });
      if (error) throw error;
      const { data, error: signErr } = await supabase.storage
        .from("property-images")
        .createSignedUrl(path, 60 * 60 * 24 * 365);
      if (signErr) throw signErr;
      urls.push(data.signedUrl);
    }
    return urls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.location) {
      toast.error("Por favor completa los campos obligatorios.");
      return;
    }
    setSending(true);
    try {
      let imageUrls: string[] = [];
      if (images.length > 0) {
        imageUrls = await uploadImages();
      }
      await emailjs.send(
        "service_gqb5ekj",
        "template_xksifp6",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          project_type: form.project,
          location: form.location,
          message: form.message,
          image_links: imageUrls.length > 0 ? imageUrls.join("\n") : "Sin imágenes adjuntas",
          image_count: imageUrls.length,
        },
        { publicKey: "8_aMSh-2p3q7xA23j" }
      );
      toast.success("¡Solicitud enviada con éxito!");
      setForm({ name: "", email: "", phone: "", project: "", location: "", message: "" });
      setImages([]);
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

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
            <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+502 51082954"
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground font-medium">Tipo de Proyecto</label>
                <select
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="">Seleccionar...</option>
                  <option value="realestate">Bienes Raíces</option>
                  <option value="hospitality">Hotelería / Turismo</option>
                  <option value="cultural">Museos / Galerías</option>
                  <option value="commercial">Comercial</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm text-muted-foreground font-medium">
                  Link de ubicación <span className="text-muted-foreground/60">(Google Maps, obligatorio)</span>
                </label>
                <input
                  type="url"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="https://maps.google.com/..."
                  required
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm text-muted-foreground font-medium">
                  Mensaje <span className="text-muted-foreground/60">(opcional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm text-muted-foreground font-medium">
                  Imágenes de la propiedad <span className="text-muted-foreground/60">(opcional, hasta {MAX_IMAGES})</span>
                </label>
                <label
                  htmlFor="property-images"
                  className="flex flex-col items-center justify-center gap-2 bg-secondary border border-dashed border-border hover:border-primary/50 rounded-lg px-4 py-6 cursor-pointer transition-colors"
                >
                  <Upload size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Haz clic para subir imágenes (máx. 8MB cada una)
                  </span>
                  <input
                    id="property-images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImages}
                    className="hidden"
                  />
                </label>
                {images.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-2">
                    {images.map((file, idx) => (
                      <div key={idx} className="relative group aspect-square rounded-lg overflow-hidden border border-border">
                        <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute top-1 right-1 bg-background/80 hover:bg-destructive rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Quitar imagen"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity glow-sm disabled:opacity-50"
                >
                  {sending ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10 pt-8 border-t border-border/50">
              <a href="mailto:totalviewexperiencie@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail size={16} className="text-primary" /> totalviewexperiencie@gmail.com
              </a>
              <a href="tel:+50251082954" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone size={16} className="text-primary" /> +502 51082954
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
