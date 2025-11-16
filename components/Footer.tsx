export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-yellow-400">
            Usman Fast Food Point
          </h3>
          
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-yellow-400 text-xl">📍</span>
              <span className="text-sm md:text-base">
                Suter Mills Main Stop, Near Government Girls High School, Lahore
              </span>
            </p>
            
            <p className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-xl">⏰</span>
              <span className="text-sm md:text-base">03:30 PM – 03:30 AM</span>
            </p>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <p className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">📞</span>
                <a href="tel:03274660995" className="hover:text-yellow-400 transition text-sm md:text-base">
                  0327-4660995
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">📞</span>
                <a href="tel:03424000232" className="hover:text-yellow-400 transition text-sm md:text-base">
                  0342-4000232
                </a>
              </p>
            </div>

            <div className="bg-yellow-400 text-black py-3 px-6 rounded-lg inline-block mt-4">
              <p className="font-semibold text-sm md:text-base">
                🚚 Free Home Delivery (Minimum order 1000 PKR)
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 Usman Fast Food. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}