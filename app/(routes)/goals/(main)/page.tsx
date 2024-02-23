import React from 'react';

const GoalsPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-10 justify-center w-full px-10">
        <GoalBox title="Goal 1" description="Our first goal is to bring the best bats for people that need them."/>
        <GoalBox title="Goal 2" description="To sell bats to all major leaguers in the MLB."/>
        <GoalBox title="Goal 3" description="To make kids happy with our bats!"/>
      </div>
    </div>
  );
};

interface GoalBoxProps {
  title: string;
  description: string;
}

function GoalBox({ title, description }: GoalBoxProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg border border-gray-400">
      <h2 className="text-6xl font-semibold mb-2">{title}</h2>
      <p className='text-xl'>{description}</p>
    </div>
  );
}

export default GoalsPage;