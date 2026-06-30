import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-lime-950 via-emerald-950 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="h-9 w-9 bg-lime-500 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-lime-950 font-bold text-sm">T</span>
              </div>

              <div className="ml-3">
                <span className="block text-xl font-bold">TaxBotNaija</span>
                <span className="block text-xs text-lime-200">
                  Operated by TKO Motions
                </span>
              </div>
            </div>

            <p className="mt-4 text-gray-300 max-w-md">
              A secure Nigerian tax workspace preparing for launch. Built for
              tax calculations, records, bank-data import, reporting, and
              compliance support for individuals and businesses.
            </p>

            <div className="mt-5 inline-flex items-center rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-100">
              Secure web platform preparing for early access
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-lime-200 tracking-wider uppercase">
              Platform
            </h3>

            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/#early-access"
                  className="text-base text-gray-300 hover:text-lime-200 transition-colors duration-200"
                >
                  Join Early Access
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@taxbotnaija.com"
                  className="text-base text-gray-300 hover:text-lime-200 transition-colors duration-200"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-lime-200 tracking-wider uppercase">
              Legal
            </h3>

            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/privacy"
                  className="text-base text-gray-300 hover:text-lime-200 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-base text-gray-300 hover:text-lime-200 transition-colors duration-200"
                >
                  Terms of Use
                </Link>
              </li>

              <li>
                <a
                  href="mailto:support@taxbotnaija.com?subject=Privacy%20Request%20%E2%80%94%20TaxBotNaija"
                  className="text-base text-gray-300 hover:text-lime-200 transition-colors duration-200"
                >
                  Data Protection Request
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-lime-400/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} TaxBotNaija. All rights
              reserved.
            </p>

            <p className="text-sm text-gray-400 text-center md:text-right">
              Built for Nigerian tax calculations, records, reporting, and
              compliance support.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;