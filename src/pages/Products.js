import React, { useState, useMemo } from 'react';
import { Search, Filter, X, Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard/ProductCard';
import { products, categories } from '../data/products';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [selectedCategory, searchTerm, sortBy, priceRange]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setPriceRange([0, 100]);
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Nuestros Productos</h1>
          <p className="page-description">
            Descubre nuestra amplia selección de productos frescos y de calidad
          </p>
        </div>

        {/* Filters and Search */}
        <div className="filters-section">
          <div className="search-and-filters">
            <div className="search-container">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button 
                    className="search-clear"
                    onClick={() => handleSearchChange('')}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="filters-controls">
              <button 
                className="filters-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={20} />
                <span>Filtros</span>
              </button>

              <div className="view-controls">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>

              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Más Popular</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Valorados</option>
                <option value="newest">Más Recientes</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="advanced-filters">
              <div className="filter-group">
                <h4>Categorías</h4>
                <div className="category-filters">
                  <button
                    className={`category-filter ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('all')}
                  >
                    Todas
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.icon} {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h4>Rango de Precio</h4>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="price-slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="price-slider"
                  />
                  <div className="price-values">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button className="clear-filters" onClick={clearFilters}>
                <X size={16} />
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="products-results">
          <div className="results-header">
            <h2 className="results-title">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </h2>
            {(selectedCategory !== 'all' || searchTerm || priceRange[0] > 0 || priceRange[1] < 100) && (
              <div className="active-filters">
                {selectedCategory !== 'all' && (
                  <span className="active-filter">
                    {categories.find(cat => cat.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('all')}>
                      <X size={14} />
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="active-filter">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm('')}>
                      <X size={14} />
                    </button>
                  </span>
                )}
                {(priceRange[0] > 0 || priceRange[1] < 100) && (
                  <span className="active-filter">
                    ${priceRange[0]} - ${priceRange[1]}
                    <button onClick={() => setPriceRange([0, 100])}>
                      <X size={14} />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className={`products-grid ${viewMode}`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <div className="no-products-content">
                <div className="no-products-icon">🔍</div>
                <h3>No se encontraron productos</h3>
                <p>Intenta ajustar tus filtros o términos de búsqueda</p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  Limpiar Filtros
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
