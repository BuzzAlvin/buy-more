import Footer from "../components/layout/Footer";

export default function Blog() {
  return (
    <main className="mt-14.5 md:mt-16 lg:mt-23">
      <section className="bg-yellow-500 py-16 md:py-26 lg:py-36">
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            No Blog Posts Available
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl text-gray-700">
            We couldn't find any blog posts matching your criteria. Please try
            different keywords or select a different tag.
          </p>
        </div>
      </section>
      <Footer />
      <p className="text-center text-gray-600 sm:text-sm text-xs sm:py-4 py-2">
        Built with ❤ by Buzzalvin
      </p>
    </main>
  );
}
