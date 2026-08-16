function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>TIMELESS</h2>
          <p>Quality watches for every moment.</p>
        </div>

        <div className="footer-link">
            <h3> Quick Links</h3>
            
            <a href="/"> Home</a>
            <a href="/shop">Watches</a>
            <a href="/admin">Admin</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@timeless.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
    </footer>
  );
}

export default Footer;