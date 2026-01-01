# API Structure: Main Page vs Navigation

This document categorizes the API endpoints based on their usage: those required to render the **Main Page** elements, and those triggered by **Navigation/Actions** to other pages.

## 1. Main Page Elements APIs (Data Loading)

These APIs are called when the homepage loads to populate the various sections.

| Section Component            | Purpose                               | Endpoint                                     | Method |
| ---------------------------- | ------------------------------------- | -------------------------------------------- | ------ |
| **HeroCarousel**             | Fetch active promotional banners      | `/api/content/banners?position=hero`         | `GET`  |
| **PopularCategories**        | Fetch top-level categories            | `/api/categories?featured=true`              | `GET`  |
| **Spotlight**                | Fetch curated spotlight products      | `/api/products/featured?type=spotlight`      | `GET`  |
| **InternationalCollections** | Fetch collection list                 | `/api/collections?featured=true`             | `GET`  |
| **BestSellers**              | Fetch best-selling products           | `/api/products/best-sellers?limit=10`        | `GET`  |
| **NewArrivals**              | Fetch newest products                 | `/api/products/new-arrivals?limit=10`        | `GET`  |
| **RoyalDecor**               | Fetch decor specific categories/items | `/api/products?category=decor&featured=true` | `GET`  |
| **LimitedTimeDeals**         | Fetch active deals and countdowns     | `/api/content/deals`                         | `GET`  |
| **BrandsCarousel**           | Fetch partner brands logos            | `/api/content/brands`                        | `GET`  |
| **RecentlyViewed**           | Fetch user's history (if logged in)   | `/api/user/recently-viewed`                  | `GET`  |
| **Testimonials**             | Fetch customer reviews/videos         | `/api/content/testimonials`                  | `GET`  |
| **ContentSection**           | Fetch SEO content and FAQs            | `/api/content/faq`                           | `GET`  |

---

## 2. Navigation & Action APIs (Transitions)

These APIs are triggered when a user interacts with the main page to navigate elsewhere or perform an action.

### Product Navigation

| Action             | Target Page                 | Endpoint (Data Fetch on Target)  | Method |
| ------------------ | --------------------------- | -------------------------------- | ------ |
| Click Product Card | **Product Detail Page**     | `/api/products/:slug`            | `GET`  |
| Click Category     | **Category Listing Page**   | `/api/products?category=:slug`   | `GET`  |
| Click Collection   | **Collection Listing Page** | `/api/products?collection=:slug` | `GET`  |
| Search Query       | **Search Results Page**     | `/api/products/search`           | `POST` |

### User Actions

| Action              | Purpose                   | Endpoint                     | Method |
| ------------------- | ------------------------- | ---------------------------- | ------ |
| **Add to Cart**     | Add item to shopping cart | `/api/cart/add`              | `POST` |
| **Add to Wishlist** | Save item for later       | `/api/wishlist/add`          | `POST` |
| **Subscribe**       | Newsletter subscription   | `/api/newsletter/subscribe`  | `POST` |
| **Track Order**     | Check order status        | `/api/orders/track/:orderId` | `GET`  |
| **Store Locator**   | Find stores by state/city | `/api/stores?state=:state`   | `GET`  |

### Authentication

| Action       | Purpose          | Endpoint             | Method |
| ------------ | ---------------- | -------------------- | ------ |
| **Login**    | User sign in     | `/api/auth/login`    | `POST` |
| **Register** | New user sign up | `/api/auth/register` | `POST` |
| **Logout**   | End session      | `/api/auth/logout`   | `POST` |

---

## 3. Shared/Global APIs

APIs used across multiple pages, including the Main Page.

- **Cart Summary**: `/api/cart/summary` (GET) - To show cart count in header.
- **User Profile**: `/api/user/profile` (GET) - To show user name/status in header.
- **Global Settings**: `/api/settings` (GET) - Site-wide settings (currency, contact info).
