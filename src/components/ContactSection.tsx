import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0b0f1a] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm tracking-widest text-orange-500 mb-2">CONTACT</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Get in <span className="text-orange-500">Touch</span>
        </h2>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-orange-500 transition">
            <Mail className="text-orange-500" size={28} />
            <p className="text-gray-300">FitBalance@email.com</p>
          </div>

          <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-orange-500 transition">
            <Phone className="text-orange-500" size={28} />
            <p className="text-gray-300">+91 98765 56321</p>
          </div>

          <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-orange-500 transition">
            <MapPin className="text-orange-500" size={28} />
            <p className="text-gray-300">Chennai, India</p>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-10">

          <a href="#" className="bg-[#1f2937] p-3 rounded-lg hover:bg-orange-500 transition">
            <Linkedin size={20} />
          </a>

          <a href="#" className="bg-[#1f2937] p-3 rounded-lg hover:bg-orange-500 transition">
            <Github size={20} />
          </a>

          <a href="#" className="bg-[#1f2937] p-3 rounded-lg hover:bg-orange-500 transition">
            <Instagram size={20} />
          </a>

          <a href="#" className="bg-[#1f2937] p-3 rounded-lg hover:bg-orange-500 transition">
            <Twitter size={20} />
          </a>

        </div>

        {/* Resume Button */}
        <a
          href="/deit.pdf"
          download
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition"
        >
          <Download size={18} />
          Download Basic Diet
        </a>

      </div>
    </section>
  );
}