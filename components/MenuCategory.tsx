import { MenuCategory as MenuCategoryType } from '@/data/menu';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section className="mb-16" id={category.name.toLowerCase()}>
      <div className="flex items-center gap-3 mb-8">
        <span className="text-5xl">{category.icon}</span>
        <h2 className="text-4xl font-bold text-black border-b-4 border-yellow-400 pb-2">
          {category.name}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}