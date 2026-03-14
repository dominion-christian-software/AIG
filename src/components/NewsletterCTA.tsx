"use client";

export default function NewsletterCTA() {
  return (
    <section className="bg-aig-teal text-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Stay Informed with Answers
            </h2>
            <p className="text-white/80 mb-2">
              Get the latest articles, videos, and event updates delivered to your inbox.
              Plus, receive a free audiobook when you sign up!
            </p>
            <p className="text-sm text-aig-gold font-semibold">
              Free Audiobook: &ldquo;The Lie: Evolution/Millions of Years&rdquo;
            </p>
          </div>
          <div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-aig-cyan"
              />
              <button
                type="submit"
                className="bg-aig-gold text-aig-dark font-bold px-6 py-3 rounded hover:bg-yellow-400 transition-colors whitespace-nowrap"
              >
                Sign Up Free
              </button>
            </form>
            <p className="text-xs text-white/50 mt-2">
              By signing up, you agree to receive email communications from Answers in Genesis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
