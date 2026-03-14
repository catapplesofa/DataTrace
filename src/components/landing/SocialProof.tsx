import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle, Clock } from "lucide-react";

const badges = [
  { icon: Shield, label: "Official portals only" },
  { icon: Lock, label: "No password sharing" },
  { icon: CheckCircle, label: "User-controlled MFA" },
  { icon: Clock, label: "Clear request status" },
];

const SocialProof = () => {
  return (
    <section id="trust" className="border-t border-border bg-card py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Built on trust
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold text-primary"
          >
            Security you can verify
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center shadow-card"
            >
              <badge.icon className="h-8 w-8 text-accent" />
              <span className="font-display text-sm font-semibold text-primary">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
