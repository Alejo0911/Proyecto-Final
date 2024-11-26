
# Tienda Gamer

**Tienda Gamer** aplicación web desarrollada con React para el frontend y Node.js con MongoDB para el backend. Permite a los usuarios:

- Iniciar sesión.
- Ver productos destacados.
- Añadir productos a un carrito persistente.
- Visualizar y gestionar los productos en el carrito.

## Estructura del proyecto

### Frontend
- **Tecnología:** React
- **Ubicación:** Carpeta `src/`
- **Componentes clave:**
  - `Login.js`: Página de inicio de sesión.
  - `Landing.js`: Página principal de la tienda.
  - `Cart.js`: Componente del carrito.

### Backend
- **Tecnología:** Node.js con Express y MongoDB.
- **Ubicación:** Carpeta `backend/`
- **Modelos clave:**
  - `User.js`: Modelo de usuario.
  - `Product.js`: Modelo de producto.
  - `Cart.js`: Modelo de carrito.
- **Rutas clave:**
  - `/api/users`: Manejo de usuarios.
  - `/api/products`: Manejo de productos.
  - `/api/cart`: Manejo del carrito.

## Configuración e instalación

### Prerrequisitos
- Node.js y npm instalados.
- MongoDB en ejecución.

### Instalación
1. Clonar este repositorio.
2. Instalar dependencias:
   ```bash
   cd backend
   npm install
   ```
3. Iniciar el backend:
   ```bash
   node server.js
   ```
4. Iniciar el frontend:
   ```bash
   cd ../
   npm start
   ```

### Uso
1. Abrir el navegador en `http://localhost:3000`.
2. Iniciar sesión y explorar los productos.

## Funcionalidades futuras
- Sistema de registro de usuarios.
- Historial de pedidos.
- Métodos de pago integrados.

---
**Desarrollado por:** Grupo Code Masters
