import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, User2, Link2, MessageSquare, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";

const contactItems = [
  {
    icon: User2,
    label: "Name",
    value: "Venkata Subbaiah Chennamsetty",
    href: "#contact",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mrsubbunaidu@gmail.com",
    href: "mailto:mrsubbunaidu@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/subbu-naidu",
    href: "https://github.com/subbu-naidu",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "venkata-subbaiah-ch",
    href: "https://www.linkedin.com/in/venkata-subbaiah-ch",
  },
  {
    icon: Link2,
    label: "Portfolio",
    value: "mrsubbunaidu.wixsite.com/my-site-3",
    href: "https://mrsubbunaidu.wixsite.com/my-site-3",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Andhra Pradesh, India",
    href: "#contact",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // fallback to mailto since there's no backend
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:mrsubbunaidu@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#3B82F6]/10 via-[#8B5CF6]/10 to-[#06B6D4]/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Say hello"
          title="Let's Work Together"
          description="I'm currently open to internships, freelance projects, and collaborations. Drop a message — I usually reply within 24 hours."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left: contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-7">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#8B5CF6]/30 blur-3xl" />
              <h3 className="font-bold text-xl text-white">Contact Information</h3>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Reach me through any of these channels.
              </p>

              <ul className="mt-6 space-y-3">
                {contactItems.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 text-[#3B82F6] transition group-hover:from-[#3B82F6] group-hover:to-[#8B5CF6] group-hover:text-white">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                          {c.label}
                        </p>
                        <p className="truncate text-sm text-white">{c.value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                {[
                  { icon: GithubIcon, href: "https://github.com/subbu-naidu" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/venkata-subbaiah-ch" },
                  { icon: Mail, href: "mailto:mrsubbunaidu@gmail.com" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#94A3B8] transition hover:-translate-y-1 hover:border-[#3B82F6]/50 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="glass-strong rounded-3xl p-7 lg:col-span-3"
          >
            <h3 className="font-bold text-xl text-white">Send a Message</h3>
            <p className="mt-1 text-sm text-[#94A3B8]">
              Fill in your details and I'll get back to you.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field icon={User2} label="Your Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" required />
              <Field icon={Mail} label="Your Email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@example.com" required />
            </div>

            <div className="mt-4">
              <Field icon={MessageSquare} label="Subject" name="subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} placeholder="Project inquiry, internship, etc." />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a bit about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#3B82F6]/60 focus:bg-white/[0.06]"
              />
            </div>

            <button
              type="submit"
              className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-6 py-3 font-semibold text-sm text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:shadow-blue-500/50 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
        {label}
      </label>
      <div className="group relative">
        <Icon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#94A3B8] transition group-focus-within:text-[#3B82F6]" />
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pr-4 pl-10 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#3B82F6]/60 focus:bg-white/[0.06]"
        />
      </div>
    </div>
  );
}
