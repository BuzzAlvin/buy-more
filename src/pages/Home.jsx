import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { QrCode, Archive, NotificationsActive } from "@mui/icons-material";
import { popular } from "../components/mocks/products.mock";
import Cards from "../components/product/Cards";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="mt-14.5 md:mt-16 lg:mt-23 flex flex-col grow min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:h-125 sm:h-100 h-95 relative"
      >
        <img
          src="../images/iphone17.jpg"
          alt="Hero section image"
          className="absolute object-cover w-full h-full bg-transparent"
          loading="lazy"
        />
        <div className="absolute bg-black/55 inset-0 flex flex-col justify-center items-start">
          <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 flex flex-col items-start">
            <h2 className="font-bold text-white lg:text-4xl md:text-3xl sm:text-2xl text-lg mb-4 tracking-tight">
              IPHONE 17 PRO MAX
            </h2>
            <p className="lg:text-xl sm:text-lg text-sm w-1/2 text-gray-200 mb-2">
              The pro camera system takes low-light photography to the next
              level - with an even bigger jump on iPhone 12 Pro Max.
            </p>
            <div className="w-22 sm:w-30 lg:w-34">
              <Button to="/store">View More</Button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 px-4 sm:px-6 sm:py-10 lg:py-14"
      >
        <div className="flex lg:mb-8 sm:mb-6 mb-4">
          <span className="h-px bg-gray-600 flex-1"></span>
        </div>
        <h2 className="font-bold tracking-tight lg:text-2xl sm:text-xl text-gray-800 lg:mb-8 sm:mb-4 mb-2">
          Bestselling
        </h2>
        <div className="flex items-center justify-center text-gray-500 py-12">
          <p className="lg:text-md sm:text-sm text-xs">
            No products available in this category.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full lg:h-125 sm:h-100 h-95 relative"
      >
        <img
          src="../images/junseong-lee-WKMOPVvlLvo-unsplash.jpg"
          alt="Hero section image"
          className="absolute object-cover w-full h-full bg-transparent"
          loading="lazy"
        />
        <div className="absolute bg-black/55 inset-0 flex flex-col justify-center items-center">
          <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 flex flex-col items-start">
            <h2 className="font-bold text-white lg:text-4xl md:text-3xl sm:text-2xl text-lg mb-4 tracking-tight">
              Discover The Pleasures Of Shopping
            </h2>
            <p className="lg:text-xl sm:text-lg text-sm text-gray-200 mb-4">
              Explore our curated selection of high-quality products designed to
              enhance your everyday life.{" "}
            </p>
            <div className="w-34 sm:w-46 lg:w-50">
              <Button to="/store">Shop New Arrivals</Button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="sm:py-8 py-12 px-8 font-semibold "
      >
        <p className="lg:text-2xl sm:text-xl text-md">Popular</p>
        <div className=" overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[45%] lg:auto-cols-[25%] lg:gap-4 sm:gap-2.5 gap-2 sm:mt-4 mt-2 ">
            {popular.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-40 sm:min-w-50 lg:min-w-60"
              >
                <Cards
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                  item={item}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="sm:mt-20 mt-12 bg-gray-50 py-12"
      >
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="font-bold sm:text-lg lg:text-xl text-md text-gray-700">
              Tomorrow at the Door
            </h3>
            <span className="text-6xl text-emerald-600">
              <NotificationsActive fontSize="inherit" />
            </span>
            <p className="sm:text-base text-xs text-gray-600 max-w-75 sm:ps-4">
              Get it the next day with Tomorrow at the Door!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="font-bold sm:text-lg lg:text-xl text-md text-gray-700">
              Secure Shopping
            </h3>
            <span className="text-6xl text-emerald-600">
              <Archive fontSize="inherit" />
            </span>
            <p className="sm:text-base text-xs text-gray-600 max-w-75 sm:ps-4">
              Save your payment and address information and shop safely.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="font-bold sm:text-lg lg:text-xl text-md text-gray-700">
              Shopping Mall in Your Pocket
            </h3>
            <span className="text-6xl text-emerald-600">
              <QrCode fontSize="inherit" />
            </span>
            <p className="sm:text-base text-xs text-gray-600 max-w-75 sm:ps-4">
              Enjoy safe shopping wherever you want.
            </p>
          </div>
        </div>
      </motion.section>
      <Footer />
      <p className="text-center text-gray-600 sm:text-sm text-xs sm:py-4 py-2">
        Built with ❤ by Buzzalvin
      </p>
    </main>
  );
}
