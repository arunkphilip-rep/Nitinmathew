import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Lead 1 - Business Finance',
    company: 'US Technology International Pvt Ltd',
    period: 'March 2023 - January 2025',
    location: 'Bangalore, India',
    description: 'Managed a revenue portfolio of $150 million - which included Financial Review of upcoming and ongoing projects, playing an integral role in the global rolling Forecasting process and Management Reporting to business unit leaders for effective decision making.',
    color: 'from-purple-300 to-blue-300',
    bgColor: 'from-purple-25 to-blue-25',
  },
  {
    title: 'Deputy Manager - II',
    company: 'ICICI BANK LTD',
    period: 'May 2022 - March 2023',
    location: 'Bangalore, India',
    description: 'Handled Front Office responsibilities in the Business Loans Division - which included identifying and onboarding potential customers in the small and medium enterprises segment and servicing them with a wide portfolio of Working Capital banking products such as Overdrafts, Bank Guarantees, Cash Credit and Term Loans.',
    color: 'from-blue-300 to-cyan-300',
    bgColor: 'from-blue-25 to-cyan-25',
  },
  {
    title: 'Manager - Finance',
    company: 'K-12 Techno Services Pvt Ltd',
    period: 'May 2021 - May 2022',
    location: 'Bangalore, India',
    description: 'Handled a wide portfolio of responsibilities in Operational Finance in one of the largest EdTech Startups in the country - which included Budgetary Control of Operational and Capital Expenditure, Cash Flow Management, Accounts Payable, and Management Accounting responsibilities by leading a five member team.',
    color: 'from-green-300 to-emerald-300',
    bgColor: 'from-green-25 to-emerald-25',
  },
  {
    title: 'Portfolio Manager',
    company: 'Proprietary Venture',
    period: 'August 2017 - June 2019',
    location: 'Bangalore, India',
    description: 'Actively managed a significant personal investment portfolio - by using multiple instruments like listed Indian stocks, stock futures and options and commodity and currency futures. Explored multiple styles of Investing like Value, Momentum, Macro-economic etc.',
    color: 'from-orange-300 to-red-300',
    bgColor: 'from-orange-25 to-red-25',
  },
  {
    title: 'Business Analyst',
    company: 'State Street India Pvt Ltd',
    period: 'August 2016 - August 2017',
    location: 'Bangalore, India',
    description: 'Middle Office Operations in Performance Analytics Function - managed performance reporting deliverables/metrics for timeliness and quality. Supervision of captive back-office operations utilizing a thorough understanding of performance analytics methodology.',
    color: 'from-indigo-300 to-purple-300',
    bgColor: 'from-indigo-25 to-purple-25',
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
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
            EXPERIENCE
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group">
                  <div className="p-8 rounded-3xl">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gray-100 rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                        <Briefcase size={24} className="text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
                            <p className="text-lg text-gray-600 mb-3 font-medium">{exp.company}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-light">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
