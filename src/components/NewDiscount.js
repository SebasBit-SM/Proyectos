// src/components/NewDiscount.js
import React, { useState } from 'react';

const NewDiscount = () => {
  const [discountData, setDiscountData] = useState({
    mall: '',
    description: '',
    percentage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiscountData({ ...discountData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el descuento a la base de datos
    alert(`Descuento creado: ${discountData.description} (${discountData.percentage}%) en ${discountData.mall}`);
    setDiscountData({ mall: '', description: '', percentage: '' });
  };

  return (
    <div>
      <h1>Crear Nuevo Descuento</h1>
      <form onSubmit={handleSubmit}>
        <label>Mall:</label>
        <input
          type="text"
          name="mall"
          value={discountData.mall}
          onChange={handleChange}
          placeholder="Nombre del centro comercial"
        />

        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={discountData.description}
          onChange={handleChange}
          placeholder="Descripción del descuento"
        />

        <label>Porcentaje de Descuento:</label>
        <input
          type="number"
          name="percentage"
          value={discountData.percentage}
          onChange={handleChange}
          placeholder="Porcentaje de descuento"
        />

        <button type="submit">Crear Descuento</button>
      </form>
    </div>
  );
};

export default NewDiscount;
