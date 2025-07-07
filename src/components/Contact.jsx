import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 py-20 px-4 md:px-16 lg:px-32">
        {/* Left Info */}
        <div className="flex-1 max-w-md w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Let’s get in <br /> touch with us
          </h2>
          <p className="text-gray-600 mb-8">
            Email, call or complete the form to connect with us.
            <br />
            We'll get back to you within 24 hours.
          </p>
          <div className="mb-6">
            <div className="mb-2 text-gray-500 font-semibold">Phone</div>
            <div className="mb-4 text-gray-900 font-medium">+91 8438434868</div>
            <div className="mb-2 text-gray-500 font-semibold">Email</div>
            <div className="mb-4 text-gray-900 font-medium">
              vijayguhan10@gmail.com
            </div>
            <div className="mb-2 text-gray-500 font-semibold">Location</div>
            <div className="text-gray-900 font-medium">
              Vaalkadu, Vaaikkalpattari, po, Allikuttai,
              <br />
              Salem, Tamil Nadu 636017
            </div>
          </div>
        </div>
        {/* Right Form */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-500 mb-6 text-sm">
              We'll get back to you within 24 hours.
            </p>
            <form className="space-y-5">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="vijayguhan10@gmail.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              />
              <input
                type="tel"
                placeholder="+91 8438434868"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <textarea
                placeholder="Type your message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-gray-800 transition text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-[#181823] via-[#232526] to-[#0f2027] text-gray-100 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold tracking-wide">
            © {new Date().getFullYear()} Vijay Guhan KM. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-300 text-base">
            <a
              href="tel:+918438434868"
              className="hover:text-[#ffd700] transition flex items-center gap-2"
            >
              <FaPhoneAlt /> Phone
            </a>
            <a
              href="mailto:vijayguhan10@gmail.com"
              className="hover:text-[#ffd700] transition flex items-center gap-2"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://maps.google.com/?q=Vaalkadu, Vaaikkalpattari, po, Allikuttai, Salem, Tamil Nadu 636017"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffd700] transition flex items-center gap-2"
            >
              <FaMapMarkerAlt /> Location
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
