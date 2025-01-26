# 🦸‍♂️ SerBeast

**SerBeast** is a dynamic service marketplace platform that connects users with professionals offering various services, from home repairs to personal tasks. The repository now contains both the **front-end** and **back-end** components, making it easy to manage the entire application in one place.

---

## 🌟 Features

### Frontend

- **🔍 Service Search**: Find professionals for various services like plumbing, cleaning, electrical work, and more.
- **📋 Service Listings**: View detailed listings of services with descriptions, pricing, and ratings.

### Backend

- **🔍 API Endpoints**: Provides endpoints to search for professionals, get service listings, and manage users.
- **📋 Service Management**: Allows CRUD operations for services.

---

## 🚀 Technologies Used

### Frontend

- **HTML**
- **CSS**
- **Tailwind CSS**
- **React.js**

### Backend

- **ASP.NET Core**
- **SQL Server**
- **Entity Framework Core**

---

## 📂 File Structure

```plaintext
├── /Client
│   ├── /src
│   │   ├── /assets            # Static assets (images, icons, etc.)
│   │   ├── /components        # Reusable UI components (buttons, modals, etc.)
│   │   ├── /pages             # React pages (Home, Services, Profile, etc.)
│   │   ├── /store             # Context and global state management
│   │   ├── /util              # Utility functions and custom hooks
│   │   ├── App.js             # Main entry point for the application
│   │   └── index.css          # Global CSS styles
│   ├── /public                # Static files (images, icons)
│   ├── tailwind.config.js     # Tailwind CSS configuration file
│   └── package.json           # Project dependencies and scripts
├── /Api
│   ├── /Controllers        # API controllers (Service, User, etc.)
│   ├── /Data               # Database context and models
│   ├── /Migrations         # EF migrations for database schema changes
│   ├── /Model              # Data models, DTOs, or business logic
│   ├── /Uploads            # Directory for uploaded files (e.g., images)
│   ├── appsettings.json    # Configuration settings
│   ├── Program.cs          # Main entry point for the application
│   └── /SerBeast.Utility       # Helper classes and utilities
└── README.md                  # Project documentation
```

## 🛠️ Setup and Installation

### Prerequisites

- **Frontend**: Node.js (>=14.x), npm or Yarn
- **Backend**: Visual Studio or Visual Studio Code, .NET SDK (>= 8.x), SQL Server

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/angelobracero/serbeast.git
   cd serbeast
   ```
2. **Set up the Frontend**:

   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
   - Access the app at:
     ```plaintext
     http://localhost:3000
     ```

3. **Set up the Backend**:

   - Navigate to the `backend` directory:
     ```bash
     cd ../backend/SerBeast.API
     ```
   - Install dependencies:
     ```bash
     dotnet restore
     ```
   - Update the `ConnectionStrings` in `appsettings.json` to point to your SQL Server instance.
   - Run database migrations:
     ```bash
     dotnet ef database update
     ```
   - Start the API:
     ```bash
     dotnet run
     ```
   - Access the API at:
     ```plaintext
     http://localhost:5000
     ```

4. **Verify Frontend-Backend Communication**:
   - Ensure the `.env` file in the `frontend` directory has the correct API base URL to connect to the backend.
