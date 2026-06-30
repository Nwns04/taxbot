import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - WhatsApp TaxBot / TaxBotNaija";
  }, []);

  const lastUpdated = "June 30, 2026";

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>

          <p className="text-gray-700 font-medium mb-2">
            NDPA 2023 and GAID 2025 Compliant Privacy Notice
          </p>

          <p className="text-gray-600 mb-8">
            Last updated: {lastUpdated}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>

            <p className="text-gray-600 mb-4">
              Welcome to <strong>WhatsApp TaxBot / TaxBotNaija</strong>, operated
              by <strong>TKO Motions</strong> (“TKO Motions”, “TaxBotNaija”,
              “WhatsApp TaxBot”, “we”, “us”, or “our”).
            </p>

            <p className="text-gray-600 mb-4">
              We provide digital tax support services, including Nigerian tax
              calculations, PAYE estimates, VAT records, business tax support,
              document uploads, tax report preparation, compliance reminders,
              transaction classification, bank-record import, and related
              services through WhatsApp, web, mobile, and other supported
              channels.
            </p>

            <p className="text-gray-600 mb-4">
              We are committed to protecting your privacy and processing your
              personal data in accordance with applicable data protection laws,
              including the <strong>Nigeria Data Protection Act 2023</strong>,
              the{" "}
              <strong>
                Nigeria Data Protection Act General Application and Implementation
                Directive 2025
              </strong>
              , and other applicable privacy, tax, accounting, financial,
              security, and consumer protection requirements.
            </p>

            <p className="text-gray-600 mb-4">
              By using our Service, creating an account, submitting information,
              uploading documents, connecting a bank account, importing financial
              records, using our WhatsApp assistant, purchasing a service, or
              interacting with our platform, you acknowledge that we will process
              your personal data as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Scope of This Policy
            </h2>

            <p className="text-gray-600 mb-4">
              This Privacy Policy applies to your use of:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>our WhatsApp tax assistant;</li>
              <li>our website and web app;</li>
              <li>our service catalog and checkout pages;</li>
              <li>tax calculation tools;</li>
              <li>upload and import features;</li>
              <li>business, VAT, PAYE, and personal tax workspaces;</li>
              <li>reports, reminders, subscriptions, and paid service fulfilment;</li>
              <li>bank-data import and open-banking connection features;</li>
              <li>customer support, WhatsApp support, email support, and ticketing channels;</li>
              <li>
                AI-assisted tax guidance, document processing, and retrieval-augmented
                generation features;
              </li>
              <li>
                any other digital service operated by TKO Motions under WhatsApp
                TaxBot or TaxBotNaija.
              </li>
            </ul>

            <p className="text-gray-600 mb-4">
              This Policy does not apply to third-party websites, government tax
              portals, payment platforms, bank portals, open-banking providers,
              messaging platforms, or services that we do not own or control.
              Those third parties may have their own privacy notices, policies,
              and terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Our Role as Data Controller
            </h2>

            <p className="text-gray-600 mb-4">
              For personal data that you provide directly to TaxBotNaija /
              WhatsApp TaxBot, <strong>TKO Motions acts as the data controller</strong>{" "}
              because we determine the purpose and means of processing your
              personal data.
            </p>

            <p className="text-gray-600 mb-4">
              Where we use authorised service providers, payment processors,
              cloud providers, AI/document processing providers, messaging
              providers, or financial-data providers to support the Service,
              those providers may act as data processors or independent
              controllers depending on the specific processing activity and legal
              arrangement.
            </p>

            <p className="text-gray-600 mb-4">
              Where we use <strong>Mono Technologies Nigeria Limited (“Mono”)</strong>{" "}
              or another authorised financial-data provider to retrieve bank or
              financial information at your request, the provider may process your
              data in accordance with its own applicable legal obligations and its
              agreement with us. We will only use such providers for authorised
              service purposes and in line with applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              A. Account and Contact Information
            </h3>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>your name;</li>
              <li>phone number;</li>
              <li>WhatsApp number;</li>
              <li>email address;</li>
              <li>user identifier;</li>
              <li>account login details;</li>
              <li>profile information;</li>
              <li>communication preferences;</li>
              <li>subscription or plan status;</li>
              <li>service history;</li>
              <li>account status and verification status.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              B. Tax and Financial Information You Provide
            </h3>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>income details;</li>
              <li>salary and PAYE information;</li>
              <li>employer details;</li>
              <li>pension, NHF, NHIS, rent, and other deduction details;</li>
              <li>business name and business type;</li>
              <li>Tax Identification Number;</li>
              <li>state of residence or business location;</li>
              <li>VAT registration status;</li>
              <li>PAYE registration status;</li>
              <li>business revenue;</li>
              <li>expenses;</li>
              <li>invoices;</li>
              <li>receipts;</li>
              <li>bank statement details;</li>
              <li>prior tax filing information;</li>
              <li>tax clearance or compliance-related information;</li>
              <li>business registration or compliance details;</li>
              <li>payroll information;</li>
              <li>
                other information you submit for tax calculations, reports,
                summaries, or compliance support.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              C. Uploaded Documents
            </h3>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>payslips;</li>
              <li>bank statements;</li>
              <li>receipts;</li>
              <li>invoices;</li>
              <li>CAC documents;</li>
              <li>TIN certificates;</li>
              <li>VAT certificates;</li>
              <li>payroll documents;</li>
              <li>previous tax returns;</li>
              <li>tax payment receipts;</li>
              <li>tax clearance certificates;</li>
              <li>correspondence with tax authorities;</li>
              <li>business records;</li>
              <li>
                other documents you upload for review, calculation, import,
                classification, or report preparation.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              D. Imported Records and Bank Data
            </h3>

            <p className="text-gray-600 mb-4">
              Where available and only with your permission, we may allow you to
              import records from supported third-party services, open-banking
              providers, financial-data providers, or financial institutions.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>bank transactions;</li>
              <li>account statement data;</li>
              <li>account information;</li>
              <li>account holder name;</li>
              <li>account number or masked account number;</li>
              <li>bank or financial institution name;</li>
              <li>account type;</li>
              <li>account balance;</li>
              <li>available balance;</li>
              <li>income records;</li>
              <li>expense records;</li>
              <li>invoice records;</li>
              <li>payment history;</li>
              <li>transaction descriptions;</li>
              <li>transaction amounts;</li>
              <li>transaction dates and times;</li>
              <li>transaction references;</li>
              <li>merchant or counterparty information;</li>
              <li>transaction categories;</li>
              <li>
                loan, credit, investment, insurance, or other financial information
                where supported and expressly authorised by you;
              </li>
              <li>
                other records needed to prepare tax summaries, reports,
                calculations, reconciliations, or service outputs.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Open Banking and Mono Integration
            </h2>

            <p className="text-gray-600 mb-4">
              Where you choose to connect your bank account or import financial
              records, we may use approved financial-data providers, including{" "}
              <strong>Mono Technologies Nigeria Limited (“Mono”)</strong>, to
              securely retrieve account information from your bank or financial
              institution.
            </p>

            <p className="text-gray-600 mb-4">
              We will only access your bank or financial account information
              after you take an affirmative action to connect your account and
              give consent through the relevant connection flow.
            </p>

            <p className="text-gray-600 mb-4">
              The information accessed through Mono or a similar provider may
              include:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>account name;</li>
              <li>account number or masked account number;</li>
              <li>bank name;</li>
              <li>account type;</li>
              <li>current balance;</li>
              <li>available balance;</li>
              <li>transaction history;</li>
              <li>transaction descriptions;</li>
              <li>transaction dates;</li>
              <li>transaction amounts;</li>
              <li>transaction references;</li>
              <li>transaction metadata;</li>
              <li>recurring inflows and outflows;</li>
              <li>income and expense records;</li>
              <li>account statement data;</li>
              <li>
                loan, investment, credit, insurance, or other supported financial
                information where expressly authorised by you.
              </li>
            </ul>

            <p className="text-gray-600 mb-4">
              We use this information only to provide the services you request,
              including tax calculations, tax summaries, transaction
              classification, income and expense review, business tax support,
              VAT/PAYE support, report preparation, compliance reminders,
              bookkeeping support, and related service fulfilment.
            </p>

            <p className="text-gray-600 mb-4">
              We do not sell your bank data.
            </p>

            <p className="text-gray-600 mb-4">
              You may revoke or withdraw your bank-data connection consent at any
              time through the available account settings, support channel, or by
              contacting us. Withdrawal of consent may limit our ability to
              provide services that depend on imported financial records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. How We Use Your Information
            </h2>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>to create and manage your account;</li>
              <li>to provide WhatsApp and web-based tax assistance;</li>
              <li>
                to calculate PAYE, personal income tax, VAT, business tax,
                withholding tax, and related estimates;
              </li>
              <li>to save calculation history;</li>
              <li>to generate tax summaries and reports;</li>
              <li>to process uploads and imported records;</li>
              <li>
                to classify expenses, invoices, receipts, income records, and bank
                transactions;
              </li>
              <li>
                to provide business, VAT, PAYE, and compliance workspaces;
              </li>
              <li>to create and fulfil paid service orders;</li>
              <li>to process payments and activate subscriptions;</li>
              <li>
                to send reminders through WhatsApp, email, or other selected
                channels;
              </li>
              <li>to provide human review where included in a service;</li>
              <li>to respond to customer support requests;</li>
              <li>to help users prepare records for tax compliance;</li>
              <li>to improve our tax knowledge base, FAQs, and bot performance;</li>
              <li>to monitor service quality and resolve errors;</li>
              <li>
                to detect errors, abuse, fraud, unauthorised access, or security
                incidents;
              </li>
              <li>
                to comply with legal, regulatory, tax, accounting, and security
                obligations;
              </li>
              <li>to protect our rights, users, systems, and the public.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. AI, RAG, and Automated Processing
            </h2>

            <p className="text-gray-600 mb-4">
              Our Service may use artificial intelligence, retrieval-augmented
              generation, document processing, classification tools, extraction
              tools, automation systems, and other assisted technologies to help
              answer questions, summarise tax information, extract data from
              documents, classify transactions, and guide users through tax
              workflows.
            </p>

            <p className="text-gray-600 mb-4">
              We use AI systems to support the Service, but tax outputs may still
              require human review depending on the service selected, the
              complexity of the matter, and the quality of information provided.
            </p>

            <p className="text-gray-600 mb-4">
              We do not treat AI-generated responses as final legal, accounting,
              tax, or regulatory advice unless they have been reviewed and
              approved through a qualified review process.
            </p>

            <p className="text-gray-600 mb-4">
              We do not use your identifiable tax records, uploaded documents,
              imported bank records, or private conversations to train public AI
              models without your consent.
            </p>

            <p className="text-gray-600 mb-4">
              We may use anonymised, aggregated, or de-identified data to improve
              our services, detect errors, improve FAQs, enhance security, and
              improve system performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Lawful Basis for Processing
            </h2>

            <p className="text-gray-600 mb-4">
              We process personal data only where we have a lawful basis to do so.
              Depending on the situation, our lawful basis may include:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>your consent;</li>
              <li>performance of a contract or requested service;</li>
              <li>compliance with legal obligations;</li>
              <li>
                our legitimate interest in operating, securing, and improving the
                Service;
              </li>
              <li>protection of vital interests where necessary;</li>
              <li>public interest where applicable;</li>
              <li>any other lawful basis permitted under applicable law.</li>
            </ul>

            <p className="text-gray-600 mb-4">
              Where we rely on consent, you may withdraw your consent at any time.
              Withdrawal of consent does not affect processing already completed
              before the withdrawal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Lawful Basis for Bank Data and Financial Data Processing
            </h2>

            <p className="text-gray-600 mb-4">
              For bank-data import, open-banking access, and financial-record
              processing, our lawful basis may include:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>
                your explicit consent where you connect a bank account or
                authorise import;
              </li>
              <li>
                performance of a contract where processing is necessary to provide
                a service you requested;
              </li>
              <li>
                compliance with legal, tax, accounting, regulatory, security, or
                fraud-prevention obligations;
              </li>
              <li>
                legitimate interest in securing, improving, and operating the
                Service, provided such interest does not override your privacy
                rights.
              </li>
            </ul>

            <p className="text-gray-600 mb-4">
              Where consent is required, we will request it separately and clearly
              before processing begins.
            </p>

            <p className="text-gray-600 mb-4">
              We may keep a record of your consent, including the date, time,
              channel, account connection status, and scope of the consent, for
              audit, security, and compliance purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. User Consent for Bank Connection
            </h2>

            <p className="text-gray-600 mb-4">
              Before connecting your bank account or importing bank records
              through Mono or another supported provider, we will present a
              consent notice explaining the type of data to be accessed and the
              purpose of the access.
            </p>

            <p className="text-gray-600 mb-4">
              By continuing with a bank connection, you authorise TaxBotNaija /
              TKO Motions to use Mono or another approved provider to securely
              access your selected bank account information, including account
              details, balances, and transaction history, for tax calculation,
              record import, transaction classification, report preparation, and
              related service fulfilment.
            </p>

            <p className="text-gray-600 mb-4">
              You may withdraw this consent at any time.
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
              11. Data Sharing
            </h2>

            <p className="text-gray-600 mb-4">
              We do not sell, rent, or trade your personal data.
            </p>

            <p className="text-gray-600 mb-4">
              We may share your information only where necessary, including with
              the categories below.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              A. Service Providers
            </h3>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>WhatsApp messaging providers;</li>
              <li>payment processors;</li>
              <li>cloud hosting providers;</li>
              <li>database and storage providers;</li>
              <li>email or notification providers;</li>
              <li>analytics and error-monitoring providers;</li>
              <li>AI, document processing, or automation providers;</li>
              <li>customer support tools;</li>
              <li>
                financial-data or bank-import providers, including Mono, where you
                authorise such import;
              </li>
              <li>security, fraud-prevention, compliance, or audit providers.</li>
            </ul>

            <p className="text-gray-600 mb-4">
              These providers are expected to process your data only for
              authorised purposes and to protect it appropriately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              B. Mono and Other Financial-Data Providers
            </h3>

            <p className="text-gray-600 mb-4">
              Where you authorise bank-data import, we may share relevant
              identifiers, connection information, consent records, and
              service-related information with Mono or another authorised provider
              to enable the connection, retrieve account data, maintain the
              connection, prevent fraud, support audit logs, and provide the
              requested service.
            </p>

            <p className="text-gray-600 mb-4">
              Mono or the relevant financial-data provider may also process
              certain information in accordance with its own privacy notice,
              platform terms, regulatory obligations, and security requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              C. Human Reviewers and Tax Support Partners
            </h3>

            <p className="text-gray-600 mb-4">
              Where you purchase a service that includes human review, filing
              support, bookkeeping support, tax support, accounting support, or
              professional assistance, relevant information may be made available
              to authorised reviewers, tax consultants, accountants, or support
              personnel for the purpose of fulfilling that service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              D. Legal, Regulatory, or Safety Reasons
            </h3>

            <p className="text-gray-600 mb-4">
              We may disclose information where required or permitted by law,
              regulation, court order, regulatory authority, supervisory
              authority, or legal process.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>prevent fraud or abuse;</li>
              <li>protect our systems;</li>
              <li>enforce our terms;</li>
              <li>
                protect the rights, safety, or property of users, TKO Motions, or
                the public;
              </li>
              <li>
                comply with tax, accounting, data protection, security, or legal
                obligations.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Third-Party Services
            </h2>

            <p className="text-gray-600 mb-4">
              Our Service may integrate with third-party services, including
              WhatsApp, payment processors, Mono, bank-import providers, cloud
              providers, analytics tools, tax-related platforms, AI tools, support
              tools, and notification providers.
            </p>

            <p className="text-gray-600 mb-4">
              Your use of those third-party services may also be governed by
              their own privacy policies and terms.
            </p>

            <p className="text-gray-600 mb-4">
              We are not responsible for the privacy practices of third-party
              platforms that we do not control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Official Tax Portals and Filing Support
            </h2>

            <p className="text-gray-600 mb-4">
              TaxBotNaija may help you prepare calculations, summaries, reports,
              schedules, reconciliations, and supporting documents for tax
              purposes.
            </p>

            <p className="text-gray-600 mb-4">
              Unless expressly stated in a specific paid service, we do not
              automatically submit your tax filings to any government tax portal on
              your behalf.
            </p>

            <p className="text-gray-600 mb-4">
              Where filing support is provided, it may require your explicit
              approval, additional verification, supporting documents, and, where
              necessary, human review.
            </p>

            <p className="text-gray-600 mb-4">
              We will not ask you to provide passwords to government tax portals
              through insecure channels. You should not share your tax portal
              passwords with the bot unless a secure and authorised process is
              provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Data Security
            </h2>

            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organisational measures to
              protect your personal data against accidental or unlawful
              destruction, loss, alteration, unauthorised disclosure, or
              unauthorised access.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>encryption in transit;</li>
              <li>encryption at rest where feasible;</li>
              <li>access controls;</li>
              <li>authentication controls;</li>
              <li>audit logs;</li>
              <li>secure cloud storage;</li>
              <li>staff and reviewer access restrictions;</li>
              <li>system monitoring;</li>
              <li>incident response procedures;</li>
              <li>secure development practices;</li>
              <li>data minimisation controls;</li>
              <li>periodic review of security practices.</li>
            </ul>

            <p className="text-gray-600 mb-4">
              However, no digital service is completely risk-free. You are
              responsible for keeping your login details, phone, email, WhatsApp
              account, device, and passwords secure.
            </p>

            <p className="text-gray-600 mb-4">
              You should not share sensitive credentials, bank PINs, OTPs, card
              PINs, or government portal passwords through WhatsApp, email, or any
              insecure channel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. Personal Data Breach Notification
            </h2>

            <p className="text-gray-600 mb-4">
              Where a personal data breach is likely to result in a risk to the
              rights and freedoms of individuals, we will notify the Nigeria Data
              Protection Commission within <strong>72 hours</strong> of becoming
              aware of the breach, where required by applicable law.
            </p>

            <p className="text-gray-600 mb-4">
              Where the breach is likely to result in a high risk to affected
              users, we will notify affected users without undue delay and provide
              information on the nature of the breach, likely impact, and
              recommended protective steps.
            </p>

            <p className="text-gray-600 mb-4">
              We may also notify other regulators, service providers, law
              enforcement agencies, or affected partners where required or
              appropriate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              16. International Data Transfers
            </h2>

            <p className="text-gray-600 mb-4">
              Your personal data may be processed or stored outside Nigeria where
              our service providers, cloud infrastructure, messaging providers,
              payment processors, AI providers, open-banking providers, or
              technology partners operate.
            </p>

            <p className="text-gray-600 mb-4">
              Where we transfer personal data internationally, we will take
              reasonable steps to ensure appropriate safeguards are in place. These
              safeguards may include contractual protections, security controls,
              transfer risk assessments, data processing agreements, and other
              measures required by applicable data protection law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              17. Data Retention
            </h2>

            <p className="text-gray-600 mb-4">
              We retain personal data only for as long as reasonably necessary for
              the purposes described in this Privacy Policy, unless a longer
              retention period is required or permitted by law.
            </p>

            <p className="text-gray-600 mb-4">
              We may retain:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>
                account data while your account is active and for a reasonable
                period after closure where required for legal, accounting,
                fraud-prevention, audit, or dispute-resolution purposes;
              </li>
              <li>
                tax calculations and service outputs so you can access your
                history and reports, unless you request deletion and deletion is
                legally permitted;
              </li>
              <li>
                uploaded documents for the service period, review period, or until
                deleted by you, subject to legal, tax, accounting, audit,
                fraud-prevention, or dispute-resolution requirements;
              </li>
              <li>
                imported bank records while your account or connection is active,
                or for as long as needed to provide the requested service, unless
                deletion is requested and legally permitted;
              </li>
              <li>
                payment records for accounting, tax, fraud-prevention, legal, and
                compliance purposes;
              </li>
              <li>
                chat logs for support, service quality, dispute handling, fraud
                prevention, and security;
              </li>
              <li>
                technical logs for security, fraud detection, diagnostics, and
                service improvement;
              </li>
              <li>
                de-identified or aggregated data for analytics and service
                improvement.
              </li>
            </ul>

            <p className="text-gray-600 mb-4">
              When data is no longer needed, we will securely delete, anonymise,
              or archive it in accordance with our retention practices and
              applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              18. Your Rights
            </h2>

            <p className="text-gray-600 mb-4">
              Subject to applicable law, you may have the right to:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>request access to your personal data;</li>
              <li>request correction of inaccurate or incomplete data;</li>
              <li>request deletion of your personal data in certain circumstances;</li>
              <li>request restriction of processing;</li>
              <li>object to processing;</li>
              <li>withdraw consent;</li>
              <li>request data portability where technically feasible;</li>
              <li>object to direct marketing;</li>
              <li>request information about automated processing;</li>
              <li>object to solely automated decisions where applicable;</li>
              <li>lodge a complaint with the relevant data protection authority.</li>
            </ul>

            <p className="text-gray-600 mb-4">
              To exercise your rights, contact us using the details in the
              “Contact Us” section.
            </p>

            <p className="text-gray-600 mb-4">
              We may need to verify your identity before fulfilling certain
              requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              19. NDPA and GAID 2025 Rights and Complaint Process
            </h2>

            <p className="text-gray-600 mb-4">
              Under applicable data protection law, including the Nigeria Data
              Protection Act 2023 and the Nigeria Data Protection Act General
              Application and Implementation Directive 2025, you may request to:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>access your personal data;</li>
              <li>correct inaccurate or incomplete data;</li>
              <li>delete your personal data where legally permitted;</li>
              <li>restrict or object to processing;</li>
              <li>withdraw consent;</li>
              <li>request data portability where technically feasible;</li>
              <li>object to automated decision-making where applicable;</li>
              <li>object to direct marketing;</li>
              <li>
                lodge a complaint with the{" "}
                <strong>Nigeria Data Protection Commission</strong>.
              </li>
            </ul>

            <p className="text-gray-600 mb-4">
              We will respond to valid data subject requests within the timeline
              required by applicable law. Where we cannot fulfil a request fully,
              we will explain the reason where legally permitted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              20. Your Choices and Controls
            </h2>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>update your profile information;</li>
              <li>grant or revoke tax data processing consent;</li>
              <li>connect or disconnect supported bank-data integrations;</li>
              <li>manage reminder preferences;</li>
              <li>choose WhatsApp, email, or other available notification channels;</li>
              <li>delete certain uploaded documents;</li>
              <li>clear your tax profile;</li>
              <li>request export of your data;</li>
              <li>
                request deletion of your account, subject to legal and operational
                requirements;
              </li>
              <li>opt out of promotional communications.</li>
            </ul>

            <p className="text-gray-600 mb-4">
              Some data may need to be retained for legal, tax, accounting,
              fraud-prevention, audit, security, or dispute-resolution purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              21. Marketing and Service Communications
            </h2>

            <p className="text-gray-600 mb-4">
              We may send you service-related messages, including:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>payment confirmations;</li>
              <li>service updates;</li>
              <li>calculation results;</li>
              <li>report notifications;</li>
              <li>compliance reminders;</li>
              <li>account alerts;</li>
              <li>security alerts;</li>
              <li>support messages;</li>
              <li>bank-connection or data-import notices.</li>
            </ul>

            <p className="text-gray-600 mb-4">
              Where permitted, we may also send product updates or promotional
              messages. You may opt out of promotional messages, but you may still
              receive important service, security, legal, account, or
              transaction-related communications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              22. Cookies and Tracking Technologies
            </h2>

            <p className="text-gray-600 mb-4">
              Our website may use cookies and similar technologies to support
              login, security, analytics, service improvement, fraud prevention,
              and user experience.
            </p>

            <p className="text-gray-600 mb-4">
              Strictly necessary cookies may be used to operate the Service.
              Non-essential cookies, including analytics, preference, or marketing
              cookies, will only be used where required consent has been obtained.
            </p>

            <p className="text-gray-600 mb-4">
              Users may accept, reject, or manage non-essential cookies through
              our cookie notice or browser settings.
            </p>

            <p className="text-gray-600 mb-4">
              We may use cookie and usage data to understand platform performance,
              improve navigation, detect abuse, and provide a better user
              experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              23. Data Protection Governance
            </h2>

            <p className="text-gray-600 mb-4">
              We are committed to maintaining privacy and data protection
              governance appropriate to the nature, scope, context, and purposes
              of our processing activities.
            </p>

            <p className="text-gray-600 mb-4">
              Where required by law, we may:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>maintain records of processing activities;</li>
              <li>conduct data protection impact assessments;</li>
              <li>appoint or designate a privacy contact or data protection officer;</li>
              <li>enter into data processing agreements with processors;</li>
              <li>review vendor and processor security practices;</li>
              <li>maintain breach response procedures;</li>
              <li>implement privacy-by-design and privacy-by-default controls;</li>
              <li>
                register or file with relevant data protection authorities where
                applicable.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              24. Children’s Privacy
            </h2>

            <p className="text-gray-600 mb-4">
              Our Service is not intended for children under the age of 16. We do
              not knowingly collect personal data from children under 16. If you
              believe a child has provided us with personal data, please contact
              us and we will take appropriate steps to delete such information
              where required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              25. Accuracy of Information You Provide
            </h2>

            <p className="text-gray-600 mb-4">
              Tax calculations, reports, summaries, classifications, and
              recommendations depend on the information you provide, upload, or
              authorise us to import.
            </p>

            <p className="text-gray-600 mb-4">
              You are responsible for ensuring that the information you submit is
              accurate, complete, and up to date.
            </p>

            <p className="text-gray-600 mb-4">
              We are not responsible for incorrect outputs caused by incomplete,
              inaccurate, outdated, or misleading information supplied by you,
              your bank, third-party sources, imported records, or uploaded
              documents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              26. Tax Disclaimer
            </h2>

            <p className="text-gray-600 mb-4">
              Our Service provides digital tax assistance, estimates, summaries,
              and workflow support.
            </p>

            <p className="text-gray-600 mb-4">
              Unless expressly included in a paid human-review or professional
              service, information provided by the bot is for general guidance and
              support purposes only and should not be treated as final legal, tax,
              accounting, or regulatory advice.
            </p>

            <p className="text-gray-600 mb-4">
              You should seek professional advice for complex tax matters,
              disputes, audits, official filings, penalties, or regulatory issues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              27. Changes to This Privacy Policy
            </h2>

            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our services, technology, legal obligations, regulatory
              requirements, or data practices.
            </p>

            <p className="text-gray-600 mb-4">
              When we update this Policy, we will revise the “Last updated” date
              above. Where required, we may notify you through our website, app,
              WhatsApp, email, dashboard notice, or other appropriate channels.
            </p>

            <p className="text-gray-600 mb-4">
              Your continued use of the Service after an updated Privacy Policy
              becomes effective means you acknowledge the updated Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              28. Contact Us
            </h2>

            <p className="text-gray-600 mb-4">
              If you have any questions, concerns, complaints, or requests
              regarding this Privacy Policy or our data practices, contact us at:
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

            <p className="text-gray-600 mt-4">
              We may request information to verify your identity before processing
              privacy, access, correction, deletion, portability, objection,
              restriction, or consent-withdrawal requests.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;