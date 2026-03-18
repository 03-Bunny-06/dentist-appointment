# Dentist Appointment 🍽️

A robust RESTful backend service for managing restaurant menus and orders. This API provides functionality for CRUD operations, searching, filtering, availability control, and status-tracked order handling.

**Live Demo:** [https://api-dentist-appointment.onrender.com](https://api-dentist-appointment.onrender.com/dentists/)  

## Features⚡

-   **Menu Management:** Full CRUD (Create, Read, Update, Delete) functionality for menu items.
-   **Order Handling:** Create new orders, retrieve order lists, view specific order details, and update order statuses.
-   **Advanced Search & Filtering:**
    -   Filter menu items by `category`, `availability`, and `price`.
    -   Perform text-based searches on menu item `name` and `ingredients`.
-   **Pagination:** Efficiently query large sets of order data using page and limit parameters.
-   **Availability Control:** Easily toggle the availability of any menu item.
-   **API Documentation:** Interactive API documentation powered by Swagger (OpenAPI) is available at the `/api-docs` endpoint.

## Tech Stack 🚀

| Technology         | Description                                |
| ------------------ | ------------------------------------------ |
| **Node.js**        | JavaScript runtime environment             |
| **Express.js**     | Web framework for building the REST API    |
| **MongoDB**        | NoSQL database to store application data   |
| **Mongoose**       | ODM library for MongoDB and Node.js        |
| **dotenv**         | For managing environment variables         |
| **Postman**       | API endpoints testing        |

## Getting Started ⚙️

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v20.19.0 or higher)
-   npm (Node Package Manager)
-   MongoDB instance (local or cloud-based service something like MongoDB Atlas)

### Installation & Setup 📦

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/03-bunny-06/dentist-appointment.git
    ```

2.  **Navigate to the server directory:**
    ```bash
    cd dentist-appointment/server
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Create an environment file:**
    Create a `.env` file in the `server` directory and add your environment variables.

    ```env
    # .env
    DATABASE_URL="your_mongodb_connection_string"
    PORT=8080
    ```

6.  **Start the server:**
    ```bash
    npm start
    ```

The server will start on the port specified in your `.env` file (or 8080 by default).

## Data Models 🗂️

### Admin Schema

```javascript
{
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}
```

### Dentists Schema

```javascript
{
    photoUrl: {
        type: String,
        default: "https://i.pinimg.com/236x/dd/f0/11/ddf0110aa19f445687b737679eec9cb2.jpg"
    },
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true,
        default: 0
    },
    clinicName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}
```

### Appointments Schema

```javascript
{
    patientName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: typesOfGenders,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    dentistName: {
        type: String,
        required: true
    },
    clinicName: {
        type: String,
        required: true
    }
}
```

## API Endpoints 🔗

The API is structured into two main routes that handles: `Admin`, `Dentists` and `Appointments`.

### Dentists Routes (`/`)

| Method  | Endpoint                         | Description                                  |
| :------ | :------------------------------- | :------------------------------------------- |
| `GET`   | `/menu`                          | Get all the dentists.      |
| `POST`  | `/menu`                          | Create a dentist.                      |

### Appointments Routes (`/orders`)

| Method  | Endpoint                | Description                                       |
| :------ | :---------------------- | :------------------------------------------------ |
| `GET`   | `/appointments`               | Get a list of appointments. |
| `POST`  | `/appoinments`               | Create a new appointment.                               |
