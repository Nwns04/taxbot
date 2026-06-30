import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Thank You - TaxBotNaija";

    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-lime-50 via-white to-emerald-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full rounded-3xl bg-white p-8 md:p-12 text-center shadow-2xl border border-lime-100">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100 text-3xl">
          ✅
        </div>

        <p className="text-lime-700 font-semibold mb-3">
          Early Access Request Received
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4">
          You’re on the TaxBotNaija waitlist
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Thank you for joining early access. We’ll notify you when the secure
          TaxBotNaija web workspace opens.
        </p>

        <p className="text-sm text-gray-500 mb-8">
          You’ll be redirected back to the homepage shortly.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-lime-600 px-6 py-3 text-base font-semibold text-white hover:bg-lime-700 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;