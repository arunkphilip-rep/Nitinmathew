import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, Shield, BookOpen, TrendingUp } from 'lucide-react';

const certifications = [
  {
    name: 'NISM Investment Adviser (Level 1 & 2)',
    issuer: 'National Institute of Securities Markets',
    period: '2025 - 2028',
    description: 'Creates a common minimum knowledge benchmark for investment advisers under SEBI regulations.',
    icon: Shield,
    color: 'from-green-300 to-emerald-300',
    bgColor: 'from-green-25 to-emerald-25',
  },
  {
    name: 'Financial Modelling and Valuation',
    issuer: 'Imarticus Learning Pvt Ltd',
    period: '2016 - Present',
    description: 'Focused on modelling the three financial statements with comprehensive valuation techniques.',
    icon: BookOpen,
    color: 'from-blue-300 to-cyan-300',
    bgColor: 'from-blue-25 to-cyan-25',
  },
  {
    name: 'Bloomberg Core Concepts',
    issuer: 'Bloomberg LLP',
    period: '2019 - Present',
    description: 'Introduction to various features of the Bloomberg Terminal for financial analysis.',
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
