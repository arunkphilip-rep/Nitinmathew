import { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const blogs = [
  {
    title: 'Investment Horizon Problem',
    description: 'Exploring the challenges and strategies for long-term investment planning in volatile markets.',
    link: 'https://www.linkedin.com/pulse/investment-horizon-problem-nitin-mathew--gdgyc/',
    date: 'Published on LinkedIn',
  },
  {
    title: 'Counter-Intuitive Manifestations of Low Interest Rates',
    description: 'Analyzing the unexpected effects of low interest rate environments on financial markets and investment strategies.',
    link: 'https://www.linkedin.com/pulse/counter-intuitive-manifestations-low-interest-rates-nitin-mathew-/',
    date: 'Published on LinkedIn',
  },
  {
    title: 'Financial Planning Strategies for 2025',
    description: 'Explore comprehensive financial planning techniques and investment strategies to secure your future in the evolving market landscape.',
    link: '#', // Placeholder link
    date: 'January 2025',
  },
  {
    title: 'Investment Banking Trends',
    description: 'A deep dive into the latest trends shaping the investment banking industry and their impact on business finance.',
    link: '#', // Placeholder link
    date: 'December 2024',
  },
];

const Blogs = () => {
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
      id="blogs"
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
            BLOGS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group">
                  <div className="p-8 rounded-3xl h-full">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gray-100 rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                        <BookOpen size={24} className="text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-light mb-4">
                          {blog.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 font-medium">{blog.date}</span>
                          <a
                            href={blog.link}
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-300"
                          >
                            Read More
                            <ExternalLink size={16} />
                          </a>
                        </div>
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

export default Blogs;
