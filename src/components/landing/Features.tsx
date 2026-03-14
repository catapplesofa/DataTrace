import { motion } from "framer-motion";
import { Search, FileText, Trash2 } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Scan",
    description: "DataTrace automatically detects cookies, trackers, and stored personal data on any website you visit.",
  },
  {
    icon: FileText,
    title: "Report",
    description: "Get a clear, detailed report of exactly what data each site holds — emails, locations, browsing habits, and more.",
  },
  {
    icon: Trash2,
    title: "Request Deletion",
    description: "Generate GDPR & CCPA-compliant deletion requests and send them directly to the data controller with one click.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-4xl font-bold text-primary"
          >
            Three steps to privacy
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="group rounded-2xl border border-border bg-background p-8 transition-shadow duration-200 hover:shadow-elevated"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{feature.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
