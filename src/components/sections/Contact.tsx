import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { personalInfo } from "../../data/portfolio";

const initialFormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const resumeHref = personalInfo.resumeUrl || `mailto:${personalInfo.email}?subject=Resume%20Request`;

  const resetFormState = () => {
    setSubmitted(false);
    setStatus("idle");
    setFormData(initialFormState);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.website.trim()) {
      setStatus("success");
      setSubmitted(true);
      setFormData(initialFormState);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setSubmitted(true);
      setFormData(initialFormState);
      return;
    }

    setStatus("pending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setSubmitted(true);
        setFormData(initialFormState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="theme-section py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Contact" title="Let's connect" />

        <div className="section-frame grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="editorial-panel px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Best fit</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Frontend engineering, product-minded UI work, and teams that care about both polish and execution.
                </p>
              </div>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to build something thoughtful. Feel free to reach
                out.
              </p>

              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="theme-surface-muted flex h-10 w-10 items-center justify-center rounded-xl group-hover:bg-accent-500/10">
                    <svg className="w-5 h-5 dark:text-accent-400 text-accent-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 transition-colors group-hover:text-accent-600 dark:text-gray-300 dark:group-hover:text-accent-400">
                    {personalInfo.email}
                  </span>
                </motion.a>

                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="theme-surface-muted flex h-10 w-10 items-center justify-center rounded-xl group-hover:bg-accent-500/10">
                    <svg className="w-5 h-5 dark:text-accent-400 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 transition-colors group-hover:text-accent-600 dark:text-gray-300 dark:group-hover:text-accent-400">
                    LinkedIn
                  </span>
                </motion.a>

                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="theme-surface-muted flex h-10 w-10 items-center justify-center rounded-xl group-hover:bg-accent-500/10">
                    <svg className="w-5 h-5 dark:text-accent-400 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 transition-colors group-hover:text-accent-600 dark:text-gray-300 dark:group-hover:text-accent-400">
                    GitHub
                  </span>
                </motion.a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="editorial-panel px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Hiring</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Open to internships, freelance, and collaborative product work.</p>
                </div>
                <div className="editorial-panel px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Style</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Clear communication, thoughtful UX, and clean implementation.</p>
                </div>
              </div>

              <motion.a
                href={resumeHref}
                target={personalInfo.resumeUrl ? "_blank" : undefined}
                rel={personalInfo.resumeUrl ? "noopener noreferrer" : undefined}
                whileHover={{ x: 6 }}
                className="inline-flex items-center gap-3 rounded-full border border-black/8 bg-white/72 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:text-accent-600 dark:border-white/10 dark:bg-white/6 dark:text-gray-100 dark:hover:text-accent-400"
              >
                {personalInfo.resumeUrl ? "View Resume" : "Request Resume by Email"}
              </motion.a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-display font-bold text-lg dark:text-white text-gray-900">
                    Message sent!
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={resetFormState}
                    className="inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-accent-600 dark:border-white/10 dark:text-gray-300 dark:hover:text-accent-400"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] border border-white/50 bg-white/45 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/4 sm:p-6">
                {!FORMSPREE_ENDPOINT && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Formspree is not configured, so this form will open your email client as a fallback.
                  </p>
                )}
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  value={formData.website}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, website: event.target.value }))
                  }
                  className="hidden"
                  aria-hidden="true"
                />
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    minLength={2}
                    maxLength={80}
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, name: event.target.value }))
                    }
                    className="theme-surface w-full rounded-xl px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 dark:text-gray-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, email: event.target.value }))
                    }
                    className="theme-surface w-full rounded-xl px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 dark:text-gray-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    minLength={20}
                    maxLength={1500}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, message: event.target.value }))
                    }
                    className="theme-surface w-full rounded-xl px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 dark:text-gray-200"
                    placeholder="What's on your mind?"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "pending"}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(220,110,49,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(220,110,49,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "pending" ? "Sending..." : "Send Message"}
                </motion.button>
                {status === "error" && (
                  <p className="text-sm text-red-400">Sorry, the message could not be sent. Please try again later.</p>
                )}
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
