import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCategory from '@/components/MenuCategory';
import { menuData } from '@/data/menu';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            Our Menu
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Scan • Order • Enjoy Fresh Food
          </p>
        </div>

        <div className="space-y-16">
          {menuData.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}