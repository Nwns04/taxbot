const TermsOfUse = () => {
    return (
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
            
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using TaxBot through WhatsApp, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Use.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                TaxBot provides automated tax assistance, calculations, and general guidance through 
                WhatsApp. Our service is designed to help users with tax-related queries but does 
                not constitute professional tax advice.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to misuse or exploit the service</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain the security of your WhatsApp account</li>
              </ul>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations of Service</h2>
              <p className="text-gray-600 mb-4">
                TaxBot provides general tax information and calculations. We are not a substitute for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Professional tax advisors or accountants</li>
                <li>Legal counsel for complex tax situations</li>
                <li>Official tax authorities or government agencies</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Always consult with qualified professionals for specific tax advice.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of TaxBot are owned by us and are protected 
                by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Modifications</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of the service 
                at any time without prior notice. We may also update these Terms of Use periodically.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, TaxBot shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your use of 
                or inability to use the service.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of 
                [Your Country/State], without regard to its conflict of law provisions.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Email: support@paayam.com</p>
                <p className="text-gray-600">WhatsApp: +2347040739828</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default TermsOfUse;