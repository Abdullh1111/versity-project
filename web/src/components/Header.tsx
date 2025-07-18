const HeaderSection
 = () => {
  return (
    <section className="p-6 text-center">
      <h1 className="font-bold mb-4 text-shadow-[2px_2px_4px_#b17575]  xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
      >Apple iPhone 13 Pro Max</h1>
      <p className="text-gray-600 mb-6 max-w-[720px] mx-auto">
        There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected humour.
      </p>
      <div id="buy-now-btn-container" className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeaderSection
;