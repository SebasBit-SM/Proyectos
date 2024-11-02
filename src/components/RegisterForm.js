// src/components/RegisterForm.js
import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};

    // Validación para el nombre: no vacío y solo letras
    if (!formData.firstName.trim()) {
      errors.firstName = 'El nombre es requerido';
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(formData.firstName)) {
      errors.firstName = 'El nombre solo puede contener letras';
    }

    // Validación para el apellido: no vacío y solo letras
    if (!formData.lastName.trim()) {
      errors.lastName = 'El apellido es requerido';
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(formData.lastName)) {
      errors.lastName = 'El apellido solo puede contener letras';
    }

    // Validación para el correo electrónico
    if (!formData.email) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido';
    }

    // Validación para el teléfono: solo números y no vacío
    if (!formData.phone.trim()) {
      errors.phone = 'El teléfono es requerido';
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      errors.phone = 'El teléfono solo puede contener números positivos';
    }

    // Validación para la contraseña: mínimo 6 caracteres
    if (!formData.password) {
      errors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    // Validación para confirmar contraseña: debe coincidir con la contraseña
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Lógica para manejar el envío del formulario
      console.log('Registro exitoso', formData);
      alert('Registro exitoso');
    }
  };

  return (
    <div className="register-form-container">
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}

        <label>Apellido</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}

        <label>Correo Electrónico</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>Teléfono</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p className="error-message">{errors.phone}</p>}

        <label>Contraseña</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <label>Confirmar Contraseña</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
