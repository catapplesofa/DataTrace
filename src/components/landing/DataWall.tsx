import { motion } from "framer-motion";

const sites = [
  "Google", "Apple", "Meta", "Amazon", "Microsoft", "Uber",
  "Experian", "Equifax", "TransUnion", "LexisNexis",
  "AT&T", "Verizon", "T-Mobile",
  "American Airlines", "United", "Delta",
];

const dataTypes: Record<string, string> = {
  Google: "Search & location history",
  Apple: "Account & iCloud data",
  Meta: "Social graph & activity",
  Amazon: "Purchases & devices",
  Microsoft: "Account activity",
  Uber: "Trips & location",
  Experian: "Credit file",
  Equifax: "Credit file",
  TransUnion: "Credit file",
  LexisNexis: "Identity profile",
  "AT&T": "Network metadata",
  Verizon: "Network metadata",
  "T-Mobile": "Network metadata",
  "American Airlines": "Flight history",
  United: "Flight history",
  Delta: "Flight history",
};

const DataWall = () => {
  return (
    <section id="targets" className="border-y border-border bg-card py-16">
      <div className="container mb-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Start with the highest-yield targets
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 font-display text-3xl font-bold text-primary"
        >
          The biggest platforms hold most of your data
        </motion.h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card to-transparent" />
        <div className="flex animate-marquee gap-4">
          {[...sites, ...sites].map((site, i) => (
            <div
              key={`${site}-${i}`}
              className="flex min-w-[200px] flex-col items-center gap-2 rounded-xl border border-border bg-background px-6 py-4 shadow-card"
            >
              <span className="font-display text-sm font-semibold text-primary">{site}</span>
              <span className="font-body text-xs text-muted-foreground">{dataTypes[site]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataWall;
