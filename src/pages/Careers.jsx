import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { FaBriefcase, FaGraduationCap, FaUsers, FaGlobe } from 'react-icons/fa';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const jobCategories = [
    { id: 'all', label: 'All Positions' },
    { id: 'technical', label: 'Technical' },
    { id: 'operations', label: 'Operations' },
    { id: 'management', label: 'Management' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior LNG Terminal Engineer',
      category: 'technical',
      location: 'Houston, TX',
      type: 'Full-time',
      description: 'Lead engineering projects for LNG terminal operations and maintenance.',
    },
    {
      id: 2,
      title: 'Operations Manager',
      category: 'operations',
      location: 'Singapore',
      type: 'Full-time',
      description: 'Oversee daily operations and ensure efficient service delivery.',
    },
    {
      id: 3,
      title: 'Training Coordinator',
      category: 'management',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Develop and implement training programs for maritime professionals.',
    },
    {
      id: 4,
      title: 'Ship-to-Ship Operations Specialist',
      category: 'technical',
      location: 'Rotterdam, Netherlands',
      type: 'Full-time',
      description: 'Coordinate and supervise ship-to-ship transfer operations.',
    },
  ];

  const benefits = [
    {
      icon: <FaBriefcase className="text-4xl text-accent" />,
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement',
    },
    {
      icon: <FaGraduationCap className="text-4xl text-accent" />,
      title: 'Training',
      description: 'Comprehensive training programs and certifications',
    },
    {
      icon: <FaUsers className="text-4xl text-accent" />,
      title: 'Team Culture',
      description: 'Collaborative and supportive work environment',
    },
    {
      icon: <FaGlobe className="text-4xl text-accent" />,
      title: 'Global Opportunities',
      description: 'Work with international teams and clients',
    },
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Careers - Pace Marine</title>
        <meta name="description" content="Join Pace Marine's team of maritime professionals. Explore career opportunities in technical, operations, and management roles." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary-light to-primary-dark">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Build your career with a global leader in maritime services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Why Join Us?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                We offer a dynamic work environment and excellent benefits
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/90">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section ref={ref} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-xl p-8"
            >
              <div className="flex flex-wrap gap-4 mb-8">
                {jobCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                      activeTab === category.id
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>

              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-200 pb-6 last:border-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 md:mt-0 bg-accent hover:bg-accent-dark text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                      >
                        Apply Now
                      </motion.button>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Submit Your Resume
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers; 