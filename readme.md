# Book Viewing Web App

## Overview
This project is a web application created for an interview task. The app retrieves book details from the Google Books API and displays them as a list on the main page, similar to the functionality of Goodreads. It uses a **React.js** frontend and a **Spring Boot** backend to manage API requests and serve the application.

---
### Desktop View
![Book Web App](https://i.imgur.com/Ef3kYI8.png)

### Mobile View
![Book Web App](https://i.imgur.com/5MCn7iK.png)

---

## Features

### Core Features
1. **Google Books API Integration**: Retrieves book data from the Google Books API.  
2. **Book List Display**: Displays books in a responsive, paginated list.  

### Backend Features
- **Spring Boot REST API**: Acts as the middleware between the frontend and the Google Books API.  
- **Error Handling**: Handles API errors and invalid requests gracefully.

### Additional Features
- **Mobile-Friendly Design**: Ensures usability across devices.  
- **Dynamic Rendering**: Updates book listings in real time after searching or navigating.  
- **Secure Backend**: Manages API keys securely.

---

## Technologies Used

### Frontend
- **React.js**: For building the interactive user interface.  
- **TypeScript**: Ensures strong typing and predictable code.  
- **Tailwind CSS**: For responsive and clean styling.  
- **Axios**: For handling HTTP requests.

### Backend
- **Spring Boot**: Handles API requests and serves the backend logic.  
- **Java**: Backend programming language.  
- **Google Books API**: For fetching book details.

### Tools
- **Postman**: For testing RESTful APIs.  
- **Docker**: For containerization.

---

## Installation

### Prerequisites
1. **Node.js** and **npm** installed for the frontend.  
2. **Java** and **Maven** installed for the backend.  
3. **API Key for Google Books API** (available from the [Google Cloud Console](https://console.cloud.google.com/)).

---

### Steps to Run Locally

#### Backend Setup
1. Clone the repository:  
   ```bash
   git clone <\git@github.com:YuKiFdo/BookNook.git>
   ```  

2. Navigate to the backend directory:  
   ```bash
   cd backend
   ```  

3. Update `application.properties` with your Google Books API key:  
   ```properties
   google.api.key=your_google_books_api_key
   server.port=8080
   ```  

4. Build and run the Spring Boot application:  
   ```bash
   mvn spring-boot:run
   ```  

5. The backend server will be accessible at `http://localhost:8080`.

---

#### Frontend Setup
1. Navigate to the `frontend` directory:  
   ```bash
   cd frontend
   ```  

2. Install the dependencies:  
   ```bash
   npm install
   ```  

3. Start the React development server:  
   ```bash
   npm start
   ```  

4. The frontend server will be accessible at `http://localhost:3000`.


### Docker Setup

1. Build the Docker image:
```bash
docker build -t backend .
```
2. Run the Docker container:
```bash
docker run -p 8080:8080 backend
```
The backend will be accessible at http://localhost:8080.

---

## Project Structure

```
booknook/  
├── backend/  
│   ├── src/  
│   │   ├── main/  
│   │   │   ├── java/  
│   │   │   │   ├── com.booknook.backend/  
│   │   │   └── resources/  
│   │   │       ├── application.properties  
├── frontend/  
│   ├── public/  
│   ├── src/  
│   │   ├── components/  
│   │   ├── page.tsx
│   │   
│   ├── package.json  
│   ├── .env  
```

---

## Usage

1. **Browse Books**: The main page lists books retrieved from the Google Books API. 
2. **View Details**: Click on any book to see detailed information.

---

## Future Enhancements
1. Add user authentication for personalized experiences.  
2. Implement pagination for larger search results.  
3. Introduce features like user reviews, ratings, and recommendations.

---

## License
This project is licensed under the MIT License.