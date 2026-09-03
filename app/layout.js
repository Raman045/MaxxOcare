import './globals.css'

export const metadata = {
  title: 'MAXXOCARE | Best Cleaning Products',
  description: 'Ghar ki safai ke liye No.1 choice. Buy MAXXOCARE premium cleaning products.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bubble-container">
          <div className="bubble" style={{ left: '10%', width: '40px', height: '40px', animationDuration: '8s' }}></div>
          <div className="bubble" style={{ left: '30%', width: '60px', height: '60px', animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="bubble" style={{ left: '50%', width: '30px', height: '30px', animationDuration: '6s', animationDelay: '4s' }}></div>
          <div className="bubble" style={{ left: '70%', width: '50px', height: '50px', animationDuration: '12s', animationDelay: '1s' }}></div>
          <div className="bubble" style={{ left: '90%', width: '70px', height: '70px', animationDuration: '9s', animationDelay: '3s' }}></div>
        </div>
        <header>
          <nav>
            <div className="brand-logo">
              <a href="/">
                <img src="/logo.png" alt="MAXXOCARE" style={{ height: '55px', objectFit: 'contain' }} />
              </a>
            </div>
            
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#products">Products</a>
              <a href="tel:+919721718764" style={{ color: '#00d2ff', fontWeight: '700' }}>📞 9721718764</a>
            </div>
            
            <a href="#products" className="btn-primary" style={{ padding: '0.6rem 1.8rem', fontSize: '0.95rem', boxShadow: '0 5px 15px rgba(0, 210, 255, 0.4)' }}>View Details</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
