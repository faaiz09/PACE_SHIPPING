import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { FaHandshake, FaGlobe, FaIndustry, FaUsers } from 'react-icons/fa';

const Associates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: 'Cardinal Marine Experts (LLC)',
      description: 'Established in March 2007 by a team of Master Mariners with extensive sailing and shore experience, Cardinal Marine Experts is a dedicated team of 8 Marine Professionals committed to maintaining high standards of quality throughout their range of services. The company provides dedicated and highest quality of services in accordance with internationally acceptable standards in the field of Vessel Inspections.',
      website: 'http://www.cardinalmarine.net/',
      logo: '/images/associates/cardinal_marine.png',
    },
    {
      name: 'Oak Energy Company',
      description: 'A strategic partnership with Pace Marine Associates, driving innovation in the energy and marine sectors. This collaboration harnesses industry-leading expertise, advanced technologies, and a shared commitment to sustainable energy solutions. Together, we are shaping a cleaner, more efficient, and future-ready path for marine operations and energy systems.',
      website: 'https://oeapl.com/',
      logo: '/images/associates/oak_energy_associates.jpg',
    },
    {
      name: 'Gasgrows',
      description: 'Originated in 2019, Gasgrows is a customer small-scale LNG solution provider at the forefront of the fastest growing sectors of alternative fuel distribution. The company provides faster, safer and cheaper small-scale LNG solutions including LNG procurement, transportation, and onsite equipment and support for end usage of LNG. Gasgrows is promoted by experienced professionals with established track records in oil & gas supply chain, commodities trading, logistics, banking and finance.',
      website: 'https://gasgrows.com/',
      logo: '/images/associates/gas_grows.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Associates - Pace Marine Solutions</title>
        <meta name="description" content="Our trusted partners and strategic alliances in the maritime and energy sectors." />
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
                Our Associates
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Strategic partnerships driving innovation in maritime and energy sectors
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section ref={ref} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our Strategic Partners
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Collaborating with industry leaders to deliver innovative solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-8 flex flex-col items-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="mb-6 w-full h-40 flex items-center justify-center bg-white/5 rounded-lg p-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        // Show text if image fails to load
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="text-white text-lg font-bold">${partner.name}</div>`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {partner.name}
                  </h3>
                  <p className="text-white/90 mb-4 text-center">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light transition-colors duration-300 mt-auto"
                  >
                    Visit Website →
                  </a>
                </motion.div>
              ))}
            </div>
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
                Interested in Partnership?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking to expand our network of trusted partners in the maritime and energy sectors.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                onClick={() => window.location.href = '/contact'}
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

export default Associates;