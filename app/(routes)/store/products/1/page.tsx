const ProductPage3 = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg flex items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            InNova Hype Fire Bat
          </h1>
          <p className="text-3xl font-bold text-green-600 mb-4">
            $249.99
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300">
            Buy Now
          </button>
        </div>
        <div className="flex-1 ml-10">
          <img
            src="/media.png"
            alt="Product 1"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '250px', maxHeight: '250px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage3;