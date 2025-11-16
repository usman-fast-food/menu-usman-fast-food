import { MenuItem as MenuItemType } from '@/data/menu';
import Image from 'next/image';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const renderPrice = () => {
    if (item.price) {
      return (
        <span className="text-xl font-bold text-yellow-500">
          Rs. {item.price}
        </span>
      );
    }

    if (item.prices) {
      return (
        <div className="text-right">
          {item.prices.small && (
            <div className="text-sm">
              <span className="text-gray-600">S:</span>
              <span className="ml-1 font-bold text-yellow-500">Rs. {item.prices.small}</span>
            </div>
          )}
          {item.prices.medium && (
            <div className="text-sm">
              <span className="text-gray-600">M:</span>
              <span className="ml-1 font-bold text-yellow-500">Rs. {item.prices.medium}</span>
            </div>
          )}
          {item.prices.large && (
            <div className="text-sm">
              <span className="text-gray-600">L:</span>
              <span className="ml-1 font-bold text-yellow-500">Rs. {item.prices.large}</span>
            </div>
          )}
          {item.prices.half && (
            <div className="text-sm">
              <span className="text-gray-600">Half:</span>
              <span className="ml-1 font-bold text-yellow-500">Rs. {item.prices.half}</span>
            </div>
          )}
          {item.prices.full && (
            <div className="text-sm">
              <span className="text-gray-600">Full:</span>
              <span className="ml-1 font-bold text-yellow-500">Rs. {item.prices.full}</span>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-semibold text-black flex-1">
            {item.name}
          </h4>
          {renderPrice()}
        </div>
        
        {item.description && (
          <p className="text-gray-600 text-sm mt-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}