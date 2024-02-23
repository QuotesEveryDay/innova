import Link from "next/link";

const Store = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductBox id="1" title="InNova Hype Fire Bat" price="$249.99" src="/media.png"/>
        <ProductBox id="2" title="InNova Atlas Bat" price="$199.99" src="/Baseball2.png"/>
        <ProductBox id="3" title="InNova Cat X Bat" price="$274.99" src="/Baseball3.png"/>
        <ProductBox id="4" title="InNova Super Cat Bat" price="$199.99" src="/Baseball4.png"/>
      </div>
    </div>
  );
}

interface ProductBoxProps {
  id: string;
  title: string;
  price: string;
  src: string
}

function ProductBox({ id, title, price, src }: ProductBoxProps) {
  return (
    <Link href={`/store/products/${id}`}>
      <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transition duration-300 hover:shadow-lg border border-gray-400">
        <img src={src} alt="Product Image" className="mx-auto mb-4 bg-gray-200 rounded-xl" style={{ width: '150px', height: '150px' }} />
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="text-green-600 font-bold">{price}</div>
      </div>
    </Link>
  );
}

export default Store;
