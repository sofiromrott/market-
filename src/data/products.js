// Datos elaborados para el supermercado
export const categories = [
  { id: 'fruits', name: 'Frutas y Verduras', icon: '🥬', color: '#22c55e' },
  { id: 'meat', name: 'Carnes y Aves', icon: '🥩', color: '#ef4444' },
  { id: 'dairy', name: 'Lácteos', icon: '🥛', color: '#3b82f6' },
  { id: 'bakery', name: 'Panadería', icon: '🍞', color: '#f59e0b' },
  { id: 'beverages', name: 'Bebidas', icon: '🥤', color: '#8b5cf6' },
  { id: 'snacks', name: 'Snacks', icon: '🍿', color: '#f97316' },
  { id: 'frozen', name: 'Congelados', icon: '🧊', color: '#06b6d4' },
  { id: 'cleaning', name: 'Limpieza', icon: '🧽', color: '#10b981' },
  { id: 'personal', name: 'Cuidado Personal', icon: '🧴', color: '#ec4899' },
  { id: 'baby', name: 'Bebé', icon: '👶', color: '#fbbf24' },
];

export const products = [
  // Frutas y Verduras
  {
    id: 1,
    name: 'Manzanas Rojas Premium',
    category: 'fruits',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop',
    description: 'Manzanas frescas y crujientes, perfectas para cualquier momento del día.',
    stock: 50,
    rating: 4.8,
    reviews: 124,
    tags: ['Orgánico', 'Fresco', 'Premium']
  },
  {
    id: 2,
    name: 'Bananas Orgánicas',
    category: 'fruits',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
    description: 'Bananas orgánicas de alta calidad, ricas en potasio.',
    stock: 30,
    rating: 4.6,
    reviews: 89,
    tags: ['Orgánico', 'Rico en Potasio']
  },
  {
    id: 3,
    name: 'Tomates Cherry',
    category: 'fruits',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop',
    description: 'Tomates cherry dulces y jugosos, ideales para ensaladas.',
    stock: 25,
    rating: 4.7,
    reviews: 67,
    tags: ['Dulce', 'Jugoso']
  },
  {
    id: 4,
    name: 'Lechuga Romana',
    category: 'fruits',
    price: 1.49,
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop',
    description: 'Lechuga romana fresca y crujiente, perfecta para ensaladas.',
    stock: 40,
    rating: 4.5,
    reviews: 45,
    tags: ['Fresco', 'Crujiente']
  },
  {
    id: 5,
    name: 'Aguacates Hass',
    category: 'fruits',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop',
    description: 'Aguacates Hass cremosos y deliciosos, perfectos para guacamole.',
    stock: 20,
    rating: 4.9,
    reviews: 156,
    tags: ['Cremoso', 'Premium']
  },

  // Carnes y Aves
  {
    id: 6,
    name: 'Pechuga de Pollo',
    category: 'meat',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop',
    description: 'Pechuga de pollo fresca, sin hormonas, perfecta para cualquier receta.',
    stock: 20,
    rating: 4.9,
    reviews: 156,
    tags: ['Sin Hormonas', 'Fresco']
  },
  {
    id: 7,
    name: 'Carne Molida Premium',
    category: 'meat',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    description: 'Carne molida de res premium, ideal para hamburguesas y pastas.',
    stock: 15,
    rating: 4.8,
    reviews: 98,
    tags: ['Premium', 'Res']
  },
  {
    id: 8,
    name: 'Salmón Fresco',
    category: 'meat',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a8b67e4?w=400&h=300&fit=crop',
    description: 'Salmón fresco del Atlántico, rico en omega-3.',
    stock: 12,
    rating: 4.9,
    reviews: 203,
    tags: ['Omega-3', 'Fresco', 'Atlántico']
  },
  {
    id: 9,
    name: 'Jamón Serrano',
    category: 'meat',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    description: 'Jamón serrano español de 18 meses de curación.',
    stock: 8,
    rating: 4.9,
    reviews: 89,
    tags: ['Español', '18 meses', 'Premium']
  },

  // Lácteos
  {
    id: 10,
    name: 'Leche Entera Orgánica',
    category: 'dairy',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop',
    description: 'Leche entera orgánica fresca, sin conservantes artificiales.',
    stock: 35,
    rating: 4.7,
    reviews: 134,
    tags: ['Orgánico', 'Sin Conservantes']
  },
  {
    id: 11,
    name: 'Queso Cheddar',
    category: 'dairy',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop',
    description: 'Queso cheddar madurado, perfecto para sandwiches y cocina.',
    stock: 28,
    rating: 4.6,
    reviews: 87,
    tags: ['Madurado', 'Cheddar']
  },
  {
    id: 12,
    name: 'Yogurt Griego Natural',
    category: 'dairy',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1571212515410-1a2d4a4b8b1b?w=400&h=300&fit=crop',
    description: 'Yogurt griego natural, rico en proteínas y probióticos.',
    stock: 42,
    rating: 4.8,
    reviews: 112,
    tags: ['Proteínas', 'Probióticos']
  },
  {
    id: 13,
    name: 'Mantequilla Francesa',
    category: 'dairy',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop',
    description: 'Mantequilla francesa de leche fresca, cremosa y deliciosa.',
    stock: 18,
    rating: 4.9,
    reviews: 76,
    tags: ['Francesa', 'Cremosa']
  },

  // Panadería
  {
    id: 14,
    name: 'Pan Integral Artesanal',
    category: 'bakery',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    description: 'Pan integral artesanal, horneado diariamente.',
    stock: 22,
    rating: 4.7,
    reviews: 76,
    tags: ['Artesanal', 'Integral']
  },
  {
    id: 15,
    name: 'Croissants de Mantequilla',
    category: 'bakery',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
    description: 'Croissants de mantequilla francesa, crujientes por fuera y suaves por dentro.',
    stock: 18,
    rating: 4.9,
    reviews: 145,
    tags: ['Francesa', 'Crujiente']
  },
  {
    id: 16,
    name: 'Bagels Multigrano',
    category: 'bakery',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop',
    description: 'Bagels multigrano con semillas, perfectos para el desayuno.',
    stock: 15,
    rating: 4.6,
    reviews: 92,
    tags: ['Multigrano', 'Semillas']
  },

  // Bebidas
  {
    id: 17,
    name: 'Agua Mineral Natural',
    category: 'beverages',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1548839140-5a7b8b4b8b1b?w=400&h=300&fit=crop',
    description: 'Agua mineral natural de manantial, refrescante y pura.',
    stock: 60,
    rating: 4.5,
    reviews: 89,
    tags: ['Natural', 'Manantial']
  },
  {
    id: 18,
    name: 'Jugo de Naranja Natural',
    category: 'beverages',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop',
    description: 'Jugo de naranja 100% natural, sin conservantes.',
    stock: 25,
    rating: 4.6,
    reviews: 67,
    tags: ['100% Natural', 'Sin Conservantes']
  },
  {
    id: 19,
    name: 'Café Premium',
    category: 'beverages',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    description: 'Café premium de grano arábica, tostado artesanalmente.',
    stock: 30,
    rating: 4.8,
    reviews: 178,
    tags: ['Arábica', 'Artesanal']
  },

  // Snacks
  {
    id: 20,
    name: 'Chips de Papas Naturales',
    category: 'snacks',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop',
    description: 'Chips de papas naturales, crujientes y deliciosas.',
    stock: 45,
    rating: 4.4,
    reviews: 123,
    tags: ['Naturales', 'Crujientes']
  },
  {
    id: 21,
    name: 'Nueces Mixtas',
    category: 'snacks',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop',
    description: 'Mezcla de nueces premium, perfectas para picar.',
    stock: 20,
    rating: 4.8,
    reviews: 98,
    tags: ['Premium', 'Mixtas']
  },
  {
    id: 22,
    name: 'Chocolate Artesanal',
    category: 'snacks',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop',
    description: 'Chocolate artesanal belga, 70% cacao.',
    stock: 25,
    rating: 4.9,
    reviews: 156,
    tags: ['Belga', '70% Cacao', 'Artesanal']
  },

  // Congelados
  {
    id: 23,
    name: 'Pizza Margherita Congelada',
    category: 'frozen',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    description: 'Pizza margherita congelada, lista para hornear.',
    stock: 30,
    rating: 4.3,
    reviews: 56,
    tags: ['Margherita', 'Lista para Hornear']
  },
  {
    id: 24,
    name: 'Helado de Vainilla',
    category: 'frozen',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Helado de vainilla cremoso, perfecto para postres.',
    stock: 24,
    rating: 4.7,
    reviews: 89,
    tags: ['Cremoso', 'Vainilla']
  },
  {
    id: 25,
    name: 'Verduras Congeladas',
    category: 'frozen',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Mezcla de verduras congeladas, perfectas para cocinar.',
    stock: 35,
    rating: 4.5,
    reviews: 67,
    tags: ['Mezcla', 'Frescas']
  },

  // Limpieza
  {
    id: 26,
    name: 'Detergente Líquido',
    category: 'cleaning',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
    description: 'Detergente líquido concentrado, eficaz contra manchas.',
    stock: 35,
    rating: 4.5,
    reviews: 78,
    tags: ['Concentrado', 'Eficaz']
  },
  {
    id: 27,
    name: 'Papel Higiénico Premium',
    category: 'cleaning',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
    description: 'Papel higiénico premium, suave y absorbente.',
    stock: 28,
    rating: 4.6,
    reviews: 92,
    tags: ['Premium', 'Suave']
  },

  // Cuidado Personal
  {
    id: 28,
    name: 'Shampoo Natural',
    category: 'personal',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
    description: 'Shampoo natural con ingredientes orgánicos.',
    stock: 22,
    rating: 4.7,
    reviews: 134,
    tags: ['Natural', 'Orgánico']
  },
  {
    id: 29,
    name: 'Crema Hidratante',
    category: 'personal',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
    description: 'Crema hidratante facial con vitamina E.',
    stock: 18,
    rating: 4.8,
    reviews: 89,
    tags: ['Vitamina E', 'Hidratante']
  },

  // Bebé
  {
    id: 30,
    name: 'Pañales Premium',
    category: 'baby',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
    description: 'Pañales premium ultra absorbentes para bebés.',
    stock: 15,
    rating: 4.9,
    reviews: 203,
    tags: ['Ultra Absorbente', 'Premium']
  }
];

export const featuredProducts = products.filter(product => 
  product.rating >= 4.8 || product.discount
).slice(0, 8);

export const bestSellers = products
  .sort((a, b) => b.reviews - a.reviews)
  .slice(0, 10);

export const newArrivals = products
  .sort((a, b) => b.id - a.id)
  .slice(0, 6);

export const onSale = products.filter(product => product.discount).slice(0, 8);
