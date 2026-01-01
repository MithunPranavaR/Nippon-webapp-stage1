# Royaloak Furniture Website - API & Navigation Links Documentation

## Overview

This document provides a comprehensive list of all APIs, navigation links, and their purposes within the Royaloak furniture e-commerce website.

---

## 1. NAVIGATION LINKS

### 1.1 Top Bar Links

**Location:** `src/sections/Header/components/TopBar.tsx`

| Link Text         | Original URL         | Current URL | Purpose                                          |
| ----------------- | -------------------- | ----------- | ------------------------------------------------ |
| Track Order       | `/ordertracking/`    | `#`         | Allow customers to track their order status      |
| Royaloak Stores   | `/mw-store-locator/` | `#`         | Find physical store locations across India       |
| Franchise Enquiry | `/franchise/`        | `#`         | Business partnership and franchise opportunities |
| About Us          | `/about-us/`         | `#`         | Company information and history                  |
| Customer Support  | `/contactus/`        | `#`         | Contact form and support information             |
| Careers           | `/careers/`          | `#`         | Job openings and career opportunities            |

### 1.2 Main Navigation Menu

**Location:** `src/sections/MobileSidebar/components/MobileNavMenu.tsx`

#### International Collection

- **Italian** - Italian furniture collection
- **American** - American furniture collection
- **Malaysian** - Malaysian furniture collection
- **Wood World** - Wooden furniture collection

#### Living Room

- **Sofas** - All sofa categories (fabric, leather, wooden, sofa sets, sofa cum beds)
- **Recliners** - Recliner chairs
- **Seating** - Accent chairs, lounge chairs
- **Tables** - Center tables, side tables, console tables

#### Bedroom

- **Beds** - All bed types (queen, king, with/without storage, bunk beds, kids beds)
- **Wardrobes** - 2-door, 3-door, 4-door, 5-door wardrobes
- **Tables** - Dressing tables, side tables
- **Decor** - Bedsheets, carpets, bath mats, ottomans, etc.

#### Mattresses

- **By Size** - Single, queen, king mattresses
- **By Type** - Memory foam, orthopedic, spring mattresses

#### Dining

- **Tables & Sets** - Dining tables, dining sets (4-seater, 6-seater, 8-seater)
- **Chairs & Storage** - Dining chairs, bar stools, kitchen cabinets, sideboards

#### Study & Office

- **Tables** - Study tables, computer tables, office tables, writing desks
- **Chairs & Storage** - Office chairs, study chairs, bookshelves, filing cabinets

#### Outdoor

- Outdoor furniture, patio sets, outdoor tables, swings, garden chairs

#### Decor

- **Wall Decor** - Wall paintings, wall clocks, mirrors, wall shelves
- **Table Decor** - Vases, figurines, candle holders, table lamps
- **Spiritual** - Buddha idols, Ganesha idols, spiritual idols, artificial flowers

#### Furnishings

- Cushions, cushion covers, curtains, bedsheets, carpets, rugs, bath mats, door mats

---

## 2. USER ACCOUNT LINKS

### 2.1 Account Actions

**Location:** `src/sections/Header/components/NavbarActions.tsx`

| Action   | Original URL               | Current URL | Purpose                         |
| -------- | -------------------------- | ----------- | ------------------------------- |
| Login    | `/customer/account/login/` | `#`         | User authentication and login   |
| Wishlist | `/wishlist/`               | `#`         | Save favorite products          |
| Cart     | `/checkout/cart/`          | `#`         | View shopping cart and checkout |

---

## 3. PRODUCT LINKS

### 3.1 Popular Categories

**Location:** `src/sections/MainContent/components/PopularCategories/CategoryGrid.tsx`

| Category       | Original URL                                     | Purpose                     |
| -------------- | ------------------------------------------------ | --------------------------- |
| Recliner       | `/living/recliners.html`                         | Browse recliner chairs      |
| Sofa           | `/living/sofas.html`                             | Browse all sofas            |
| Dining Set     | `/dining/dining-tables-sets.html`                | Browse dining sets          |
| Beds           | `/bedroom/beds.html`                             | Browse all beds             |
| Study Tables   | `/study-office/tables/study-tables.html`         | Browse study tables         |
| Mattress       | `/bedroom/mattresses.html`                       | Browse mattresses           |
| Decor          | `/decor.html`                                    | Browse home decor items     |
| Wardrobes      | `/bedroom/wardrobes.html`                        | Browse wardrobes            |
| Chairs         | `/study-office/chairs.html`                      | Browse chairs               |
| Outdoor        | `/outdoors/outdoor-furniture/outdoor-table.html` | Browse outdoor furniture    |
| Dressing Table | `/bedroom/bedroom-tables/dressing-tables.html`   | Browse dressing tables      |
| Coffee Tables  | `/living/center-table.html`                      | Browse coffee/center tables |

### 3.2 Spotlight Section

**Location:** `src/sections/MainContent/components/Spotlight.tsx`

| Item         | Original URL                                   | Purpose                |
| ------------ | ---------------------------------------------- | ---------------------- |
| Center Table | `/living/center-table.html`                    | Featured center tables |
| Fabric Sofa  | `/living/sofas/fabric-sofa.html`               | Featured fabric sofas  |
| Dresser      | `/bedroom/bedroom-tables/dressing-tables.html` | Featured dressers      |
| Dining Table | `/dining/dining-tables-sets.html`              | Featured dining tables |
| Bed          | `/bedroom/beds.html`                           | Featured beds          |

### 3.3 International Collections

**Location:** `src/sections/MainContent/components/InternationalCollections/CollectionGrid.tsx`

| Collection       | Original URL                                    | Purpose                        |
| ---------------- | ----------------------------------------------- | ------------------------------ |
| American Store   | `/country-collection/american-collection.html`  | American furniture collection  |
| Italian Store    | `/country-collection/italian-collection.html`   | Italian furniture collection   |
| Malaysian Store  | `/country-collection/malaysian-collection.html` | Malaysian furniture collection |
| Wood World Store | `/country-collection/emperor-collection.html`   | Wooden furniture collection    |

---

## 4. PROMOTIONAL LINKS

### 4.1 Hero Carousel

**Location:** `src/sections/MainContent/components/HeroCarousel/CarouselSlider.tsx`

| Banner             | Original URL                             | Purpose                              |
| ------------------ | ---------------------------------------- | ------------------------------------ |
| Wedding Collection | `/wedding`                               | Special wedding furniture collection |
| Ottoman Sale       | `/decor/furniture-accents/ottomans.html` | Ottoman products on sale             |
| Add-on Sale 2025   | `/addon-sale-2025`                       | Special add-on sale promotion        |
| Store Locator      | `/mw-store-locator/`                     | Find nearby stores                   |
| Popular Categories | `#popular-cat`                           | Jump to popular categories section   |

### 4.2 Banner Promotions

**Location:** `src/sections/MainContent/index.tsx`

| Promotion           | Original URL                                     | Purpose                                   |
| ------------------- | ------------------------------------------------ | ----------------------------------------- |
| New Customer Signup | `/customer/account/create/`                      | Register new account with welcome bonus   |
| Bank Offers         | `/bank-offers/`                                  | View bank-specific offers and EMI options |
| Clearance Sale      | `/clearance-sale`                                | Clearance sale items                      |
| Smart Storage       | `/catalog/category/view/s/smart-storage/id/720/` | Smart storage solutions                   |

---

## 5. STORE LOCATOR LINKS

### 5.1 State-wise Store Links

**Location:** `src/sections/MainContent/components/StoresCarousel/StoresSlider.tsx`

All store locator links point to: `/mw-store-locator/`

**States Featured:**

- Karnataka (52 stores)
- Tamil Nadu (28 stores)
- Telangana (25 stores)
- Andhra Pradesh (15 stores)
- Delhi (7 stores)
- Maharashtra (7 stores)
- Kerala (6 stores)
- Odisha (4 stores)
- Assam (3 stores)
- Madhya Pradesh (3 stores)
- Bihar (2 stores)
- Chattisgarh (2 stores)
- Jharkhand (2 stores)
- Rajasthan (2 stores)
- Gujarat (1 store)
- Meghalaya (1 store)
- Nagaland (1 store)
- Punjab (1 store)
- Uttar Pradesh (1 store)

---

## 6. PRODUCT DETAIL LINKS

### 6.1 Best Sellers

**Location:** `src/sections/MainContent/components/BestSellers.tsx`

Products link to individual product detail pages (currently set to `#`)

**Product IDs Referenced:**

- 1154 - Atom Center Table
- 1514 - Ashoka Dining Table
- 11311 - Rome Italian Wardrobe
- 12313 - Tivoli Italian Bedroom Set
- 13831 - Rome Italian Side Board
- 14186 - Logan Computer Table
- 18648 - Melaka Malaysian Sofa
- 19967 - Genting Malaysian Bed

### 6.2 New Arrivals

**Location:** `src/sections/MainContent/components/NewArrivals.tsx`

**Product IDs Referenced:**

- 27695 - Contemporary Wall Clock Pink
- 27692 - Contemporary Wall Clock Green & Gold
- 27689 - Modern Wall Clock Grey
- 27686 - Wooden & Jute Wall Clock
- 27683 - Black & Gold Aluminum Wall Clock
- 27680 - Contemporary Wall Clock Prime
- 27677 - Turin Italian Right Lounger
- 27671 - Turin Italian Left Lounger

### 6.3 Recently Viewed

**Location:** `src/sections/MainContent/components/RecentlyViewed.tsx`

**Product IDs Referenced:**

- 22597 - Dallas American Dresser
- 19760 - Hilton Wooden Dining Table
- 21967 - Texas American Office Table 1.6M
- 21964 - Texas American Office Table 1.4M
- 21961 - Texas American Office Table 1.2M
- 21697 - Texas American Shoe Rack
- 21694 - New York American Wardrobe 3 Door
- 21691 - New York American Wardrobe 2 Door

---

## 7. DECOR & SPECIAL SECTIONS

### 7.1 Royal Decor

**Location:** `src/sections/MainContent/components/RoyalDecor/DecorGrid.tsx`

| Category           | Original URL                                      | Purpose                        |
| ------------------ | ------------------------------------------------- | ------------------------------ |
| Idols              | `/decor/spiritual.html`                           | Spiritual and decorative idols |
| Plants & Planters  | `/decor/home-garden/plants-planters.html`         | Indoor plants and planters     |
| Figurines          | `/decor/table-decor/figurines.html`               | Decorative figurines           |
| Artificial Flowers | `/decor/home-garden/artificial-flowers.html`      | Artificial flower arrangements |
| Vases              | `/decor/vases.html`                               | Decorative vases               |
| Cushion Covers     | `/furnishing/cushions-covers/cushion-covers.html` | Cushion covers                 |
| Crystal Wall Art   | `/decor/wall-decor/crystal-wall-paintings.html`   | Crystal wall paintings         |
| Candle Holders     | `/decor/table-decor/candle-stand.html`            | Candle stands and holders      |

### 7.2 Limited Time Deals

**Location:** `src/sections/MainContent/components/LimitedTimeDeals/DealsCarousel.tsx`

| Deal               | Original URL                          | Purpose                     |
| ------------------ | ------------------------------------- | --------------------------- |
| Spot Deal Offer    | `/spot-deal-offer-tc`                 | Time-limited special offers |
| New Customer Bonus | `/customer/account/create/`           | HAPPY500 welcome bonus      |
| Accent Chairs      | `/living/seatings/accent-chairs.html` | Accent chair deals          |
| Add-on Sale 2025   | `/addon-sale-2025`                    | Add-on sale promotion       |
| Spiritual Decor    | `/decor/spiritual.html`               | Home decor deals            |

---

## 8. BRAND MARKETPLACE

### 8.1 Brands on Royaloak

**Location:** `src/sections/MainContent/components/BrandsCarousel/BrandsSlider.tsx`

| Brand                 | Shop URL        | Purpose                         |
| --------------------- | --------------- | ------------------------------- |
| Aakriti Art Creations | `/shop/IN1031/` | Art and decor brand             |
| Gudsmith              | `/shop/IN1069/` | Furniture brand                 |
| Takasho               | `/shop/IN1145/` | Outdoor furniture brand         |
| Tara Candles          | `/shop/IN1004/` | Candle and home fragrance brand |

---

## 9. FOOTER LINKS

### 9.1 About Royaloak

**Location:** `src/sections/Footer/components/FooterLinks.tsx`

| Link          | URL                  | Purpose                           |
| ------------- | -------------------- | --------------------------------- |
| About Us      | `/about-us`          | Company information               |
| Store Locator | `/mw-store-locator/` | Find physical stores              |
| Blogs         | `/blogs/`            | Company blog and articles         |
| Media         | `/media-/`           | Press releases and media coverage |
| Career        | `/careers/`          | Job opportunities                 |

### 9.2 Partner With Us

| Link                | URL                          | Purpose                    |
| ------------------- | ---------------------------- | -------------------------- |
| Become a Franchisee | `/franchise/`                | Franchise opportunities    |
| Rent Your Property  | `/rent-your-property/`       | Property rental for stores |
| Sell With Royaloak  | `/marketplace/seller/login/` | Seller marketplace login   |
| Bulk Enquiry        | `/bulk-order/`               | Bulk order inquiries       |

### 9.3 Services

| Link            | URL                   | Purpose                           |
| --------------- | --------------------- | --------------------------------- |
| Dismantling     | `/dismantle-service/` | Furniture dismantling service     |
| Re-Installation | `/re-installation/`   | Furniture re-installation service |
| Loose Fitting   | `/loose-fitting/`     | Furniture fitting service         |
| Complaints      | `/contactus/`         | Customer complaints and feedback  |

### 9.4 Need Help

| Link           | URL                  | Purpose                    |
| -------------- | -------------------- | -------------------------- |
| My Account     | `/customer/account/` | Customer account dashboard |
| Track Order    | `/ordertracking/`    | Order tracking             |
| Contact Us     | `/contactus/`        | Contact form               |
| Policies       | `/policies/`         | Company policies           |
| Privacy Policy | `/privacy-policy/`   | Privacy policy details     |

---

## 10. SOCIAL MEDIA LINKS

**Location:** `src/sections/Footer/components/FooterColumn.tsx`

| Platform  | URL                                               | Purpose                     |
| --------- | ------------------------------------------------- | --------------------------- |
| Facebook  | `https://www.facebook.com/royaloakfurnitureindia` | Social media presence       |
| Instagram | `https://www.instagram.com/royaloakfurniture.in/` | Social media presence       |
| YouTube   | `https://www.youtube.com/@RoyaloakFurnitureIndia` | Video content and tutorials |
| Pinterest | `https://in.pinterest.com/royaloakfurniture/`     | Design inspiration          |
| LinkedIn  | `https://in.linkedin.com/company/royaloak`        | Professional network        |

---

## 11. CONTENT & SEO LINKS

### 11.1 Content Section Links

**Location:** `src/sections/MainContent/components/ContentSection.tsx`

These are SEO-optimized internal links within the content:

| Link Text          | URL                                              | Purpose                    |
| ------------------ | ------------------------------------------------ | -------------------------- |
| Outdoor Furniture  | `/outdoors/outdoor-furniture.html`               | Outdoor furniture category |
| Coffee Tables      | `/living/center-table.html`                      | Coffee table category      |
| Wardrobes          | `/bedroom/wardrobes.html`                        | Wardrobe category          |
| Recliners          | `/living/recliners.html`                         | Recliner category          |
| Outdoor Sets       | `/outdoors/outdoor-furniture/outdoor-set.html`   | Outdoor furniture sets     |
| Sofa Sets          | `/living/sofas/sofa-sets.html`                   | Sofa set category          |
| Wooden Sofas       | `/living/sofas/wooden-sofas.html`                | Wooden sofa category       |
| Sofa Cum Beds      | `/living/sofas/sofa-cum-beds.html`               | Convertible sofas          |
| Lounge Chairs      | `/living/seatings/lounge-chairs.html`            | Lounge chair category      |
| TV Stands          | `/living/entertainment-units/tv-stand.html`      | TV stand category          |
| Dressing Tables    | `/bedroom/bedroom-tables/dressing-tables.html`   | Dressing table category    |
| Side Tables        | `/bedroom/bedroom-tables/bedside-tables.html`    | Bedside table category     |
| Premium Mattresses | `/mattresses.html`                               | Mattress category          |
| Dining Tables      | `/dining/dining-tables-sets.html`                | Dining table category      |
| Sofas              | `/living/sofas.html`                             | All sofas                  |
| Beds               | `/bedroom/beds.html`                             | All beds                   |
| Study Tables       | `/study-office/tables/study-tables.html`         | Study table category       |
| Office Chairs      | `/study-office/chairs.html`                      | Office chair category      |
| Computer Tables    | `/study-office/tables/computer-tables.html`      | Computer table category    |
| Bookshelves        | `/study-office/book-shelves.html`                | Bookshelf category         |
| Swing Chairs       | `/outdoors/outdoor-furniture/swings.html`        | Swing chair category       |
| Patio Sets         | `/outdoors/outdoor-furniture/patio-set.html`     | Patio set category         |
| Outdoor Tables     | `/outdoors/outdoor-furniture/outdoor-table.html` | Outdoor table category     |
| Table Décor        | `/decor/table-decor.html`                        | Table decoration items     |
| Planters           | `/decor/home-garden/plants-planters.html`        | Plant planters             |
| Wall Décors        | `/decor/wall-decor.html`                         | Wall decoration items      |

---

## 12. NEWSLETTER & COMMUNICATION

### 12.1 Newsletter Subscription

**Location:** `src/sections/Newsletter/components/NewsletterForm.tsx`

**Form Action:** Not specified (would typically POST to `/newsletter/subscriber/new/`)
**Purpose:** Collect email addresses for marketing campaigns

---

## 13. WHATSAPP & SUPPORT

### 13.1 WhatsApp Integration

**Location:** `src/App.tsx`

| Link          | URL                                                                                          | Purpose                              |
| ------------- | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| WhatsApp Chat | `https://api.whatsapp.com/send?phone=918951965911&text=Hi,%20call%20us%20on%207676367636...` | Direct customer support via WhatsApp |

---

## 14. API ENDPOINTS (Potential Backend APIs)

Based on the structure, these are the likely API endpoints that would be needed:

### 14.1 Product APIs

```
GET /api/products/best-sellers - Fetch best-selling products
GET /api/products/new-arrivals - Fetch new arrival products
GET /api/products/recently-viewed - Fetch user's recently viewed products
GET /api/products/:id - Fetch single product details
GET /api/products/category/:category - Fetch products by category
POST /api/products/search - Search products
```

### 14.2 Cart & Checkout APIs

```
GET /api/cart - Get cart items
POST /api/cart/add - Add item to cart
PUT /api/cart/update - Update cart item quantity
DELETE /api/cart/remove/:id - Remove item from cart
POST /api/checkout - Process checkout
```

### 14.3 User Account APIs

```
POST /api/auth/login - User login
POST /api/auth/register - User registration
POST /api/auth/logout - User logout
GET /api/user/profile - Get user profile
PUT /api/user/profile - Update user profile
GET /api/user/orders - Get user orders
GET /api/user/wishlist - Get wishlist items
POST /api/user/wishlist/add - Add to wishlist
DELETE /api/user/wishlist/remove/:id - Remove from wishlist
```

### 14.4 Order APIs

```
GET /api/orders/:id - Get order details
GET /api/orders/track/:orderId - Track order status
POST /api/orders/create - Create new order
```

### 14.5 Store Locator APIs

```
GET /api/stores - Get all stores
GET /api/stores/state/:state - Get stores by state
GET /api/stores/:id - Get store details
```

### 14.6 Newsletter API

```
POST /api/newsletter/subscribe - Subscribe to newsletter
```

### 14.7 Contact & Support APIs

```
POST /api/contact/submit - Submit contact form
POST /api/support/ticket - Create support ticket
GET /api/support/faq - Get FAQ data
```

### 14.8 Content APIs

```
GET /api/content/testimonials - Get customer testimonials
GET /api/content/banners - Get promotional banners
GET /api/content/categories - Get category data
```

---

## 15. FORM SUBMISSIONS

### 15.1 Add to Cart Forms

**Location:** Multiple product card components

**Form Data:**

- `product` - Product ID
- `uenc` - Encoded URL for redirect
- `form_key` - CSRF protection token

**Action:** Would POST to `/checkout/cart/add/`

### 15.2 Newsletter Form

**Location:** `src/sections/Newsletter/components/NewsletterForm.tsx`

**Form Data:**

- `email` - Customer email address

**Action:** Would POST to `/newsletter/subscriber/new/`

---

## 16. EXTERNAL INTEGRATIONS

### 16.1 Payment Gateways

Payment icons suggest integration with:

- Visa
- Mastercard
- American Express
- Maestro
- RuPay

### 16.2 Communication Channels

- WhatsApp Business API (Phone: 918951965911)
- Customer Support: 7676367636

---

## 17. SECURITY & AUTHENTICATION

### 17.1 CSRF Protection

- `form_key` parameter used in all forms
- Example value: `XeTvkrWaMXIGjU7x`

### 17.2 URL Encoding

- `uenc` parameter for secure URL encoding
- Base64 encoded URLs for redirect after actions

---

## 18. NOTES FOR DEVELOPERS

### Current State

- All external Royaloak links have been replaced with `#` (dummy links)
- Navigation dropdowns are fully functional with hover states
- Product data is currently static (hardcoded in components)

### To Connect to Backend

1. Replace `#` links with actual API endpoints
2. Implement `useEffect` hooks to fetch data from APIs
3. Add authentication middleware for protected routes
4. Implement cart state management (Context API or Redux)
5. Add error handling for API failures
6. Implement loading states for async operations

### Database Schema Suggestions

For PostgreSQL, you would need tables for:

- `products` (id, name, price, description, images, category_id, etc.)
- `categories` (id, name, parent_id, slug)
- `users` (id, email, password_hash, name, phone, etc.)
- `orders` (id, user_id, total, status, created_at, etc.)
- `order_items` (id, order_id, product_id, quantity, price)
- `cart` (id, user_id, product_id, quantity)
- `wishlist` (id, user_id, product_id)
- `stores` (id, name, state, city, address, phone)
- `testimonials` (id, customer_name, location, text, video_url)

---

## 19. RECOMMENDED API ARCHITECTURE

```
Backend Structure:
├── /api/v1/
│   ├── /auth
│   │   ├── POST /login
│   │   ├── POST /register
│   │   └── POST /logout
│   ├── /products
│   │   ├── GET /
│   │   ├── GET /:id
│   │   ├── GET /category/:category
│   │   ├── GET /best-sellers
│   │   └── GET /new-arrivals
│   ├── /cart
│   │   ├── GET /
│   │   ├── POST /add
│   │   ├── PUT /update
│   │   └── DELETE /remove/:id
│   ├── /orders
│   │   ├── GET /
│   │   ├── GET /:id
│   │   ├── POST /create
│   │   └── GET /track/:orderId
│   ├── /wishlist
│   │   ├── GET /
│   │   ├── POST /add
│   │   └── DELETE /remove/:id
│   ├── /stores
│   │   ├── GET /
│   │   └── GET /state/:state
│   └── /newsletter
│       └── POST /subscribe
```

---

**Document Version:** 1.0  
**Last Updated:** December 27, 2025  
**Status:** All external links replaced with dummy navigation (#)
