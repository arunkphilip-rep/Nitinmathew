import { useEffect, useRef, useState } from 'react';
import { TrendingUp, BarChart3, Wallet, PiggyBank, Calculator, Target } from 'lucide-react';

const skills = [
  { name: 'Financial Variance Analysis', icon: TrendingUp, color: 'from-purple-300 to-pink-300', bgColor: 'from-purple-25 to-pink-25' },
  { name: 'Investment Advisory Services', icon: BarChart3, color: 'from-blue-300 to-cyan-300', bgColor: 'from-blue-25 to-cyan-25' },
  { name: 'Financial Planning', icon: Calculator, color: 'from-green-300 to-emerald-300', bgColor: 'from-green-25 to-emerald-25' },
  { name: 'Forecasting', icon: Wallet, color: 'from-orange-300 to-red-300', bgColor: 'from-orange-25 to-red-25' },
  { name: 'Budgeting', icon: PiggyBank, color: 'from-indigo-300 to-purple-300', bgColor: 'from-indigo-25 to-purple-25' },
  { name: 'Financial Reporting', icon: Target, color: 'from-teal-300 to-blue-300', bgColor: 'from-teal-25 to-blue-25' },
  { name: 'Corporate Finance', icon: TrendingUp, color: 'from-yellow-300 to-orange-300', bgColor: 'from-yellow-25 to-orange-25' },
  { name: 'Commercial Finance', icon: BarChart3, color: 'from-pink-300 to-rose-300', bgColor: 'from-pink-25 to-rose-25' },
  { name: 'Managerial Finance', icon: Calculator, color: 'from-cyan-300 to-teal-300', bgColor: 'from-cyan-25 to-teal-25' },
  { name: 'Investment Management', icon: Wallet, color: 'from-violet-300 to-purple-300', bgColor: 'from-violet-25 to-purple-25' },
  { name: 'Financial Modeling', icon: PiggyBank, color: 'from-emerald-300 to-green-300', bgColor: 'from-emerald-25 to-green-25' },
  { name: 'Team Management', icon: Target, color: 'from-amber-300 to-yellow-300', bgColor: 'from-amber-25 to-yellow-25' },
];

const Skills = () => {
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
      id="skills"
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
            EXPERTISE
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...skills, ...skills].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 w-64 mx-4"
                  >
                    <div className="group relative overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500">
                      <div className="p-8 rounded-3xl h-full">
                        <div className="text-center">
                          <div className="inline-block mb-6 p-4 bg-gray-100 rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                            <Icon size={32} className="text-gray-600" strokeWidth={2} />
                          </div>
                          <h3 className="text-lg font-semibold tracking-wide text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <div className="mt-4 h-1 bg-gray-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
