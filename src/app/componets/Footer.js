import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Imeleo</h2>
            <p>Business Software Solutions And Services</p>
            <div className="mt-4 flex justify-center md:justify-start space-x-3">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
  
          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="space-y-1">
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Why Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              <li><a href="#">Web App Dev</a></li>
              <li><a href="#">Mobile App Dev</a></li>
              <li><a href="#">IT Consulting</a></li>
              <li><a href="#">Custom Software</a></li>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Data Engineering</a></li>
            </ul>
          </div>
  
          {/* Solutions */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Solutions</h3>
            <ul className="space-y-1">
              <li><a href="#">Content Management</a></li>
              <li><a href="#">Employee Management</a></li>
              <li><a href="#">Workflo Management</a></li>
              <li><a href="#">Lead Management</a></li>
              <li><a href="#">Inventory Management</a></li>
              <li><a href="#">Hospital Management</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="mb-1"><i className="fas fa-phone-alt"></i> +91-987-654-4533</p>
            <p className="mb-1"><i className="fas fa-envelope"></i> contact@imeleo.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Noida, Uttar Pradesh</p>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;

  