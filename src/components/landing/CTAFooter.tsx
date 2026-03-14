import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Shield } from "lucide-react";

const CTAFooter = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-elevated md:px-16"
        >
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Get your data back, the official way.
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-base text-primary-foreground/70">
              Use guided workflows to request exports from the companies that hold the most personal data.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8 h-14 bg-background px-10 text-base text-primary hover:bg-background/90">
              <a href="/start">
                <FileText className="mr-2 h-5 w-5" />
                Start with top targets
              </a>
            </Button>
          </div>

          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-secondary" />
            <span className="font-display text-sm font-bold text-primary">DataTrace</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">Privacy Policy</a>
            <a href="#" className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">Terms</a>
            <a
              href="https://github.com/mindfulmakers/data-auto-requester"
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              GitHub
            </a>
          </div>
          <p className="font-body text-xs text-muted-foreground">© 2026 DataTrace. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default CTAFooter;
