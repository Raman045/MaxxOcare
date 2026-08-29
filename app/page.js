import Image from 'next/image';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'MAXXOCARE Toilet Cleaner',
      desc: '10X Action ke saath ziddi daag aur keetanuon ka khatma! Aapke toilet ko banaye fresh aur bilkul naya.',
      size: 'Available in: 250ml, 500ml, 1000ml & 5L',
      image: '/toilet-cleaner.jpg'
    },
    {
      id: 2,
      name: 'MAXXOCARE Fabric Whitener',
      desc: 'Kapdo ki safedi aur chamak wapas laye. Daag hataye aur purane kapdo ko de nayi jaisi chamak!',
      size: 'Available in: 200ml, 500ml',
      image: '/fabric-whitener.jpg'
    },
    {
      id: 3,
      name: 'MAXXOCARE Glass Cleaner',
      desc: 'Shishe aur windows ke liye perfect! Bina kisi daag ke shandar chamak aur dust-free finish har baar.',
      size: 'Available in: 250ml, 500ml',
      image: '/glass-cleaner.jpg'
    },
    {
      id: 4,
      name: 'White Lemon & Rose Phenyl',
      desc: 'Ghar ke farsh ko banaye completely germs free. Lemon aur Rose ki behtareen khushboo ke saath.',
      size: 'Available in: 1000ml',
      image: '/floor-cleaner.jpg'
    },
    {
      id: 5,
      name: 'MAXXOCARE Bleaching Powder',
      desc: 'Multipurpose cleaning aur sanitization ke liye sabse asardar bleaching powder. Naaliyon aur naaliyo ko rakhe saaf.',
      size: 'Available in: 500g',
      image: '/bleaching-powder.jpg'
    },
    {
      id: 6,
      name: 'Excel Power Drain Cleaner',
      desc: 'Line choke ke liye ram-baan ilaaj! Blocked naaliyon aur sink ko kholne ke liye sabse fast aur powerfull formula.',
      size: 'Available in: 500ml',
      image: '/drain-cleaner.png'
    },
    {
      id: 7,
      name: 'MAXXOCARE Tiles Cleaner',
      desc: 'Ziddi dark stains ko hataye minto mein! Bathroom tiles, washbasin aur cement floors ko banaye ekdam naya.',
      size: 'Available in: 500ml',
      image: '/tiles-cleaner.png'
    },
    {
      id: 8,
      name: 'MAXXOCARE Black Phenol',
      desc: 'Ek powerful disinfectant jo bimari failane wale germs ko maare. Hospital, ghar aur toilet ki safai ke liye best quality phenyl.',
      size: 'Available in: 100ml, 500ml',
      image: '/black-phenol.png'
    },
    {
      id: 9,
      name: 'White Phenyl (Hygiene Deodorising)',
      desc: 'Hygiene aur mehak dono ek saath! Farsh se gandagi hataye, macchar aur makhiyon ko bhagaye, aur ghar ko rakhe bilkul fresh.',
      size: 'Available in: 500ml',
      image: '/white-phenyl.png'
    }
  ];

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
            <h2 style={{ fontSize: '2.2rem', color: '#ff5252', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '1px', textShadow: '0 4px 15px rgba(255, 82, 82, 0.4)' }}>सपना स्वच्छ भारत का...</h2>
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
          {/* Large Feature */}
          <div className="promo-card span-2-col span-2-row"><img src="/promo4.jpg" alt="All Products Lineup" /></div>
          {/* Standard squares */}
          <div className="promo-card"><img src="/promo1.jpg" alt="Glass Cleaner Promo" /></div>
          <div className="promo-card"><img src="/promo2.jpg" alt="Fabric Whitener Promo" /></div>
          {/* Wide Feature */}
          <div className="promo-card span-2-col"><img src="/promo6.jpg" alt="Advanced Toilet Cleaner" /></div>
          <div className="promo-card"><img src="/promo5.jpg" alt="Toilet Cleaner Deep Clean" /></div>
          {/* Full Width Footer Promo */}
          <div className="promo-card span-3-col"><img src="/promo8.jpg" alt="Glass Cleaner Before After" /></div>
        </div>
      </section>

      {/* Glassmorphism Products Section */}
      <section id="products" className="products-section animate-up">
        <h2 className="section-title">Premium Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <span className="size">{product.size}</span>
              <a href="tel:+919721718764" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', width: '100%' }}>Order Now</a>
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
            <h3>MAXXOCARE</h3>
            <p style={{ color: 'var(--primary-color)' }}>सपना स्वच्छ भारत का...</p>
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
    </main>
  );
}
