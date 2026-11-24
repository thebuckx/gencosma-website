"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setSending(true);
    setSubmitted(false);

    try {
      await emailjs.sendForm(
        "gencosma",
        "template_dqphf7n",
        form,
        {
          publicKey: "KzzXSchSGkd26gDZ6",
        }
      );

      setSubmitted(true);
      form.reset();

    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Unable to send your enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

          <a href="#" className="text-2xl font-bold tracking-tight">
            GenCosma<span className="text-zinc-500">.</span>
          </a>

          <div className="hidden items-center gap-10 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Our Approach</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden border border-white px-5 py-3 text-sm transition hover:bg-white hover:text-black md:block"
          >
            Let's Talk ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-6 border-t border-white/10 bg-[#080808] px-6 py-8 text-sm text-zinc-300 md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Our Approach</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen items-center px-6 pt-32 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">

          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Intelligent Technology. Meaningful Growth.
          </p>

          <h1 className="max-w-6xl text-6xl font-medium leading-[1.05] tracking-tight sm:text-7xl lg:text-9xl">
            Your business.
            <br />
            <span className="text-zinc-500">Without limits.</span>
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              We build intelligent AI systems, custom software and digital
              solutions that simplify business operations and accelerate growth.
            </p>

            <a
              href="#contact"
              className="w-fit border border-white px-8 py-5 text-sm transition hover:bg-white hover:text-black"
            >
              Start a Project ↗
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
              01 / About GenCosma
            </p>

            <h2 className="text-5xl font-medium leading-tight sm:text-7xl">
              Technology should move your business forward.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg leading-relaxed text-zinc-400">
              GenCosma is a technology company focused on building intelligent
              digital solutions for modern businesses.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              From AI-powered automation to custom software development, we
              help businesses reduce repetitive work, improve efficiency and
              create better experiences for their customers.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white px-6 py-32 text-black lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
            02 / What We Do
          </p>

          <h2 className="max-w-4xl text-5xl font-medium leading-tight sm:text-7xl">
            Intelligent solutions for ambitious businesses.
          </h2>

          <div className="mt-20 grid gap-px bg-black/10 md:grid-cols-2">

            <div className="bg-white p-10">
              <span className="text-sm text-zinc-500">01</span>
              <h3 className="mt-10 text-3xl font-medium">AI Automation</h3>
              <p className="mt-5 leading-relaxed text-zinc-600">
                Automate repetitive business operations, streamline workflows
                and give your team more time to focus on growth.
              </p>
            </div>

            <div className="bg-white p-10">
              <span className="text-sm text-zinc-500">02</span>
              <h3 className="mt-10 text-3xl font-medium">Custom Software</h3>
              <p className="mt-5 leading-relaxed text-zinc-600">
                Build powerful web applications and digital products designed
                around your business requirements.
              </p>
            </div>

            <div className="bg-white p-10">
              <span className="text-sm text-zinc-500">03</span>
              <h3 className="mt-10 text-3xl font-medium">CRM Solutions</h3>
              <p className="mt-5 leading-relaxed text-zinc-600">
                Manage customers, leads, sales and business operations through
                intelligent and connected CRM systems.
              </p>
            </div>

            <div className="bg-white p-10">
              <span className="text-sm text-zinc-500">04</span>
              <h3 className="mt-10 text-3xl font-medium">LMS Development</h3>
              <p className="mt-5 leading-relaxed text-zinc-600">
                Create modern learning management platforms with powerful
                features for students, educators and organisations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="work" className="px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
            03 / Our Approach
          </p>

          <h2 className="max-w-4xl text-5xl font-medium leading-tight sm:text-7xl">
            From complexity to clarity.
          </h2>

          <div className="mt-20 grid gap-12 md:grid-cols-3">

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-zinc-500">01 / Understand</p>
              <h3 className="mt-6 text-2xl">Understand the problem.</h3>
              <p className="mt-5 leading-relaxed text-zinc-400">
                We understand your business, challenges and goals before
                designing the right solution.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-zinc-500">02 / Build</p>
              <h3 className="mt-6 text-2xl">Build the solution.</h3>
              <p className="mt-5 leading-relaxed text-zinc-400">
                We develop technology that fits your business and solves
                real-world problems.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-zinc-500">03 / Grow</p>
              <h3 className="mt-6 text-2xl">Scale with confidence.</h3>
              <p className="mt-5 leading-relaxed text-zinc-400">
                We help you use technology to improve operations and create
                opportunities for growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white px-6 py-32 text-black lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
            04 / Start a Conversation
          </p>

          <h2 className="max-w-5xl text-5xl font-medium leading-tight sm:text-7xl">
            Let's build something meaningful.
          </h2>

          <p className="mt-6 max-w-xl text-zinc-600">
            Tell us about your business and what you're looking to build.
            Our team will get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-16 grid max-w-4xl gap-8 md:grid-cols-2"
          >

            <div>
              <label className="mb-3 block text-sm">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border-b border-black/30 bg-transparent py-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm">Business Email *</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="w-full border-b border-black/30 bg-transparent py-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your company"
                className="w-full border-b border-black/30 bg-transparent py-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm">Phone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                required
                className="w-full border-b border-black/30 bg-transparent py-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm">Service Required *</label>
              <select
                name="service"
                required
                defaultValue=""
                className="w-full border-b border-black/30 bg-white py-4 outline-none focus:border-black"
              >
                <option value="" disabled>Select a service</option>
                <option>AI Automation</option>
                <option>AI Agents</option>
                <option>Custom Software Development</option>
                <option>CRM Development</option>
                <option>LMS Development</option>
                <option>Other</option>
              </select>
            </div>

          
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm">
                Tell us about your project *
              </label>

              <textarea
                name="message"
                rows={5}
                placeholder="What are you looking to build?"
                required
                className="w-full resize-none border-b border-black/30 bg-transparent py-4 outline-none focus:border-black"
              />
            </div>

            <div className="md:col-span-2">

              <button
                type="submit"
                disabled={sending}
                className="bg-black px-10 py-5 text-sm text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending..." : "Submit Enquiry ↗"}
              </button>

              {submitted && (
                <p className="mt-5 text-sm text-green-700">
                  Thank you! Your enquiry has been sent successfully.
                  We'll get back to you soon.
                </p>
              )}

            </div>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-12 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <h3 className="text-2xl font-bold">
              GenCosma<span className="text-zinc-500">.</span>
            </h3>
            <p className="mt-3 text-sm text-zinc-500">
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