import { useEffect, useRef, useState } from 'react';
import { Calendar, Shield, BookOpen, TrendingUp } from 'lucide-react';

const certifications = [
  {
    name: 'NISM-Series-X-B: Investment Adviser (Level 2)',
    issuer: 'National Institute of Securities Markets (NISM)',
    period: 'Issued Mar 2025 · Expires Mar 2028',
    description: 'Advanced certification in Investment Advisory Services, Financial Planning, and related skills.',
    icon: Shield,
    color: 'from-green-300 to-emerald-300',
    bgColor: 'from-green-25 to-emerald-25',
  },
  {
    name: 'NISM-Series-X-A: Investment Adviser (Level 1)',
    issuer: 'National Institute of Securities Markets (NISM)',
    period: 'Issued Feb 2025 · Expires Feb 2028',
    description: 'Foundation certification in Investment Advisory Services.',
    icon: BookOpen,
    color: 'from-blue-300 to-cyan-300',
    bgColor: 'from-blue-25 to-cyan-25',
  },
  {
    name: 'BMC\'s Core Concepts',
    issuer: 'Bloomberg',
    period: 'Issued Nov 2019',
    description: 'Bloomberg Market Concepts certification demonstrating proficiency in financial markets and tools. Credential ID: 156450709185',
    icon: TrendingUp,
    color: 'from-purple-300 to-pink-300',
    bgColor: 'from-purple-25 to-pink-25',
  },
];

const Certifications = () => {
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
      id="certifications"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-16 text-center text-gray-900">
            CERTIFICATIONS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group">
                    <div className="p-8 h-full rounded-3xl">
                      <div className="relative">
                        <div className="relative z-10">
                          <div className="inline-block mb-6 p-4 bg-gray-100 rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                            <Icon size={28} className="text-gray-600" strokeWidth={2} />
                          </div>

                          <h3 className="text-xl font-semibold mb-3 leading-tight text-gray-800">
                            {cert.name}
                          </h3>

                          <p className="text-sm text-gray-600 mb-4 font-medium">
                            {cert.issuer}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                            <Calendar size={14} />
                            <span className="font-medium">{cert.period}</span>
                          </div>

                          <p className="text-sm text-gray-600 leading-relaxed font-light">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
