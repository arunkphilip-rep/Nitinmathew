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
            EDUCATION
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">MBA - Finance</h3>
                      <span className="text-sm text-gray-500 font-medium">2019 - 2021</span>
                    </div>
                    <p className="text-gray-600 mb-1">T.A Pai Management Institute, Manipal</p>
                    <p className="text-sm text-gray-500">Master's Degree</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <BookOpen className="text-green-600" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">B.Tech - Mechanical Engineering</h3>
                      <span className="text-sm text-gray-500 font-medium">2012 - 2016</span>
                    </div>
                    <p className="text-gray-600 mb-1">Christ University, Bangalore</p>
                    <p className="text-sm text-gray-500">Bachelor's Degree</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Languages className="text-purple-600" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['English', 'Hindi', 'Malayalam', 'Kannada', 'Tamil'].map((language) => (
                        <span
                          key={language}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
