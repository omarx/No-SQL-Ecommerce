# No-SQL Ecommerce Backend

Welcome to the No-SQL Ecommerce Backend, an efficient and scalable backend solution designed with MongoDB and Express.js. This application offers robust API routes for managing an ecommerce platform with non-relational database capabilities.

## 📌 Prerequisites
- MongoDB must be installed on your machine. If not, download it [here](https://www.mongodb.com/try/download/community).
- Configure your `.env` file with the correct MongoDB credentials to ensure a smooth connection.

## 🚀 Installation & Setup

1. **Setting Up Dependencies**
   Run the following command to install all necessary packages:
    ```bash 
    pnpm install 
    ```

2. **Launching the Application**
    - For immediate start-up, execute:
        ```bash 
        pnpm start
        ```

    - For developers, to watch for file changes and auto-restart, use:
        ```bash 
        pnpm run watch
        ```

## 🔗 API Routes

- **Thoughts Routes:**
    - `GET` and `POST` at `/api/thoughts/`
    - `GET`, `PUT`, and `DELETE` at `/api/thoughts/:thoughtId`
    - `POST` and `DELETE` at `/api/thoughts/:thoughtId/reactions`

- **User Routes:**
    - `GET` and `POST` at `/api/users/`
    - `GET`, `PUT`, and `DELETE` at `/api/users/:userId`
    - `POST` and `DELETE` at `/api/users/:userId/friends/:friendId`

## 📸 Screenshot

<img width="889" alt="Screenshot 2023-12-08 at 20 55 55" src="https://github.com/omarx/No-SQL-Ecommerce-Backend/assets/4944767/5ec9f62e-89fb-4267-a1ae-7bfc91cb0461">

## ❓ Questions & Support

For any challenges or inquiries:
- 📮 Open an [issue on GitHub](#) or
- 📩 Email me at [omarpeart100@gmail.com](mailto:omarpeart100@gmail.com).

To explore more about my projects and contributions, visit my [GitHub profile](https://github.com/omarx/).
