import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      title: "Tax Calculations",
      description:
        "Estimate PAYE, VAT, business tax, personal income tax, and related Nigerian tax obligations.",
      icon: "🧮",
    },
    {
      title: "Records Workspace",
      description:
        "Organise receipts, invoices, payslips, bank statements, and tax documents in one secure place.",
      icon: "📁",
    },
    {
      title: "Bank Data Import",
      description:
        "Prepare for secure account connection and transaction classification through approved providers.",
      icon: "🏦",
    },
    {
      title: "Compliance Support",
      description:
        "Prepare reports, track reminders, review records, and request human support where needed.",
      icon: "✅",
    },
  ];

  return (
    <div className="bg-white">
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lime-50 via-white to-emerald-50 py-24">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-800 mb-6">
              Secure Nigerian tax workspace preparing for launch
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6 leading-tight">
              Simplify Nigerian Tax Compliance from{" "}
              <span className="text-lime-700">One Secure Workspace</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              TaxBotNaija helps individuals and businesses calculate taxes,
              organise records, import financial data, prepare reports, and stay
              compliant with Nigerian tax obligations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#early-access"
                className="inline-flex items-center justify-center rounded-xl bg-lime-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-lime-700 transition-colors"
              >
                Join Early Access
              </a>

              <Link
                to="/privacy"
                className="inline-flex items-center justify-center rounded-xl border border-lime-200 bg-white px-8 py-4 text-lg font-semibold text-lime-800 hover:bg-lime-50 transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lime-700 font-semibold mb-3">
              What TaxBotNaija is building
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4">
              A Web Interface for Tax Records, Reports, and Compliance
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are moving beyond chat flows into a structured web platform for
              Nigerian tax support, secure records, bank-data import, and guided
              compliance workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-lime-100 bg-gradient-to-b from-lime-50/70 to-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-3xl">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-950 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Early Access Form */}
      <section
        id="early-access"
        className="py-20 bg-gradient-to-br from-lime-950 via-emerald-950 to-gray-950"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <p className="text-lime-700 font-semibold mb-3">
                Early Access
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4">
                Join the TaxBotNaija Waitlist
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are preparing a secure web workspace for Nigerian tax
                calculations, records, bank-data import, reports, and compliance
                support. Join the waitlist and we will notify you when access
                opens.
              </p>
            </div>

            <form
              action="https://formsubmit.co/topekehinde@taxbotnaija.com"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New TaxBotNaija Early Access Signup"
              />

            <input
    type="hidden"
    name="_next"
    value="https://www.taxbotnaija.com/thank-you"
  />


              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for joining the TaxBotNaija early access list. We are preparing a secure web workspace for Nigerian tax calculations, records, bank-data import, reports, and compliance support. We will notify you when access opens."
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-lime-600 focus:ring-4 focus:ring-lime-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-lime-600 focus:ring-4 focus:ring-lime-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-lime-600 px-6 py-4 text-lg font-semibold text-white hover:bg-lime-700 transition-colors"
              >
                Join Waitlist
              </button>

              <p className="text-center text-sm text-gray-500">
                By joining the waitlist, you agree to receive early-access
                updates from TaxBotNaija. Your information will be processed
                according to our{" "}
                <Link to="/privacy" className="text-lime-700 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-lime-700 hover:underline">
                  Terms of Use
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-lime-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            TaxBotNaija is operated by TKO Motions. Built for Nigerian tax
            calculations, records, reporting, and compliance support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/privacy" className="text-gray-600 hover:text-lime-700">
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-gray-600 hover:text-lime-700">
              Terms of Use
            </Link>

            <a
              href="mailto:topekehinde@taxbotnaija.com"
              className="text-gray-600 hover:text-lime-700"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;