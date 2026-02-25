import { Linkedin } from "lucide-react";

const LINKEDIN_LINK = "https://www.linkedin.com/in/totok-suryanto";

const Footer = () => (
  <footer className="py-12 border-t" style={{ borderColor: "hsl(220 12% 18%)" }}>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-xs text-muted-foreground">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-heading text-sm font-semibold text-gradient-primary">Hometown Tha-Tha-Tha</p>
          <p>© {new Date().getFullYear()} Hometown Tha-Tha-Tha. All rights reserved.</p>
          <p>Akraf Surya Alghifari (ASA).</p>
        </div>
        <div className="space-y-2 text-center md:text-right">
          <p>All product names, trademarks, and logos displayed on this site are the property of their respective owners.</p>
          <p>
            For business inquiries: totok.suryanto@rocketmail.com | WhatsApp: +62 821-1118-6898
          </p>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors mt-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
