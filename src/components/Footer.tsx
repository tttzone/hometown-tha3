const Footer = () => (
  <footer className="py-16 border-t" style={{ borderColor: "hsl(30 8% 14%)" }}>
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading text-base md:text-lg italic text-foreground/80 max-w-lg mx-auto leading-relaxed mb-6">
        "Selamat datang di beranda kecilku, tempat ide mengalir setenang air dari puncak Ciremai."
      </p>
      <p className="text-xs text-muted-foreground font-medium">
        ASA — Akraf Surya Alghifari Personal Venture.
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
