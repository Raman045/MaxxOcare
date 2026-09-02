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
