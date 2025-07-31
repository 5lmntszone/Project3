# Movies & Reviews API

This API allows you to manage a collection of movies and their reviews. It supports basic **CRUD** operations and is fully connected to MongoDB.

---

## Base URL  
  

---

## **1. Movies Endpoints**

### **GET /movies**  
Retrieve all movies.

- **Method:** `GET`  
- **URL:** `/api/movies`  
- **Success Response (200):**  
```json
[
  {
    "_id": "65b5c44f5d3e82c7f61a913f",
    "title": "Inception",
    "director": "Christopher Nolan",
    "genre": "Sci-Fi",
    "releaseYear": 2010,
    "rating": 8.8,
    "duration": 148,
    "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    "description": "A thief enters people's dreams."
  }
]
```

---

### **POST /movies**  
Create a new movie.

- **Method:** `POST`  
- **URL:** `/api/movies`  
- **Body (JSON):**  
```json
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "genre": "Sci-Fi",
  "releaseYear": 2010,
  "rating": 8.8,
  "duration": 148,
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
  "description": "A thief enters people's dreams."
}
```
- **Success Response (201):**  
```json
{
  "_id": "65b5c44f5d3e82c7f61a913f",
  "title": "Inception",
  "director": "Christopher Nolan",
  "genre": "Sci-Fi",
  "releaseYear": 2010,
  "rating": 8.8,
  "duration": 148,
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
  "description": "A thief enters people's dreams."
}
```
- **Error Response (400):**  
```json
{ "message": "Title is required" }
```

---

## **2. Reviews Endpoints**

### **GET /reviews/:movieId**  
Retrieve all reviews for a specific movie.

- **Method:** `GET`  
- **URL:** `/api/reviews/:movieId`  
- **Example:**  
```
GET /api/reviews/65b5c44f5d3e82c7f61a913f
```
- **Success Response (200):**  
```json
[
  {
    "_id": "65b5c5f05d3e82c7f61a9150",
    "movieId": "65b5c44f5d3e82c7f61a913f",
    "user": "John Doe",
    "rating": 9,
    "comment": "Amazing movie!",
    "createdAt": "2024-02-01T12:34:56Z"
  }
]
```

---

### **POST /reviews**  
Create a new review for a movie.

- **Method:** `POST`  
- **URL:** `/api/reviews`  
- **Body (JSON):**  
```json
{
  "movieId": "65b5c44f5d3e82c7f61a913f",
  "user": "Jane Doe",
  "rating": 8,
  "comment": "Great story!"
}
```
- **Success Response (201):**  
```json
{
  "_id": "65b5c6b45d3e82c7f61a9162",
  "movieId": "65b5c44f5d3e82c7f61a913f",
  "user": "Jane Doe",
  "rating": 8,
  "comment": "Great story!",
  "createdAt": "2024-02-01T12:45:30Z"
}
```
- **Error Response (400):**  
```json
{ "message": "Invalid movieId format" }
```

