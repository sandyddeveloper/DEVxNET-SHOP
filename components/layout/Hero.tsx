import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative  py-16">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Add decorative elements like leaves */}
        <img
          src="./leaf.png"
          alt="Leaf"
          className="absolute top-10 left-5 w-12 animate-float"
        />
        <img
          src="./leaf2.png"
          alt="Leaf"
          className="absolute bottom-10 right-10 w-16 animate-float"
        />
        <img
          src="./fruit.png"
          alt="Fruit"
          className="absolute top-20 right-1/3 w-10 animate-float"
        />
      </div>

      <div className="container mx-auto px-4 text-center pt-24">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-800">
          Your One-Stop Shop for{" "}
          <span className="text-green-500 text-5xl">Quality Products</span>
        </h1>

        <p className="mt-4 text-gray-600 flex justify-center items-center gap-2">
          <span className="text-red-500 font-bold">✔</span> Fast Shipping
          <span className="text-red-500 font-bold">✔</span> Secure Payments
          <span className="text-red-500 font-bold">✔</span> 24/7 Customer
          Support
        </p>

        <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">
          Discover Your Favorite{" "}
          <span className="text-green-500 uppercase text-5xl">
            Products Today...
          </span>
        </h2>
      </div>
      <div>
        <img src="./monitor.png" alt="Monitor" className="w-full mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
