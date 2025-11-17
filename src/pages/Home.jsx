import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Instant Tax Calculations',
      description: 'Get quick and accurate tax calculations for various scenarios.',
      icon: '🧮'
    },
    {
      title: '24/7 Availability',
      description: 'Our WhatsApp bot is available round the clock to assist you.',
      icon: '⏰'
    },
    {
      title: 'Expert Guidance',
      description: 'Professional tax advice and compliance guidance at your fingertips.',
      icon: '💼'
    },
    {
      title: 'Secure & Private',
      description: 'Your financial data is protected with enterprise-grade security.',
      icon: '🔒'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Personal <span className="text-primary-600">Tax Assistant</span> on WhatsApp
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              TaxBot Naija is a product of Tko Motions, designed to make tax calculations, compliance and guidance effortless for individuals and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/your-number-here"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                💬 Start Chat on WhatsApp
              </a>
              <Link
                to="/privacy"
                className="btn-secondary text-lg px-8 py-4"
              >
                📄 Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TaxBot?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of tax assistance with our intelligent WhatsApp bot powered by Tko Motions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Simplify Your Taxes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start chatting with TaxBot today and get instant help with all your tax needs. Powered and operated by Tko Motions.
          </p>
          <a
            href="https://wa.me/your-number-here"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            💬 Chat Now on WhatsApp
          </a>
          <div className="mt-6 text-sm text-gray-500">
            <p>No downloads required • Works on any device • 100% Free to start</p>
          </div>
        </div>
      </section>

      {/* Footer Company Attribution */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>TaxBot Naija is a registered product of Tko Motions.</p>
      </footer>
    </div>
  );
};

export default Home;
