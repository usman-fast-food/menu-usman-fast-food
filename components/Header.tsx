export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
            Usman Fast Food
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Delicious Food, Fast Service
          </p>
        </div>
      </div>
    </header>
  );
}