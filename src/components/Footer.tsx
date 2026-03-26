const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm">
          <span className="text-gradient font-semibold">TOTAL VIEW</span>
          <span className="text-muted-foreground ml-1">Experience</span>
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Total View Experience. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
