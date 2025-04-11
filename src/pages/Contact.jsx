import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-accent" />,
      title: 'Address',
      content: 'A 102,103, Shree Nandham, Plot no: 59, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra, India - 400614',
    },
    {
      icon: <FaPhone className="text-2xl text-accent" />,
      title: 'Phone',
      content: '+91 22 2756 0306 / +91 88282 16133',
    },
    {
      icon: <FaEnvelope className="text-2xl text-accent" />,
      title: 'Email',
      content: 'info@pace-marine.com / pkg@pace-marine.com',
    },
    {
      icon: <FaGlobe className="text-2xl text-accent" />,
      title: 'Website',
      content: 'www.pace-marine.com',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Pace Marine</title>
        <meta name="description" content="Get in touch with Pace Marinefor all your maritime service needs. We're here to help with your shipping and logistics requirements." />
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
                Contact Us
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get in touch with our team for expert maritime solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section ref={ref} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-8"
              >
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/20 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/20 text-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white/20 text-white"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
                  <h2 className="text-3xl font-heading font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="mt-1">{info.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">
                            {info.title}
                          </h3>
                          <p className="text-white/90">{info.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Our Location
                  </h3>
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.155123456789!2d73.0391234!3d19.0223456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sShree+Nandham%2C+Plot+no%3A+59%2C+Sector+11%2C+CBD+Belapur%2C+Navi+Mumbai%2C+Maharashtra+400614!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pace Marine Solutions Location"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact; 