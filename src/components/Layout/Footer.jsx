import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="ml-2 text-xl font-bold">TaxBot</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              Your intelligent WhatsApp assistant for all tax-related questions and calculations. 
              Get instant help with tax queries, calculations, and compliance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://wa.me/message/D2JFI2L3P5CMM1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@taxbot.com" 
                  className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} TaxBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;