import './globals.css'

export const metadata = {
  title: 'MAXXOCARE | Best Cleaning Products',
  description: 'Ghar ki safai ke liye No.1 choice. Buy MAXXOCARE premium cleaning products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="brand-logo">
            <img src="/logo.png" alt="MAXXOCARE" style={{ height: '40px', objectFit: 'contain' }} />
          </div>
          <a href="#products" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>View Products</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
