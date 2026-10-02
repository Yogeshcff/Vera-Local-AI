# Vera AI — Project Overview

## 1. Introduction

Vera AI is a web-based conversational assistant designed to provide users with an accessible AI-powered chat experience.

The application combines a responsive frontend with a Python FastAPI backend and cloud-based AI inference.

Vera AI uses the GPT-OSS 20B model through the Groq API to generate conversational responses.

The frontend is hosted on GitHub Pages, while the backend is deployed on Render.

**Live Demo:** https://yogeshcff.github.io/Vera-Local-AI/

## 2. Problem Statement

AI-powered conversational applications often require users to install software, configure development environments, or manage API credentials.

Vera AI aims to simplify access to conversational AI by providing a publicly accessible web interface.

Users can interact with the application through a browser without installing Python, Ollama, or a local language model.

## 3. Project Objectives

* Develop a responsive chatbot interface.
* Provide browser-based access to an AI conversational assistant.
* Integrate a hosted language model through an API.
* Build a Python backend using FastAPI.
* Deploy the frontend and backend independently.
* Protect API credentials using environment variables.
* Provide an accessible and user-friendly interface.
* Maintain a simple deployment and development workflow.

## 4. Key Features

### Conversational Interface

A web-based chat interface where users can submit messages and receive AI-generated responses.

### AI-Powered Response Generation

Uses GPT-OSS 20B through the Groq API for conversational response generation.

### FastAPI Backend

A Python backend receives chat requests, communicates with the AI inference service, and returns responses to the frontend.

### Public Web Deployment

The application is accessible through a public HTTPS website.

### Responsive Design

The interface is designed for use across desktop and mobile browsers.

### Secure Configuration

API credentials are stored in environment variables rather than embedded in frontend code.

### Separate Frontend and Backend Hosting

The frontend is hosted on GitHub Pages and the backend is deployed on Render.

## 5. Technology Stack

| Component                 | Technology         |
| ------------------------- | ------------------ |
| Frontend                  | HTML               |
| Styling                   | CSS                |
| Application Logic         | JavaScript         |
| Backend                   | Python             |
| Backend Framework         | FastAPI            |
| AI Model                  | GPT-OSS 20B        |
| AI Inference Provider     | Groq API           |
| HTTP Client               | HTTPX              |
| Environment Configuration | Python dotenv      |
| Development Environment   | Visual Studio Code |
| Version Control           | Git and GitHub     |
| Frontend Deployment       | GitHub Pages       |
| Backend Deployment        | Render             |

## 6. System Architecture

Vera AI follows a client-server architecture.

The frontend handles the user interface and sends messages to the FastAPI backend.

The backend communicates with the Groq API, where GPT-OSS 20B generates the response.

The generated response is returned through the backend and displayed in the browser.

## 7. Project Structure

```text
Vera-Local-AI/
│
├── backend/
│   ├── main.py
│   ├── llm.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── manifest.json
│   └── service-worker.js
│
├── docs/
│   ├── project_overview.md
│   ├── architecture.md
│   ├── setup_guide.md
│   └── api_documentation.md
│
├── .env.example
├── .gitignore
├── README.md
└── render.yaml
```

## 8. Project Scope

### Current Version

* Responsive chatbot interface.
* AI-powered response generation.
* FastAPI backend.
* Groq API integration.
* Public frontend deployment.
* Cloud backend deployment.
* Environment-based API configuration.

### Future Enhancements

* Persistent user accounts.
* Conversation history management.
* Streaming AI responses.
* Improved error handling.
* Additional AI model support.
* Database integration.
* Enhanced PWA functionality.

## 9. Deployment

Vera AI is publicly accessible through GitHub Pages.

**Frontend:** https://yogeshcff.github.io/Vera-Local-AI/

**Backend:** https://vera-ai-backend-9occ.onrender.com

Users can access the chatbot through a browser without installing development tools or AI software.

The backend uses Render's free tier, which may introduce delays after periods of inactivity.

## 10. Project Independence

Vera AI is a separate development project inspired by the earlier Magicpin Vera chatbot.

The original Magicpin submission, repository, and deployment remain separate and unchanged.

This project focuses on developing and deploying an independently accessible AI conversational application.

## 11. Conclusion

Vera AI demonstrates the development and deployment of a web-based AI conversational assistant using HTML, CSS, JavaScript, Python, FastAPI, and cloud-based language model inference.

The project combines frontend development, API integration, backend engineering, environment configuration, version control, and cloud deployment into a single application.
