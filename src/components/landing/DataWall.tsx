import { motion } from "framer-motion";

const sites = [
  "Amazon", "Facebook", "Google", "Twitter", "Netflix", "Spotify",
  "Instagram", "LinkedIn", "TikTok", "Reddit", "YouTube", "Uber",
  "Airbnb", "Walmart", "eBay", "PayPal", "Zoom", "Slack",
];

const dataTypes: Record<string, string> = {
  Amazon: "Purchase history",
  Facebook: "Social graph",
  Google: "Search history",
  Twitter: "Interest profile",
  Netflix: "Viewing habits",
  Spotify: "Listening data",
  Instagram: "Photo metadata",
  LinkedIn: "Career data",
  TikTok: "Watch patterns",
  Reddit: "Browsing habits",
  YouTube: "Watch history",
  Uber: "Location history",
  Airbnb: "Travel data",
  Walmart: "Shopping data",
  eBay: "Purchase history",
  PayPal: "Financial data",
  Zoom: "Meeting logs",
  Slack: "Message data",
};

const DataWall = () => {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mb-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Your data is everywhere
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 font-display text-3xl font-bold text-primary"
        >
          Websites collect more than you think
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
