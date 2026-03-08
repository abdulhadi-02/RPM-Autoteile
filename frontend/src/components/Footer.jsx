import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>RPM AutoTeile</h4>
          <p>High quality parts for your car.</p>
        </div>
        <div className="footer-links">
          <span>New Arrival</span>
          <span>Featured</span>
          <span>Sale</span>
        </div>
      </div>
      <p className="footer-copy">© 2025 RPM AutoTeile. All rights reserved.</p>
    </footer>
  );
}

export default Footer;