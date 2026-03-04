import { useEffect, useState } from "react";
import StoreFilter from "../components/filter/StoreFilter";
import Cards from "../components/product/Cards";
import Footer from "../components/layout/Footer";
import { products } from "../components/mocks/products.mock";

export default function Store() {
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Most Popular");
  const [appliedSort, setAppliedSort] = useState("Most Popular");
  const [appliedCategory, setAppliedCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [appliedCategory, appliedSort, search]);

  const filteredProducts = products
    .filter((product) => {
      //Category filter
      const matchesCategory =
        appliedCategory === "All Categories"
          ? true
          : product.category.toLowerCase() === appliedCategory.toLowerCase();

      //Search filter
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (appliedSort === "Price: Low to High") return a.price - b.price;
      if (appliedSort === "Price: High to Low") return b.price - a.price;
      if (appliedSort === "Best Rating") return b.rating - a.rating;
      if (appliedSort === "Newest") return b.timestamp - a.timestamp;
      return 0;
    });

  function applyFilter() {
    setAppliedCategory(category);
    setAppliedSort(sort);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  return (
    <main className="mt-14.5 md:mt-16 lg:mt-23 flex flex-col grow min-h-screen">
      <section className="sm:mt-10 md:mt-16 mt-6 px-5 md:px-10 lg:px-24 pt-10 md:pb-20 pb-10">
        <StoreFilter
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
          applyFilter={applyFilter}
        />
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-4 sm:gap-2.5 gap-2">
          {currentProducts.map((item) => (
            <Cards
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
              rating={item.rating}
              stock={item.stock}
              item={item}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-center mt-4 sm:space-x-4 space-x-2">
          {Array.from(
            { length: Math.ceil(filteredProducts.length / productsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`sm:px-3 sm:py-1 px-1.5 border rounded ${currentPage === i + 1 ? "bg-emerald-700 text-white" : "bg-white text-emerald-800 hover:bg-gray-200"}`}
              >
                {i + 1}
              </button>
            ),
          )}
        </div>
      </section>
      <Footer />
      <p className="text-center text-gray-600 sm:text-sm text-xs sm:py-4 py-2">
        Built with ❤ by Buzzalvin
      </p>
    </main>
  );
}
