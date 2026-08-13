# TechStrix 🛒

A full-stack e-commerce web application built with **React**, **Spring Boot**, and **MySQL** — featuring product browsing, cart & wishlist management, a complete checkout flow, and order history tracking.



---

## ✨ Features

- **User Authentication** — Sign up and sign in, with passwords securely hashed before storage
- **Product Catalog** — Browse products with real-time search, brand filtering, and sorting (price low-to-high, price high-to-low, rating)
- **Wishlist** — Save favorite products, persisted across sessions
- **Shopping Cart** — Add, update quantity, and remove items, with cart state persisted locally so it survives page refreshes
- **Checkout** — Delivery details form with validation (phone number, pincode), multiple payment method options (COD, UPI, Card)
- **Order History ("My Orders")** — View past orders with itemized details, including product images
- **Dark/Light Theme Toggle** — User preference remembered across visits
- **Responsive Navbar** — Search, cart, and wishlist access from anywhere in the app

---

## 🛠️ Tech Stack

**Frontend**
- React (Hooks, React Router)
- CSS (custom, theme-aware via CSS variables)
- Deployed on Netlify

**Backend**
- Spring Boot (REST API)
- Spring Data JPA / Hibernate
- MySQL

---

## 📁 Project Structure

```
src/
├── components/
│   ├── navbar/          # Navbar broken into small, reusable components
│   │   ├── Navbar.jsx        # Top-level navbar container
│   │   ├── Logo.jsx
│   │   ├── SearchBar.jsx
│   │   ├── NavLinks.jsx       # Assembles the individual link components
│   │   ├── ProductsLink.jsx
│   │   ├── AuthLink.jsx       # Sign In link / logged-in user menu
│   │   ├── MyOrdersLink.jsx
│   │   ├── NavActions.jsx     # Assembles theme/wishlist/cart/shop-now
│   │   ├── ThemeToggle.jsx
│   │   ├── WishlistButton.jsx
│   │   ├── CartButton.jsx
│   │   └── ShopNowButton.jsx
│   └── hero/
│       └── HeroSection.jsx   # Landing page hero + stats
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Checkout.jsx
│   ├── OrderSuccess.jsx
│   ├── MyOrders.jsx
│   ├── Signin.jsx
│   └── SignUp.jsx
├── ProductCard.jsx
├── data.js
├── App.jsx              # Holds shared state (cart, wishlist, auth, theme) and routes
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- Java 17+ and Maven (for the backend)
- MySQL running locally

### Frontend Setup

```bash
# Clone the repo
git clone https://github.com/Navya-Oggu/TechStrix-REACT-PROJECT.git
cd TechStrix-REACT-PROJECT

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will run at `http://localhost:5173` by default.

### Backend Setup

1. Configure your MySQL connection in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/techstrix
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```
2. Run the Spring Boot application (via your IDE or `mvn spring-boot:run`)
3. The API will be available at `http://localhost:8080`

> **Note:** The frontend currently points to `http://localhost:8080` for API calls. Make sure the backend is running before using features like product browsing, login, checkout, or order history.

---

## 🗺️ API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| POST | `/api/products/bulk` | Bulk upload products |
| POST | `/api/users` | Register a new user |
| POST | `/api/users/login` | Log in a user |
| POST | `/api/orders` | Place a new order |
| GET | `/api/orders?email=` | Fetch order history for a user |

---

## 🔭 Roadmap / Future Improvements

- [ ] JWT-based authentication (currently uses email/password with the logged-in user cached client-side)
- [ ] Admin panel for managing products and order status
- [ ] Payment gateway integration (currently UI-only payment method selection)
- [ ] Automated tests for checkout validation and cart logic
- [ ] Deploy backend (Render/Railway) so the live demo works fully end-to-end

---

## 👩‍💻 Author

**Oggu Navya**
[GitHub](https://github.com/Navya-Oggu) · navyareddyoggu@gmail.com
