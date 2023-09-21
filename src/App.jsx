import { useState } from "react";
import "./App.css";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";

function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 10,
  });

  // Filtrado de productos
  const filterProducts = (products) => {
    return products.filter((product) => {
      // Guarda el producto si cumple con las condiciones
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { setFilters, filterProducts, filters };
}

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
