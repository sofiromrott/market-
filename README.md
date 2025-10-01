# 🛒 SuperMarket - Modern E-commerce Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green?style=for-the-badge)

**A beautifully crafted, modern e-commerce frontend built with React.js**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://sofiromrott.github.io/market-/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/sofiromrott/market-)

</div>

---

## ✨ Overview

SuperMarket is a **stunning, fully-featured e-commerce frontend** that showcases modern web development practices. Built with React.js, it features a sophisticated design system, complete shopping functionality, and mobile-first responsive design.

### 🎯 Key Highlights

- 🎨 **Beautiful UI/UX** with modern design patterns
- 📱 **Mobile-first responsive** design
- 🛒 **Complete shopping experience** with cart management
- ⚡ **High performance** with optimized components
- 🔍 **Advanced filtering** and search capabilities
- 🎭 **Smooth animations** and micro-interactions

---

## 🚀 Features

### 🎨 **Design & User Experience**
- **Modern gradient designs** with sophisticated color schemes
- **Smooth animations** powered by Framer Motion
- **Interactive cards** with hover effects and state management
- **Professional typography** using Inter and Poppins fonts
- **Consistent iconography** with Lucide React
- **Accessible design** following WCAG guidelines

### 📱 **Mobile Optimization**
- **Touch-friendly interface** with 44px minimum touch targets
- **Responsive breakpoints** for all device sizes
- **Mobile navigation** with hamburger menu
- **Optimized scrolling** with momentum scrolling
- **Prevented input zoom** for better UX
- **Adaptive layouts** that work on any screen size

### 🛒 **E-commerce Functionality**
- **Product catalog** with 30+ sample products
- **Advanced filtering** by category, price, and search terms
- **Real-time search** with instant results
- **Shopping cart** with quantity management
- **Product details** with image galleries
- **Checkout process** with form validation
- **Favorites system** for wishlist functionality

### ⚡ **Performance & Technical**
- **React 18** with modern hooks and patterns
- **Context API** for global state management
- **Optimized builds** with code splitting
- **Lazy loading** for better performance
- **Clean code architecture** with reusable components
- **TypeScript-ready** structure

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18.2.0 | Core framework |
| **Routing** | React Router DOM 6.8.0 | Client-side navigation |
| **Styling** | CSS3 + CSS Variables | Design system |
| **Icons** | Lucide React 0.263.1 | Modern iconography |
| **Animations** | Framer Motion 10.16.0 | Smooth transitions |
| **State** | React Context API | Global state management |
| **Build** | Create React App | Development & build tools |
| **Deployment** | GitHub Pages | Hosting platform |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sofiromrott/market-.git
   cd market-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📁 Project Structure

```
src/
├── 📁 components/           # Reusable UI components
│   ├── 📁 Header/          # Navigation header
│   ├── 📁 Footer/          # Site footer
│   ├── 📁 Layout/          # Main layout wrapper
│   └── 📁 ProductCard/     # Product display card
├── 📁 context/             # React Context providers
│   └── 📄 CartContext.js   # Shopping cart state
├── 📁 data/                # Sample data
│   └── 📄 products.js      # Product catalog (30+ items)
├── 📁 pages/               # Application pages
│   ├── 📄 Home.js          # Landing page
│   ├── 📄 Products.js      # Product catalog
│   ├── 📄 ProductDetail.js # Individual product view
│   ├── 📄 Cart.js          # Shopping cart
│   └── 📄 Checkout.js      # Checkout process
├── 📄 App.js               # Main application component
├── 📄 App.css              # Global styles & CSS variables
├── 📄 mobile-optimizations.css # Mobile-specific styles
└── 📄 index.js             # Application entry point
```

---

## 🎨 Design System

### Color Palette
```css
:root {
  --primary-color: #3b82f6;      /* Primary blue */
  --secondary-color: #10b981;     /* Success green */
  --accent-color: #f59e0b;       /* Warning orange */
  --danger-color: #ef4444;       /* Error red */
  --success-color: #22c55e;       /* Success green */
  --text-primary: #1f2937;        /* Dark gray */
  --text-secondary: #6b7280;      /* Medium gray */
  --background: #ffffff;          /* White */
  --surface: #f9fafb;            /* Light gray */
}
```

### Typography
- **Primary Font**: Inter (300, 400, 500, 600, 700, 800)
- **Display Font**: Poppins (400, 500, 600, 700, 800)
- **Monospace**: 'SF Mono', Monaco, 'Cascadia Code', monospace

### Spacing System
- **Base Unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Responsive**: Scales down on mobile devices

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 320px)  { /* Small phones */ }
@media (min-width: 481px)  { /* Large phones */ }
@media (min-width: 641px)  { /* Small tablets */ }
@media (min-width: 769px)  { /* Large tablets */ }
@media (min-width: 1025px) { /* Desktop */ }
@media (min-width: 1281px) { /* Large desktop */ }
```

---

## 🎯 Pages & Features

### 🏠 **Home Page**
- **Hero section** with gradient backgrounds
- **Featured products** carousel
- **Special offers** with discount badges
- **Customer testimonials** with avatars
- **Newsletter signup** form
- **Best sellers** showcase

### 🛍️ **Products Catalog**
- **Advanced filtering** by category, price, rating
- **Real-time search** with instant results
- **Sorting options** (price, popularity, rating)
- **Grid/List view** toggle
- **Pagination** for large catalogs
- **Active filters** display with clear options

### 🛒 **Shopping Cart**
- **Quantity controls** with +/- buttons
- **Item management** (remove, save for later)
- **Price calculations** with tax and shipping
- **Promo code** input field
- **Checkout button** with item count
- **Empty state** with call-to-action

### 📱 **Product Detail**
- **Image gallery** with zoom functionality
- **Product information** (description, specs, reviews)
- **Rating display** with star system
- **Price with discounts** highlighted
- **Add to cart** with quantity selector
- **Social sharing** buttons
- **Related products** suggestions

### 💳 **Checkout Process**
- **Multi-step form** with progress indicator
- **Shipping information** with validation
- **Payment methods** (simulated)
- **Order summary** with itemized breakdown
- **Confirmation page** with order number
- **Email confirmation** (simulated)

---

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server on port 3000 |
| `npm run build` | Creates optimized production build |
| `npm test` | Launches test runner |
| `npm run eject` | Ejects from Create React App |
| `npm run deploy` | Builds and deploys to GitHub Pages |

---

## 📊 Sample Data

The application includes comprehensive sample data:

- **30+ Products** across 10 categories
- **Real product images** from Unsplash
- **Realistic pricing** with discounts and offers
- **Customer ratings** and reviews
- **Product specifications** and descriptions
- **Category hierarchies** for filtering

### Product Categories
- 🥬 Fresh Produce
- 🥛 Dairy & Eggs
- 🍞 Bakery & Bread
- 🥩 Meat & Seafood
- 🍪 Snacks & Sweets
- 🧴 Household Items
- 🧼 Personal Care
- 🍷 Beverages
- 🧊 Frozen Foods
- 🌿 Health & Wellness

---

## 🎨 Customization

### Adding New Products
1. Edit `src/data/products.js`
2. Add product object with required fields:
   ```javascript
   {
     id: 'unique-id',
     name: 'Product Name',
     category: 'Category',
     price: 9.99,
     originalPrice: 12.99,
     image: 'image-url',
     rating: 4.5,
     reviews: 123,
     description: 'Product description',
     tags: ['tag1', 'tag2']
   }
   ```

### Styling Customization
- **Colors**: Modify CSS variables in `src/App.css`
- **Typography**: Update font imports and variables
- **Spacing**: Adjust spacing scale in CSS variables
- **Components**: Customize individual component styles

---

## 🔧 Development

### Code Structure
- **Functional components** with React hooks
- **Custom hooks** for reusable logic
- **Context providers** for global state
- **CSS modules** for component styling
- **Clean architecture** with separation of concerns

### Best Practices
- **Component composition** over inheritance
- **Props validation** with PropTypes
- **Error boundaries** for graceful failures
- **Performance optimization** with React.memo
- **Accessibility** with ARIA attributes

---

## 🌐 Deployment

### GitHub Pages (Current)
The application is automatically deployed to GitHub Pages:

- **Live URL**: https://sofiromrott.github.io/market-/
- **Auto-deployment**: Runs on every push to master
- **Build process**: Optimized for production

### Other Deployment Options
- **Netlify**: Drag & drop deployment
- **Vercel**: Git-based deployment
- **AWS S3**: Static website hosting
- **Firebase Hosting**: Google's hosting platform

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation as needed
- Ensure mobile responsiveness
- Test across different browsers

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Unsplash** for beautiful product images
- **Lucide** for modern iconography
- **React team** for the amazing framework
- **Framer Motion** for smooth animations
- **Create React App** for the development setup

---

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: [Your Email]
- 🐛 **Issues**: [GitHub Issues](https://github.com/sofiromrott/market-/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/sofiromrott/market-/discussions)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**🛒 Happy Shopping with SuperMarket! 🛒**

*Built with ❤️ using React.js*

</div>