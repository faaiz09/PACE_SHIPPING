import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiShipWheel, GiAnchor, GiSailboat, GiCargoShip } from "react-icons/gi";
import {
  FaRocket,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaGlobe,
  FaIndustry,
  FaShip,
  FaGraduationCap,
  FaTrophy,
  FaGlobeAmericas,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientMarquee from "../components/ClientMarquee";
import { Link } from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [globalRef, globalInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [factsRef, factsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [awardsRef, awardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Changed from true to false to prevent overflow
    pauseOnHover: true,
    adaptiveHeight: false,
    centerMode: false,
    variableWidth: false,
    focusOnSelect: false,
    className: "hero-carousel",
  };

  const carouselImages = [
    "/images/home/1.png",
    "/images/home/2.png",
    "/images/home/3.jpeg",
    "/images/home/4.jpeg",
    "/images/home/5.jpeg",
  ];

  const services = [
    {
      title: "LNG Terminal Services",
      description:
        "Comprehensive solutions for LNG terminal operations and management",
      icon: <FaIndustry className="text-4xl text-accent" />,
    },
    {
      title: "Ship-to-Ship Operations",
      description:
        "Expert handling of STS transfers with safety and efficiency",
      icon: <FaShip className="text-4xl text-accent" />,
    },
    {
      title: "Training Programs",
      description: "Specialized training for maritime professionals",
      icon: <FaGraduationCap className="text-4xl text-accent" />,
    },
  ];

  const values = [
    {
      title: "Business Ethics",
      description: "Trust & Integrity in all our operations",
      icon: <FaHandshake className="text-4xl text-accent" />,
    },
    {
      title: "Transparency",
      description: "Clear and open communication",
      icon: <FaChartLine className="text-4xl text-accent" />,
    },
    {
      title: "Knowledge",
      description: "Continuous learning and expertise",
      icon: <FaLightbulb className="text-4xl text-accent" />,
    },
    {
      title: "Quality Focus",
      description: "Excellence in every service",
      icon: <FaShieldAlt className="text-4xl text-accent" />,
    },
    {
      title: "Risk Management",
      description: "Proactive safety measures",
      icon: <FaShieldAlt className="text-4xl text-accent" />,
    },
    {
      title: "Collaborations",
      description: "Strong partnerships for success",
      icon: <FaUsers className="text-4xl text-accent" />,
    },
  ];

  const facts = [
    {
      number: "3000+",
      label: "Ship Shore Compatibility Studies",
      description: "Conducted for worldwide LNG terminals",
      details:
        "Including Dabhol LNG Terminal (since 2011) and KIPIC Al Zour LNG Terminal, Kuwait (since 2022)",
    },
    {
      number: "14+",
      label: "Years Experience",
      description: "In Optimoor mooring analysis",
      details: "With 1000+ reports generated in 2024",
    },
    {
      number: "500+",
      label: "LNG Bunkering Operations",
      description: "With 7 years of experience",
      details: "Including compatibility & STS support",
    },
    {
      number: "30+",
      label: "Methanol Bunkering Operations",
      description: "With 3 years of experience",
      details: "Including compatibility support",
    },
    {
      number: "75+",
      label: "Trusted Clients",
      description: "Global partnerships",
      details: "Across multiple continents",
    },
    {
      number: "5+",
      label: "Terminal Projects",
      description: "Successful implementations",
      details: "Worldwide LNG terminals",
    },
  ];

  const stats = [
    { number: "75+", label: "Trusted Clients" },
    { number: "5+", label: "Terminal Projects" },
    { number: "500+", label: "LNG Bunkering Operations" },
    { number: "85+", label: "LNG Bunkering Training" },
  ];

  const awards = [
    {
      title: "Excellence in LNG Operations",
      year: "2023",
      description:
        "Recognized for outstanding performance in LNG terminal operations",
      icon: <FaTrophy className="text-4xl text-accent" />,
    },
    {
      title: "Safety Innovation Award",
      year: "2022",
      description:
        "Awarded for implementing cutting-edge safety measures in STS operations",
      icon: <FaShieldAlt className="text-4xl text-accent" />,
    },
    {
      title: "Environmental Stewardship",
      year: "2021",
      description:
        "Recognized for sustainable practices in maritime operations",
      icon: <FaGlobe className="text-4xl text-accent" />,
    },
  ];

  const globalPresence = [
    {
      region: "Asia-Pacific",
      operations: "LNG Terminal Consulting, STS Operations",
      icon: <FaGlobeAmericas className="text-4xl text-accent" />,
    },
    {
      region: "Middle East",
      operations: "LNG Bunkering, Terminal Management",
      icon: <FaGlobeAmericas className="text-4xl text-accent" />,
    },
    {
      region: "Europe",
      operations: "STS Operations, Training Programs",
      icon: <FaGlobeAmericas className="text-4xl text-accent" />,
    },
    {
      region: "Americas",
      operations: "LNG Terminal Development, Consulting",
      icon: <FaGlobeAmericas className="text-4xl text-accent" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Home - Pace Marine</title>
        <meta
          name="description"
          content="Leading provider of LNG terminal services, ship-to-ship operations, and maritime training."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-light">
        {/* Add ScrollToTop component here */}
        <ScrollToTop 
          showBelow={300}
          fillColor="#5995ED" // or any color that matches your theme
        />
        
        {/* Hero Section with Carousel */}
        <section ref={heroRef} className="relative py-0 overflow-hidden">
          <div className="max-w-full mx-auto px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="relative mb-12 w-full overflow-hidden">
                <Slider
                  {...carouselSettings}
                  className="rounded-lg shadow-xl w-full"
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="relative w-full">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[100vh] min-h-[600px] object-cover rounded-lg brightness-75" // Added brightness-75
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent rounded-lg" />{" "}
                      // Increased opacity to 90%
                    </div>
                  ))}
                </Slider>
                {/* Moved the title outside the slider but inside the relative container */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                      Welcome to Pace Marine Solutions
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                      Leading provider of LNG terminal services, ship-to-ship
                      operations, and maritime training
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Marquee Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our Trusted Clients
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Partnering with industry leaders worldwide
              </p>
            </motion.div>
          </div>
          <ClientMarquee />
        </section>

        {/* Mission & Vision Section */}
        <section ref={missionRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our Mission & Vision
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-left">
                  <img
                    src="/images/home/2.png"
                    alt="Our Mission"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <ul className="space-y-4 text-white/90">
                    <li className="flex items-start gap-3">
                      <FaRocket className="text-accent mt-1" />
                      <span>
                        To have resources to manage customers present and
                        futuristic requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaRocket className="text-accent mt-1" />
                      <span>To maintain quality and speed of delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaRocket className="text-accent mt-1" />
                      <span>
                        To work on innovation to improve efficiency and cost
                        optimisation through advancement and technology
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaRocket className="text-accent mt-1" />
                      <span>
                        Connecting with each LNG and Alternate fuel company
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaRocket className="text-accent mt-1" />
                      <span>
                        To work on funding for set up LNG bunkering at Kochi and
                        Nicobar Island
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
                  <img
                    src="/images/home/3.jpeg"
                    alt="Our Values"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our Values
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={missionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="flex items-start gap-3"
                      >
                        <div className="text-accent">{value.icon}</div>
                        <div>
                          <h4 className="text-white font-bold">
                            {value.title}
                          </h4>
                          <p className="text-white/90 text-sm">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section ref={globalRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={globalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Global Presence
              </h2>
              <img
                src="/images/home/4.jpeg"
                alt="Global Presence"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {globalPresence.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={globalInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                  >
                    <div className="mb-4">{region.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {region.region}
                    </h3>
                    <p className="text-white/90">{region.operations}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Facts Section */}
        <section
          ref={factsRef}
          className="py-20 bg-gradient-to-b from-primary-light to-primary-dark"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={factsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Years of excellence in maritime operations and LNG services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={factsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center"
                >
                  <div className="text-4xl font-bold text-accent mb-2">
                    {fact.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {fact.label}
                  </h3>
                  <p className="text-white/90 mb-2">{fact.description}</p>
                  {fact.details && (
                    <p className="text-white/80 text-sm">{fact.details}</p>
                  )}
                </motion.div>
              ))}
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
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Recognized for excellence in maritime operations and innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                >
                  <div className="mb-4">{award.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">{award.year}</p>
                  <p className="text-white/90">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/90">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Our Services
              </h2>
              <img
                src="/images/home/services.jpg"
                alt="Our Services"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.description}</p>
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
              <img
                src="/images/home/contact_us.jpg"
                alt="Contact Us"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your maritime service needs
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
