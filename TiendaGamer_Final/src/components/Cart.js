
import React, { useState, useEffect } from 'react';
import api from '../api';

const Cart = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get(`/cart/${userId}`);
        setCartItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userId]);

  const removeItemFromCart = async (itemId) => {
    try {
      // Lógica para eliminar del carrito (si se implementa en el backend)
      setCartItems(cartItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  const updateCart = async (productId, quantity) => {
    try {
      const response = await api.post('/cart', { userId, productId, quantity });
      setCartItems([...cartItems, response.data]);
    } catch (error) {
      console.error('Error al actualizar el carrito:', error);
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {loading ? (
        <p>Cargando carrito...</p>
      ) : cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <p>{item.productId.name} - ${item.productId.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => removeItemFromCart(item._id)}>Eliminar</button>
            </div>
          ))}
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
