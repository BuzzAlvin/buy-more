import {
  ShieldOutlined,
  LocalShippingOutlined,
  Inventory2Outlined,
  TimerOutlined,
  SupportAgentOutlined,
  HeadsetMicOutlined,
  ChatBubbleOutlineSharp,
  CallOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="mt-14.5 md:mt-16 lg:mt-23 flex flex-col grow min-h-screen">
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full lg:h-125 sm:h-100 h-95 relative"
      >
        <img
          src="../images/junseong-lee-WKMOPVvlLvo-unsplash.jpg"
          className="absolute object-cover h-full w-full bg-transparent"
          alt="about page image"
          loading="lazy"
        />
        <div className="bg-black/55 absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
              We started BuyMore with a simple idea -
            </h1>
            <p className="text-xl text-gray-100 font-semibold max-w-2xl mx-auto">
              Shopping online should feel easy, intentional, and worth your
              time.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 lg:py-20 lg:px-16 sm:py-16 sm:px-12 py-12 px-8"
      >
        <p className=" flex flex-col flex-1 items-center justify-center lg:text-2xl md:text-lg text-md text-gray-700">
          In a world full of clutter and endless options, we focus on curating
          products that are useful, well-made, and thoughtfully chosen. Every
          item we offer is selected with real life in mind — things that solve
          everyday problems, elevate routines, or simply make life a little
          better. We believe good products don’t need to be complicated or
          overpriced. They just need to work, last, and deliver real value.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 pt-16 lg:gap-12 md:gap-8 gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mb-1.5">
              Quality
            </h3>
            <p className="lg:text-xl md:text-lg text-md text-gray-600">
              All fewer products, chosen carefully
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mb-1.5">
              Customer-first thinking
            </h3>
            <p className="lg:text-xl md:text-lg text-md text-gray-600">
              {" "}
              Your experience matters as much as the product
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl mb-3">🛠</div>
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mb-1.5">
              Continuous improvement
            </h3>
            <p className="lg:text-xl md:text-lg text-md text-gray-600">
              {" "}
              We listen, learn, and get better
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-[60%_40%] grid-cols-1 gap-6 py-16 sm:py-20 sm:px-8 px-4"
      >
        <div className="flex flex-col items-start justify-center sm:items-center  order-2 md:order-1">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 mb-6">
            Discover the pleasures of shopping
          </h2>
          <p className="lg:text-xl sm:text-lg text-base max-w-prose text-gray-700">
            Explore our curated selection of high-quality products designed to
            enhance your everyday life.
          </p>
          <div className="w-full sm:w-40 md:w-50 mt-4">
            <Button variant="learnmore" children="Learn More" />
          </div>
        </div>
        <div className="md:order-2 order-1">
          <img
            src="../images/vitaly-gariev-y1u8bcBPnIU-unsplash.jpg"
            alt="women with shopping bags"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 py-14"
      >
        <h2 className="text-center md:text-3xl text-xl  font-bold text-gray-800 mb-8">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-10 md:mt-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:py-18 lg:px-10 sm:py-10 sm:px-6 py-8 px-4 shadow-sm hover:shadow-xl rounded-lg"
          >
            <span>
              <ShieldOutlined
                className=" text-emerald-500 mb-3"
                fontSize="large"
              />
            </span>
            <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-3">
              Premium Quality
            </h3>
            <p className="lg:text-xl sm:text-lg text-base max-w-prose text-gray-700">
              We carefully select and test all products to ensure the highest
              standards of quality and safety.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:py-18 lg:px-10 sm:py-10 sm:px-6 py-8 px-4 shadow-sm hover:shadow-xl rounded-lg"
          >
            <span>
              <LocalShippingOutlined
                className="text-2xl mb-3 text-emerald-500"
                fontSize="large"
              />
            </span>
            <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-3">
              Discreet Shipping
            </h3>
            <p className="lg:text-xl sm:text-lg text-base max-w-prose text-gray-700">
              Your privacy matters. All orders are shipped in plain, unmarked
              packaging.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:py-18 lg:px-10 sm:py-10 sm:px-6 py-8 px-4 shadow-sm hover:shadow-xl rounded-lg"
          >
            <span>
              <Inventory2Outlined
                className="text-2xl text-emerald-500 mb-3"
                fontSize="large"
              />
            </span>
            <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-3">
              Satisfaction Guaranteed
            </h3>
            <p className="lg:text-xl sm:text-lg text-base max-w-prose text-gray-700">
              We stand behind our products with a comprehensive satisfaction
              guarantee.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:py-18 lg:px-10 sm:py-10 sm:px-6 py-8 px-4 shadow-sm hover:shadow-xl rounded-lg"
          >
            <span>
              <TimerOutlined
                className="text-2xl text-emerald-500 mb-3"
                fontSize="large"
              />
            </span>
            <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-3">
              Fast Delivery
            </h3>
            <p className="lg:text-xl sm:text-lg text-base max-w-prose text-gray-700">
              Quick processing and shipping to get your orders to you as soon as
              possible.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:py-18 lg:px-10 sm:py-10 sm:px-6 py-8 px-4 shadow-sm hover:shadow-xl rounded-lg"
          >
            <span>
              <SupportAgentOutlined
                className="text-2xl  mb-3 text-emerald-500"
                fontSize="large"
              />
            </span>
            <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-3">
              Expert Support
            </h3>
            <p className="lg:text-xl sm:text-lg text-base max-w-prose text-gray-700">
              Our knowledgeable team is here to help you make informed
              decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:py-18 lg:px-10 sm:py-10 sm:px-6 py-8 px-4 shadow-sm hover:shadow-xl rounded-lg"
          >
            <span>
              <HeadsetMicOutlined
                className="text-2xl text-emerald-500 mb-3"
                fontSize="large"
              />
            </span>
            <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-3">
              Customer Care
            </h3>
            <p className="lg:text-xl sm:text-lg text-base max-w-prose text-gray-700">
              We prioritize your satisfaction and well-being above all else.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:px-24 px-4 mx-auto">
          <div className="py-8 md:py-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center text-center sm:p-6 p-4">
                <span className="bg-emerald-100 mx-auto rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  <ChatBubbleOutlineSharp className="text-emerald-800" />
                </span>
                <h3 className="text-center font-semibold md:text-2xl sm:text-xl text-lg mb-3">
                  Chat With Us
                </h3>
                <p className="sm:text-md md:text-lg text-sm text-gray-600 mb-4">
                  Have questions? We're here to help!
                </p>
                <span className="sm:text-md text-sm">
                  <Button
                    children="Chat"
                    variant="learnmore"
                    to="https://wa.me/2348125923428"
                  />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center sm:p-6 p-4">
                <span className="bg-emerald-100 mx-auto rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  <CallOutlined className="text-emerald-800" />
                </span>
                <h3 className="text-center font-semibold md:text-2xl sm:text-xl text-lg mb-3">
                  Call Us
                </h3>
                <p className="sm:text-md md:text-lg text-sm text-gray-600 mb-4">
                  Mon-Sat, 9am-5pm GMT
                </p>
                <span className="sm:text-md text-sm">
                  <Button
                    variant="learnmore"
                    children="Call Now"
                    to="tel:+2348125923428"
                  />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center sm:p-6 p-4">
                <span className="bg-emerald-100 mx-auto rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  <MessageOutlined className="text-emerald-800" />
                </span>
                <h3 className="text-center font-semibold md:text-2xl sm:text-xl text-lg mb-3">
                  Email Us
                </h3>
                <p className="sm:text-md md:text-lg text-sm text-gray-600 mb-4">
                  We'll respond within 24 hours
                </p>
                <span className="sm:text-md text-sm">
                  <Button
                    variant="learnmore"
                    children="buy-more@gmail.com"
                    to="mailto:buy-more@gmail.com"
                  />
                </span>
              </div>
            </div>
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
