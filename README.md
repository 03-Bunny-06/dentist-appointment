# Dentist Appointment⚕️

A backend service designed to manage dentist records and appointment scheduling efficiently. This system provides RESTful APIs for handling dentists, appointments, and admin authentication, enabling seamless clinic management operations.

**Live Demo:** [https://api-dentist-appointment.onrender.com](https://api-dentist-appointment.onrender.com/dentists/)  

## Features⚡

- **Dentist Management:** Create new dentist profiles and retrieve the complete list of all registered dentists.
- **Appointment Handling:** Create new appointments, fetch all appointments, and maintain structured scheduling data.
- **Admin Authentication:** Secure admin signup and signin functionality using protected routes.
- **Role-Based Access:** Only authenticated admins can access dentist and appointment data through restricted endpoints.
- **Data Viewing:** Easily retrieve all dentists and all appointments with clean, well-defined API routes.
- **Error Handling:** Ensures consistent API responses during dentist or appointment creation.
- **Scalable API Structure:** RESTful endpoints designed for smooth integration with any frontend or mobile application.

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
