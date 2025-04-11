import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { FaImages, FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const albums = [
    {
      id: 'iocl-delhi',
      title: 'IOCL Delhi Meet - 2024',
      coverImage: '/images/gallery/iocl/IOCL_1.jpeg',
      images: [
        '/images/gallery/iocl/IOCL_1.jpeg',
        '/images/gallery/iocl/IOCL_2.jpeg',
        '/images/gallery/iocl/IOCL_3.jpeg',
        '/images/gallery/iocl/IOCL_4.jpeg',
      ],
    },
    {
      id: 'office-trainings',
      title: 'Office Trainings',
      coverImage: '/images/gallery/training/training_1.jpeg',
      images: [
        '/images/gallery/training/training_1.jpeg',
        '/images/gallery/training/training_2.jpeg',
        '/images/gallery/training/training_3.jpeg',
        '/images/gallery/training/training_4.jpeg',
        '/images/gallery/training/training_5.jpeg',
        '/images/gallery/training/training_6.jpeg',
        '/images/gallery/training/training_7.jpeg',
        '/images/gallery/training/training_8.jpeg',
        '/images/gallery/training/training_9.jpeg',
        '/images/gallery/training/training_10.jpeg',
        '/images/gallery/training/training_11.jpeg',
        '/images/gallery/training/training_12.jpeg',
        '/images/gallery/training/training_13.jpeg',
        '/images/gallery/training/training_14.jpeg',
      ],
    },
    {
      id: 'operations',
      title: 'Operations',
      coverImage: '/images/gallery/operations/operations_1.jpeg',
      images: [
        '/images/gallery/operations/operations_1.jpeg',
        '/images/gallery/operations/operations_2.jpeg',
        '/images/gallery/operations/operations_3.jpeg',
        '/images/gallery/operations/operations_4.jpeg',
        '/images/gallery/operations/operations_5.jpeg',
        '/images/gallery/operations/operations_6.jpeg',
        '/images/gallery/operations/operations_7.jpeg',
        '/images/gallery/operations/operations_8.jpeg',
        '/images/gallery/operations/operations_9.jpeg',
        '/images/gallery/operations/operations_10.jpeg',
        '/images/gallery/operations/operations_11.jpeg',
      ],
    },
    {
      id: 'annual-day',
      title: 'Annual Day 2024',
      coverImage: '/images/gallery/annual_day/annual_day_1.jpeg',
      images: [
        '/images/gallery/annual_day/annual_day_1.jpeg',
        '/images/gallery/annual_day/annual_day_2.jpeg',
        '/images/gallery/annual_day/annual_day_3.jpeg',
        '/images/gallery/annual_day/annual_day_4.jpeg',
        '/images/gallery/annual_day/annual_day_5.jpeg',
        '/images/gallery/annual_day/annual_day_6.jpeg',
        '/images/gallery/annual_day/annual_day_7.jpeg',
        '/images/gallery/annual_day/annual_day_8.jpeg',
        '/images/gallery/annual_day/annual_day_9.jpeg',
        '/images/gallery/annual_day/annual_day_10.jpeg',
        '/images/gallery/annual_day/annual_day_11.jpeg',
        '/images/gallery/annual_day/annual_day_12.jpeg',
        '/images/gallery/annual_day/annual_day_13.jpeg',
        '/images/gallery/annual_day/annual_day_14.jpeg',
      ],
    },
    {
      id: 'festivals',
      title: 'Festivals & Fun',
      coverImage: '/images/gallery/festival/festival_1.jpeg',
      images: [
        '/images/gallery/festival/festival_1.jpeg',
        '/images/gallery/festival/festival_2.jpeg',
        '/images/gallery/festival/festival_3.jpeg',
        '/images/gallery/festival/festival_4.jpeg',
        '/images/gallery/festival/festival_5.jpeg',
        '/images/gallery/festival/festival_6.jpeg',
        '/images/gallery/festival/festival_7.jpeg',
        '/images/gallery/festival/festival_8.jpeg',
        '/images/gallery/festival/festival_9.jpeg',
      ],
    },
  ];

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  const handleNextImage = () => {
    if (activeAlbum && activeImage) {
      const currentIndex = activeAlbum.images.indexOf(activeImage);
      const nextIndex = (currentIndex + 1) % activeAlbum.images.length;
      setActiveImage(activeAlbum.images[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (activeAlbum && activeImage) {
      const currentIndex = activeAlbum.images.indexOf(activeImage);
      const prevIndex = (currentIndex - 1 + activeAlbum.images.length) % activeAlbum.images.length;
      setActiveImage(activeAlbum.images[prevIndex]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Pace Marine Solutions</title>
        <meta name="description" content="Explore our gallery showcasing company events, operations, and celebrations." />
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
                Our Gallery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                A visual journey through our company's milestones, events, and daily operations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Albums Grid */}
        <section ref={ref} className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveAlbum(album)}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{album.title}</h3>
                      <p className="text-white/90 mb-4 flex items-center gap-2">
                        <FaImages className="text-accent" />
                        {album.images.length} photos
                      </p>
                      <button className="flex items-center gap-2 text-white hover:text-accent transition-colors duration-300">
                        View Album
                        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Album Modal */}
        {activeAlbum && !activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 overflow-y-auto"
            onClick={() => setActiveAlbum(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="relative">
                <button
                  onClick={() => setActiveAlbum(null)}
                  className="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-300"
                >
                  <FaTimes className="w-8 h-8" />
                </button>
                <h2 className="text-3xl font-bold text-white mb-8">{activeAlbum.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeAlbum.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(image);
                      }}
                    >
                      <img
                        src={image}
                        alt={`${activeAlbum.title} - Image ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Full Screen Image Modal */}
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-300"
              >
                <FaTimes className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 text-white hover:text-accent transition-colors duration-300"
              >
                <FaChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 text-white hover:text-accent transition-colors duration-300"
              >
                <FaChevronRight className="w-8 h-8" />
              </button>

              <img
                src={activeImage}
                alt="Full Screen"
                className="max-h-[90vh] max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Gallery; 