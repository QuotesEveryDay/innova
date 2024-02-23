const Home = () => {
  return (
    <div>
      {/* Section 1: Top */}
      <div className="py-20 border-b border-gray-400">
        <div className="container mx-auto text-center">
          <div className="text-5xl font-bold">
            About Us
          </div>
          <div className="text-3xl mb-4">
            All 4 of our employes played baseball in highschool and collage. They graduated with a masters degree in mechanical engineering. We all work day and night making people happy and our prices are unbeatble. We have the best customer service in the nation you can come find that out by buying a bat today!
          </div>
        </div>
      </div>
      <div className="flex border-b border-gray-400">
        {/* Section 2: Bottom Left */}
        <div className="py-20 w-1/2 flex items-center border-r border-gray-400">
          <div className="p-4">
            <img src="/media.jpg" alt="Innova Bats" className="max-w-full max-h-full rounded-lg object-cover" style={{ maxWidth: '150px', maxHeight: '150px' }} />
          </div>
          <div className="container mx-auto flex-grow">
            <div className="mb-4">
              <div className="text-center font-semibold text-5xl">
                Our Mission!
              </div>
              <div className="text-3xl">
                Innova bats are starting at $249.99 and as you can see, stars like Mike Trout and Aaron Judge started using them and WOW!!! Their batting averages have increased substantially.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Bottom Right */}
        <div className="py-20 w-1/2 flex items-center">
          <div className="container mx-auto flex-grow pl-8">
            <div className="mb-4">
              <div className="text-center font-semibold text-5xl">
                Our Vision!
              </div>
              <div className="text-right text-3xl">
                We here at innova plan to do more than just sell baseball bats. We plan to expand to all sports in the furute to maximaze audiance and be able to gain more revenue.
              </div>
            </div>
          </div>
          <div className="p-4">
            <img src="/2.png" alt="Innova Vision" className="max-w-full max-h-full rounded-lg object-cover" style={{ maxWidth: '150px', maxHeight: '150px' }} />
          </div>
        </div>
      </div>
      <footer className="text-center bg-green-300 font-bold border border-gray-400">
        &#169; Established in Houston, TX &#169; 
      </footer>
    </div>
  );
};

export default Home;
