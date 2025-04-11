import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { FaShip, FaUsers, FaHandshake, FaGlobe, FaIndustry, FaGraduationCap, FaHandHoldingUsd, FaImage, FaTrophy, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [historyRef, historyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [stsRef, stsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [awardsRef, awardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [inView, inViewInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Capt. Pawan Gupta',
      position: 'Managing Director & CEO',
      image: '/images/team/pawan sir.png',
      linkedin: 'https://linkedin.com/in/capt-pawan-gupta-60b5137',
    },
    {
      name: 'Mr. Shantanoo Deshpande',
      position: 'Chief Financial Officer',
      image: '/images/team/shantanoo sir.png',
      linkedin: 'https://linkedin.com/in/shantanoodeshpande',
    },
    {
      name: 'Capt. Partha Ghosh',
      position: 'Director - Technical',
      image: '/images/team/Partha sir.png',
    },
  ];

  const stsOperations = [
    {
      title: 'LNG STS Operations',
      description: 'Expert handling of LNG ship-to-ship transfers with advanced safety protocols',
      icon: <FaShip className="text-4xl text-accent" />,
    },
    {
      title: 'Methanol STS Operations',
      description: 'Specialized services for methanol bunkering and transfers',
      icon: <FaShip className="text-4xl text-accent" />,
    },
    {
      title: 'Safety Management',
      description: 'Comprehensive safety measures and risk assessment',
      icon: <FaHandshake className="text-4xl text-accent" />,
    },
  ];

  const socialInitiatives = [
    {
      title: 'Maritime Education',
      description: 'Scholarships and training programs for underprivileged students',
      icon: <FaGraduationCap className="text-4xl text-accent" />,
    },
    {
      title: 'Community Development',
      description: 'Supporting local communities near our operations',
      icon: <FaUsers className="text-4xl text-accent" />,
    },
    {
      title: 'Environmental Protection',
      description: 'Initiatives to protect marine ecosystems',
      icon: <FaGlobe className="text-4xl text-accent" />,
    },
  ];

  const awards = [
    {
      title: 'Innovation Award',
      year: '2021',
      description: 'Recognized for outstanding innovation in maritime operations',
      icon: <FaTrophy className="text-4xl text-accent" />,
      image: '/images/awards/Innovation Award.jpg',
    },
    {
      title: 'STS Growth Award',
      year: '2022',
      description: 'Awarded for exceptional growth in ship-to-ship operations',
      icon: <FaShieldAlt className="text-4xl text-accent" />,
      image: '/images/awards/STS Growth Award.jpg',
    },
    {
      title: 'IOCL Award',
      year: '2024',
      description: 'Recognized for excellence in LNG operations',
      icon: <FaGlobe className="text-4xl text-accent" />,
      image: '/images/awards/IOCL Award.jpg',
    },
    {
      title: 'Rotary Club Award',
      year: '2025',
      description: 'Awarded for community service and social initiatives',
      icon: <FaHandshake className="text-4xl text-accent" />,
      image: '/images/awards/Rotary club Award.jpg',
    },
    {
      title: 'Incorporation Certificate',
      year: '2019',
      description: 'Official recognition of company establishment',
      icon: <FaIndustry className="text-4xl text-accent" />,
      image: '/images/awards/PMS-Incorporation_certificate.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Pace Marine Solutions</title>
        <meta name="description" content="Learn about Pace Marine Solutions' history, team, and commitment to excellence in maritime services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-light">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                About Pace Marine Solutions
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Leading provider of maritime services with innovation and expertise
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company History Section */}
        <section ref={historyRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={historyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our History
              </h2>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-left">
                <p className="text-white/90 mb-4">
                  Established in 2011 in UAE and 2014 in India, Pace Marine Solutions has established itself as a leading consultancy and commercial company, specializing in LNG and LPG shipping, terminal operations, and STS (Ship-to-Ship) services.
                </p>
                <p className="text-white/90 mb-4">
                  We assist global gas terminals, LNG & LPG ship owners, operators, charterers, and industrial consumers in both technical and commercial solutions.
                </p>
                <p className="text-white/90">
                  Our expert team of Master Mariners, Chief Engineers and Commercial operators, with over 200 years of combined experience, delivers high-quality services aligned with international standards, positioning us as a trusted LNG Shipping, Terminal and STS service provider.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Meet the experts leading our operations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                  >
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-2">{member.position}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-accent transition-colors duration-300"
                      >
                        LinkedIn Profile →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* STS Operations Section */}
        <section ref={stsRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                STS Operations
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Expert ship-to-ship transfer operations with safety and efficiency
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stsOperations.map((operation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={stsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                  >
                    <div className="mb-4">{operation.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {operation.title}
                    </h3>
                    <p className="text-white/90">{operation.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Empowerment Section */}
        <section className="py-20 bg-gradient-to-b from-primary-light to-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Social Empowerment Initiatives
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Creating positive impact through meaningful community engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Woman Empowerment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src="/images/social/3.jpg"
                    alt="Women Empowerment Initiative"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Woman Empowerment</h3>
                  <p className="text-white/90 mb-4">
                    Proud to sponsor ₹50K towards the Women Empowerment Project, recognizing extraordinary women who are transforming lives:
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Daulat Bi Khan – Founder of Saahas Foundation, empowering acid attack survivors</li>
                    <li>• Anju Bist – MD of Saukhyam Reusable Pads, known as the Pad Woman of India</li>
                    <li>• Meera Suresh – A dedicated advocate for organ donation since 2005</li>
                  </ul>
                  <p className="text-white/90 mt-4">
                    We also applauded club members Meena Chohan & Sarika Prakash for their dedication to community projects.
                  </p>
                </div>
              </motion.div>

              {/* Children's Safety */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src="/images/social/6.jpg"
                    alt="Children's Safety Initiative"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Creating a Safer Future for Children</h3>
                  <p className="text-white/90 mb-4">
                    Supporting Safe Touch & Unsafe Touch Awareness Sessions, conducted under the Inner Wheel Club of Navi Mumbai Sunrise.
                  </p>
                  <p className="text-white/80 mb-4">
                    With 53% of children in India experiencing some form of abuse, these sessions educate children about personal safety, recognizing unsafe situations, and setting boundaries with confidence.
                  </p>
                </div>
              </motion.div>

              {/* Education Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src="/images/social/1.jpg"
                    alt="Education Support Initiative"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Education Support</h3>
                  <p className="text-white/90 mb-4">
                    "शिक्षा वह पंख देती है, जो ऊँचाइयों तक उड़ने की क्षमता देती है, भविष्य की वो नींव है, जिसे मजबूती से निर्माण करना चाहिए।"
                  </p>
                  <p className="text-white/80">
                    Contributing ₹2 lakh towards building a brighter future for children, where opportunities are endless and dreams are within reach.
                  </p>
                </div>
              </motion.div>

              {/* Medical Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src="/images/social/2.jpg"
                    alt="Medical Project Initiative"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Dist Urban Medical Project</h3>
                  <p className="text-white/90 mb-4">
                    Supporting the Zone 4 Urban Medical Project with a ₹1 lakh sponsorship.
                  </p>
                  <p className="text-white/80">
                    A cell counter was inaugurated at Sion Hospital, making quality healthcare more accessible to the community.
                  </p>
                </div>
              </motion.div>

              {/* Sports Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden md:col-span-2"
              >
                <div className="relative">
                  <img
                    src="/images/social/4.jpg"
                    alt="Sports Support Initiative"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Championing Excellence in Sports</h3>
                    <p className="text-white/90">
                      Supporting the CMMI Womens Athletic Meet, celebrating the spirit, dedication, and teamwork of talented athletes.
                    </p>
                    <p className="text-white/80 mt-2">
                      Congratulations to the MSC womens team for their incredible victory and winning the prestigious trophy!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section ref={awardsRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={awardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Awards & Achievements
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Recognized for excellence in maritime operations and innovation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-auto object-contain"
                      />
                      {award.title !== 'Incorporation Certificate' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="mb-4">{award.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {award.title}
                      </h3>
                      <p className="text-accent font-medium mb-2">{award.year}</p>
                      <p className="text-white/90">{award.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About; 