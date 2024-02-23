import { GoalsBanner } from "../_components/banner";


interface MainLayoutProps {
  children: React.ReactNode;
};

const MainLayout = ({
  children
}: MainLayoutProps) => {
  return (
    <main className="h-full">
      <GoalsBanner />
      <div>
        {children}
      </div>
    </main>
  )
}

export default MainLayout;