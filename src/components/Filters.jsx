import { useState } from "react";
import "./Filters.css";
import { useId } from "react";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceId = useId();
  const categoryId = useId();

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Precio minimo:</label>
        <input
          type="range"
          id={minPriceId}
          min={"0"}
          max={"1000"}
          onChange={handleMinPriceChange}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>Categoria:</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
          <option value="home-decoration">Hogar</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Cremas</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>
    </section>
  );
}
