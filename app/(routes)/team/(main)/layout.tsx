import { TeamBanner } from "../_components/banner";

interface MainLayoutProps {
  children: React.ReactNode;
};

const MainLayout = ({
  children
}: MainLayoutProps) => {
  return (
    <main className="h-full">
      <TeamBanner />
      <div>
        {children}
      </div>
    </main>
  )
}

export default MainLayout;