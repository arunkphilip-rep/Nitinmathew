import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'MANAGEMENT PROFESSIONAL',
    'FINANCE EXPERT',
    'BUSINESS LEADER'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(role.substring(0, currentText.length + 1));
        if (currentText === role) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentText(role.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-gray-600 animate-pulse" size={24} />
                <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Hi</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-4 leading-none text-gray-900">
                NITIN MATHEW
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6 border border-gray-200">
                <p className="text-base md:text-lg font-light text-gray-700">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                Leveraging financial expertise and leadership to drive business performance and strategic growth
              </p>
            </div>
          </div>

          <div
            className={`lg:w-1/2 flex justify-center lg:justify-end transform transition-all duration-1000 delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-[3/4] w-56 h-72 md:w-72 md:h-96 lg:w-80 lg:h-96 overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
              <img
                src="/Nitinmathew/images/profile.png"
                alt="Nitin Mathew"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ChevronDown size={24} className="text-gray-600" />
      </button>
    </section>
  );
};

export default Hero;
