const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 ">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Add decorative elements like leaves */}
        <img
          src="./leaf.png"
          alt="Leaf"
          className="absolute top-5 left-2 w-8 md:top-10 md:left-5 md:w-12 animate-float"
        />
        <img
          src="./leaf2.png"
          alt="Leaf"
          className="absolute bottom-5 right-5 w-12 md:bottom-10 md:right-10 md:w-16 animate-float"
        />
        <img
          src="./fruit.png"
          alt="Fruit"
          className="absolute top-10 right-1/4 w-8 md:top-20 md:right-1/3 md:w-10 animate-float"
        />
      </div>

      <div className="container mx-auto px-4 text-center pt-[100px] md:pt-[120px] ">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-gray-800">
          Your One-Stop Shop for{" "}
          <span className="text-green-500 sm:text-4xl md:text-5xl">
            Quality Products
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-600 flex flex-wrap justify-center items-center gap-2">
          <span className="text-red-500 font-bold">✔</span> Fast Shipping
          <span className="text-red-500 font-bold">✔</span> Secure Payments
          <span className="text-red-500 font-bold">✔</span> 24/7 Customer
          Support
        </p>

        <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-gray-800">
          Discover Your Favorite{" "}
          <span className="text-green-500 uppercase sm:text-3xl md:text-5xl">
            Products Today...
          </span>
        </h2>
      </div>

      <div className="mt-6 md:mt-10 px-4">
        <img src="./monitor.png" alt="Monitor" className="w-full mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
