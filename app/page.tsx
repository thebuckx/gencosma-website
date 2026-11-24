 "use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setSending(true);
    setSubmitted(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Unable to send your enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-semibold tracking-tight">
            GenCosma<span className="text-zinc-500">.</span>
          </a>

          <div className="hidden items-center gap-10 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#approach" className="transition hover:text-white">Our Approach</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-300 md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-6 border-t border-white/10 bg-black px-6 py-8 text-zinc-300 md:hidden">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#approach" onClick={closeMenu}>Our Approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-8 text-sm uppercase tracking-[0.35em] text-zinc-500">
            Intelligence. Technology. Growth.
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl md:text-8xl">
            Your business.
            <br />
            <span className="text-zinc-500">Without limits.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            We build intelligent software, AI-powered systems and digital
            solutions that help businesses operate smarter and grow faster.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-zinc-300"
            >
              Start a Project →
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
            >
              Explore What We Do
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About GenCosma
            </p>

            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Technology should move your business forward.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-9 text-zinc-400">
              At GenCosma, we help businesses simplify everyday operations
              through intelligent technology. From custom software to AI
              automation, we turn complex business challenges into practical
              digital solutions.
            </p>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              Our focus is simple: build technology that saves time, improves
              efficiency and creates opportunities for growth.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
              What We Do
            </p>

            <h2 className="text-4xl font-semibold sm:text-6xl">
              Solutions built for what's next.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              We combine technology, creativity and intelligent systems to
              solve real business problems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "AI Automation",
                description:
                  "Automate repetitive workflows, manage leads and build intelligent systems that give your team more time to focus on growth.",
              },
              {
                number: "02",
                title: "Custom Software",
                description:
                  "Powerful websites, web applications and custom digital platforms designed around your business requirements.",
              },
              {
                number: "03",
                title: "CRM Solutions",
                description:
                  "Centralise customer information, manage sales pipelines and streamline your business operations.",
              },
              {
                number: "04",
                title: "LMS Development",
                description:
                  "Build modern learning platforms to manage courses, students, assessments and digital education experiences.",
              },
            ].map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-9 transition hover:border-white/30 hover:bg-white/[0.05]"
              >
                <p className="mb-12 text-sm text-zinc-600">
                  {service.number}
                </p>

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block text-sm text-white transition group-hover:text-zinc-400"
                >
                  Discuss a project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Our Approach
            </p>

            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
              From business challenges to intelligent solutions.
            </h2>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "We understand your business, identify challenges and define the right solution.",
              },
              {
                number: "02",
                title: "Build",
                description:
                  "We design and develop technology around your requirements and goals.",
              },
              {
                number: "03",
                title: "Grow",
                description:
                  "We help you implement, improve and scale your digital systems.",
              },
            ].map((step) => (
              <div key={step.number} className="border-t border-white/20 pt-8">
                <p className="text-sm text-zinc-600">{step.number}</p>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-5 leading-8 text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact Us
            </p>

            <h2 className="text-5xl font-semibold leading-tight sm:text-7xl">
              Let's build something
              <span className="text-zinc-500"> meaningful.</span>
            </h2>

            <p className="mt-8 max-w-md leading-8 text-zinc-400">
              Have an idea, a business challenge or a project in mind?
              Tell us about it. Let's explore what's possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-zinc-400">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">Service Required</label>
              <select
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-white/40"
              >
                <option value="" disabled>Select a service</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Custom Software">Custom Software</option>
                <option value="CRM Solutions">CRM Solutions</option>
                <option value="LMS Development">LMS Development</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">Project Details</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Enquiry →"}
            </button>

            {submitted && (
              <p className="text-center text-sm text-green-400">
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-semibold">GenCosma.</p>
            <p className="mt-2 text-sm text-zinc-500">
              Where intelligence becomes automation.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 GenCosma. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}