const Hero = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Connect with borrowers and lenders
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-center">
          Join our peer-to-peer lending platform to lend or borrow with ease.
        </p>
        <button className="cursor-pointer mt-8 px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
