export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-emerald-100 w-full max-w-full px-10 py-10 mt-20">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
        <div className="flex flex-col  items-start max-w-max">
          <h2 className="text-center font-semibold lg:text-xl text-lg py-1">BuyMore</h2>
          <p className="lg:text-md text-sm font-normal ">Safe Shopping</p>
          <p className="lg:text-md text-sm font-normal ">Your Trusted Marketplace</p>
        </div>
        <div className="flex flex-col items-start max-w-max">
          <h2 className=" font-semibold lg:text-xl text-lg py-1">Customer Service</h2>
          <p className="lg:text-md text-sm font-normal ">Help Center</p>
          <p className="lg:text-md text-sm font-normal ">Contact Us</p>
          <p className="lg:text-md text-sm font-normal ">Order Tracking</p>
          <p className="lg:text-md text-sm font-normal ">Returns & Exchanges</p>
          <p className="lg:text-md text-sm font-normal ">FAQs</p>
        </div>
        <div className="flex flex-col items-start max-w-max">
          <h2 className=" font-semibold lg:text-xl text-lg py-1">Quick Links</h2>
          <p className="lg:text-md text-sm font-normal ">Shop All Categories</p>
          <p className="lg:text-md text-sm font-normal ">Daily Deals</p>
          <p className="lg:text-md text-sm font-normal ">New Arrivals</p>
          <p className="lg:text-md text-sm font-normal ">Best Sellers</p>
        </div>
        <div className="flex flex-col items-start max-w-max">
          <h2 className=" font-semibold lg:text-xl text-lg py-1">Legal</h2>
          <p className="lg:text-md text-sm font-normal ">Terms of Service</p>
          <p className="lg:text-md text-sm font-normal ">Privacy Policy</p>
          <p className="lg:text-md text-sm font-normal ">Cookie Policy</p>
          <p className="lg:text-md text-sm font-normal ">GDPR Compliance</p>
        </div>
      </div>
      <p className="pt-6 text-gray-800 lg:text-lg md:text-md text-sm">
        © {date} BuyMore. All Rights Reserved.
      </p>
    </footer>
  );
}
