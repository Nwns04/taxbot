import React, { useEffect } from "react";

const TermsOfUse = () => {
  useEffect(() => {
    document.title = "Terms of Use - WhatsApp TaxBot / TaxBotNaija";
  }, []);

  const lastUpdated = "June 30, 2026";

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Terms of Use
          </h1>

          <p className="text-gray-700 font-medium mb-2">
            WhatsApp TaxBot / TaxBotNaija Service Terms
          </p>

          <p className="text-gray-600 mb-8">
            Last updated: {lastUpdated}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-600 mb-4">
              These Terms of Use govern your access to and use of{" "}
              <strong>WhatsApp TaxBot / TaxBotNaija</strong>, operated by{" "}
              <strong>TKO Motions</strong> (“TKO Motions”, “TaxBotNaija”,
              “WhatsApp TaxBot”, “we”, “us”, or “our”).
            </p>

            <p className="text-gray-600 mb-4">
              By accessing or using our website, web app, WhatsApp assistant,
              tax tools, upload features, bank-data import features, paid
              services, reports, or any related service, you confirm that you
              have read, understood, and agree to be bound by these Terms of Use.
            </p>

            <p className="text-gray-600 mb-4">
              If you do not agree to these Terms, you should not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Service Description
            </h2>

            <p className="text-gray-600 mb-4">
              TaxBotNaija provides digital tax support services, including
              Nigerian tax calculations, PAYE estimates, VAT records, business
              tax support, document uploads, bank-record import, transaction
              classification, tax report preparation, reminders, service orders,
              and related support through WhatsApp, web, mobile, and other
              supported channels.
            </p>

            <p className="text-gray-600 mb-4">
              The Service may include automated tools, AI-assisted workflows,
              retrieval-augmented generation, document processing, transaction
              classification, tax calculators, and human review where included
              in a selected paid service.
            </p>

            <p className="text-gray-600 mb-4">
              Unless expressly stated in a specific paid service, TaxBotNaija
              does not automatically submit official tax filings to government
              tax portals on your behalf.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Eligibility
            </h2>

            <p className="text-gray-600 mb-4">
              You must be at least 16 years old to use the Service. By using the
              Service, you represent that you have the legal capacity to enter
              into these Terms and to provide the information required for the
              services you request.
            </p>

            <p className="text-gray-600 mb-4">
              If you use the Service on behalf of a business, company, or other
              organisation, you represent that you are authorised to act on its
              behalf and to bind that organisation to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. User Responsibilities
            </h2>

            <p className="text-gray-600 mb-4">
              You agree to:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>provide accurate, complete, and up-to-date information;</li>
              <li>use the Service only for lawful purposes;</li>
              <li>comply with applicable tax, privacy, financial, and regulatory laws;</li>
              <li>maintain the security of your WhatsApp, email, device, and account access;</li>
              <li>review calculations, summaries, reports, and outputs before relying on them;</li>
              <li>seek professional advice for complex tax, accounting, legal, or regulatory matters;</li>
              <li>not misuse, interfere with, overload, reverse engineer, exploit, or attack the Service;</li>
              <li>not submit false, misleading, fraudulent, unlawful, or unauthorised information;</li>
              <li>not upload malicious files, scripts, or content that may harm our systems or users;</li>
              <li>not impersonate another person, business, or government authority.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Accuracy of Information You Provide
            </h2>

            <p className="text-gray-600 mb-4">
              Tax calculations, reports, summaries, classifications, and
              recommendations depend on the information you provide, upload, or
              authorise us to import.
            </p>

            <p className="text-gray-600 mb-4">
              You are responsible for ensuring that all income, expense, payroll,
              VAT, PAYE, business, bank, and tax information you submit is
              accurate, complete, and up to date.
            </p>

            <p className="text-gray-600 mb-4">
              We are not responsible for incorrect outputs caused by incomplete,
              inaccurate, outdated, misleading, or unauthorised information
              supplied by you, your bank, third-party sources, uploaded
              documents, or imported records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Tax Disclaimer
            </h2>

            <p className="text-gray-600 mb-4">
              TaxBotNaija provides digital tax assistance, estimates, summaries,
              calculations, workflow support, and general guidance.
            </p>

            <p className="text-gray-600 mb-4">
              Unless expressly included in a paid human-review or professional
              service, information provided by the Service should not be treated
              as final legal, tax, accounting, financial, or regulatory advice.
            </p>

            <p className="text-gray-600 mb-4">
              You should consult a qualified tax consultant, accountant, lawyer,
              or relevant government authority for complex tax matters, audits,
              official filings, penalties, disputes, investigations, or
              regulatory issues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. AI and Automated Tools
            </h2>

            <p className="text-gray-600 mb-4">
              The Service may use artificial intelligence, retrieval-augmented
              generation, document processing, transaction classification,
              extraction tools, and automation systems to help answer questions,
              generate summaries, classify records, and guide workflows.
            </p>

            <p className="text-gray-600 mb-4">
              AI-assisted outputs may be incomplete, inaccurate, or dependent on
              the quality of the information provided. You are responsible for
              reviewing outputs before relying on them.
            </p>

            <p className="text-gray-600 mb-4">
              We do not treat AI-generated responses as final legal, accounting,
              tax, or regulatory advice unless they have been reviewed and
              approved through a qualified review process where that service is
              specifically included.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Bank Data Import and Mono Integration
            </h2>

            <p className="text-gray-600 mb-4">
              Where available, you may choose to connect your bank account or
              import financial records using approved financial-data providers,
              including <strong>Mono Technologies Nigeria Limited (“Mono”)</strong>.
            </p>

            <p className="text-gray-600 mb-4">
              Bank-data import is optional and requires your consent. We will
              only access bank or financial account information after you take an
              affirmative action to connect your account and authorise the
              connection through the relevant provider flow.
            </p>

            <p className="text-gray-600 mb-4">
              Information accessed through Mono or another supported provider may
              include account details, account name, account number or masked
              account number, bank name, account type, balance, available
              balance, transaction history, transaction descriptions, transaction
              amounts, transaction dates, transaction references, transaction
              metadata, income records, expense records, and other supported
              financial information where expressly authorised by you.
            </p>

            <p className="text-gray-600 mb-4">
              We use imported bank data only to provide the services you request,
              including tax calculations, transaction classification, income and
              expense review, report preparation, compliance reminders,
              bookkeeping support, and related service fulfilment.
            </p>

            <p className="text-gray-600 mb-4">
              You may withdraw or revoke your bank-data connection consent at
              any time through the available account settings, support channel,
              or by contacting us. Withdrawal of consent may limit our ability
              to provide services that depend on imported financial records.
            </p>

            <p className="text-gray-600 mb-4">
              We will not ask you to send your bank password, ATM PIN, card PIN,
              one-time password, or sensitive banking credentials through
              WhatsApp, email, chat, or any insecure channel. Where bank
              authentication is required, it should occur through the authorised
              bank, Mono, or provider connection flow.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Consent for Bank Connection
            </h2>

            <p className="text-gray-600 mb-4">
              By continuing with a bank connection, you authorise TaxBotNaija /
              TKO Motions to use Mono or another approved provider to securely
              access your selected bank account information, including account
              details, balances, and transaction history, for tax calculation,
              record import, transaction classification, report preparation, and
              related service fulfilment.
            </p>

            <p className="text-gray-600 mb-4">
              You confirm that any bank account or financial record you connect
              belongs to you or that you have lawful authority to connect it.
            </p>

            <p className="text-gray-600 mb-4">
              You must not connect another person’s bank account, company
              account, or financial record without proper authority.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Payments, Plans, and Paid Services
            </h2>

            <p className="text-gray-600 mb-4">
              Some features, reports, reviews, subscriptions, calculations, or
              service orders may require payment.
            </p>

            <p className="text-gray-600 mb-4">
              Payments may be processed through third-party payment providers
              such as Paystack or other approved payment partners. We do not
              store full card details.
            </p>

            <p className="text-gray-600 mb-4">
              Prices, plan limits, service scopes, and availability may change
              from time to time. Any applicable fees will be shown before you
              complete payment.
            </p>

            <p className="text-gray-600 mb-4">
              Unless otherwise stated, payments for completed digital services,
              generated reports, completed reviews, or fulfilled service orders
              may be non-refundable. Where a refund is legally required or
              approved by us, it may be processed through the original payment
              channel or another supported method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Uploads and Documents
            </h2>

            <p className="text-gray-600 mb-4">
              You may be able to upload documents such as payslips, bank
              statements, invoices, receipts, CAC documents, TIN certificates,
              VAT certificates, payroll documents, previous tax returns, and
              other records.
            </p>

            <p className="text-gray-600 mb-4">
              You confirm that you have the legal right to upload and share any
              document you provide to the Service.
            </p>

            <p className="text-gray-600 mb-4">
              You must not upload unlawful, fraudulent, misleading, malicious,
              unauthorised, or third-party documents that you do not have the
              right to use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Official Tax Portals and Filing Support
            </h2>

            <p className="text-gray-600 mb-4">
              TaxBotNaija may help you prepare calculations, summaries, reports,
              schedules, reconciliations, and supporting documents for tax
              purposes.
            </p>

            <p className="text-gray-600 mb-4">
              Unless expressly stated in a specific paid service, we do not
              automatically submit your tax filings to any government tax portal
              on your behalf.
            </p>

            <p className="text-gray-600 mb-4">
              Where filing support is provided, it may require your explicit
              approval, additional verification, supporting documents, and, where
              necessary, human review.
            </p>

            <p className="text-gray-600 mb-4">
              You should not share government tax portal passwords, bank
              passwords, PINs, OTPs, or other sensitive credentials through
              insecure channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Third-Party Services
            </h2>

            <p className="text-gray-600 mb-4">
              The Service may integrate with third-party services, including
              WhatsApp, payment processors, Mono, bank-import providers, cloud
              providers, analytics tools, AI tools, support tools, and tax-related
              platforms.
            </p>

            <p className="text-gray-600 mb-4">
              Your use of those third-party services may also be governed by
              their own terms, privacy policies, security rules, and operational
              requirements.
            </p>

            <p className="text-gray-600 mb-4">
              We are not responsible for third-party platforms that we do not
              own or control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Privacy and Data Protection
            </h2>

            <p className="text-gray-600 mb-4">
              Our collection and use of personal data is described in our Privacy
              Policy.
            </p>

            <p className="text-gray-600 mb-4">
              By using the Service, you acknowledge that we may collect, use,
              store, share, retain, and otherwise process personal data in
              accordance with our Privacy Policy, the Nigeria Data Protection Act
              2023, the Nigeria Data Protection Act General Application and
              Implementation Directive 2025, and other applicable laws.
            </p>

            <p className="text-gray-600 mb-4">
              You are responsible for ensuring that any personal data you provide
              about another person or business is provided lawfully and with any
              required consent or authority.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. Prohibited Uses
            </h2>

            <p className="text-gray-600 mb-4">
              You must not use the Service to:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>commit fraud or assist fraudulent activity;</li>
              <li>submit false, forged, or misleading tax or financial records;</li>
              <li>evade taxes or assist unlawful tax evasion;</li>
              <li>violate another person’s privacy or data rights;</li>
              <li>connect unauthorised bank accounts or financial records;</li>
              <li>upload malware, viruses, or harmful content;</li>
              <li>attack, overload, scrape, reverse engineer, or disrupt the Service;</li>
              <li>impersonate another person, business, authority, or institution;</li>
              <li>use the Service for unlawful, abusive, or unauthorised purposes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              16. Intellectual Property
            </h2>

            <p className="text-gray-600 mb-4">
              All content, software, features, workflows, designs, branding,
              text, graphics, interfaces, documentation, databases, tax logic,
              calculators, and functionality provided through the Service are
              owned by us or our licensors and are protected by applicable
              intellectual property laws.
            </p>

            <p className="text-gray-600 mb-4">
              You may not copy, reproduce, modify, distribute, sell, lease,
              reverse engineer, or create derivative works from any part of the
              Service except where expressly permitted by us in writing or by
              applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              17. Service Availability
            </h2>

            <p className="text-gray-600 mb-4">
              We aim to provide a reliable Service, but we do not guarantee that
              the Service will always be available, uninterrupted, error-free,
              secure, or compatible with every device, browser, WhatsApp version,
              bank, provider, or third-party platform.
            </p>

            <p className="text-gray-600 mb-4">
              Service availability may be affected by maintenance, updates,
              outages, provider downtime, internet issues, bank system
              availability, WhatsApp limitations, payment provider issues, or
              events beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              18. Service Modifications
            </h2>

            <p className="text-gray-600 mb-4">
              We may modify, suspend, replace, limit, or discontinue any part of
              the Service at any time, including features, plans, pricing,
              workflows, supported banks, integrations, reports, calculations,
              or support channels.
            </p>

            <p className="text-gray-600 mb-4">
              We may also update these Terms from time to time. The updated
              version will be posted on our website or app with the revised
              “Last updated” date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              19. Suspension and Termination
            </h2>

            <p className="text-gray-600 mb-4">
              We may suspend, restrict, or terminate your access to the Service
              if we reasonably believe that you have violated these Terms,
              misused the Service, provided false information, created security
              risk, violated applicable law, or used the Service in a way that may
              harm us, other users, third parties, or public authorities.
            </p>

            <p className="text-gray-600 mb-4">
              You may stop using the Service at any time. You may also contact
              us to request account deletion, subject to legal, accounting, tax,
              fraud-prevention, security, or dispute-resolution requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              20. Disclaimer of Warranties
            </h2>

            <p className="text-gray-600 mb-4">
              The Service is provided on an “as is” and “as available” basis.
              To the maximum extent permitted by law, we disclaim all warranties,
              whether express, implied, statutory, or otherwise, including
              warranties of accuracy, reliability, merchantability, fitness for a
              particular purpose, non-infringement, availability, or error-free
              operation.
            </p>

            <p className="text-gray-600 mb-4">
              We do not guarantee that calculations, classifications, summaries,
              reports, or AI-assisted outputs will be complete, correct, or
              suitable for every tax situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              21. Limitation of Liability
            </h2>

            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, TKO Motions, TaxBotNaija,
              WhatsApp TaxBot, our directors, employees, contractors, partners,
              service providers, and affiliates shall not be liable for indirect,
              incidental, special, consequential, exemplary, or punitive damages
              arising from or related to your use of, or inability to use, the
              Service.
            </p>

            <p className="text-gray-600 mb-4">
              This includes loss of profits, loss of data, loss of business,
              tax penalties, filing errors, regulatory consequences, bank
              connection issues, third-party service failures, or reliance on
              inaccurate information supplied by you or third parties, except
              where liability cannot be excluded under applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              22. Indemnity
            </h2>

            <p className="text-gray-600 mb-4">
              You agree to indemnify and hold harmless TKO Motions, TaxBotNaija,
              WhatsApp TaxBot, our directors, employees, contractors, partners,
              service providers, and affiliates from claims, losses, damages,
              liabilities, penalties, costs, or expenses arising from your misuse
              of the Service, violation of these Terms, violation of law,
              unauthorised use of third-party data, false information, fraudulent
              documents, or infringement of another person’s rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              23. Governing Law
            </h2>

            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of the Federal Republic of Nigeria, without regard to
              conflict of law principles.
            </p>

            <p className="text-gray-600 mb-4">
              Any dispute arising from or related to these Terms or the Service
              shall first be addressed through good-faith discussions. Where the
              dispute cannot be resolved amicably, it may be submitted to the
              competent courts of Nigeria, subject to applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              24. Changes to These Terms
            </h2>

            <p className="text-gray-600 mb-4">
              We may update these Terms from time to time to reflect changes in
              our services, technology, legal obligations, regulatory
              requirements, pricing, integrations, or business practices.
            </p>

            <p className="text-gray-600 mb-4">
              When we update these Terms, we will revise the “Last updated” date
              above. Where required, we may notify you through our website, app,
              WhatsApp, email, dashboard notice, or other appropriate channels.
            </p>

            <p className="text-gray-600 mb-4">
              Your continued use of the Service after updated Terms become
              effective means you accept the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              25. Contact Information
            </h2>

            <p className="text-gray-600 mb-4">
              For questions about these Terms of Use, the Service, privacy
              requests, or support issues, please contact us:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-600">
                <strong>TKO Motions</strong>
              </p>

              <p className="text-gray-600">
                Service: WhatsApp TaxBot / TaxBotNaija
              </p>

              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:support@taxbotnaija.com"
                  className="text-blue-600 hover:underline"
                >
                  support@taxbotnaija.com
                </a>
              </p>

              <p className="text-gray-600">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/2347040739828"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  +234 704 073 9828
                </a>
              </p>

              <p className="text-gray-600">
                For privacy-specific requests, please use the subject line:{" "}
                <strong>Privacy Request — TaxBotNaija</strong>
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfUse;