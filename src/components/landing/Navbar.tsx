import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-secondary" />
          <span className="font-display text-lg font-bold text-primary">DataTrace</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">Features</a>
          <a href="#how-it-works" className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">How it works</a>
          <a href="#trust" className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">Trust</a>
        </div>
        <Button variant="hero" size="lg">
          Add to Chrome — Free
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
