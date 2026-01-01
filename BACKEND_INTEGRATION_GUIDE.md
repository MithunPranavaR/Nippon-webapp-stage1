# Complete Backend Integration Guide for Royaloak Furniture E-Commerce

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technology Stack Recommendations](#technology-stack-recommendations)
3. [Database Schema Design](#database-schema-design)
4. [API Endpoints Specification](#api-endpoints-specification)
5. [Frontend Integration Steps](#frontend-integration-steps)
6. [Authentication & Authorization](#authentication--authorization)
7. [State Management](#state-management)
8. [File Upload & Asset Management](#file-upload--asset-management)
9. [Payment Gateway Integration](#payment-gateway-integration)
10. [Search & Filtering](#search--filtering)
11. [Caching Strategy](#caching-strategy)
12. [Error Handling](#error-handling)
13. [Security Best Practices](#security-best-practices)
14. [Deployment Guide](#deployment-guide)

---

## 1. Architecture Overview

### Recommended Architecture: Three-Tier Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                         │
│  - React Components                                          │
│  - State Management (Context API / Redux)                    │
│  - API Service Layer                                         │
│  - Route Guards                                              │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/HTTPS
┌─────────────────────────────────────────────────────────────┐
│                  BACKEND API (Node.js/Express)               │
│  - RESTful API Endpoints                                     │
│  - Authentication Middleware                                 │
│  - Business Logic Layer                                      │
│  - Data Validation                                           │
│  - File Upload Handling                                      │
└─────────────────────────────────────────────────────────────┘
                            ↕ SQL Queries
┌─────────────────────────────────────────────────────────────┐
│                   DATABASE (PostgreSQL)                      │
│  - User Data                                                 │
│  - Product Catalog                                           │
│  - Orders & Transactions                                     │
│  - Session Management                                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack Recommendations

### Backend Options

#### Option 1: Node.js + Express (Recommended for React)

```javascript
// Pros:
- Same language as frontend (JavaScript/TypeScript)
- Large ecosystem (npm packages)
- Fast development
- Great for real-time features
- Easy to scale

// Tech Stack:
- Runtime: Node.js 18+
- Framework: Express.js
- ORM: Prisma or Sequelize
- Authentication: JWT + bcrypt
- Validation: Joi or Zod
- File Upload: Multer
- Email: Nodemailer
```

#### Option 2: Python + Django/FastAPI

```python
# Pros:
- Robust and mature
- Excellent for data processing
- Strong security features
- Great admin panel (Django)

# Tech Stack:
- Framework: Django or FastAPI
- ORM: Django ORM or SQLAlchemy
- Authentication: Django Auth or JWT
- Validation: Pydantic (FastAPI)
```

#### Option 3: Java + Spring Boot

```java
// Pros:
- Enterprise-grade
- Excellent for large-scale applications
- Strong typing
- Great performance

// Tech Stack:
- Framework: Spring Boot
- ORM: Hibernate
- Authentication: Spring Security
- Validation: Bean Validation
```

**Recommendation:** Node.js + Express for seamless integration with React frontend.

---

## 3. Database Schema Design

### Complete PostgreSQL Schema

```sql
-- ============================================
-- USERS & AUTHENTICATION
-- ============================================

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_addresses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  address_type VARCHAR(20) CHECK (address_type IN ('shipping', 'billing')),
  full_name VARCHAR(200),
  phone VARCHAR(20),
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  country VARCHAR(100) DEFAULT 'India',
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(500) UNIQUE NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- PRODUCT CATALOG
-- ============================================

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  parent_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  description TEXT,
  image_url VARCHAR(500),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  meta_title VARCHAR(200),
  meta_description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE collections (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  badge_url VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  sku VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  short_description TEXT,
  category_id INTEGER REFERENCES categories(id),
  collection_id INTEGER REFERENCES collections(id),

  -- Pricing
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  discount_percentage INTEGER,

  -- Inventory
  stock_quantity INTEGER DEFAULT 0,
  is_in_stock BOOLEAN DEFAULT TRUE,

  -- Product Details
  material VARCHAR(100),
  dimensions VARCHAR(100), -- e.g., "L120 x W80 x H75 cm"
  weight DECIMAL(8, 2), -- in kg
  color VARCHAR(50),

  -- Flags
  is_featured BOOLEAN DEFAULT FALSE,
  is_new_arrival BOOLEAN DEFAULT FALSE,
  is_best_seller BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,

  -- SEO
  meta_title VARCHAR(200),
  meta_description TEXT,
  meta_keywords TEXT,

  -- Ratings
  average_rating DECIMAL(3, 2) DEFAULT 0.00,
  review_count INTEGER DEFAULT 0,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(255),
  display_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_variants (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  variant_name VARCHAR(100), -- e.g., "Size", "Color"
  variant_value VARCHAR(100), -- e.g., "Queen", "King", "Brown"
  price_adjustment DECIMAL(10, 2) DEFAULT 0.00,
  stock_quantity INTEGER DEFAULT 0,
  sku VARCHAR(50) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_reviews (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(200),
  comment TEXT,
  is_verified_purchase BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- SHOPPING CART & WISHLIST
-- ============================================

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  variant_id INTEGER REFERENCES product_variants(id) ON DELETE SET NULL,
  quantity INTEGER DEFAULT 1,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id, variant_id)
);

CREATE TABLE wishlist_items (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id)
);

-- ============================================
-- ORDERS & PAYMENTS
-- ============================================

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  user_id INTEGER REFERENCES users(id),

  -- Order Status
  status VARCHAR(20) DEFAULT 'pending' CHECK (
    status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')
  ),

  -- Pricing
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0.00,
  shipping_amount DECIMAL(10, 2) DEFAULT 0.00,
  tax_amount DECIMAL(10, 2) DEFAULT 0.00,
  total_amount DECIMAL(10, 2) NOT NULL,

  -- Shipping Address
  shipping_address_id INTEGER REFERENCES user_addresses(id),
  billing_address_id INTEGER REFERENCES user_addresses(id),

  -- Tracking
  tracking_number VARCHAR(100),
  estimated_delivery_date DATE,
  delivered_at TIMESTAMP,

  -- Notes
  customer_notes TEXT,
  admin_notes TEXT,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  variant_id INTEGER REFERENCES product_variants(id),

  product_name VARCHAR(255) NOT NULL, -- Snapshot at time of order
  product_sku VARCHAR(50),

  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0.00,
  total_price DECIMAL(10, 2) NOT NULL,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,

  payment_method VARCHAR(50) NOT NULL, -- 'card', 'upi', 'netbanking', 'cod'
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (
    payment_status IN ('pending', 'processing', 'completed', 'failed', 'refunded')
  ),

  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',

  -- Payment Gateway Details
  transaction_id VARCHAR(100) UNIQUE,
  gateway_name VARCHAR(50), -- 'razorpay', 'paytm', 'stripe'
  gateway_response TEXT, -- JSON response from gateway

  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- STORES & LOCATIONS
-- ============================================

CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  store_code VARCHAR(50) UNIQUE,

  -- Address
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10),

  -- Contact
  phone VARCHAR(20),
  email VARCHAR(255),

  -- Location
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),

  -- Details
  image_url VARCHAR(500),
  opening_hours TEXT, -- JSON format
  facilities TEXT[], -- Array of facilities

  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- CONTENT & MARKETING
-- ============================================

CREATE TABLE banners (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  image_url VARCHAR(500) NOT NULL,
  mobile_image_url VARCHAR(500),
  link_url VARCHAR(500),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  customer_location VARCHAR(100),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  testimonial_text TEXT NOT NULL,
  video_thumbnail_url VARCHAR(500),
  video_url VARCHAR(500),
  is_approved BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP
);

CREATE TABLE contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(200),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (
    status IN ('new', 'in_progress', 'resolved', 'closed')
  ),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- PROMOTIONS & DISCOUNTS
-- ============================================

CREATE TABLE coupons (
  id SERIAL PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  discount_type VARCHAR(20) CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10, 2) NOT NULL,
  min_order_amount DECIMAL(10, 2) DEFAULT 0.00,
  max_discount_amount DECIMAL(10, 2),
  usage_limit INTEGER,
  usage_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  valid_from TIMESTAMP,
  valid_until TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_coupon_usage (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  coupon_id INTEGER REFERENCES coupons(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id),
  used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, coupon_id, order_id)
);

-- ============================================
-- ANALYTICS & TRACKING
-- ============================================

CREATE TABLE product_views (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  session_id VARCHAR(100),
  ip_address VARCHAR(45),
  viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recently_viewed (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id)
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_collection ON products(collection_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_is_active ON products(is_active);
CREATE INDEX idx_products_is_featured ON products(is_featured);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_cart_user ON cart_items(user_id);
CREATE INDEX idx_wishlist_user ON wishlist_items(user_id);
CREATE INDEX idx_product_views_product ON product_views(product_id);
CREATE INDEX idx_recently_viewed_user ON recently_viewed(user_id);
```

---

## 4. API Endpoints Specification

For a categorized view of APIs based on Frontend usage (Main Page vs Navigation), please refer to `API_STRUCTURE.md`.

### 4.1 Authentication APIs

```javascript
// POST /api/auth/register
// Register new user
Request Body:
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "9876543210"
}

Response (201):
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "userId": 123,
    "email": "user@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}

// POST /api/auth/login
// User login
Request Body:
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

Response (200):
{
  "success": true,
  "data": {
    "userId": 123,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}

// POST /api/auth/logout
// User logout
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Logged out successfully"
}

// POST /api/auth/refresh-token
// Refresh JWT token
Request Body:
{
  "refreshToken": "old_token_here"
}

Response (200):
{
  "success": true,
  "data": {
    "token": "new_token_here",
    "expiresIn": 3600
  }
}

// POST /api/auth/forgot-password
// Request password reset
Request Body:
{
  "email": "user@example.com"
}

Response (200):
{
  "success": true,
  "message": "Password reset link sent to email"
}

// POST /api/auth/reset-password
// Reset password with token
Request Body:
{
  "token": "reset_token_from_email",
  "newPassword": "NewSecurePass123!"
}

Response (200):
{
  "success": true,
  "message": "Password reset successfully"
}
```

### 4.2 Product APIs

```javascript
// GET /api/products
// Get all products with pagination and filters
Query Parameters:
- page: number (default: 1)
- limit: number (default: 20)
- category: string
- collection: string
- minPrice: number
- maxPrice: number
- sortBy: string ('price_asc', 'price_desc', 'newest', 'popular')
- search: string

Response (200):
{
  "success": true,
  "data": {
    "products": [
      {
        "id": 1154,
        "sku": "CT-ATOM-001",
        "name": "Royaloak Atom Center Table in Sheesham Wood",
        "slug": "atom-center-table-sheesham",
        "price": 8990.00,
        "originalPrice": 16699.00,
        "discountPercentage": 46,
        "images": [
          {
            "url": "https://example.com/image1.jpg",
            "altText": "Atom Center Table",
            "isPrimary": true
          }
        ],
        "category": {
          "id": 5,
          "name": "Center Tables",
          "slug": "center-tables"
        },
        "collection": {
          "id": 2,
          "name": "Wood World",
          "badgeUrl": "https://example.com/badge.png"
        },
        "isInStock": true,
        "stockQuantity": 15,
        "isBestSeller": true,
        "isNewArrival": false,
        "averageRating": 4.5,
        "reviewCount": 23
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 10,
      "totalItems": 200,
      "itemsPerPage": 20
    }
  }
}

// GET /api/products/:id
// Get single product details
Response (200):
{
  "success": true,
  "data": {
    "id": 1154,
    "sku": "CT-ATOM-001",
    "name": "Royaloak Atom Center Table in Sheesham Wood",
    "slug": "atom-center-table-sheesham",
    "description": "Full product description...",
    "shortDescription": "Brief description...",
    "price": 8990.00,
    "originalPrice": 16699.00,
    "discountPercentage": 46,
    "material": "Sheesham Wood",
    "dimensions": "L90 x W60 x H45 cm",
    "weight": 25.5,
    "color": "Natural Brown",
    "images": [...],
    "variants": [...],
    "category": {...},
    "collection": {...},
    "relatedProducts": [...],
    "reviews": [...],
    "averageRating": 4.5,
    "reviewCount": 23,
    "isInStock": true,
    "stockQuantity": 15
  }
}

// GET /api/products/best-sellers
// Get best-selling products
Query Parameters:
- limit: number (default: 10)

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1154,
      "name": "Royaloak Atom Center Table",
      "price": 8990.00,
      "originalPrice": 16699.00,
      "images": [...],
      "slug": "atom-center-table"
    }
  ]
}

// GET /api/products/new-arrivals
// Get new arrival products
Query Parameters:
- limit: number (default: 10)

Response (200):
{
  "success": true,
  "data": [...]
}

// GET /api/products/featured
// Get featured products
Response (200):
{
  "success": true,
  "data": [...]
}

// POST /api/products/search
// Search products
Request Body:
{
  "query": "sofa",
  "filters": {
    "category": "living",
    "minPrice": 10000,
    "maxPrice": 50000
  },
  "page": 1,
  "limit": 20
}

Response (200):
{
  "success": true,
  "data": {
    "products": [...],
    "pagination": {...},
    "facets": {
      "categories": [...],
      "priceRanges": [...],
      "materials": [...]
    }
  }
}
```

### 4.3 Cart APIs

```javascript
// GET /api/cart
// Get user's cart
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 1,
        "product": {
          "id": 1154,
          "name": "Royaloak Atom Center Table",
          "price": 8990.00,
          "image": "https://example.com/image.jpg"
        },
        "variant": {
          "id": 5,
          "name": "Size",
          "value": "Large"
        },
        "quantity": 2,
        "subtotal": 17980.00
      }
    ],
    "summary": {
      "subtotal": 17980.00,
      "discount": 0.00,
      "shipping": 0.00,
      "tax": 3236.40,
      "total": 21216.40
    }
  }
}

// POST /api/cart/add
// Add item to cart
Headers: Authorization: Bearer <token>
Request Body:
{
  "productId": 1154,
  "variantId": 5,
  "quantity": 1
}

Response (201):
{
  "success": true,
  "message": "Item added to cart",
  "data": {
    "cartItemId": 123,
    "cartTotal": 21216.40
  }
}

// PUT /api/cart/update/:itemId
// Update cart item quantity
Headers: Authorization: Bearer <token>
Request Body:
{
  "quantity": 3
}

Response (200):
{
  "success": true,
  "message": "Cart updated",
  "data": {
    "cartTotal": 31974.60
  }
}

// DELETE /api/cart/remove/:itemId
// Remove item from cart
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Item removed from cart"
}

// DELETE /api/cart/clear
// Clear entire cart
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Cart cleared"
}
```

### 4.4 Wishlist APIs

```javascript
// GET /api/wishlist
// Get user's wishlist
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "product": {
        "id": 1154,
        "name": "Royaloak Atom Center Table",
        "price": 8990.00,
        "originalPrice": 16699.00,
        "image": "https://example.com/image.jpg",
        "isInStock": true
      },
      "addedAt": "2025-01-15T10:30:00Z"
    }
  ]
}

// POST /api/wishlist/add
// Add product to wishlist
Headers: Authorization: Bearer <token>
Request Body:
{
  "productId": 1154
}

Response (201):
{
  "success": true,
  "message": "Added to wishlist"
}

// DELETE /api/wishlist/remove/:productId
// Remove product from wishlist
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Removed from wishlist"
}

// POST /api/wishlist/move-to-cart/:productId
// Move wishlist item to cart
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Item moved to cart"
}
```

### 4.5 Order APIs

```javascript
// POST /api/orders/create
// Create new order
Headers: Authorization: Bearer <token>
Request Body:
{
  "shippingAddressId": 5,
  "billingAddressId": 5,
  "paymentMethod": "card",
  "couponCode": "HAPPY500",
  "customerNotes": "Please deliver before 5 PM"
}

Response (201):
{
  "success": true,
  "message": "Order created successfully",
  "data": {
    "orderId": 12345,
    "orderNumber": "ORD-2025-12345",
    "totalAmount": 21216.40,
    "paymentUrl": "https://payment-gateway.com/pay/xyz123" // For online payment
  }
}

// GET /api/orders
// Get user's orders
Headers: Authorization: Bearer <token>
Query Parameters:
- page: number
- limit: number
- status: string

Response (200):
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": 12345,
        "orderNumber": "ORD-2025-12345",
        "status": "shipped",
        "totalAmount": 21216.40,
        "itemCount": 2,
        "createdAt": "2025-01-15T10:30:00Z",
        "estimatedDelivery": "2025-01-20"
      }
    ],
    "pagination": {...}
  }
}

// GET /api/orders/:id
// Get order details
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "data": {
    "id": 12345,
    "orderNumber": "ORD-2025-12345",
    "status": "shipped",
    "items": [
      {
        "productName": "Royaloak Atom Center Table",
        "quantity": 2,
        "unitPrice": 8990.00,
        "totalPrice": 17980.00,
        "image": "https://example.com/image.jpg"
      }
    ],
    "shippingAddress": {...},
    "billingAddress": {...},
    "payment": {
      "method": "card",
      "status": "completed",
      "transactionId": "TXN123456"
    },
    "pricing": {
      "subtotal": 17980.00,
      "discount": 500.00,
      "shipping": 0.00,
      "tax": 3236.40,
      "total": 20716.40
    },
    "trackingNumber": "TRACK123456",
    "estimatedDelivery": "2025-01-20",
    "createdAt": "2025-01-15T10:30:00Z"
  }
}

// GET /api/orders/track/:orderNumber
// Track order status (public endpoint)
Response (200):
{
  "success": true,
  "data": {
    "orderNumber": "ORD-2025-12345",
    "status": "shipped",
    "trackingNumber": "TRACK123456",
    "estimatedDelivery": "2025-01-20",
    "timeline": [
      {
        "status": "confirmed",
        "timestamp": "2025-01-15T10:30:00Z",
        "description": "Order confirmed"
      },
      {
        "status": "processing",
        "timestamp": "2025-01-16T09:00:00Z",
        "description": "Order is being processed"
      },
      {
        "status": "shipped",
        "timestamp": "2025-01-17T14:30:00Z",
        "description": "Order shipped"
      }
    ]
  }
}

// POST /api/orders/:id/cancel
// Cancel order
Headers: Authorization: Bearer <token>
Request Body:
{
  "reason": "Changed my mind"
}

Response (200):
{
  "success": true,
  "message": "Order cancelled successfully"
}
```

### 4.6 Category & Collection APIs

```javascript
// GET /api/categories
// Get all categories with hierarchy
Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Living",
      "slug": "living",
      "imageUrl": "https://example.com/living.jpg",
      "children": [
        {
          "id": 2,
          "name": "Sofas",
          "slug": "sofas",
          "productCount": 150
        },
        {
          "id": 3,
          "name": "Recliners",
          "slug": "recliners",
          "productCount": 45
        }
      ]
    }
  ]
}

// GET /api/collections
// Get all collections
Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Italian Collection",
      "slug": "italian-collection",
      "description": "Premium Italian furniture",
      "imageUrl": "https://example.com/italian.jpg",
      "badgeUrl": "https://example.com/italian-badge.png",
      "productCount": 200
    }
  ]
}
```

### 4.7 Store Locator APIs

```javascript
// GET /api/stores
// Get all stores
Query Parameters:
- state: string
- city: string
- pincode: string

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Royaloak Bangalore - Koramangala",
      "storeCode": "BLR-KRM-001",
      "address": "123 Main Street, Koramangala",
      "city": "Bangalore",
      "state": "Karnataka",
      "pincode": "560034",
      "phone": "080-12345678",
      "email": "koramangala@royaloak.com",
      "latitude": 12.9352,
      "longitude": 77.6245,
      "imageUrl": "https://example.com/store.jpg",
      "openingHours": {
        "monday": "10:00 AM - 8:00 PM",
        "tuesday": "10:00 AM - 8:00 PM",
        "sunday": "10:00 AM - 6:00 PM"
      },
      "facilities": ["Parking", "Wheelchair Access", "Cafe"]
    }
  ]
}

// GET /api/stores/nearby
// Get nearby stores based on coordinates
Query Parameters:
- latitude: number
- longitude: number
- radius: number (in km, default: 10)

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Royaloak Bangalore - Koramangala",
      "distance": 2.5, // in km
      "address": "123 Main Street, Koramangala",
      "phone": "080-12345678"
    }
  ]
}
```

### 4.8 User Profile APIs

```javascript
// GET /api/user/profile
// Get user profile
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "data": {
    "id": 123,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "9876543210",
    "addresses": [
      {
        "id": 5,
        "type": "shipping",
        "fullName": "John Doe",
        "phone": "9876543210",
        "addressLine1": "123 Main Street",
        "city": "Bangalore",
        "state": "Karnataka",
        "pincode": "560034",
        "isDefault": true
      }
    ],
    "createdAt": "2024-01-01T00:00:00Z"
  }
}

// PUT /api/user/profile
// Update user profile
Headers: Authorization: Bearer <token>
Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "9876543210"
}

Response (200):
{
  "success": true,
  "message": "Profile updated successfully"
}

// POST /api/user/addresses
// Add new address
Headers: Authorization: Bearer <token>
Request Body:
{
  "type": "shipping",
  "fullName": "John Doe",
  "phone": "9876543210",
  "addressLine1": "123 Main Street",
  "addressLine2": "Apartment 4B",
  "city": "Bangalore",
  "state": "Karnataka",
  "pincode": "560034",
  "isDefault": true
}

Response (201):
{
  "success": true,
  "message": "Address added successfully",
  "data": {
    "addressId": 5
  }
}

// PUT /api/user/addresses/:id
// Update address
Headers: Authorization: Bearer <token>
Request Body: (same as add address)

Response (200):
{
  "success": true,
  "message": "Address updated successfully"
}

// DELETE /api/user/addresses/:id
// Delete address
Headers: Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Address deleted successfully"
}
```

### 4.9 Review APIs

```javascript
// POST /api/products/:productId/reviews
// Add product review
Headers: Authorization: Bearer <token>
Request Body:
{
  "rating": 5,
  "title": "Excellent product!",
  "comment": "Very happy with the quality and design."
}

Response (201):
{
  "success": true,
  "message": "Review submitted successfully. It will be published after approval."
}

// GET /api/products/:productId/reviews
// Get product reviews
Query Parameters:
- page: number
- limit: number
- sortBy: string ('newest', 'highest_rated', 'lowest_rated')

Response (200):
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": 1,
        "user": {
          "name": "John D.",
          "isVerifiedPurchase": true
        },
        "rating": 5,
        "title": "Excellent product!",
        "comment": "Very happy with the quality...",
        "createdAt": "2025-01-10T15:30:00Z"
      }
    ],
    "pagination": {...},
    "summary": {
      "averageRating": 4.5,
      "totalReviews": 23,
      "ratingDistribution": {
        "5": 15,
        "4": 5,
        "3": 2,
        "2": 1,
        "1": 0
      }
    }
  }
}
```

### 4.10 Newsletter API

```javascript
// POST /api/newsletter/subscribe
// Subscribe to newsletter
Request Body:
{
  "email": "user@example.com"
}

Response (201):
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}

// POST /api/newsletter/unsubscribe
// Unsubscribe from newsletter
Request Body:
{
  "email": "user@example.com"
}

Response (200):
{
  "success": true,
  "message": "Successfully unsubscribed"
}
```

### 4.11 Contact & Support APIs

```javascript
// POST /api/contact/submit
// Submit contact form
Request Body:
{
  "name": "John Doe",
  "email": "user@example.com",
  "phone": "9876543210",
  "subject": "Product Inquiry",
  "message": "I would like to know more about..."
}

Response (201):
{
  "success": true,
  "message": "Your inquiry has been submitted. We'll get back to you soon.",
  "data": {
    "ticketId": "TKT-12345"
  }
}

// GET /api/faq
// Get FAQ data
Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "question": "What types of wooden furniture do you offer?",
      "answer": "We stock a wide range of wooden furniture...",
      "category": "Products",
      "displayOrder": 1
    }
  ]
}
```

### 4.12 Analytics & Tracking APIs

```javascript
// POST /api/analytics/product-view
// Track product view
Request Body:
{
  "productId": 1154,
  "sessionId": "sess_abc123"
}

Response (200):
{
  "success": true
}

// GET /api/user/recently-viewed
// Get recently viewed products
Headers: Authorization: Bearer <token>
Query Parameters:
- limit: number (default: 10)

Response (200):
{
  "success": true,
  "data": [
    {
      "product": {...},
      "viewedAt": "2025-01-15T10:30:00Z"
    }
  ]
}
```

---

## 5. Frontend Integration Steps

### 5.1 Create API Service Layer

Create `src/services/api.ts`:

```typescript
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Base configuration
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001/api";

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Request interceptor - Add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - Handle errors
    this.client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error.response?.status === 401) {
          // Token expired - redirect to login
          localStorage.removeItem("authToken");
          window.location.href = "/login";
        }
        return Promise.reject(error.response?.data || error.message);
      }
    );
  }

  // Generic methods
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get(url, config);
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.client.post(url, data, config);
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.client.put(url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.delete(url, config);
  }
}

export const apiService = new ApiService();
```

### 5.2 Create Specific Service Modules

Create `src/services/productService.ts`:

```typescript
import { apiService } from "./api";

export interface Product {
  id: number;
  sku: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  images: Array<{
    url: string;
    altText: string;
    isPrimary: boolean;
  }>;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  collection?: {
    id: number;
    name: string;
    badgeUrl: string;
  };
  isInStock: boolean;
  stockQuantity: number;
  isBestSeller: boolean;
  isNewArrival: boolean;
  averageRating: number;
  reviewCount: number;
}

export interface ProductListResponse {
  success: boolean;
  data: {
    products: Product[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    };
  };
}

export const productService = {
  // Get all products
  async getProducts(params?: {
    page?: number;
    limit?: number;
    category?: string;
    collection?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    search?: string;
  }): Promise<ProductListResponse> {
    return apiService.get("/products", { params });
  },

  // Get single product
  async getProduct(id: number): Promise<{ success: boolean; data: Product }> {
    return apiService.get(`/products/${id}`);
  },

  // Get best sellers
  async getBestSellers(
    limit: number = 10
  ): Promise<{ success: boolean; data: Product[] }> {
    return apiService.get("/products/best-sellers", { params: { limit } });
  },

  // Get new arrivals
  async getNewArrivals(
    limit: number = 10
  ): Promise<{ success: boolean; data: Product[] }> {
    return apiService.get("/products/new-arrivals", { params: { limit } });
  },

  // Search products
  async searchProducts(
    query: string,
    filters?: any
  ): Promise<ProductListResponse> {
    return apiService.post("/products/search", { query, filters });
  },
};
```

Create `src/services/authService.ts`:

```typescript
import { apiService } from "./api";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
  };
}

export const authService = {
  // Login
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    if (response.success && response.data.token) {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response;
  },

  // Register
  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(
      "/auth/register",
      data
    );
    if (response.success && response.data.token) {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response;
  },

  // Logout
  async logout(): Promise<void> {
    await apiService.post("/auth/logout");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  },

  // Get current user
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem("authToken");
  },
};
```

Create `src/services/cartService.ts`:

```typescript
import { apiService } from "./api";

export interface CartItem {
  id: number;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  variant?: {
    id: number;
    name: string;
    value: string;
  };
  quantity: number;
  subtotal: number;
}

export interface CartResponse {
  success: boolean;
  data: {
    items: CartItem[];
    summary: {
      subtotal: number;
      discount: number;
      shipping: number;
      tax: number;
      total: number;
    };
  };
}

export const cartService = {
  // Get cart
  async getCart(): Promise<CartResponse> {
    return apiService.get("/cart");
  },

  // Add to cart
  async addToCart(productId: number, variantId?: number, quantity: number = 1) {
    return apiService.post("/cart/add", { productId, variantId, quantity });
  },

  // Update cart item
  async updateCartItem(itemId: number, quantity: number) {
    return apiService.put(`/cart/update/${itemId}`, { quantity });
  },

  // Remove from cart
  async removeFromCart(itemId: number) {
    return apiService.delete(`/cart/remove/${itemId}`);
  },

  // Clear cart
  async clearCart() {
    return apiService.delete("/cart/clear");
  },
};
```

### 5.3 Update Components to Use API Services

Update `src/sections/MainContent/components/BestSellers.tsx`:

```typescript
import { ProductCarousel } from "@/components/ProductCarousel";
import { useState, useEffect } from "react";
import { productService, Product } from "@/services/productService";

export const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        setLoading(true);
        const response = await productService.getBestSellers(10);

        if (response.success) {
          // Transform API data to match component props
          const transformedProducts = response.data.map((product) => ({
            productId: product.id.toString(),
            productUenc: "", // Generate if needed
            formKey: "", // Get from session
            productUrl: `/products/${product.slug}`,
            productTitle: product.name,
            imageUrl:
              product.images.find((img) => img.isPrimary)?.url ||
              product.images[0]?.url,
            imageAlt:
              product.images.find((img) => img.isPrimary)?.altText ||
              product.name,
            discountPercentage: product.discountPercentage
              ? `${product.discountPercentage}% off`
              : undefined,
            badgeText: product.isBestSeller ? "Best Seller" : undefined,
            badgeVariant: "bg-red-800",
            collectionUrl: product.collection
              ? `/collections/${product.collection.slug}`
              : undefined,
            collectionImageUrl: product.collection?.badgeUrl,
            hasRating: product.reviewCount > 0,
            currentPrice: `₹${product.price.toLocaleString("en-IN")}.00`,
            originalPrice: product.originalPrice
              ? `₹${product.originalPrice.toLocaleString("en-IN")}.00`
              : undefined,
            priceVariant:
              "items-start box-border gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
            hasAddToCart: true,
            hasCollectionBadge: !!product.collection,
          }));

          setProducts(transformedProducts);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch best sellers");
        console.error("Error fetching best sellers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  if (loading) {
    return (
      <section className="relative box-border caret-transparent break-words pb-[30px] md:pb-[70px]">
        <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
          <div className="text-center py-10">
            <p>Loading best sellers...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative box-border caret-transparent break-words pb-[30px] md:pb-[70px]">
        <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
          <div className="text-center py-10 text-red-600">
            <p>Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative box-border caret-transparent break-words pb-[30px] md:pb-[70px]">
      <div className="box-border caret-transparent break-words"></div>
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words">
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3">
              <div className="relative box-border caret-transparent break-words w-full mb-[5px] md:mb-5">
                <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words text-center">
                  Best Sellers
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent break-words w-full z-[1]">
          <ProductCarousel
            carouselVariant="translate-x-[-1750px] w-[2101px] md:translate-x-[-2320px] md:w-[3481px]"
            products={products}
          />
          <div className="box-border caret-transparent break-words">
            <button
              type="button"
              role="presentation"
              aria-label="previous"
              className="absolute bg-transparent caret-transparent block break-words text-center align-middle bg-[position:0px_0px] p-0 -left-2 top-[35%]"
            >
              <span
                aria-label="Previous"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
              >
                ‹
              </span>
            </button>
            <button
              type="button"
              role="presentation"
              aria-label="next"
              className="absolute bg-transparent caret-transparent hidden opacity-50 break-words pointer-events-none text-center align-middle bg-[position:0px_0px] p-0 -right-2 top-[35%]"
            >
              <span
                aria-label="Next"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
              >
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### 5.4 Environment Variables

Create `.env` file:

```bash
# API Configuration
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_API_TIMEOUT=10000

# Authentication
REACT_APP_JWT_SECRET=your-secret-key-here
REACT_APP_TOKEN_EXPIRY=3600

# Payment Gateway
REACT_APP_RAZORPAY_KEY=rzp_test_xxxxx
REACT_APP_RAZORPAY_SECRET=xxxxx

# File Upload
REACT_APP_MAX_FILE_SIZE=5242880
REACT_APP_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp

# External Services
REACT_APP_WHATSAPP_NUMBER=918951965911
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-key

# Feature Flags
REACT_APP_ENABLE_REVIEWS=true
REACT_APP_ENABLE_WISHLIST=true
REACT_APP_ENABLE_COD=true
```

---

## 6. Authentication & Authorization

### 6.1 JWT Implementation (Backend)

```javascript
// backend/middleware/auth.js
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRY = "24h";

// Generate JWT token
function generateToken(userId, email) {
  return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}

// Verify JWT token middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access token required",
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
    req.user = user;
    next();
  });
}

// Optional authentication (for guest users)
function optionalAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (!err) {
        req.user = user;
      }
    });
  }
  next();
}

module.exports = { generateToken, authenticateToken, optionalAuth };
```

### 6.2 Password Hashing (Backend)

```javascript
// backend/utils/password.js
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = { hashPassword, comparePassword };
```

### 6.3 Protected Routes (Frontend)

Create `src/components/ProtectedRoute.tsx`:

```typescript
import { Navigate } from "react-router-dom";
import { authService } from "@/services/authService";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
```

---

## 7. State Management

### 7.1 Context API Implementation

Create `src/context/AuthContext.tsx`:

```typescript
import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "@/services/authService";

interface User {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authService.login({ email, password });
    setUser(response.data);
  };

  const register = async (data: any) => {
    const response = await authService.register(data);
    setUser(response.data);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
```

Create `src/context/CartContext.tsx`:

```typescript
import React, { createContext, useContext, useState, useEffect } from "react";
import { cartService, CartItem } from "@/services/cartService";
import { useAuth } from "./AuthContext";

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  total: number;
  loading: boolean;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  updateQuantity: (itemId: number, quantity: number) => Promise<void>;
  removeItem: (itemId: number) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const refreshCart = async () => {
    if (!isAuthenticated) {
      setItems([]);
      setTotal(0);
      return;
    }

    try {
      setLoading(true);
      const response = await cartService.getCart();
      if (response.success) {
        setItems(response.data.items);
        setTotal(response.data.summary.total);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshCart();
  }, [isAuthenticated]);

  const addToCart = async (productId: number, quantity: number = 1) => {
    try {
      await cartService.addToCart(productId, undefined, quantity);
      await refreshCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    try {
      await cartService.updateCartItem(itemId, quantity);
      await refreshCart();
    } catch (error) {
      console.error("Error updating cart:", error);
      throw error;
    }
  };

  const removeItem = async (itemId: number) => {
    try {
      await cartService.removeFromCart(itemId);
      await refreshCart();
    } catch (error) {
      console.error("Error removing item:", error);
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      await cartService.clearCart();
      setItems([]);
      setTotal(0);
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
        total,
        loading,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
```

### 7.2 Wrap App with Providers

Update `src/index.tsx`:

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## 8. File Upload & Asset Management

### 8.1 Backend File Upload (Node.js + Multer)

```javascript
// backend/middleware/upload.js
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads/products";

    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPEG, PNG, and WebP are allowed."),
      false
    );
  }
};

// Configure multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

module.exports = upload;
```

### 8.2 Image Upload Endpoint

```javascript
// backend/routes/upload.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { authenticateToken } = require("../middleware/auth");

// Upload single image
router.post("/image", authenticateToken, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  const imageUrl = `/uploads/products/${req.file.filename}`;

  res.status(200).json({
    success: true,
    data: {
      url: imageUrl,
      filename: req.file.filename,
      size: req.file.size,
    },
  });
});

// Upload multiple images
router.post(
  "/images",
  authenticateToken,
  upload.array("images", 5),
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const imageUrls = req.files.map((file) => ({
      url: `/uploads/products/${file.filename}`,
      filename: file.filename,
      size: file.size,
    }));

    res.status(200).json({
      success: true,
      data: imageUrls,
    });
  }
);

module.exports = router;
```

### 8.3 Cloud Storage (AWS S3 Alternative)

```javascript
// backend/services/cloudStorage.js
const AWS = require("aws-sdk");

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

async function uploadToS3(file, folder = "products") {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `${folder}/${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  const result = await s3.upload(params).promise();
  return result.Location; // Returns public URL
}

async function deleteFromS3(fileUrl) {
  const key = fileUrl.split(".com/")[1]; // Extract key from URL

  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
  };

  await s3.deleteObject(params).promise();
}

module.exports = { uploadToS3, deleteFromS3 };
```

---

## 9. Payment Gateway Integration

### 9.1 Razorpay Integration (Recommended for India)

#### Backend Setup

```javascript
// backend/services/paymentService.js
const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
async function createRazorpayOrder(amount, currency = "INR", receipt) {
  const options = {
    amount: amount * 100, // Amount in paise
    currency: currency,
    receipt: receipt,
    payment_capture: 1, // Auto capture
  };

  const order = await razorpay.orders.create(options);
  return order;
}

// Verify payment signature
function verifyPaymentSignature(orderId, paymentId, signature) {
  const text = orderId + "|" + paymentId;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(text)
    .digest("hex");

  return expectedSignature === signature;
}

module.exports = { createRazorpayOrder, verifyPaymentSignature };
```

#### Payment Endpoints

```javascript
// backend/routes/payment.js
const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/auth");
const {
  createRazorpayOrder,
  verifyPaymentSignature,
} = require("../services/paymentService");
const db = require("../db");

// Create payment order
router.post("/create-order", authenticateToken, async (req, res) => {
  try {
    const { orderId } = req.body;

    // Get order details from database
    const order = await db.query(
      "SELECT * FROM orders WHERE id = $1 AND user_id = $2",
      [orderId, req.user.userId]
    );

    if (order.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const orderData = order.rows[0];

    // Create Razorpay order
    const razorpayOrder = await createRazorpayOrder(
      orderData.total_amount,
      "INR",
      orderData.order_number
    );

    res.status(200).json({
      success: true,
      data: {
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        keyId: process.env.RAZORPAY_KEY_ID,
      },
    });
  } catch (error) {
    console.error("Payment order creation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create payment order",
    });
  }
});

// Verify payment
router.post("/verify", authenticateToken, async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    const isValid = verifyPaymentSignature(orderId, paymentId, signature);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    // Update payment status in database
    await db.query(
      `UPDATE payments 
       SET payment_status = 'completed', 
           transaction_id = $1, 
           paid_at = CURRENT_TIMESTAMP 
       WHERE order_id = (SELECT id FROM orders WHERE order_number = $2)`,
      [paymentId, orderId]
    );

    // Update order status
    await db.query(
      `UPDATE orders 
       SET status = 'confirmed' 
       WHERE order_number = $1`,
      [orderId]
    );

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
    });
  }
});

module.exports = router;
```

#### Frontend Integration

```typescript
// src/services/paymentService.ts
import { apiService } from "./api";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const paymentService = {
  async initiatePayment(orderId: number) {
    try {
      // Create payment order
      const response = await apiService.post("/payment/create-order", {
        orderId,
      });

      const options = {
        key: response.data.keyId,
        amount: response.data.amount,
        currency: response.data.currency,
        name: "Royaloak Furniture",
        description: "Furniture Purchase",
        order_id: response.data.orderId,
        handler: async function (response: any) {
          // Verify payment
          await apiService.post("/payment/verify", {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });

          // Redirect to success page
          window.location.href = `/order-success/${orderId}`;
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#1e293b", // Slate-950 color
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      throw error;
    }
  },
};
```

---

## 10. Search & Filtering

### 10.1 Full-Text Search (PostgreSQL)

```sql
-- Add full-text search column
ALTER TABLE products ADD COLUMN search_vector tsvector;

-- Create index for full-text search
CREATE INDEX idx_products_search ON products USING GIN(search_vector);

-- Update search vector on insert/update
CREATE OR REPLACE FUNCTION products_search_trigger() RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.name, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.sku, '')), 'C');
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_search_update
  BEFORE INSERT OR UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION products_search_trigger();
```

### 10.2 Search API Implementation

```javascript
// backend/routes/products.js
router.post("/search", async (req, res) => {
  try {
    const { query, filters = {}, page = 1, limit = 20 } = req.body;
    const offset = (page - 1) * limit;

    let sqlQuery = `
      SELECT 
        p.*,
        c.name as category_name,
        c.slug as category_slug,
        col.name as collection_name,
        col.badge_url as collection_badge_url,
        ts_rank(p.search_vector, plainto_tsquery('english', $1)) as rank
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN collections col ON p.collection_id = col.id
      WHERE p.search_vector @@ plainto_tsquery('english', $1)
        AND p.is_active = true
    `;

    const params = [query];
    let paramIndex = 2;

    // Apply filters
    if (filters.category) {
      sqlQuery += ` AND c.slug = $${paramIndex}`;
      params.push(filters.category);
      paramIndex++;
    }

    if (filters.minPrice) {
      sqlQuery += ` AND p.price >= $${paramIndex}`;
      params.push(filters.minPrice);
      paramIndex++;
    }

    if (filters.maxPrice) {
      sqlQuery += ` AND p.price <= $${paramIndex}`;
      params.push(filters.maxPrice);
      paramIndex++;
    }

    // Sorting
    sqlQuery += ` ORDER BY rank DESC, p.created_at DESC`;

    // Pagination
    sqlQuery += ` LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await db.query(sqlQuery, params);

    // Get total count
    const countQuery = `
      SELECT COUNT(*) 
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.search_vector @@ plainto_tsquery('english', $1)
        AND p.is_active = true
    `;
    const countResult = await db.query(countQuery, [query]);
    const totalItems = parseInt(countResult.rows[0].count);

    res.status(200).json({
      success: true,
      data: {
        products: result.rows,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalItems / limit),
          totalItems: totalItems,
          itemsPerPage: limit,
        },
      },
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({
      success: false,
      message: "Search failed",
    });
  }
});
```

---

## 11. Caching Strategy

### 11.1 Redis Caching (Backend)

```javascript
// backend/services/cacheService.js
const redis = require("redis");

const client = redis.createClient({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
});

client.on("error", (err) => console.error("Redis error:", err));

// Cache middleware
function cacheMiddleware(duration = 300) {
  return async (req, res, next) => {
    const key = `cache:${req.originalUrl}`;

    try {
      const cachedData = await client.get(key);

      if (cachedData) {
        return res.status(200).json(JSON.parse(cachedData));
      }

      // Store original send function
      const originalSend = res.json.bind(res);

      // Override send function to cache response
      res.json = (data) => {
        client.setex(key, duration, JSON.stringify(data));
        return originalSend(data);
      };

      next();
    } catch (error) {
      console.error("Cache error:", error);
      next();
    }
  };
}

// Clear cache by pattern
async function clearCache(pattern) {
  const keys = await client.keys(pattern);
  if (keys.length > 0) {
    await client.del(...keys);
  }
}

module.exports = { cacheMiddleware, clearCache };
```

### 11.2 Apply Caching to Routes

```javascript
// backend/routes/products.js
const { cacheMiddleware } = require("../services/cacheService");

// Cache product list for 5 minutes
router.get("/", cacheMiddleware(300), async (req, res) => {
  // ... product list logic
});

// Cache single product for 10 minutes
router.get("/:id", cacheMiddleware(600), async (req, res) => {
  // ... single product logic
});
```

---

## 12. Error Handling

### 12.1 Global Error Handler (Backend)

```javascript
// backend/middleware/errorHandler.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

function errorHandler(err, req, res, next) {
  let { statusCode = 500, message } = err;

  // Log error
  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
  });

  // Don't leak error details in production
  if (process.env.NODE_ENV === "production" && !err.isOperational) {
    message = "Something went wrong";
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
}

module.exports = { AppError, errorHandler };
```

### 12.2 Error Handling (Frontend)

```typescript
// src/utils/errorHandler.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errors?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleApiError(error: any): string {
  if (error.response) {
    // Server responded with error
    return error.response.data?.message || "An error occurred";
  } else if (error.request) {
    // Request made but no response
    return "No response from server. Please check your connection.";
  } else {
    // Something else happened
    return error.message || "An unexpected error occurred";
  }
}

// Usage in components
try {
  await productService.getProducts();
} catch (error) {
  const errorMessage = handleApiError(error);
  setError(errorMessage);
}
```

---

## 13. Security Best Practices

### 13.1 Input Validation (Backend)

```javascript
// backend/middleware/validation.js
const Joi = require("joi");

// Product validation schema
const productSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  price: Joi.number().positive().required(),
  categoryId: Joi.number().integer().positive().required(),
  description: Joi.string().max(5000),
  stockQuantity: Joi.number().integer().min(0).required(),
});

// Validation middleware
function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));

      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: errors,
      });
    }

    next();
  };
}

module.exports = { validate, productSchema };
```

### 13.2 Rate Limiting

```javascript
// backend/middleware/rateLimiter.js
const rateLimit = require("express-rate-limit");

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

// Strict limiter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 attempts per 15 minutes
  message: {
    success: false,
    message: "Too many login attempts, please try again later.",
  },
});

module.exports = { apiLimiter, authLimiter };
```

### 13.3 CORS Configuration

```javascript
// backend/server.js
const cors = require("cors");

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
```

### 13.4 SQL Injection Prevention

```javascript
// ALWAYS use parameterized queries
// ✅ GOOD - Parameterized query
const result = await db.query("SELECT * FROM products WHERE id = $1", [
  productId,
]);

// ❌ BAD - String concatenation (vulnerable to SQL injection)
const result = await db.query(`SELECT * FROM products WHERE id = ${productId}`);
```

### 13.5 XSS Prevention

```javascript
// backend/middleware/sanitize.js
const xss = require("xss");

function sanitizeInput(req, res, next) {
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === "string") {
        req.body[key] = xss(req.body[key]);
      }
    });
  }
  next();
}

module.exports = sanitizeInput;
```

---

## 14. Deployment Guide

### 14.1 Backend Deployment (Node.js on AWS/Heroku)

#### Heroku Deployment

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create new app
heroku create royaloak-api

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-secret-key
heroku config:set RAZORPAY_KEY_ID=your-key
heroku config:set RAZORPAY_KEY_SECRET=your-secret

# Deploy
git push heroku main

# Run migrations
heroku run npm run migrate
```

#### AWS EC2 Deployment

```bash
# 1. Launch EC2 instance (Ubuntu 22.04)
# 2. SSH into instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# 3. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 4. Install PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# 5. Clone repository
git clone https://github.com/your-repo/royaloak-backend.git
cd royaloak-backend

# 6. Install dependencies
npm install

# 7. Set up environment variables
nano .env
# Add all environment variables

# 8. Run migrations
npm run migrate

# 9. Install PM2 for process management
sudo npm install -g pm2

# 10. Start application
pm2 start server.js --name royaloak-api

# 11. Set up PM2 to start on boot
pm2 startup
pm2 save

# 12. Install Nginx as reverse proxy
sudo apt-get install nginx

# 13. Configure Nginx
sudo nano /etc/nginx/sites-available/royaloak-api

# Add configuration:
server {
    listen 80;
    server_name api.royaloak.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 14. Enable site and restart Nginx
sudo ln -s /etc/nginx/sites-available/royaloak-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# 15. Set up SSL with Let's Encrypt
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d api.royaloak.com
```

### 14.2 Database Backup Strategy

```bash
# Automated daily backups
# Create backup script: /home/ubuntu/backup-db.sh

#!/bin/bash
BACKUP_DIR="/home/ubuntu/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DB_NAME="royaloak_db"

mkdir -p $BACKUP_DIR

pg_dump $DB_NAME > $BACKUP_DIR/backup_$TIMESTAMP.sql

# Keep only last 7 days of backups
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete

# Add to crontab
# crontab -e
# 0 2 * * * /home/ubuntu/backup-db.sh
```

### 14.3 Frontend Deployment (Vercel/Netlify)

#### Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard
# REACT_APP_API_URL=https://api.royaloak.com
```

#### Build Configuration

```json
// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && vercel --prod"
  }
}
```

---

## 15. Complete Backend Server Setup

### 15.1 Express Server Structure

```
backend/
├── server.js                 # Entry point
├── config/
│   ├── database.js          # Database configuration
│   └── constants.js         # App constants
├── middleware/
│   ├── auth.js              # Authentication middleware
│   ├── validation.js        # Input validation
│   ├── errorHandler.js      # Error handling
│   ├── rateLimiter.js       # Rate limiting
│   └── upload.js            # File upload
├── routes/
│   ├── auth.js              # Auth routes
│   ├── products.js          # Product routes
│   ├── cart.js              # Cart routes
│   ├── orders.js            # Order routes
│   ├── users.js             # User routes
│   ├── payment.js           # Payment routes
│   └── stores.js            # Store locator routes
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
├── services/
│   ├── emailService.js      # Email notifications
│   ├── paymentService.js    # Payment processing
│   ├── cacheService.js      # Redis caching
│   └── cloudStorage.js      # File storage
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Order.js
│   └── Cart.js
├── utils/
│   ├── password.js          # Password hashing
│   ├── jwt.js               # JWT utilities
│   └── validators.js        # Custom validators
├── migrations/              # Database migrations
├── seeds/                   # Database seeds
├── tests/                   # Unit & integration tests
├── .env                     # Environment variables
├── .env.example             # Example env file
├── package.json
└── README.md
```

### 15.2 Complete Server.js

```javascript
// backend/server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const { errorHandler } = require("./middleware/errorHandler");
const { apiLimiter } = require("./middleware/rateLimiter");

// Import routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/users");
const paymentRoutes = require("./routes/payment");
const storeRoutes = require("./routes/stores");
const newsletterRoutes = require("./routes/newsletter");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet()); // Security headers
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined")); // Logging

// Rate limiting
app.use("/api/", apiLimiter);

// Serve static files (uploads)
app.use("/uploads", express.static("uploads"));

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/user", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/contact", contactRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});
```

---

## 16. Testing Strategy

### 16.1 Backend Unit Tests (Jest)

```javascript
// backend/tests/auth.test.js
const request = require("supertest");
const app = require("../server");

describe("Authentication API", () => {
  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const response = await request(app).post("/api/auth/register").send({
        email: "test@example.com",
        password: "SecurePass123!",
        firstName: "Test",
        lastName: "User",
        phone: "9876543210",
      });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty("token");
    });

    it("should reject duplicate email", async () => {
      const response = await request(app).post("/api/auth/register").send({
        email: "existing@example.com",
        password: "SecurePass123!",
        firstName: "Test",
        lastName: "User",
      });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe("POST /api/auth/login", () => {
    it("should login with valid credentials", async () => {
      const response = await request(app).post("/api/auth/login").send({
        email: "test@example.com",
        password: "SecurePass123!",
      });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty("token");
    });

    it("should reject invalid credentials", async () => {
      const response = await request(app).post("/api/auth/login").send({
        email: "test@example.com",
        password: "WrongPassword",
      });

      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
    });
  });
});
```

### 16.2 Frontend Integration Tests

```typescript
// src/tests/BestSellers.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { BestSellers } from "@/sections/MainContent/components/BestSellers";
import { productService } from "@/services/productService";

jest.mock("@/services/productService");

describe("BestSellers Component", () => {
  it("should display best sellers", async () => {
    const mockProducts = [
      {
        id: 1,
        name: "Test Product",
        price: 1000,
        images: [{ url: "test.jpg", altText: "Test", isPrimary: true }],
      },
    ];

    (productService.getBestSellers as jest.Mock).mockResolvedValue({
      success: true,
      data: mockProducts,
    });

    render(<BestSellers />);

    await waitFor(() => {
      expect(screen.getByText("Best Sellers")).toBeInTheDocument();
      expect(screen.getByText("Test Product")).toBeInTheDocument();
    });
  });

  it("should display error message on API failure", async () => {
    (productService.getBestSellers as jest.Mock).mockRejectedValue(
      new Error("API Error")
    );

    render(<BestSellers />);

    await waitFor(() => {
      expect(screen.getByText(/Error/i)).toBeInTheDocument();
    });
  });
});
```

---

## 17. Performance Optimization

### 17.1 Database Query Optimization

```sql
-- Use EXPLAIN ANALYZE to check query performance
EXPLAIN ANALYZE
SELECT * FROM products
WHERE category_id = 5
  AND is_active = true
ORDER BY created_at DESC
LIMIT 20;

-- Add composite indexes for common queries
CREATE INDEX idx_products_category_active ON products(category_id, is_active);
CREATE INDEX idx_products_collection_active ON products(collection_id, is_active);
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
```

### 17.2 API Response Pagination

```javascript
// backend/utils/pagination.js
function paginate(page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  return { limit, offset };
}

function paginationMeta(totalItems, page, limit) {
  return {
    currentPage: parseInt(page),
    totalPages: Math.ceil(totalItems / limit),
    totalItems: totalItems,
    itemsPerPage: parseInt(limit),
    hasNextPage: page * limit < totalItems,
    hasPrevPage: page > 1,
  };
}

module.exports = { paginate, paginationMeta };
```

### 17.3 Image Optimization

```javascript
// backend/middleware/imageOptimizer.js
const sharp = require("sharp");

async function optimizeImage(file, options = {}) {
  const { width = 800, height = 600, quality = 80, format = "webp" } = options;

  const optimized = await sharp(file.buffer)
    .resize(width, height, { fit: "inside", withoutEnlargement: true })
    .toFormat(format, { quality })
    .toBuffer();

  return optimized;
}

module.exports = { optimizeImage };
```

---

## 18. Monitoring & Logging

### 18.1 Application Logging

```javascript
// backend/utils/logger.js
const winston = require("winston");

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

module.exports = logger;
```

### 18.2 API Monitoring

```javascript
// backend/middleware/monitoring.js
const logger = require("../utils/logger");

function requestLogger(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    logger.info({
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      userAgent: req.get("user-agent"),
    });
  });

  next();
}

module.exports = requestLogger;
```

---

## 19. Email Notifications

### 19.1 Email Service Setup

```javascript
// backend/services/emailService.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendOrderConfirmation(order, user) {
  const mailOptions = {
    from: '"Royaloak Furniture" <noreply@royaloak.com>',
    to: user.email,
    subject: `Order Confirmation - ${order.orderNumber}`,
    html: `
      <h1>Thank you for your order!</h1>
      <p>Order Number: ${order.orderNumber}</p>
      <p>Total Amount: ₹${order.totalAmount}</p>
      <p>Estimated Delivery: ${order.estimatedDelivery}</p>
      <a href="${process.env.FRONTEND_URL}/orders/${order.id}">Track Your Order</a>
    `,
  };

  await transporter.sendMail(mailOptions);
}

async function sendWelcomeEmail(user) {
  const mailOptions = {
    from: '"Royaloak Furniture" <noreply@royaloak.com>',
    to: user.email,
    subject: "Welcome to Royaloak!",
    html: `
      <h1>Welcome ${user.firstName}!</h1>
      <p>Thank you for joining Royaloak Furniture.</p>
      <p>Enjoy ₹500 off on your first purchase with code: HAPPY500</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendOrderConfirmation, sendWelcomeEmail };
```

---

## 20. Quick Start Guide

### Step-by-Step Integration

#### Step 1: Set Up Backend

```bash
# 1. Create backend directory
mkdir royaloak-backend
cd royaloak-backend

# 2. Initialize Node.js project
npm init -y

# 3. Install dependencies
npm install express pg cors helmet morgan bcrypt jsonwebtoken dotenv
npm install --save-dev nodemon jest supertest

# 4. Create database
createdb royaloak_db

# 5. Run SQL schema (from section 3)
psql royaloak_db < schema.sql

# 6. Create .env file
cp .env.example .env
# Edit .env with your configuration

# 7. Start development server
npm run dev
```

#### Step 2: Update Frontend

```bash
# 1. Install axios for API calls
npm install axios

# 2. Create service files (from section 5)
# - src/services/api.ts
# - src/services/productService.ts
# - src/services/authService.ts
# - src/services/cartService.ts

# 3. Create context providers (from section 7)
# - src/context/AuthContext.tsx
# - src/context/CartContext.tsx

# 4. Update components to use services
# - Update BestSellers.tsx
# - Update NewArrivals.tsx
# - Update PopularCategories.tsx

# 5. Add environment variables
# Create .env file with API_URL

# 6. Test integration
npm run dev
```

#### Step 3: Test End-to-End

```bash
# 1. Start backend
cd royaloak-backend
npm run dev

# 2. Start frontend (in new terminal)
cd royaloak-frontend
npm run dev

# 3. Test key flows:
# - User registration
# - User login
# - Browse products
# - Add to cart
# - Checkout
# - Order tracking
```

---

## 21. Troubleshooting Common Issues

### Issue 1: CORS Errors

```javascript
// Solution: Update CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "https://yourdomain.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
```

### Issue 2: Database Connection Errors

```javascript
// Solution: Check PostgreSQL connection
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // Maximum number of clients
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully");
  }
});
```

### Issue 3: Token Expiration

```typescript
// Solution: Implement token refresh
// src/services/api.ts
this.client.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh token
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("/api/auth/refresh-token", {
          refreshToken,
        });

        const { token } = response.data.data;
        localStorage.setItem("authToken", token);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return this.client(originalRequest);
      } catch (refreshError) {
        // Refresh failed - logout user
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
```

---

## 22. Production Checklist

### Backend Checklist

- [ ] Environment variables properly configured
- [ ] Database migrations run successfully
- [ ] SSL certificate installed
- [ ] CORS configured for production domain
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] Error logging configured
- [ ] Database backups automated
- [ ] Payment gateway in live mode
- [ ] Email service configured
- [ ] File upload limits set
- [ ] API documentation generated
- [ ] Load testing completed
- [ ] Security audit performed

### Frontend Checklist

- [ ] API URLs point to production backend
- [ ] Environment variables set in hosting platform
- [ ] Error boundaries implemented
- [ ] Loading states for all async operations
- [ ] Form validation on client side
- [ ] Analytics tracking configured
- [ ] SEO meta tags added
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Browser compatibility tested
- [ ] Mobile responsiveness verified
- [ ] Accessibility (a11y) compliance
- [ ] Build optimization completed

---

## 23. Maintenance & Monitoring

### 23.1 Database Maintenance

```sql
-- Regular maintenance tasks

-- Vacuum and analyze (run weekly)
VACUUM ANALYZE;

-- Reindex (run monthly)
REINDEX DATABASE royaloak_db;

-- Check table sizes
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Check slow queries
SELECT
  query,
  calls,
  total_time,
  mean_time,
  max_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

### 23.2 Application Monitoring

```javascript
// backend/monitoring/healthCheck.js
const db = require("../config/database");
const redis = require("../services/cacheService");

async function healthCheck() {
  const health = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    services: {},
  };

  // Check database
  try {
    await db.query("SELECT 1");
    health.services.database = "healthy";
  } catch (error) {
    health.services.database = "unhealthy";
    health.status = "unhealthy";
  }

  // Check Redis
  try {
    await redis.client.ping();
    health.services.redis = "healthy";
  } catch (error) {
    health.services.redis = "unhealthy";
  }

  // Check disk space
  const diskUsage = await checkDiskSpace();
  health.services.disk = diskUsage < 90 ? "healthy" : "warning";

  return health;
}

module.exports = healthCheck;
```

---

## 24. API Response Standards

### Standard Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  },
  "meta": {
    "timestamp": "2025-01-15T10:30:00Z",
    "version": "1.0"
  }
}
```

### Standard Error Response

```json
{
  "success": false,
  "message": "Error message here",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ],
  "meta": {
    "timestamp": "2025-01-15T10:30:00Z",
    "requestId": "req_abc123"
  }
}
```

---

## 25. Additional Resources

### Recommended Libraries

**Backend:**

- `express` - Web framework
- `pg` - PostgreSQL client
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT authentication
- `joi` - Input validation
- `multer` - File upload
- `nodemailer` - Email sending
- `helmet` - Security headers
- `cors` - CORS handling
- `morgan` - HTTP logging
- `winston` - Application logging
- `redis` - Caching
- `razorpay` - Payment gateway

**Frontend:**

- `axios` - HTTP client
- `react-query` - Data fetching & caching
- `react-hook-form` - Form handling
- `zod` - Schema validation
- `react-toastify` - Notifications

### Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [JWT.io](https://jwt.io/)
- [Razorpay API Docs](https://razorpay.com/docs/api/)
- [React Query Docs](https://tanstack.com/query/latest)

---

**Document Version:** 1.0  
**Last Updated:** December 27, 2025  
**Author:** Anima Development Team
