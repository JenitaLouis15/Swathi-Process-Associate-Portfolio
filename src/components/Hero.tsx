import { MapPin, Phone, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center text-white max-w-2xl mx-auto">

          {/* Name */}
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-5xl md:text-7xl mb-4 tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            SWATHI N
          </h1>

          {/* Role */}
          <h2
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-2xl md:text-3xl text-blue-300 mb-2 font-medium"
          >
            Process Associate
          </h2>

          <p
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-lg text-slate-300 mb-8"
          >
            Order to Cash - Cash Application
          </p>

          {/* Contact Info */}
          <div
            style={{ fontFamily: "Inter, sans-serif" }}
            className="space-y-3 mb-8 flex flex-col items-center"
          >
            <div className="flex items-center gap-3 text-slate-200">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Trichy, India</span>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 7502554072</span>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>Swathi732003@gmail.com</span>
            </div>
          </div>

          {/* Resume Download */}
          <a
            href="/swathiresume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
}