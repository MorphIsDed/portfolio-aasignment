import { useState, type FormEvent } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { personalInfo } from "../../data/portfolio";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // UI-only: no backend integration
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Contact" title="Let's connect" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Info side */}
          <ScrollReveal>
            <div className="space-y-6">
              <p className="dark:text-gray-300 text-gray-800 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something great. Feel free to reach
                out!
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-dark-700 bg-gray-100 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors">
                    <svg className="w-5 h-5 dark:text-accent-400 text-accent-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-sm dark:text-gray-300 text-gray-800 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                    {personalInfo.email}
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-dark-700 bg-gray-100 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors">
                    <svg className="w-5 h-5 dark:text-accent-400 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-sm dark:text-gray-300 text-gray-800 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                    LinkedIn
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-dark-700 bg-gray-100 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors">
                    <svg className="w-5 h-5 dark:text-accent-400 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-sm dark:text-gray-300 text-gray-800 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form side */}
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
                  <p className="text-sm dark:text-gray-400 text-gray-700">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border dark:border-dark-600 border-gray-200 dark:bg-dark-800 bg-gray-50 px-4 py-3 text-sm dark:text-gray-200 text-gray-900 placeholder:dark:text-gray-600 placeholder:text-gray-400 outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-xl border dark:border-dark-600 border-gray-200 dark:bg-dark-800 bg-gray-50 px-4 py-3 text-sm dark:text-gray-200 text-gray-900 placeholder:dark:text-gray-600 placeholder:text-gray-400 outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-800 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border dark:border-dark-600 border-gray-200 dark:bg-dark-800 bg-gray-50 px-4 py-3 text-sm dark:text-gray-200 text-gray-900 placeholder:dark:text-gray-600 placeholder:text-gray-400 outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
