import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Section */}
            <div>
              <h2 className="text-3xl font-bold text-red-500 mb-3">Orchid Movie Portal</h2>
              <p className="text-gray-400">
                Your ultimate destination for movie exploration. Discover, search, and dive into the world of cinema with just a click.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-red-500 transition duration-300">Home</Link>
                </li>
                <li>
                  <Link to="/favorites" className="hover:text-red-500 transition duration-300">Favorites</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-red-500 transition duration-300">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-red-500 transition duration-300">Contact</Link>
                </li>
              </ul>
            </div>
  
            {/* Social Media and Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f bg-gray-800 p-3 rounded-full text-xl hover:bg-red-500"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter bg-gray-800 p-3 rounded-full text-xl hover:bg-red-500"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram bg-gray-800 p-3 rounded-full text-xl hover:bg-red-500"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube bg-gray-800 p-3 rounded-full text-xl hover:bg-red-500"></i>
                </a>
              </div>
              <p className="text-gray-400">
                Email: <a href="mailto:support@orchidmovieportal.com" className="text-red-500">support@orchidmovieportal.com</a>
              </p>
              <p className="text-gray-400">
                Phone: <a href="tel:+1234567890" className="text-red-500">+1 234 567 890</a>
              </p>
            </div>
          </div>
  
          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Orchid Movie Portal. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  