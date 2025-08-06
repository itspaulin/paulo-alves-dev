import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-width">
        <div className="py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="font-mono font-semibold text-xl mb-4">
                Paulo Alves
              </div>
              <p className="text-neutral-400 mb-6">
                Full Stack Developer specializing in React, Next.js, and
                Node.js. Building scalable solutions for clients worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:paulo.alves@example.com"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href="#about"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#portfolio"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-3">
                <div className="text-neutral-400">Frontend Development</div>
                <div className="text-neutral-400">Backend Development</div>
                <div className="text-neutral-400">Full-Stack Applications</div>
                <div className="text-neutral-400">API Development</div>
                <div className="text-neutral-400">Technical Consulting</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Paulo Alves. All rights reserved.
            </div>
            <div className="flex items-center text-neutral-400 text-sm">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in
              Brazil
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
