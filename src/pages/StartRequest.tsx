import { useEffect, useState } from "react";
import { Shield, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Download and install Codex CLI",
    detail: "Get Codex from the official download page, then sign in.",
  },
  {
    title: "Install the skill into Codex",
    detail: "Run the install command so Codex can load the privacy-data-retrieval skill.",
  },
  {
    title: "Run the workflow",
    detail: "Ask Codex to use the privacy-data-retrieval skill and follow the official portal steps for each target company.",
  },
  {
    title: "Track status",
    detail: "Codex will keep a running status for each request and tell you when an email or device confirmation is needed.",
  },
];

type CopyButtonProps = {
  value: string;
  ariaLabel: string;
};

const CopyButton = ({ value, ariaLabel }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="h-7 px-2 text-xs"
      aria-label={ariaLabel}
    >
      {copied ? "Copied" : "Copy"}
    </Button>
  );
};

const StartRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-secondary" />
            <span className="font-display text-lg font-bold text-primary">DataTrace</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
              Back to home
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-12">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
              Start a data request
            </h1>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              Follow this step-by-step tutorial to install Codex CLI, add the DataTrace skill, and run a guided privacy portal workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-xl font-bold text-primary">What the skill does</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              The privacy-data-retrieval skill drives official privacy and export portals with Playwright, handles login and MFA handoffs safely in-browser, and focuses on high-yield targets like Google, Apple, Meta, Amazon, Uber, and major privacy request portals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 font-display text-sm font-bold text-secondary">
                    {index + 1}
                  </div>
                  <h2 className="font-display text-xl font-bold text-primary">{step.title}</h2>
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Step-by-step tutorial
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary">
              Copy, paste, and run these commands in order
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-background px-5 py-4">
              <p className="font-body text-sm font-semibold text-primary">Step 1: Download Codex CLI</p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Grab the installer here, then sign in:
              </p>
              <a
                href="https://openai.com/codex/get-started/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
              >
                Open Codex download page
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-xl border border-border bg-background px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-body text-sm font-semibold text-primary">Step 2: Install the skill</p>
              </div>
              <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-body text-xs font-semibold text-primary">From GitHub</p>
                  <CopyButton
                    value="npx skills add https://github.com/mindfulmakers/data-auto-requester.git"
                    ariaLabel="Copy full repo install command"
                  />
                </div>
                <pre className="mt-2 overflow-x-auto text-xs text-foreground">
                  <code>npx skills add https://github.com/mindfulmakers/data-auto-requester.git</code>
                </pre>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background px-5 py-4 lg:col-span-2">
              <div className="flex items-center justify-between gap-3">
                <p className="font-body text-sm font-semibold text-primary">Step 3: Run a Codex prompt</p>
                <CopyButton
                  value="Use the privacy-data-retrieval skill to request my data. Start with Google Takeout, then Apple, Meta, Amazon, Uber, and credit bureaus."
                  ariaLabel="Copy Codex prompt"
                />
              </div>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-muted px-4 py-3 text-xs text-foreground">
                <code>Use the privacy-data-retrieval skill to request my data. Start with Google Takeout, then Apple, Meta, Amazon, Uber, and credit bureaus.</code>
              </pre>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-background px-5 py-4">
            <CheckCircle className="mt-0.5 h-5 w-5 text-accent" />
            <p className="font-body text-sm text-muted-foreground">
              When a portal asks for MFA or identity verification, complete it in the browser. Some exports take hours or days to prepare.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartRequest;
