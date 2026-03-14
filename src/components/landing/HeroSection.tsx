import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, MapPin, Search, Shield, ShoppingCart, Car } from "lucide-react";

const dataItems = [
  { icon: Search, label: "Search history", count: 1 },
  { icon: MapPin, label: "Location timeline", count: 3 },
  { icon: ShoppingCart, label: "Purchase history", count: 2 },
  { icon: Car, label: "Trip logs", count: 1 },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-body text-xs font-medium text-muted-foreground">
                Official privacy portals, guided end to end
              </span>
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight text-primary lg:text-6xl">
              Retrieve your{" "}
              <span className="text-gradient">personal data</span>
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
              DataTrace guides you through official privacy and export portals for the biggest companies, so you can request a full copy of your data with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="h-12 px-8 text-base">
                <a href="/start">
                  <FileText className="mr-2 h-5 w-5" />
                  Start a data request
                </a>
              </Button>
              <Button asChild variant="hero-outline" size="lg" className="h-12 px-8 text-base">
                <a href="#targets">View target list</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="font-body text-sm text-muted-foreground">Runs in your browser</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="font-body text-sm text-muted-foreground">You control login and MFA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="font-body text-sm text-muted-foreground">Open source</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Extension mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-background p-1 shadow-elevated">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 rounded-t-xl bg-card px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/40" />
                  <div className="h-3 w-3 rounded-full bg-accent/40" />
                  <div className="h-3 w-3 rounded-full bg-secondary/40" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-muted px-3 py-1.5">
                  <span className="font-body text-xs text-muted-foreground">example-shop.com</span>
                </div>
              </div>

              {/* Extension popup */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span className="font-display text-sm font-bold text-primary">DataTrace</span>
                  </div>
                  <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 font-body text-xs font-medium text-secondary">
                    4 exports queued
                  </span>
                </div>
                <div className="space-y-3">
                  {dataItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      className="flex items-center justify-between rounded-lg border border-border p-3"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-body text-sm text-primary">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-semibold text-primary">{item.count}</span>
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="hero" size="default" className="mt-4 w-full">
                  Request Full Export
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
