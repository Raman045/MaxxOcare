"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'MAXXOCARE Toilet Cleaner',
      desc: '10X Action ke saath ziddi daag aur keetanuon ka khatma! Aapke toilet ko banaye fresh aur bilkul naya.',
      size: 'Available in: 250ml, 500ml, 1000ml & 5L',
      image: '/toilet-cleaner.png',
      gallery: ['/toilet-cleaner.png', '/usecase-toilet.jpg']
    },
    {
      id: 2,
      name: 'MAXXOCARE Fabric Whitener',
      desc: 'Kapdo ki safedi aur chamak wapas laye. Daag hataye aur purane kapdo ko de nayi jaisi chamak!',
      size: 'Available in: 200ml, 500ml',
      image: '/fabric-whitener.png',
      gallery: ['/fabric-whitener.png', '/usecase-fabric.jpg']
    },
    {
      id: 3,
      name: 'MAXXOCARE Glass Cleaner',
      desc: 'Shishe aur windows ke liye perfect! Bina kisi daag ke shandar chamak aur dust-free finish har baar.',
      size: 'Available in: 250ml, 500ml',
      image: '/glass-cleaner.png',
      gallery: ['/glass-cleaner.png', '/usecase-glass.jpg']
    },
    {
      id: 4,
      name: 'White Lemon & Rose Phenyl',
      desc: 'Ghar ke farsh ko banaye completely germs free. Lemon aur Rose ki behtareen khushboo ke saath.',
      size: 'Available in: 1000ml',
      image: '/floor-cleaner.jpg',
      gallery: ['/floor-cleaner.jpg', '/usecase-floor.jpg']
    },
    {
      id: 5,
      name: 'MAXXOCARE Bleaching Powder',
      desc: 'Multipurpose cleaning aur sanitization ke liye sabse asardar bleaching powder. Naaliyon aur naaliyo ko rakhe saaf.',
      size: 'Available in: 500g',
      image: '/bleaching-powder.png',
      gallery: ['/bleaching-powder.png', '/usecase-bleach.jpg']
    },
    {
      id: 6,
      name: 'Excel Power Drain Cleaner',
      desc: 'Line choke ke liye ram-baan ilaaj! Blocked naaliyon aur sink ko kholne ke liye sabse fast aur powerfull formula.',
      size: 'Available in: 500ml',
      image: '/drain-cleaner.png',
      gallery: ['/drain-cleaner.png', '/usecase-drain.jpg']
    },
    {
      id: 7,
      name: 'MAXXOCARE Tiles Cleaner',
      desc: 'Ziddi dark stains ko hataye minto mein! Bathroom tiles, washbasin aur cement floors ko banaye ekdam naya.',
      size: 'Available in: 500ml',
      image: '/tiles-cleaner.png',
      gallery: ['/tiles-cleaner.png', '/usecase-tiles.jpg']
    },
    {
      id: 8,
      name: 'MAXXOCARE Black Phenol',
      desc: 'Ek powerful disinfectant jo bimari failane wale germs ko maare. Hospital, ghar aur toilet ki safai ke liye best quality phenyl.',
      size: 'Available in: 100ml, 500ml',
      image: '/black-phenol.png',
      gallery: ['/black-phenol.png', '/usecase-phenol.jpg']
    },
    {
      id: 9,
      name: 'White Phenyl (Hygiene Deodorising)',
      desc: 'Hygiene aur mehak dono ek saath! Farsh se gandagi hataye, macchar aur makhiyon ko bhagaye, aur ghar ko rakhe bilkul fresh.',
      size: 'Available in: 500ml, 5L',
      image: '/white-phenyl.png',
      gallery: ['/white-phenyl.png', '/usecase-white-floor.jpg']
    },
    {
      id: 10,
      name: 'MAXXOCARE Hand Wash (Fresh Aqua)',
      desc: 'Gentle & Effective! 99.9% germ protection with moisturizers. pH balanced and soft on hands for everyday protection.',
      size: 'Available in: 500ml',
      image: '/hand-wash.png',
      gallery: ['/hand-wash.png', '/usecase-handwash.jpg']
    }
  ];

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedProduct && currentImageIndex < selectedProduct.gallery.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedProduct && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <main>
      {/* Split Dynamic Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text animate-up">
            <h1>
              <span className="text-gradient-blue">MAXX</span>
              <svg viewBox="0 0 24 24" fill="url(#drop-gradient)" style={{ height: '1.1em', margin: '0 -5px', filter: 'drop-shadow(0 5px 8px rgba(0,210,255,0.5))' }}>
                <defs>
                  <linearGradient id="drop-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d2ff" />
                    <stop offset="100%" stopColor="#0056b3" />
                  </linearGradient>
                </defs>
                <path d="M12,2C12,2 4,9 4,14C4,18.42 7.58,22 12,22C16.42,22 20,18.42 20,14C20,9 12,2 12,2Z"/>
              </svg>
              <span className="text-gradient-green">CARE</span>
            </h1>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '1.5px', background: 'linear-gradient(45deg, #ff1744 0%, #ff8a80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 4px 10px rgba(255,23,68,0.4))' }}>सपना स्वच्छ भारत का...</h2>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', letterSpacing: '3px', textTransform: 'uppercase' }}>A Product by K. Narayan Industries</h3>
            <p>
              Premium quality cleaning products for your entire home. Discover our complete range designed for a spotless, germ-free, and fragrant living space.
            </p>
            <a href="#products" className="btn-primary">Explore Products ➔</a>
          </div>
          
          <div className="hero-image animate-up" style={{ animationDelay: '0.2s' }}>
            <img src="/promo7.jpg" alt="MAXXOCARE Full Product Range" />
          </div>
        </div>
      </section>

      {/* Asymmetric Promo Gallery */}
      <section className="promo-section animate-up">
        <h2 className="section-title">सफाई का भरोसेमंद साथी</h2>
        <div className="promo-grid">
          <div className="promo-card"><img src="/promo_sq1.jpg" alt="Glass Cleaner Crystal Clear" /></div>
          <div className="promo-card"><img src="/promo_sq2.jpg" alt="MAXXOCARE Lineup Presents" /></div>
          <div className="promo-card"><img src="/promo_sq3.jpg" alt="Fabric Whitener Before After" /></div>
          <div className="promo-card"><img src="/promo_sq4.jpg" alt="Toilet Cleaner 10X Deep Clean" /></div>
        </div>
      </section>

      {/* Glassmorphism Products Section */}
      <section id="products" className="products-section animate-up">
        <h2 className="section-title">Premium Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => { setSelectedProduct(product); setCurrentImageIndex(0); }}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="click-indicator">
                <span>Click for Details</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <span className="size">{product.size}</span>
              <button 
                className="btn-primary" 
                style={{ padding: '0.8rem 2rem', fontSize: '1rem', width: '100%', marginTop: '1rem', border: 'none', cursor: 'pointer' }}
                onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); setCurrentImageIndex(0); }}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Dealership Section */}
      <section className="dealership-section animate-up">
        <div className="dealership-container">
          <img src="/dealership.jpg" alt="Dealership Available Now" className="dealership-banner" />
          <div className="dealership-content">
            <h2>Start Your Business With Us</h2>
            <p>Dealership opportunities are now open. Partner with MAXXOCARE and bring premium cleaning products to your city.</p>
            <a href="tel:+919721718764" className="btn-primary" style={{ backgroundColor: '#ff5252', backgroundImage: 'none', boxShadow: '0 10px 20px rgba(255, 82, 82, 0.3)' }}>Call: +91 9721718764</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '2.5rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>
              <span className="text-gradient-blue">MAXX</span>
              <svg viewBox="0 0 24 24" fill="url(#drop-gradient)" style={{ height: '1.1em', margin: '0 -2px', filter: 'drop-shadow(0 2px 5px rgba(0,210,255,0.5))' }}>
                <path d="M12,2C12,2 4,9 4,14C4,18.42 7.58,22 12,22C16.42,22 20,18.42 20,14C20,9 12,2 12,2Z"/>
              </svg>
              <span className="text-gradient-green">CARE</span>
              <sup style={{ fontSize: '0.4em', color: 'rgba(255,255,255,0.6)', marginLeft: '4px', marginTop: '-20px', fontWeight: '700' }}>TM</sup>
            </h3>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px', background: 'linear-gradient(45deg, #ff1744 0%, #ff8a80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 2px 5px rgba(255,23,68,0.3))' }}>सपना स्वच्छ भारत का...</p>
          </div>
          <div className="footer-details">
            <p><strong>Packed & Marketed By:</strong> K. NARAYAN INDUSTRIES</p>
            <p><strong>Add:</strong> Plot No. 363, Kha Kutubalampur, Mukimpur, Karari, Kaushambi (U.P.)</p>
            <p><strong>Customer Care:</strong> 9721718764</p>
            <p><strong>E-mail:</strong> knarayanindustries@gmail.com</p>
          </div>
        </div>
        <p style={{ marginTop: '2rem', textAlign: 'center', opacity: '0.7', fontSize: '0.9rem' }}>
          &copy; 2026 MAXXOCARE by K. Narayan Industries. All rights reserved.
        </p>
      </footer>

      {/* Image Slider Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div className="slider-container">
              {currentImageIndex > 0 && (
                <button className="slider-btn prev-btn" onClick={handlePrevImage}>◀</button>
              )}
              
              <div className="slider-image-wrapper">
                <img 
                  src={selectedProduct.gallery[currentImageIndex]} 
                  alt={`${selectedProduct.name} View ${currentImageIndex + 1}`} 
                  className="slider-image"
                />
              </div>

              {currentImageIndex < selectedProduct.gallery.length - 1 && (
                <button className="slider-btn next-btn" onClick={handleNextImage}>▶</button>
              )}
            </div>

            <div className="slider-dots">
              {selectedProduct.gallery.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
            
            <div className="modal-info">
              <h3>{selectedProduct.name}</h3>
              <p>{currentImageIndex === 0 ? selectedProduct.desc : "Product Use Cases & Benefits"}</p>
              <a 
                href="tel:+919721718764" 
                className="btn-primary" 
                style={{ marginTop: '1.5rem', display: 'inline-block', boxShadow: '0 10px 20px rgba(0, 210, 255, 0.4)' }}
              >
                📞 Call to Order: 9721718764
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
