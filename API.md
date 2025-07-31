# Movies & Reviews API

This API allows you to manage a collection of movies and their reviews. It supports full **CRUD** operations and is connected to MongoDB.

---

## Base URL  
https://project3-zo0c.onrender.com

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
  "title": "Star Wars: A New Hope",
  "director": "George Lucas",
  "genre": "Sci-Fi",
  "releaseYear": 1977,
  "rating": 8.6,
  "duration": 121,
  "cast": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
  "description": "Luke Skywalker joins forces with allies to defeat the Empire."
}
```
- **Success Response (201):**  
```json
{
  "_id": "65b5c44f5d3e82c7f61a913f",
  "title": "Star Wars: A New Hope",
  "director": "George Lucas",
  "genre": "Sci-Fi",
  "releaseYear": 1977,
  "rating": 8.6,
  "duration": 121,
  "cast": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
  "description": "Luke Skywalker joins forces with allies to defeat the Empire."
}
```

- **Error Response (400):**  
```json
{ "message": "Title is required" }
```

---

### **PUT /movies/:id**  
Update a movie.

- **Method:** `PUT`  
- **URL:** `/api/movies/:id`  
- **Body (JSON):**  
```json
{
  "title": "Star Wars: The Empire Strikes Back",
  "rating": 9.0
}
```
- **Success Response (200):**  
```json
{
  "_id": "65b5c44f5d3e82c7f61a913f",
  "title": "Star Wars: The Empire Strikes Back",
  "rating": 9.0,
  "director": "George Lucas",
  "genre": "Sci-Fi",
  "releaseYear": 1980,
  "duration": 124,
  "cast": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
  "description": "The Rebellion continues its fight against the Empire."
}
```
- **Error Response (404):**  
```json
{ "message": "Movie not found" }
```

---

### **DELETE /movies/:id**  
Delete a movie.

- **Method:** `DELETE`  
- **URL:** `/api/movies/:id`  
- **Success Response (200):**  
```json
{ "message": "Movie deleted successfully" }
```
- **Error Response (404):**  
```json
{ "message": "Movie not found" }
```

---

## **2. Reviews Endpoints**

### **GET /reviews/:movieId**  
Retrieve all reviews for a specific movie.

- **Method:** `GET`  
- **URL:** `/api/reviews/:movieId`  
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

---

### **PUT /reviews/:id**  
Update a review.

- **Method:** `PUT`  
- **URL:** `/api/reviews/:id`  
- **Body (JSON):**  
```json
{
  "rating": 7,
  "comment": "Good but a bit slow."
}
```
- **Success Response (200):**  
```json
{
  "_id": "65b5c6b45d3e82c7f61a9162",
  "movieId": "65b5c44f5d3e82c7f61a913f",
  "user": "Jane Doe",
  "rating": 7,
  "comment": "Good but a bit slow.",
  "createdAt": "2024-02-01T12:45:30Z"
}
```
- **Error Response (404):**  
```json
{ "message": "Review not found" }
```

---

### **DELETE /reviews/:id**  
Delete a review.

- **Method:** `DELETE`  
- **URL:** `/api/reviews/:id`  
- **Success Response (200):**  
```json
{ "message": "Review deleted successfully" }
```
- **Error Response (404):**  
```json
{ "message": "Review not found" }
```
