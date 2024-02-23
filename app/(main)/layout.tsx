import { Banner } from "./_components/banner";
import { Sidebar } from "./_components/sidebar";
import type { Metadata } from "next";

interface MainLayoutProps {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "InNova | Home",
  description: "Coolz",
};

const MainLayout = ({
  children
}: MainLayoutProps) => {
  return (
    <main className="h-full">
       <Sidebar />
      <div className="pl-[210px] h-full">
        <div className="flex gap-x-3 h-full">
          <div className="h-full flex-1">
            <Banner />
            <div className="bg-white h-full text-black">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainLayout;