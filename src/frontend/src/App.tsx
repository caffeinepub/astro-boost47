import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Eye,
  Facebook,
  Instagram,
  MessageCircle,
  Rocket,
  Shield,
  Star,
  ThumbsUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

const WHATSAPP_URL = "https://wa.me/8801737271494";

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Heart"
      role="img"
    >
      <title>Heart</title>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

const services = [
  {
    id: "fb-followers",
    icon: <Facebook className="w-6 h-6" />,
    platform: "Facebook",
    title: "Hidden Followers",
    amount: "1K",
    price: "55 TK",
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    border: "border-blue-800/40",
  },
  {
    id: "ig-followers",
    icon: <Instagram className="w-6 h-6" />,
    platform: "Instagram",
    title: "Followers",
    amount: "1K",
    price: "145 TK",
    color: "text-pink-400",
    bg: "bg-pink-950/30",
    border: "border-pink-800/40",
  },
  {
    id: "fb-likes",
    icon: <ThumbsUp className="w-6 h-6" />,
    platform: "Facebook",
    title: "Page Likes",
    amount: "1K",
    price: "25 TK",
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    border: "border-blue-800/40",
  },
  {
    id: "ig-likes",
    icon: <HeartIcon className="w-6 h-6" />,
    platform: "Instagram",
    title: "Likes",
    amount: "1K",
    price: "40 TK",
    color: "text-pink-400",
    bg: "bg-pink-950/30",
    border: "border-pink-800/40",
  },
  {
    id: "fb-views",
    icon: <Eye className="w-6 h-6" />,
    platform: "Facebook",
    title: "Video Views",
    amount: "1K",
    price: "17 TK",
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    border: "border-blue-800/40",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center green-glow">
              <Rocket className="w-4 h-4 text-primary-foreground" />
            </div>
            <span
              className="font-bold text-xl tracking-tight text-gradient"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Astro Boost47
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <button
              type="button"
              data-ocid="nav.home.link"
              onClick={() => scrollToSection("home")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Home
            </button>
            <button
              type="button"
              data-ocid="nav.services.link"
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Services
            </button>
            <button
              type="button"
              data-ocid="nav.order.link"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Order
            </button>
            <button
              type="button"
              data-ocid="nav.contact.link"
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Contact
            </button>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:opacity-90 green-glow hidden sm:flex gap-1.5"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              Order Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[85vh] flex items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1600x800.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-primary/15 text-primary border-primary/30 px-4 py-1.5 text-sm font-medium">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Premium Growth Service
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Boost Your <span className="text-gradient">Social Media</span>
            <br />
            Instantly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
          >
            High Quality <Facebook className="inline w-4 h-4 text-blue-400" />{" "}
            Facebook, <Instagram className="inline w-4 h-4 text-pink-400" />{" "}
            Instagram & <SiTiktok className="inline w-4 h-4 text-foreground" />{" "}
            TikTok Followers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                className="bg-primary text-primary-foreground hover:opacity-90 green-glow text-base px-8 py-6 font-semibold gap-2"
              >
                <SiWhatsapp className="w-5 h-5" />
                Order Now on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted/50 text-base px-8 py-6 font-medium"
              onClick={() => scrollToSection("services")}
            >
              View Pricing
            </Button>
          </motion.div>
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { label: "Happy Clients", value: "2K+" },
              { label: "Orders Done", value: "15K+" },
              { label: "Platforms", value: "3+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 px-3 py-1">
              <Star className="w-3 h-3 mr-1.5" />
              Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Affordable <span className="text-gradient">Pricing Plans</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Real followers, real engagement — delivered fast at unbeatable
              prices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                data-ocid={`services.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-xl border card-glow p-6 flex flex-col gap-5 ${svc.bg} ${svc.border} cursor-default`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="flex items-start justify-between">
                  <div
                    className={`${svc.color} ${svc.bg} p-3 rounded-lg border ${svc.border}`}
                  >
                    {svc.icon}
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/25 text-xs font-semibold">
                    {svc.platform}
                  </Badge>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-medium">
                    {svc.amount} {svc.title}
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight text-gradient">
                    {svc.price}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    per 1,000
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button
                    data-ocid={`services.order_button.${i + 1}`}
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 gap-2 font-semibold"
                    size="sm"
                  >
                    <SiWhatsapp className="w-3.5 h-3.5" />
                    Order Now
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section
        id="notice"
        data-ocid="notice.section"
        className="py-16 px-4 sm:px-6 bg-card/50 border-y border-border"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-950/40 border border-yellow-700/30 mb-6">
              <Shield className="w-7 h-7 text-yellow-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Important Notice
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto border border-yellow-800/30 bg-yellow-950/20 rounded-xl px-6 py-5">
              ⚠️ Astro Boost47 is not responsible for any problems with the ID
              after getting followers. Please ensure your account is in good
              standing before ordering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/20 bg-primary/5 p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(72.5%_0.2_145/0.08),transparent_70%)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 mb-6 green-glow">
                <SiWhatsapp className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
                Ready to Grow?
              </h2>
              <p className="text-muted-foreground text-lg mb-2">
                Contact us directly on WhatsApp for instant orders
              </p>
              <p className="text-primary font-bold text-xl mb-8">01737271494</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-90 green-glow text-base px-10 py-6 font-bold gap-2"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-ocid="footer.panel"
        className="bg-card border-t border-border py-10 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <Rocket className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span
                className="font-bold text-lg text-gradient"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Astro Boost47
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-primary" />
                Contact WhatsApp:{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  01737271494
                </a>
              </div>
              <p className="text-xs text-muted-foreground/70">
                © 2026 Astro Boost47. Premium Social Media Growth Service.
              </p>
            </div>
            <p className="text-xs text-muted-foreground/50">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
