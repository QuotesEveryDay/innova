const Summary = () => {
  return (
    <div className="flex border-b border-gray-400">
        {/* Section 1: Left */}
        <div className="py-20 w-1/2 flex items-center border-r border-gray-400">
          <div className="container mx-auto flex-grow">
            <div className="mb-4">
              <div className="text-center font-semibold text-5xl">
                Financial Summary
              </div>
              <div className="text-3xl text-center">
                We started this company was established in 2018 and from that time till febuary 23, 2024 we have made ove 1.8 million dollars in revenue.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Right */}
        <div className="py-20 w-1/2 flex items-center">
          <div className="container mx-auto flex-grow pl-8">
            <div className="mb-4">
              <div className="text-center font-semibold text-5xl">
                Growth Opportunities
              </div>
              <div className="text-center text-3xl">
                We are looking to expand all around the United States. As we expand we prepare to start selling products for other sports like soccer, volleyball, softball, and football.
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Summary;