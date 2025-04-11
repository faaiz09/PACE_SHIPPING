import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import ClientMarquee from '../components/ClientMarquee';

const Partners = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { name: 'AG&P', logo: '/images/clients/agp.png' },
    { name: 'Adani', logo: '/images/clients/adani.png' },
    { name: 'ADNOC', logo: '/images/clients/adnoc.png' },
    { name: 'Bharat Petroleum', logo: '/images/clients/bp.jpg' },
    { name: 'Bridport', logo: '/images/clients/bridport.png' },
    { name: 'BW LNG', logo: '/images/clients/Bwlng.jpg' },
    { name: 'Celsius', logo: '/images/clients/celsius.png' },
    { name: 'Exmar', logo: '/images/clients/exmar.png' },
    { name: 'Faith Capital', logo: '/images/clients/faithcapital.png' },
    { name: 'H-Line Shipping', logo: '/images/clients/hline.png' },
    { name: 'IndianOil', logo: '/images/clients/indianoil.png' },
    { name: 'JSW', logo: '/images/clients/jsw.png' },
    { name: 'KIPIC', logo: '/images/clients/kipic.png' },
    { name: 'Knutsen OAS', logo: '/images/clients/knutsen.png' },
    { name: 'LNG Easy', logo: '/images/clients/lngeasy.png' },
    { name: 'MISC', logo: '/images/clients/misc.png' },
    { name: 'MOL', logo: '/images/clients/mol.png' },
    { name: 'MSC', logo: '/images/clients/msc.png' },
    { name: 'New Fortress', logo: '/images/clients/newfortress.png' },
    { name: 'NYK Line', logo: '/images/clients/nyk.png' },
    { name: 'OSM Thome', logo: '/images/clients/osmthome.png' },
    { name: 'Pertamina', logo: '/images/clients/pertamina.png' },
    { name: 'POS SM', logo: '/images/clients/possm.png' },
    { name: 'Qatargas', logo: '/images/clients/qatargas.png' },
    { name: 'Shapoorji Pallonji', logo: '/images/clients/shapoorji.png' },
    { name: 'SHV Energy', logo: '/images/clients/shvenergy.png' },
    { name: 'SIPG', logo: '/images/clients/sipg.png' },
    { name: 'SIGTTO', logo: '/images/clients/sigtto.png' },
    { name: 'SOCAR', logo: '/images/clients/socar.png' },
    { name: 'Tellurian', logo: '/images/clients/tellurian.png' },
    { name: 'TITAN', logo: '/images/clients/titan.png' },
    { name: 'TotalEnergies', logo: '/images/clients/totalenergies.png' },
    { name: 'Vitol', logo: '/images/clients/vitol.png' },
    { name: 'Wilhelmsen', logo: '/images/clients/wilhelmsen.png' },
  ];

  return (
    <>
      <Helmet>
        <title>Our Partners - Pace Marine</title>
        <meta name="description" content="Discover our trusted partners and clients in the maritime industry. We work with leading companies worldwide to deliver excellence in LNG services." />
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
                Our Partners
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
                We are proud to work with industry leaders who trust us for their maritime service needs
              </p>
              <ClientMarquee />
            </motion.div>
          </div>
        </section>

        {/* Partners Grid Section */}
        <section ref={gridRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 w-auto object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners; 