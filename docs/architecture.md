# Vera AI — System Architecture

## 1. Overview

Vera AI follows a lightweight client-server architecture combining a web-based frontend, a Python backend, and cloud-based AI inference.

The application runs through a browser interface, while AI response generation is handled by a hosted GPT-OSS 20B model through the Groq API.

The frontend and backend are deployed separately.

## 2. Architecture Components

### Frontend

Technologies:

* HTML
* CSS
* JavaScript

Hosting: GitHub Pages

Responsibilities:

* Display the chat interface.
* Accept user messages.
* Send requests to the backend API.
* Display AI-generated responses.
* Handle user interactions.
* Support responsive layouts.

### Backend

Technology: Python with FastAPI

Hosting: Render

Responsibilities:

* Receive chat requests from the frontend.
* Validate incoming messages.
* Communicate with the Groq API.
* Process AI responses.
* Return responses to the frontend.
* Handle API errors and cross-origin requests.

### AI Inference Engine

Model: GPT-OSS 20B

Inference Provider: Groq API

Responsibilities:

* Process user prompts.
* Generate conversational responses.
* Return generated text through the backend.

### HTTP Communication

HTTPX is used by the backend to communicate with the Groq API.

The frontend communicates with the backend through HTTP requests over HTTPS.

## 3. System Workflow

1. User opens the Vera AI website.
2. Browser loads the frontend application.
3. User enters a message.
4. JavaScript sends a POST request to the FastAPI backend.
5. Backend receives and processes the request.
6. Backend forwards the prompt to the Groq API.
7. GPT-OSS 20B generates a response.
8. Backend returns the response to the frontend.
9. JavaScript displays the answer in the chat interface.

## 4. Architecture Diagram

```text
                  USER
                    |
                    v
             MOBILE / DESKTOP
                    |
                    v
             VERA AI FRONTEND
             HTML / CSS / JS
                    |
                    | HTTPS
                    v
             GITHUB PAGES
                    |
                    v
              FASTAPI BACKEND
                 (RENDER)
                    |
                    | API Request
                    v
                GROQ API
                    |
                    v
              GPT-OSS 20B
                    |
                    | Generated Response
                    v
              FASTAPI BACKEND
                    |
                    | HTTP Response
                    v
             VERA AI FRONTEND
                    |
                    v
             DISPLAY RESPONSE
```

## 5. Deployment Architecture

Vera AI uses separate hosting services for the frontend and backend.

| Component    | Deployment Platform |
| ------------ | ------------------- |
| Frontend     | GitHub Pages        |
| Backend      | Render              |
| AI Inference | Groq API            |

Public application:

https://yogeshcff.github.io/Vera-Local-AI/

Backend:

https://vera-ai-backend-9occ.onrender.com

Users can access Vera through a public HTTPS website without installing Python, a local AI model, or development tools.

## 6. Security and Privacy

* Groq API credentials are stored in backend environment variables.
* API keys are not embedded in frontend JavaScript.
* The `.env` file is excluded from Git tracking.
* HTTPS is used for production communication.
* CORS is configured to permit the deployed frontend origin.
* User messages are sent to the backend and external AI inference provider for response generation.

## 7. Future Improvements

The architecture can later be extended with:

* Persistent user accounts.
* Synchronized conversation history.
* Database integration.
* Streaming AI responses.
* Advanced conversation management.
* Additional AI model support.

## 8. Design Principle

The primary design principle is simplicity: provide an accessible AI conversational interface without requiring users to install AI software, configure API credentials, or manage inference infrastructure themselves.
