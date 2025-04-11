import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const ClientMarquee = ({ clients }) => {
  // Use the passed clients prop or default to an array of clients if not provided
  const marqueClients = clients || [
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

  // Add state to track images that failed to load
  const [loadedImages, setLoadedImages] = useState({});

  // Log error for debugging
  const handleImageError = (clientName) => {
    console.error(`Failed to load image for client: ${clientName}`);
    // Update state to mark this image as failed
    setLoadedImages(prev => ({...prev, [clientName]: false}));
  };

  const handleImageLoad = (clientName) => {
    setLoadedImages(prev => ({...prev, [clientName]: true}));
  };

  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <Marquee gradient={false} speed={30} pauseOnHover={true}>
        <div className="flex items-center space-x-16 px-4">
          {marqueClients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-4"
              style={{ 
                width: '120px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 max-w-full object-contain"
                onError={() => handleImageError(client.name)}
                onLoad={() => handleImageLoad(client.name)}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ClientMarquee;