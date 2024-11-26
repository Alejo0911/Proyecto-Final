
import React, { useEffect, useState } from 'react';
import Alert from '../components/Alert';
import Cart from '../components/Cart';
import api from '../api';
import './Landing.css';

const Landing = () => {
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = 'user123'; // ID de usuario temporal para pruebas

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setAlert({ type: 'error', message: 'Error al cargar productos' });
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await api.post('/cart', { userId, productId, quantity: 1 });
      setAlert({ type: 'success', message: 'Producto añadido al carrito' });
      setTimeout(() => setAlert({ type: '', message: '' }), 3000);
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al añadir al carrito' });
    }
  };

  return (
    <div className="landing-container">
      {alert.message && <Alert type={alert.type} message={alert.message} />}
      <header className="landing-header">
        <img src="./assets/images/Logo.png" alt="Logo de Tienda Gamer" className="logo" />
        <nav className="navigation">
          <ul>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#carrito">Carrito</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="productos">
          <h2>Productos destacados</h2>
          {loading ? (
            <p>Cargando productos...</p>
          ) : (
            <div className="productos-lista">
              {products.map((product) => (
                <div key={product._id} className="producto-item">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <button onClick={() => handleAddToCart(product._id)}>Añadir al carrito</button>
                </div>
              ))}
            </div>
          )}
        </section>
        <section id="carrito">
          <h2>Mi Carrito</h2>
          <Cart userId={userId} />
        </section>
      </main>
      <footer>
        <p>© 2024 Tienda Gamer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Landing;
