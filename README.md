Pataku - Full-Stack E-Commerce Platform
Pataku is a feature-rich, full-stack e-commerce application designed to provide a seamless shopping experience. It features a modern, responsive frontend built with Next.js and a powerful backend powered by Node.js, Express, and MongoDB. The platform includes a complete suite of functionalities for both customers and administrators, from product browsing and secure payments to advanced dashboard analytics and real-time updates.


Project Overview
Pataku is a sophisticated online furniture store with multiple home page variations, a complete shopping funnel (product listings, cart, checkout), user authentication, and a comprehensive admin dashboard for managing the entire store. The architecture is designed to be scalable and performant, utilizing modern web development practices and tools.

Key Features
Customer-Facing Features:
User Authentication: Secure user registration and login using JWT.

Dynamic Homepage: Multiple homepage layouts to showcase products and categories.

Product Browsing & Filtering: Advanced filtering by availability, price, and category.

Product Details Page: In-depth product information, image galleries, and related products.

Shopping Cart: Add, update, and remove items from the cart with persistent state.

Wishlist: Save favorite products for later.

Secure Checkout: Integrated with Razorpay for a smooth and secure payment process.

Order History & Profile Management: Users can view their past orders and update their profile information, including their avatar.

Admin Panel Features:
Analytics Dashboard: At-a-glance view of key performance indicators (KPIs) like sales, orders, and revenue charts.

Product Management: Full CRUD (Create, Read, Update, Delete) functionality for products, including image uploads.

Order Management: View and manage all customer orders.

User Management: View and manage all registered users.

Real-Time Updates: Live notifications for new orders and low-stock alerts via Socket.IO.

Tech Stack & Skills
This project showcases a wide range of modern web development skills and technologies.

Frontend
Framework: Next.js & React

Language: TypeScript

State Management: Redux Toolkit (for centralized state management of cart, user, etc.)

Styling: Tailwind CSS with Shadcn/UI for pre-built, accessible components.

UI/UX: Framer Motion for animations, Embla Carousel for sliders.

Data Fetching: Axios with interceptors for streamlined API communication.

Forms: Formik and Yup for robust form handling and validation.

Backend
Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose for object data modeling.

Authentication: JSON Web Tokens (JWT) for secure, stateless authentication.

File Uploads: Multer for handling image uploads.

Real-Time Communication: Socket.IO for live dashboard updates.

Caching: Redis to cache frequently accessed data like products and user carts, reducing database load.

Payment Gateway: Razorpay integration for processing payments.

Email Service: Nodemailer for sending order confirmation emails.


Getting Started
Follow these steps to set up and run the project on your local machine.

Prerequisites
Node.js (v18 or later)

npm or yarn

MongoDB (local instance or cloud service like MongoDB Atlas)

Redis (local instance or cloud service like Redis Cloud)

Installation
Clone the repository:

git clone <your-repo-url>
cd <project-directory>

Install backend dependencies:

npm install

Install frontend dependencies:

# (Already installed with the command above if in the same package.json)
# If separate, cd into the 'src' or frontend directory and run npm install

Configuration
Create a .env file in the root of the project for the backend.

Create a .env.local file in the src folder for the frontend.

Populate these files with the necessary credentials (see Environment Variables).

Start the backend server:

npm run dev # Or your configured start script

Start the frontend development server:

# This command is usually run from the root directory as well
npm run dev

Environment Variables
You will need to create .env (backend) and .env.local (frontend) files and add the following variables.

Backend (.env)
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
REDIS_URL=your_redis_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret_key
LOGIN=your_nodemailer_login_email
PASS=your_nodemailer_password
PORT=8000

Frontend (src/.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
