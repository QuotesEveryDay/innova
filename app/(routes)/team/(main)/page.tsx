const Home = () => {
    return (
      <div>
        {/* Section 1: Top */}
        <div className="py-20 border border-gray-400">
          <div className="container mx-auto text-center">
            <div className="text-4xl font-bold">
              Jacob Davis
            </div>
            <div className="text-2xl mb-4">
              I believe that Innova has the potential to be the next best thing! We have been working toward this goal for many years and we are now achieving that goal. Currently we are surpasing every goal we sat, and continuing to grow. Im projecting that this company will be worth atleast 3 times more by the end of 2026!
            </div>
          </div>
        </div>
        <div className="flex">
          {/* Section 2: Bottom Left */}
          <div className="py-20 w-1/3 flex items-center border border-gray-400">
            <div className="container mx-auto flex-grow">
              <div className="mb-4">
                <div className="text-center font-semibold text-2xl">
                  Ethan Ansay
                </div>
                <div className="text-xl">
                  We love to bring the best bats for kids and also bring the best fun to people that love to play baseball.
                </div>
              </div>
            </div>
          </div>
  
          {/* Section 3: Bottom middle */}
          <div className="py-20 w-1/3 flex items-center border border-gray-400">
            <div className="container mx-auto flex-grow pl-8">
              <div className="mb-4">
                <div className="text-center font-semibold text-2xl">
                  Dakota Simon
                </div>
                <div className="text-center text-xl">
                  These bats have had players win so many championships.
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Bottom right */}
          <div className="py-20 w-1/3 flex items-center border border-gray-400">
            <div className="container mx-auto flex-grow pl-8">
              <div className="mb-4">
                <div className="text-center font-semibold text-2xl">
                  Santiago Pirela
                </div>
                <div className="text-right text-xl">
                  Our team works hard every day to make these people happy with their bats. They always do everything in their power to bring joy to the customers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  