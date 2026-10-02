# Vera AI — AI-Powered Conversational Assistant

Vera AI is a web-based conversational assistant built using Python, FastAPI, JavaScript, HTML, and CSS. It integrates the GPT-OSS 20B language model through the Groq API to generate natural-language responses.

## Features

* Interactive browser-based chat interface
* AI-powered responses using GPT-OSS 20B
* FastAPI backend with REST API endpoints
* Asynchronous communication between frontend and backend
* JSON-based request and response handling
* Typing indicator and chat interface
* Environment-based API key management
* Basic error handling

## Tech Stack

| Component          | Technology            |
| ------------------ | --------------------- |
| Frontend           | HTML, CSS, JavaScript |
| Backend            | Python, FastAPI       |
| AI Model           | GPT-OSS 20B           |
| Inference Provider | Groq API              |
| HTTP Client        | HTTPX                 |
| Server             | Uvicorn               |

## Project Structure

```text
Vera-Local-AI/
├── backend/
│   ├── llm.py
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── docs/
├── tests/
├── .env.example
├── .gitignore
└── README.md
```

## Setup and Installation

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Vera-Local-AI
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r backend/requirements.txt
```

### 4. Configure the API key

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Obtain an API key from the [Groq Console](https://console.groq.com/).

**Never commit your actual API key to GitHub.**

### 5. Start the backend

From the project root:

```bash
python -m uvicorn backend.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

### 6. Launch the frontend

Open `frontend/index.html` using VS Code Live Server.

The frontend communicates with the FastAPI backend at `http://127.0.0.1:8000`.

## API Endpoint

### POST `/chat`

Request:

```json
{
  "message": "Hello Vera!"
}
```

Response:

```json
{
  "reply": "Hello! How can I help you today?"
}
```

## How It Works

1. The user enters a message in the browser.
2. JavaScript sends the message to the FastAPI `/chat` endpoint.
3. The backend forwards the request to the Groq API.
4. GPT-OSS 20B generates a response.
5. The backend returns the response as JSON.
6. The frontend displays Vera's reply.

## Future Improvements

* Persistent conversation history
* User authentication
* Database integration
* Improved error handling
* Deployment for public access
* Additional assistant capabilities

## Author

**Yogesh Gola**
B.Tech — Geoinformatics
Netaji Subhas University of Technology (NSUT), New Delhi

---

*Developed as an academic AI integration project.*
