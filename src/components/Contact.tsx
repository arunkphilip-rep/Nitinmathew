import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Youtube } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-16 text-center text-gray-900">
            CONTACT
          </h2>

          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg mb-16">
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              Open to new opportunities and collaborations in finance and management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg group hover:shadow-xl transition-all duration-500">
              <div className="p-8 rounded-3xl h-full">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-gray-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={32} className="text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
                  <a
                    href="mailto:nitinvettikombil@gmail.com"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium"
                  >
                    nitinvettikombil@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg group hover:shadow-xl transition-all duration-500">
              <div className="p-8 rounded-3xl h-full">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-gray-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={32} className="text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
                  <a
                    href="tel:+918904732178"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium"
                  >
                    +91-8904732178
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg group hover:shadow-xl transition-all duration-500">
              <div className="p-8 rounded-3xl h-full">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-gray-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={32} className="text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Location</h3>
                  <p className="text-gray-600 font-medium">Kottayam, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg group hover:shadow-xl transition-all duration-500">
              <div className="p-8 rounded-3xl h-full">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-gray-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Youtube size={32} className="text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">YouTube</h3>
                  <a
                    href="https://www.youtube.com/@NitinMathew1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium"
                  >
                    @NitinMathew1
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg inline-block">
            <div className="p-8 rounded-3xl">
              <div className="flex items-center justify-center gap-4">
                <div className="p-3 bg-gray-100 rounded-2xl">
                  <Send size={24} className="text-gray-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-light text-gray-500 tracking-wider">
                    5+ years of experience in finance and management
                  </p>
                  <p className="text-xs font-light text-gray-400 mt-2 tracking-widest">
                    NITIN MATHEW &copy; 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
