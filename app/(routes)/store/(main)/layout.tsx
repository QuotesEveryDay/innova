import { ProductBanner } from "../_components/banner";

interface MainLayoutProps {
  children: React.ReactNode;
};

const MainLayout = ({
  children
}: MainLayoutProps) => {
  return (
    <main className="h-full">
      <ProductBanner />
      <div>
        {children}
      </div>
    </main>
  )
}

export default MainLayout;