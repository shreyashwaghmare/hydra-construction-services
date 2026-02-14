export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to SheraTech</h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        We provide UGC, CGI, Ads, Google Ads, Meta Ads & Website Design services
        to help your brand roar online.
      </p>
      <div className="flex gap-4">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Explore Services
        </button>
        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
          Contact Us
        </button>
      </div>
    </main>
  );
}
