import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaUsers, FaShip, FaGlobeAmericas, FaUserTie } from 'react-icons/fa';
import ClientMarquee from '../components/ClientMarquee';

const Network = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [locationsRef, locationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [clientsRef, clientsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const locations = [
    {
      name: 'Houston, USA',
      type: 'Headquarters',
      description: 'Our global headquarters overseeing all operations',
      icon: <FaUserTie className="text-3xl text-accent mb-4" />,
    },
    {
      name: 'Singapore',
      type: 'Asia-Pacific Hub',
      description: 'Serving clients throughout the Asia-Pacific region',
      icon: <FaShip className="text-3xl text-accent mb-4" />,
    },
    {
      name: 'Rotterdam, Netherlands',
      type: 'European Hub',
      description: 'Our European base for regional operations',
      icon: <FaShip className="text-3xl text-accent mb-4" />,
    },
    {
      name: 'Dubai, UAE',
      type: 'Middle East Hub',
      description: 'Strategic location for Middle East and African markets',
      icon: <FaShip className="text-3xl text-accent mb-4" />,
    },
  ];

  const clients = [
    { name: 'AG&P', logo: '/images/clients/agp.png' },
    { name: 'Adani', logo: '/images/clients/adani.png' },
    { name: 'ADNOC', logo: '/images/clients/adnoc.png' },
    { name: 'Bharat Petroleum', logo: '/images/clients/bp.jpg' },
    { name: 'Bridport', logo: '/images/clients/bridport.png' },
    { name: 'BW LNG', logo: '/images/clients/Bwlng.jpg' },
    { name: 'Celsius', logo: '/images/clients/celsius.png' },
    { name: 'Exmar', logo: '/images/clients/Exmar.png' },
    { name: 'Faith Capital', logo: '/images/clients/fratelli.jpeg' },
    { name: 'H-Line Shipping', logo: '/images/clients/h-line.jpg' },
    { name: 'IndianOil', logo: '/images/clients/IOCL.png' },
    { name: 'JSW', logo: '/images/clients/JSW.png' },
    { name: 'JN', logo: '/images/clients/JN.jpeg' },
    { name: 'KIPIC', logo: '/images/clients/kipic.jpg' },
    { name: 'Knutsen OAS', logo: '/images/clients/knutsen.png' },
    { name: 'LNG Easy', logo: '/images/clients/LNG_easy.png' },
    { name: 'MISC', logo: '/images/clients/MISC.png' },
    { name: 'MOL', logo: '/images/clients/mol.png' },
    { name: 'MSC', logo: '/images/clients/MSC.jpg' },
    { name: 'New Fortress', logo: '/images/clients/NewFortress.jpg' },
    { name: 'NYK Line', logo: '/images/clients/NYK_Line.png' },
    { name: 'OSM Thome', logo: '/images/clients/OSM.png' },
    { name: 'Pertamina', logo: '/images/clients/pertamina.png' },
    { name: 'POS SM', logo: '/images/clients/pos_sm.jpg' },
    { name: 'Qatargas', logo: '/images/clients/qatargas.png' },
    { name: 'Shapoorji Pallonji', logo: '/images/clients/Shapoorji.png' },
    { name: 'SHV Energy', logo: '/images/clients/shv.jpg' },
    { name: 'SIPG', logo: '/images/clients/sipc.jpg' },
    { name: 'SMP', logo: '/images/clients/smp.jpg' },
    { name: 'SOECHI', logo: '/images/clients/soechi.jpg' },
    { name: 'SYNERGY Group', logo: '/images/clients/stnergy.png' },
    { name: 'TITAN', logo: '/images/clients/titan-lng.png' },
    { name: 'TotalEnergies', logo: '/images/clients/TotalEnergies.png' },
    { name: 'Vitol', logo: '/images/clients/vitol.png' },
    { name: 'Wilhelmsen', logo: '/images/clients/wilhelmsen.jpg' },
  ];

  // Now we have all clients, no need to repeat them multiple times
  const extendedClients = [...clients];

  return (
    <>
      <Helmet>
        <title>Our Network - Pace Marine</title>
        <meta name="description" content="Explore Pace Marine's global network of offices, partners and clients serving the maritime industry worldwide." />
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
                Our Global Network
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Strategic locations and partnerships spanning the globe
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Section */}
        <section ref={locationsRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={locationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our Key Locations
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Strategically positioned to serve clients worldwide
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={locationsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                  >
                    <div className="flex flex-col items-center">
                      <FaMapMarkerAlt className="text-4xl text-accent mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        {location.name}
                      </h3>
                      <p className="text-accent font-medium mb-2">{location.type}</p>
                      <p className="text-white/90 text-center">{location.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section ref={statsRef} className="py-12 bg-primary-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-8">
                  <h3 className="text-4xl font-bold text-accent mb-2">50+</h3>
                  <p className="text-xl text-white/90">Countries Served</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-8">
                  <h3 className="text-4xl font-bold text-accent mb-2">100+</h3>
                  <p className="text-xl text-white/90">Ports Connected</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-8">
                  <h3 className="text-4xl font-bold text-accent mb-2">24/7</h3>
                  <p className="text-xl text-white/90">Global Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section ref={clientsRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={clientsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Working with leading companies across the maritime industry
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {extendedClients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={clientsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="relative h-16 w-full">
                      <p className="text-white text-sm font-medium text-center absolute opacity-0">{client.name}</p>
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-full w-full object-contain filter brightness-100 hover:scale-110 transition-all duration-300"
                        onError={(e) => {
                          // Show text if image fails to load
                          e.target.style.display = "none";
                          e.target.parentNode.querySelector('p').style.opacity = "1";
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section ref={ctaRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Request a Quote Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how our global network can support your shipping needs
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

export default Network;