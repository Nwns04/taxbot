import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - WhatsApp TaxBot";
  }, []);
  
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to <strong>WhatsApp TaxBot</strong> (the “Service”) operated by <strong>Paayam </strong> (“we”, “us”, “our”). We are committed to protecting your privacy and processing your personal data in accordance with the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and other applicable laws.  
              By using our Service, you agree to the collection and use of information as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect the following types of information to provide and enhance our Services:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Your WhatsApp phone number and profile information</li>
              <li>Tax-related information you submit (income, deductions, etc) during conversations</li>
              <li>Message content and interaction history (to process your requests and for system logs)</li>
              <li>Device information (e.g., device type, operating system), usage data (e.g., number of calculations, timestamps)</li>
              <li>Payment and billing information (when you purchase a plan or service)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>To provide personalized tax calculations and deliver results via WhatsApp</li>
              <li>To track usage (number of calculations) and enforce plan limits</li>
              <li>To manage payments, plan activation, and access control for premium features</li>
              <li>To improve our Services and bot performance (analytics, error tracking)</li>
              <li>To comply with legal obligations, protect our rights and prevent fraud or abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organisational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access.  
              Where feasible, all data is encrypted in transit and at rest, and we monitor our systems for vulnerabilities and incidents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade or rent your personal information to third parties. We may share information only in the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>With your explicit consent to permit a specific service or feature</li>
              <li>With service providers (e.g., payment gateway, WhatsApp message provider) who assist us in delivering the Service and are obligated to protect your data</li>
              <li>When required by law, regulation or legal process (including regulatory authorities in Nigeria)</li>
              <li>To protect the rights, property or safety of our users or the public</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              Your data may be transferred to and stored in locations outside Nigeria in order to provide our Service (for example servers or service providers located abroad). We ensure that any such transfer complies with applicable data protection laws and is subject to appropriate safeguards (such as encryption or contractual protections).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal data only for as long as necessary to fulfil the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely delete or anonymise it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Under the NDPA and other applicable laws, you may have rights including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Right of access – you can request a copy of your personal data</li>
              <li>Right of correction – you can ask that inaccurate or incomplete data be corrected</li>
              <li>Right of deletion – you can request deletion of your personal data in certain circumstances</li>
              <li>Right to restrict or object – you may request we limit processing or object to our processing of your data</li>
              <li>Right to data portability – you may request we transfer your data to another controller where technically feasible</li>
              <li>Right to withdraw consent at any time (without affecting processing already done under valid consent)</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us (see section “Contact Us” below).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children’s Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our Service is not intended for children under the age of 16. We do not knowingly collect personal information from children below this age. If you are a parent or guardian and believe we have collected such data, please contact us and we will delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time in response to changes in our data practices, legal obligations or for other operational reasons.  
              We will post the updated version on our website/app and the “Last updated” date at the top will be revised accordingly. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-1">
              <p className="text-gray-600">
                Email: <a href="mailto:support@paayam.com" className="text-blue-600 hover:underline">support@paayam.com</a>
              </p>
              <p className="text-gray-600">
                WhatsApp: <a href="https://wa.me/2347040739828" className="text-blue-600 hover:underline">+234 704 073 9828</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
