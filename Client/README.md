# 🦸‍♂️ SerBeast

**SerBeast** is a dynamic service marketplace platform that connects users with professionals offering various services, from home repairs to personal tasks. The front-end of **SerBeast** is designed for a smooth, intuitive user experience, featuring easy navigation and service discovery.

---

## 🔗 Backend Repository

The back-end for **SerBeast** is in a separate repository, and the front-end communicates with it via API endpoints.

- [SerBeast Backend Repository](https://github.com/angelobracero/SerBeast_API)

---

## 🌟 Features

- **🔍 Service Search**: Find professionals for various services like plumbing, cleaning, electrical work, and more.
- **📋 Service Listings**: View detailed listings of services with descriptions, pricing, and ratings.

---

## 🚀 Technologies Used

- **HTML**
- **CSS**:
- **Tailwind CSS**:
- **React.js**:

---

## 📂 File Structure

```plaintext
├── /src
│   ├── /assets            # Static assets (images, icons, etc.)
│   ├── /components        # Reusable UI components (buttons, modals, etc.)
│   ├── /pages             # React pages (Home, Services, Profile, etc.)
│   ├── /store             # Context and global state management
│   ├── /util              # Utility functions and custom hooks
│   ├── App.js             # Main entry point for the application
│   └── index.css          # Global CSS styles
├── /public                # Static files (images, icons)
├── tailwind.config.js     # Tailwind CSS configuration file
└── package.json           # Project dependencies and scripts
```

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (>=14.x)
- npm or Yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/serbeast.git
   cd serbeast
   ```
2. Install dependencies:
   - Run the following command to install required dependencies:
     
     ```bash
     npm install
     ```
3. Configure the back-end API:
   - **SerBeast** is connected to a back-end API (in a different repository). Please make sure the back-end is running and the API URL is configured in your environment.
   - Set the back-end API URL in a `.env` file or within the application code, depending on the setup.

4. Run the application:
   - Start the development server:
     
     ```bash
     npm run dev
     ```
5. Visit the app in your browser:
   ```plaintext
   http://localhost:3000
   ```

