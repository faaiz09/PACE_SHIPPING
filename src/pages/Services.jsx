import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { GiShipWheel, GiCargoShip, GiAnchor, GiSailboat } from 'react-icons/gi';

const Services = () => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = {
    terminal: {
      icon: <GiShipWheel className="text-4xl text-accent" />,
      title: 'Terminal Consulting',
      image: '/images/services/terminal_consulting.jpeg',
      description: 'At Pace Marine Solutions, we are a trusted leader in maritime terminal consulting services, dedicated to helping businesses in the LNG, LPG, and maritime sectors optimize their terminal operations. With extensive expertise in terminal management, our team offers customized solutions that streamline operations, enhance efficiency, and ensure sustainable growth.',
      subsections: [
        {
          title: 'LNG Terminal Compatibility',
          image: '/images/services/lng-compatibility.jpg',
          content: 'Unlock the full potential of your LNG terminal with Pace Marine Solutions\' in-depth expertise in LNG terminal compatibility. Our specialized services focus on seamless integration, ensuring your terminal operates efficiently and reliably. With industry-leading insights and innovative strategies, we address key factors such as ship-shore compatibility, mooring analysis, and operational safety.',
        },
        {
          title: 'Optimoor Mooring Analysis',
          image: '/images/services/lng-optimor.jpg',
          content: 'Enhance the safety and performance of your offshore operations with Optimoor, the industry-leading solution for mooring analysis. At Pace Marine Solutions, we leverage Optimoor software to deliver accurate, detailed assessments of mooring systems, considering environmental factors and vessel dynamics. Our advanced mooring solutions ensure your operations run smoothly and with minimal risk.',
        },
        {
          title: 'MTMSA',
          image: '/images/services/MTMSA.jpg',
          content: 'Optimize your marine terminal operations with the Marine Terminal Management and Self Assessment (MTMSA) framework by Pace Marine Solutions. Our MTMSA services focus on enhancing terminal efficiency, ensuring compliance with international maritime standards, and promoting operational safety. By conducting thorough self-assessments and implementing industry best practices, your terminal can improve operational safety, reduce risks, and stay competitive in the maritime industry.',
        },
      ],
    },
    shipToShip: {
      icon: <GiCargoShip className="text-4xl text-accent" />,
      title: 'Ship to Ship Operations',
      image: '/images/services/STS2.jpg',
      description: 'Pace Marine Solutions is a leader in the maritime industry, providing top-tier Ship-to-Ship (STS) services. Our expert team is dedicated to ensuring the safe and efficient transfer of cargo between vessels. We combine industry expertise with a commitment to safety and operational excellence, making us the go-to partner for STS operations worldwide.',
      subsections: [
        {
          title: 'LNG Bunkering',
          image: '/images/services/LNG_Bunkuring.jpeg',
          content: 'As a leading provider of LNG bunkering Ship-to-Ship (STS) operations, Pace Marine Solutions offers unmatched expertise and a commitment to delivering excellence. Our focus on safety, efficiency, and environmental stewardship ensures that your LNG bunkering operations are conducted smoothly and comply with the highest international standards.',
          features: [
            'Experience: Extensive background in LNG bunkering operations for a wide range of vessels',
            'Safety: Strict compliance with global safety regulations to ensure risk-free transfers',
            'Efficiency: Our optimized processes ensure seamless LNG bunkering operations',
            'Environmental Responsibility: Commitment to minimizing environmental impact during transfers',
          ],
        },
        {
          title: 'LNG STS Operations',
          image: '/images/services/STS1.jpg',
          content: 'Pace Marine Solutions is your trusted partner for LNG Ship-to-Ship (STS) operations, offering industry-leading expertise and a proven track record of success. Our commitment to safety, operational efficiency, and environmental sustainability ensures that your LNG transfers are completed seamlessly and in full compliance with international standards.',
          features: [
            'Expertise: Leaders in LNG STS transfers with extensive industry knowledge',
            'Safety: Rigorous adherence to international safety protocols',
            'Efficiency: Optimized STS procedures to reduce downtime and enhance productivity',
            'Sustainability: Focus on environmentally responsible practices during all LNG operations',
          ],
        },
        {
          title: 'LPG STS Operations',
          image: '/images/services/LPG_STS.jpg',
          content: 'At Pace Marine Solutions, we are your gateway to efficient and reliable LPG Ship-to-Ship (STS) operations. As industry leaders in LPG transfer services, we ensure that every operation is conducted with a focus on safety, efficiency, and environmental responsibility.',
          features: [
            'Industry Expertise: Extensive experience in LPG transfers, ensuring smooth and compliant operations',
            'Safety Compliance: Adherence to international safety standards to minimize risks',
            'Efficiency: Streamlined processes that enhance operational performance',
            'Environmental Responsibility: Focused on reducing environmental impact during transfers',
          ],
        },
      ],
    },
    training: {
      icon: <GiAnchor className="text-4xl text-accent" />,
      title: 'Training Programs',
      // image: '/images/services/ship-technical-management.png',
      description: 'Elevating Maritime Excellence with Technical Expertise, Performance Analysis, Training, and TMSA Services. At Pace Marine Solutions, we elevate your maritime operations with a blend of technical expertise, performance analysis, comprehensive training, and TMSA compliance services.',
      subsections: [
        {
          title: 'Technical Expertise',
          image: '/images/services/ship-technical-management.png',
          content: 'Our expert team ensures your fleet operates at peak performance, offering top-tier vessel management, equipment maintenance, and system optimization for efficient and secure operations.',
          features: [
            'Vessel management and system optimization',
            'Equipment maintenance and reliability',
            'Operational efficiency enhancement',
            'Security and safety compliance',
          ],
        },
        {
          title: 'Performance Analysis',
          content: 'At Pace Marine Solutions, we are dedicated to unlocking maritime excellence through our specialized performance analysis services. We take pride in delivering in-depth insights that enhance safety, efficiency, and compliance in your operations.',
          image:'/images/services/LNG-training.jpg',
          features: [
            'Data-driven performance insights',
            'Safety and efficiency optimization',
            'Compliance monitoring and improvement',
            'Operational excellence strategies',
          ],
        },
        {
          title: 'LNG and STS Training',
          content: 'Pace Marine Solutions offers top-tier training for LNG (Liquefied Natural Gas) and STS (Ship to Ship) operations, empowering maritime professionals with the skills and knowledge needed to excel. Our comprehensive training programs emphasize safety, operational efficiency, and environmental responsibility.',
          image:'/images/services/performance-analysis.jpg',
          features: [
            'Comprehensive LNG operations training',
            'STS transfer safety protocols',
            'Environmental responsibility practices',
            'International standards compliance',
          ],
        },
        {
          title: 'Tanker Management and Self-Assessment (TMSA)',
          content: 'As your trusted partner in Tanker Management and Self-Assessment (TMSA), we help elevate the safety, efficiency, and compliance of your maritime operations. Our comprehensive TMSA services are customized to meet your specific requirements, ensuring your fleet operates at its best.',
          image:'/images/services/tmsa.jpg',
          features: [
            'Customized TMSA implementation',
            'Safety and compliance optimization',
            'Operational efficiency enhancement',
            'Industry best practices integration',
          ],
        },
      ],
    },
    commercial: {
      icon: <GiSailboat className="text-4xl text-accent" />,
      title: 'Commercial Services',
      image: '/images/services/commerial.jpg',
      description: 'At Pace Marine Solutions, we are dedicated to being your one-stop hub for maritime operations, chartering services, and ship brokering excellence. In the dynamic and competitive maritime industry, efficiency and precision are crucial, whether you\'re managing vessels, seeking chartering solutions, or navigating the complexities of ship brokering.',
      subsections: [
        {
          title: 'Operating',
          image: '/images/services/operating.jpg',
          content: 'In the dynamic world of maritime operations, Pace Marine Solutions stands at the forefront of excellence, specializing in optimizing your fleet\'s performance. Our commitment to efficiency, safety, and compliance ensures that your maritime operations run smoothly and securely. We offer tailored solutions designed to enhance operational effectiveness, minimize downtime, and meet regulatory requirements.',
          features: [
            'Vessel management and operational efficiency strategies',
            'Equipment maintenance and optimization',
            'Comprehensive safety and compliance solutions',
            'Cost reduction and productivity enhancement',
          ],
        },
        {
          title: 'Chartering',
          content: 'Pace Marine Solutions is your gateway to comprehensive chartering services in the maritime industry. In the ever-changing realm of maritime trade, chartering plays a pivotal role in facilitating the efficient transport of goods across the vast expanse of the open seas. Our chartering solutions are tailored to your specific needs, ensuring flexibility and reliability in logistics.',
          image:'/images/services/chartering.jpg',
          features: [
            'Flexible and reliable logistics solutions',
            'Extensive network and industry insights',
            'Optimal chartering options for your needs',
            'Supply chain efficiency enhancement',
          ],
        },
        {
          title: 'Ship Brokering',
          content: 'Welcome to Pace Marine Solutions, your premier destination for ship brokering excellence. In the dynamic world of maritime trade, ship brokering is the keystone that ensures the efficient exchange of vessels, cargoes, and contracts. As your trusted partner, we offer a wealth of experience and industry knowledge in ship brokering, with services meticulously tailored to meet your unique needs.',
          image:'/images/services/ship-broking.jpg',
          features: [
            'Comprehensive vessel buying and selling services',
            'Expert contract negotiation and management',
            'Market analysis and strategic planning',
            'Smooth transaction facilitation',
          ],
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Pace Marine Solutions</title>
        <meta name="description" content="Explore our comprehensive range of maritime services including terminal consulting, ship to ship operations, training, and commercial services." />
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
                Our Services
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive maritime solutions tailored to meet your specific needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Tabs */}
        <section ref={ref} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(services).map((service) => (
                <motion.button
                  key={service}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(service)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                    activeTab === service
                      ? 'bg-accent text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {services[service].title}
                </motion.button>
              ))}
            </div>

            {/* Service Details */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    {services[activeTab].icon}
                    <h2 className="text-3xl font-heading font-bold text-primary ml-4">
                      {services[activeTab].title}
                    </h2>
                  </div>
                  {services[activeTab].image && (
                    <div className="w-full md:w-1/3 ml-auto">
                      <img 
                        src={services[activeTab].image} 
                        alt={services[activeTab].title}
                        className="rounded-lg shadow-md w-full h-48 object-cover" 
                      />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  {services[activeTab].description}
                </p>
                
                {services[activeTab].subsections && (
                  <div className="space-y-8">
                    {services[activeTab].subsections.map((subsection, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          {subsection.image && (
                            <div className="w-full md:w-1/4">
                              <img 
                                src={subsection.image} 
                                alt={subsection.title}
                                className="rounded-lg shadow-sm w-full h-40 object-cover" 
                              />
                            </div>
                          )}
                          <div className="w-full md:w-3/4">
                            <h3 className="text-xl font-bold text-primary mb-4">
                              {subsection.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {subsection.content}
                            </p>
                            {subsection.features && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {subsection.features.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                    className="flex items-start"
                                  >
                                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3" />
                                    <span className="text-gray-700">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss how we can help with your maritime needs
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;