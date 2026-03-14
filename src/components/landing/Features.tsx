import { motion } from "framer-motion";
import { Search, Shield, FileText } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Pick targets",
    description: "Start with Google, Apple, Meta, Amazon, Uber, and credit bureaus to recover the bulk of your data fast.",
  },
  {
    icon: Shield,
    title: "Authenticate safely",
    description: "Use official privacy portals. You stay in control of logins, MFA, and any identity checks.",
  },
  {
    icon: FileText,
    title: "Track requests",
    description: "Queue exports, confirm email handoffs, and keep a clean status list across every company.",
  },
];

const Features = () => {
  return (
    <section id="how-it-works" className="py-24">
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
            Three steps to retrieval
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
