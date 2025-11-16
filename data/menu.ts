export interface MenuItem {
  id: number;
  name: string;
  price?: number;
  prices?: {
    small?: number;
    medium?: number;
    large?: number;
    half?: number;
    full?: number;
  };
  description?: string;
  image: string;
}

export interface MenuCategory {
  id: number;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 1,
    name: "PIZZAS",
    icon: "🍕",
    items: [
      {
        id: 1,
        name: "Fajita Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Spicy chicken fajita with bell peppers and onions",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80"
      },
      {
        id: 2,
        name: "Tikka Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Marinated chicken tikka with special sauce",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
      },
      {
        id: 3,
        name: "B.B.Q Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "BBQ chicken with smoky flavor",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80"
      },
      {
        id: 4,
        name: "Cheese Lover",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Extra cheese loaded pizza",
        image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&q=80"
      },
      {
        id: 5,
        name: "Supreme Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Loaded with multiple toppings",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&q=80"
      },
      {
        id: 6,
        name: "Vegetarian Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Fresh vegetables and cheese",
        image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=500&q=80"
      },
      {
        id: 7,
        name: "Tandoori Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Tandoori chicken with spicy sauce",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80"
      },
      {
        id: 8,
        name: "Behari Kabab Pizza",
        prices: { small: 450, medium: 700, large: 1050 },
        description: "Behari kabab with special spices",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80"
      },
      {
        id: 9,
        name: "Usman Special",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Our signature special pizza",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=500&q=80"
      },
      {
        id: 10,
        name: "Crown Crust Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Pizza with crown-shaped crust",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500&q=80"
      },
      {
        id: 11,
        name: "Kabab Crust Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Pizza crust filled with kabab",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80"
      },
      {
        id: 12,
        name: "Lazania Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Pizza meets lasagna fusion",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96a47?w=500&q=80"
      },
      {
        id: 13,
        name: "Malai Boti Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Creamy malai boti topping",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80"
      },
      {
        id: 14,
        name: "Sandwich Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Sandwich-style layered pizza",
        image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&q=80"
      },
      {
        id: 15,
        name: "Nuggets Pizza",
        prices: { small: 500, medium: 850, large: 1250 },
        description: "Topped with crispy nuggets",
        image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=500&q=80"
      },
      {
        id: 16,
        name: "Extra Topping",
        prices: { small: 70, medium: 150, large: 200 },
        description: "Add extra toppings to your pizza",
        image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=500&q=80"
      }
    ]
  },
  {
    id: 2,
    name: "BURGERS",
    icon: "🍔",
    items: [
      {
        id: 17,
        name: "Normal Grill Burger + Fries",
        price: 450,
        description: "Grilled chicken patty with fresh vegetables",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
      },
      {
        id: 18,
        name: "Special Grill Burger + Fries",
        price: 500,
        description: "Special grilled burger with extra toppings",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80"
      },
      {
        id: 19,
        name: "Stuffed Jalapeno Burger + Fries",
        price: 600,
        description: "Spicy jalapeno stuffed burger",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80"
      },
      {
        id: 20,
        name: "Smash Beef Burger",
        price: 450,
        description: "Smashed beef patty burger",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80"
      },
      {
        id: 21,
        name: "Smash Cheese Beef Burger + Fries",
        price: 850,
        description: "Double smashed beef with melted cheese",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80"
      },
      {
        id: 22,
        name: "Chipotle Burger",
        price: 500,
        description: "Smoky chipotle sauce burger",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80"
      },
      {
        id: 23,
        name: "Zinger Burger",
        price: 390,
        description: "Crispy fried chicken fillet",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80"
      },
      {
        id: 24,
        name: "Zinger Cheese Burger",
        price: 440,
        description: "Zinger with melted cheese",
        image: "https://images.unsplash.com/photo-1615990850670-2f29d78b4c7e?w=500&q=80"
      },
      {
        id: 25,
        name: "Karizma Burger",
        price: 350,
        description: "Our signature karizma style burger",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80"
      },
      {
        id: 26,
        name: "Karizma Cheese Burger",
        price: 400,
        description: "Karizma with extra cheese",
        image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500&q=80"
      },
      {
        id: 27,
        name: "Patty Burger + Fries",
        price: 260,
        description: "Simple and delicious beef patty",
        image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=500&q=80"
      },
      {
        id: 28,
        name: "Bar BQ Burger + Fries",
        price: 260,
        description: "BBQ sauce flavored burger",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80"
      },
      {
        id: 29,
        name: "Tower Burger + Fries",
        price: 350,
        description: "Multi-layered tower burger",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
      },
      {
        id: 30,
        name: "Chapli Burger + Fries",
        price: 250,
        description: "Traditional chapli kabab burger",
        image: "https://images.unsplash.com/photo-1619740455993-9e4082d6c5e4?w=500&q=80"
      },
      {
        id: 31,
        name: "Tikka Cheese Burger + Fries",
        price: 350,
        description: "Chicken tikka with cheese",
        image: "https://images.unsplash.com/photo-1565060299110-95d6fe8ec0b5?w=500&q=80"
      },
      {
        id: 32,
        name: "Zinger Pizza Burger",
        price: 500,
        description: "Zinger meets pizza in a burger",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80"
      },
      {
        id: 33,
        name: "Chapli Pizza Burger",
        price: 450,
        description: "Chapli kabab pizza-style burger",
        image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=500&q=80"
      },
      {
        id: 34,
        name: "Patty Pizza Burger",
        price: 450,
        description: "Beef patty pizza burger",
        image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=500&q=80"
      },
      {
        id: 35,
        name: "Boti Pizza Burger",
        price: 450,
        description: "Chicken boti pizza burger",
        image: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=500&q=80"
      },
      {
        id: 36,
        name: "Malai Boti Pizza Burger",
        price: 450,
        description: "Creamy malai boti pizza burger",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80"
      }
    ]
  },
  {
    id: 3,
    name: "WRAPS",
    icon: "🌯",
    items: [
      {
        id: 37,
        name: "Turkish Wrap",
        price: 550,
        description: "Turkish-style chicken wrap",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80"
      },
      {
        id: 38,
        name: "Afghani Wrap",
        price: 600,
        description: "Afghani spiced chicken wrap",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80"
      },
      {
        id: 39,
        name: "Lebanese Wrap",
        price: 650,
        description: "Lebanese-style grilled wrap",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80"
      },
      {
        id: 40,
        name: "Zinger Wrap",
        price: 500,
        description: "Crispy zinger in a wrap",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80"
      },
      {
        id: 41,
        name: "Traditional Wrap",
        price: 550,
        description: "Traditional Pakistani wrap",
        image: "https://images.unsplash.com/photo-1607330289024-1aa19785c40b?w=500&q=80"
      },
      {
        id: 42,
        name: "Fajita Wrap",
        price: 500,
        description: "Spicy chicken fajita wrap",
        image: "https://images.unsplash.com/photo-1618269219358-ffecb3d69874?w=500&q=80"
      },
      {
        id: 43,
        name: "Chicken Shawarma",
        price: 280,
        description: "Classic chicken shawarma",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80"
      },
      {
        id: 44,
        name: "Chicken Cheese Shawarma",
        price: 330,
        description: "Shawarma with melted cheese",
        image: "https://images.unsplash.com/photo-1606557712034-a2a735bb4c42?w=500&q=80"
      },
      {
        id: 45,
        name: "Zinger Shawarma",
        price: 340,
        description: "Crispy zinger shawarma",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80"
      },
      {
        id: 46,
        name: "Zinger Cheese Shawarma",
        price: 390,
        description: "Zinger shawarma with cheese",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
      },
      {
        id: 47,
        name: "Chicken Paratha",
        price: 350,
        description: "Chicken wrapped in paratha",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b4?w=500&q=80"
      },
      {
        id: 48,
        name: "Chicken Cheese Paratha",
        price: 400,
        description: "Chicken paratha with cheese",
        image: "https://images.unsplash.com/photo-1628191010210-a59de3fc4def?w=500&q=80"
      },
      {
        id: 49,
        name: "Kabab Paratha",
        price: 300,
        description: "Kabab wrapped in paratha",
        image: "https://images.unsplash.com/photo-1606491048164-ac1da01e1726?w=500&q=80"
      },
      {
        id: 50,
        name: "Kabab Cheese Paratha",
        price: 350,
        description: "Kabab paratha with cheese",
        image: "https://images.unsplash.com/photo-1612630032250-f7e5d6ac0ef0?w=500&q=80"
      },
      {
        id: 51,
        name: "Crunch Shawarma",
        price: 350,
        description: "Extra crunchy shawarma",
        image: "https://images.unsplash.com/photo-1606491048164-ac1da01e1726?w=500&q=80"
      },
      {
        id: 52,
        name: "Crunch Cheese Shawarma",
        price: 400,
        description: "Crunchy shawarma with cheese",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80"
      },
      {
        id: 53,
        name: "Malai Boti Paratha",
        price: 450,
        description: "Creamy malai boti in paratha",
        image: "https://images.unsplash.com/photo-1612630032250-f7e5d6ac0ef0?w=500&q=80"
      },
      {
        id: 54,
        name: "Zinger Paratha",
        price: 350,
        description: "Zinger wrapped in paratha",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80"
      },
      {
        id: 55,
        name: "Zinger Cheese Paratha",
        price: 400,
        description: "Zinger paratha with cheese",
        image: "https://images.unsplash.com/photo-1628191010210-a59de3fc4def?w=500&q=80"
      },
      {
        id: 56,
        name: "Platter Shawarma",
        price: 600,
        description: "Full shawarma platter",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&q=80"
      }
    ]
  },
  {
    id: 4,
    name: "SANDWICHES",
    icon: "🥪",
    items: [
      {
        id: 57,
        name: "Grill Sandwich",
        price: 650,
        description: "Grilled chicken sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80"
      },
      {
        id: 58,
        name: "Grill Cheese Sandwich",
        price: 700,
        description: "Grilled sandwich with cheese",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500&q=80"
      },
      {
        id: 59,
        name: "Chicken Sandwich",
        price: 350,
        description: "Classic chicken sandwich",
        image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=500&q=80"
      },
      {
        id: 60,
        name: "Club Sandwich",
        price: 400,
        description: "Triple-layered club sandwich",
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=500&q=80"
      },
      {
        id: 61,
        name: "Special Sandwich",
        price: 450,
        description: "Our special loaded sandwich",
        image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=500&q=80"
      }
    ]
  },
  {
    id: 5,
    name: "PASTA",
    icon: "🍝",
    items: [
      {
        id: 62,
        name: "Creamy Pasta",
        prices: { half: 450, full: 750 },
        description: "Rich and creamy white sauce pasta",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80"
      },
      {
        id: 63,
        name: "Special Spicy Pasta",
        prices: { half: 450, full: 700 },
        description: "Spicy red sauce pasta",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80"
      },
      {
        id: 64,
        name: "Penne Pasta",
        prices: { half: 400, full: 700 },
        description: "Classic penne pasta",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80"
      }
    ]
  },
  {
    id: 6,
    name: "HOT CORNER",
    icon: "🔥",
    items: [
      {
        id: 65,
        name: "Fries",
        prices: { half: 150, full: 300 },
        description: "Crispy golden french fries",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80"
      },
      {
        id: 66,
        name: "Chicken Fries",
        prices: { half: 250, full: 350 },
        description: "Fries topped with chicken",
        image: "https://images.unsplash.com/photo-1630431341973-02e1d0f85695?w=500&q=80"
      },
      {
        id: 67,
        name: "BBQ Fries",
        prices: { half: 200, full: 350 },
        description: "Fries with BBQ sauce",
        image: "https://images.unsplash.com/photo-1606491048164-ac1da01e1726?w=500&q=80"
      },
      {
        id: 68,
        name: "Masala Fries",
        prices: { half: 200, full: 300 },
        description: "Spicy masala-flavored fries",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80"
      },
      {
        id: 69,
        name: "Cheese Fries",
        prices: { half: 300, full: 450 },
        description: "Fries loaded with melted cheese",
        image: "https://images.unsplash.com/photo-1627662168781-d4099099f0cc?w=500&q=80"
      },
      {
        id: 70,
        name: "Loaded Fries",
        prices: { half: 300, full: 500 },
        description: "Fully loaded with all toppings",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80"
      },
      {
        id: 71,
        name: "Zinger Piece",
        price: 150,
        description: "Single crispy zinger piece",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80"
      },
      {
        id: 72,
        name: "Nuggets (5pc)",
        price: 200,
        description: "5 pieces crispy chicken nuggets",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80"
      },
      {
        id: 73,
        name: "Nuggets (10pc)",
        price: 350,
        description: "10 pieces crispy chicken nuggets",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=500&q=80"
      },
      {
        id: 74,
        name: "Hot Wings (5pc)",
        price: 300,
        description: "5 pieces spicy hot wings",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&q=80"
      },
      {
        id: 75,
        name: "Hot Wings (10pc)",
        price: 550,
        description: "10 pieces spicy hot wings",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80"
      }
    ]
  },
  {
    id: 7,
    name: "BBQ",
    icon: "🍢",
    items: [
      {
        id: 76,
        name: "Chicken Tikka Boti (4pc)",
        price: 180,
        description: "4 pieces grilled chicken tikka",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80"
      },
      {
        id: 77,
        name: "Nablet (4pc)",
        price: 120,
        description: "4 pieces grilled nablet",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80"
      },
      {
        id: 78,
        name: "Chicken Malai Boti",
        price: 200,
        description: "Creamy marinated grilled chicken",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=500&q=80"
      },
      {
        id: 79,
        name: "Chicken Tandoori Boti",
        price: 200,
        description: "Tandoori-style grilled chicken",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80"
      },
      {
        id: 80,
        name: "Chicken Leg Piece",
        price: 130,
        description: "Grilled chicken leg piece",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&q=80"
      },
      {
        id: 81,
        name: "Chicken Chest Piece",
        price: 200,
        description: "Grilled chicken breast piece",
        image: "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?w=500&q=80"
      },
      {
        id: 82,
        name: "Chicken Malai Boti Piece",
        price: 130,
        description: "Single piece malai boti",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=500&q=80"
      },
      {
        id: 83,
        name: "Chicken Kabab",
        price: 200,
        description: "Spiced grilled chicken kabab",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80"
      },
      {
        id: 84,
        name: "Chicken Cheese Kabab",
        price: 200,
        description: "Chicken kabab with cheese filling",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80"
      },
      {
        id: 85,
        name: "Reshmi Kabab",
        price: 200,
        description: "Soft and tender reshmi kabab",
        image: "https://images.unsplash.com/photo-1606557712034-a2a735bb4c42?w=500&q=80"
      }
    ]
  },
  {
    id: 8,
    name: "DEALS",
    icon: "📦",
    items: [
      {
        id: 86,
        name: "DEAL 1",
        price: 2800,
        description: "2 Large Pizza (Tikka/Fajita) + 1×1.5L Drink",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80"
      },
      {
        id: 87,
        name: "DEAL 2",
        price: 1850,
        description: "2 Zinger Burger + 2 Small Pizza (Tikka/Fajita) + 1L Drink",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
      },
      {
        id: 88,
        name: "DEAL 3",
        price: 1800,
        description: "1 Medium Pizza + 2 Chicken Shawarma + 2 Zinger Burger + 1L Drink",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&q=80"
      },
      {
        id: 89,
        name: "DEAL 4",
        price: 2100,
        description: "2 Chicken Shawarma + 2 Zinger Burger + 1L Drink",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80"
      },
      {
        id: 90,
        name: "DEAL 5",
        price: 2100,
        description: "2 Small Pizza (10.5\") + 1 Large Pizza + 1L Drink",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500&q=80"
      },
      {
        id: 91,
        name: "DEAL 6",
        price: 1300,
        description: "2 Zinger Burgers + 1 Small Pizza (10.5\") + 1L Drink",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80"
      },
      {
        id: 92,
        name: "DEAL 7",
        price: 950,
        description: "Small Pizza (Tikka/Fajita) + 2 Pieces Special Medium Pizza + 0.5L Drink",
        image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=500&q=80"
      },
      {
        id: 93,
        name: "DEAL 8",
        price: 1500,
        description: "2 Special Medium Pizza + 0.5L Drink",
        image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&q=80"
      },
      {
        id: 94,
        name: "DEAL 9",
        price: 2750,
        description: "2 Medium Pizza + 2 Zinger Burger + 1.5L Drink",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80"
      },
      {
        id: 95,
        name: "DEAL 10",
        price: 3100,
        description: "1 Large Pizza + 1 Medium Pizza + 2 Zinger Burgers + Chicken Shawarma + 1.5L Drink",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80"
      }
    ]
  }
];
