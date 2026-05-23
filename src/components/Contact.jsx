import React, { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current?.value?.trim() || "";
    const lastName = lastNameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const phone = phoneRef.current?.value?.trim() || "";
    const message = messageRef.current?.value?.trim() || "";

    const subject = `Portfolio message from ${[firstName, lastName].filter(Boolean).join(" ") || "Someone"}`;
    const bodyLines = [
      "Hi Vijay,",
      "",
      message || "(no message)",
      "",
      "---",
      `Name: ${[firstName, lastName].filter(Boolean).join(" ") || ""}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
    ];
    const body = bodyLines.join("\n");

    window.location.href = `mailto:vijayguhan10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="mono-section" id="contact">
      <div className="mono-shell flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Info */}
        <div className="flex-1 max-w-md w-full">
          <h2 className="text-3xl md:text-5xl mono-title mb-6 leading-tight">
            Let’s get in <br /> touch with us
          </h2>
          <p className="mono-muted mb-8">
            Email, call or complete the form to connect with us.
            <br />
            We'll get back to you within 24 hours.
          </p>
          <div className="mb-6">
            <div className="mb-2 text-black/60 font-semibold">Phone</div>
            <div className="mb-4 text-black font-medium">+91 8438434868</div>
            <div className="mb-2 text-black/60 font-semibold">Email</div>
            <div className="mb-4 text-black font-medium">
              vijayguhan10@gmail.com
            </div>
            <div className="mb-2 text-black/60 font-semibold">Location</div>
            <div className="text-black font-medium">
              Vaalkadu, Vaaikkalpattari, po, Allikuttai,
              <br />
              Salem, Tamil Nadu 636017
            </div>
          </div>
        </div>
        {/* Right Form */}
        <div className="flex-1 w-full max-w-xl">
          <div className="mono-card p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Get in Touch
            </h3>
            <p className="text-black/60 mb-6 text-sm">
              We'll get back to you within 24 hours.
            </p>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="mono-input w-1/2"
                  ref={firstNameRef}
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="mono-input w-1/2"
                  ref={lastNameRef}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="vijayguhan10@gmail.com"
                className="mono-input"
                ref={emailRef}
                required
              />
              <input
                type="tel"
                placeholder="+91 8438434868"
                className="mono-input"
                ref={phoneRef}
              />
              <textarea
                placeholder="Type your message"
                rows={5}
                className="mono-input resize-none"
                ref={messageRef}
                required
              />
              <button
                type="submit"
                className="w-full mono-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full border-t border-black/10 bg-white mt-16">
        <div className="mono-shell py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm font-semibold tracking-wide">
            © {new Date().getFullYear()} Vijay Guhan KM. All rights reserved.
          </div>
          <div className="flex gap-6 text-black/70 text-sm">
            <a
              href="tel:+918438434868"
              className="hover:text-black transition flex items-center gap-2"
            >
              <FaPhoneAlt /> Phone
            </a>
            <a
              href="mailto:vijayguhan10@gmail.com"
              className="hover:text-black transition flex items-center gap-2"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://maps.google.com/?q=Vaalkadu, Vaaikkalpattari, po, Allikuttai, Salem, Tamil Nadu 636017"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition flex items-center gap-2"
            >
              <FaMapMarkerAlt /> Location
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
