import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Languages, BookOpen } from 'lucide-react';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-16 text-center text-gray-900">
            ABOUT
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  A results-driven finance professional with over 5 years of experience spanning investment banking, business finance, and portfolio management.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  Proven track record of managing a $150 million revenue portfolio, leading financial planning initiatives, and delivering strategic insights that drive organizational success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  Passionate about continuous learning and leveraging financial expertise to create meaningful business impact.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-2xl">
                    <GraduationCap className="text-gray-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                </div>
                <p className="text-xl font-light text-gray-700 mb-2">MBA - Finance</p>
                <p className="text-sm text-gray-600">T.A Pai Management Institute, Manipal</p>
                <p className="text-sm text-gray-600 font-medium mt-2">2019 - 2021</p>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-2xl">
                    <BookOpen className="text-gray-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Background</h3>
                </div>
                <p className="text-xl font-light text-gray-700 mb-2">B.Tech - Mechanical Engineering</p>
                <p className="text-sm text-gray-600">Christ University, Bangalore</p>
                <p className="text-sm text-gray-600 font-medium mt-2">2012 - 2016</p>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-2xl">
                    <Languages className="text-gray-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
                </div>
                <p className="text-lg font-light text-gray-700">English • Hindi • Malayalam • Kannada • Tamil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
