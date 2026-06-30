import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-lime-100 bg-white/90 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="h-9 w-9 bg-lime-600 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">T</span>
              </div>

              <div className="ml-3 leading-tight">
                <span className="block text-xl font-bold text-gray-950">
                  TaxBotNaija
                </span>
                <span className="block text-xs font-medium text-lime-700">
                  by TKO Motions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "text-lime-700 border-lime-600"
                    : "text-gray-600 hover:text-gray-950 border-transparent"
                } border-b-2 px-1 py-2 text-sm font-semibold transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/#early-access"
              className="inline-flex items-center justify-center rounded-xl bg-lime-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 transition-colors"
            >
              Join Early Access
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-gray-600 hover:bg-lime-50 hover:text-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>

              <div className="w-6 h-6 flex flex-col justify-center">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="space-y-1 border-t border-lime-100 bg-white px-2 pb-4 pt-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive(item.href)
                      ? "bg-lime-50 text-lime-700"
                      : "text-gray-600 hover:bg-lime-50 hover:text-gray-950"
                  } block rounded-xl px-3 py-3 text-base font-semibold transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="/#early-access"
                onClick={() => setIsOpen(false)}
                className="mt-3 block w-full rounded-xl bg-lime-600 px-5 py-3 text-center text-base font-semibold text-white hover:bg-lime-700 transition-colors"
              >
                Join Early Access
              </a>

              <a
                href="mailto:support@taxbotnaija.com"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-600 hover:bg-lime-50 hover:text-gray-950 transition-colors duration-200"
              >
                Contact Support
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;