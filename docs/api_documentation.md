# Vera AI — API Documentation

## 1. Overview

Vera AI is a web-based conversational assistant powered by the GPT-OSS 20B model through the Groq API.

The application follows a client-server architecture consisting of a JavaScript frontend and a Python FastAPI backend.

The frontend is hosted on GitHub Pages, while the backend is deployed on Render.

**Live Application:** https://yogeshcff.github.io/Vera-Local-AI/

## 2. System Architecture

| Component          | Technology            |
| ------------------ | --------------------- |
| Frontend           | HTML, CSS, JavaScript |
| Backend            | Python, FastAPI       |
| AI Model           | GPT-OSS 20B           |
| Inference Provider | Groq API              |
| HTTP Client        | HTTPX                 |
| Frontend Hosting   | GitHub Pages          |
| Backend Hosting    | Render                |

## 3. API Base URL

Production backend:

`https://vera-ai-backend-9occ.onrender.com`

## 4. Available Endpoints

### GET /

**Purpose:** Checks whether the backend application is running.

**Response:**

Returns the backend's health/status response.

### POST /chat

**Purpose:** Accepts a user message and generates an AI response.

**Request Content-Type:** `application/json`

The request contains the user's message.

**Processing:**

1. The frontend sends the message to the FastAPI backend.
2. The backend forwards the request to the Groq API.
3. GPT-OSS 20B generates a response.
4. The backend returns the response to the frontend.
5. The frontend displays the answer in the chat interface.

## 5. Message Processing Workflow

User Input → JavaScript Frontend → FastAPI Backend → Groq API → GPT-OSS 20B → Backend Response → Chat Interface

## 6. Environment Configuration

The backend requires the following environment variable:

`GROQ_API_KEY`

The API key must be configured in the deployment environment and must not be exposed in frontend JavaScript or committed to the public repository.

## 7. CORS Configuration

The backend permits requests from the deployed GitHub Pages frontend and configured local development origins.

This enables browser-based communication between the frontend and backend.

## 8. Error Handling

The backend handles API communication failures and returns an appropriate error response.

The frontend displays an error message when a successful AI response cannot be obtained.

## 9. Deployment

| Layer        | Platform     |
| ------------ | ------------ |
| Frontend     | GitHub Pages |
| Backend      | Render       |
| AI Inference | Groq API     |

The Render free-tier service may experience a delay when waking from inactivity.

## 10. Security

* API credentials are stored in environment variables.
* `.env` is excluded from Git tracking.
* `.env.example` provides a placeholder for configuration.
* HTTPS is used for production communication.

## 11. Conclusion

Vera AI uses a cloud-based inference architecture rather than a purely client-side response engine. The frontend communicates with a FastAPI backend, which connects to the hosted GPT-OSS 20B model through Groq.
