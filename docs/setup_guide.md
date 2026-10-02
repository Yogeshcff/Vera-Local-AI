# Vera AI — Setup Guide

## 1. Prerequisites

Required software:

* Python 3.10 or later.
* Visual Studio Code.
* Git.
* A modern web browser.
* A Groq API key.

No Ollama installation or local AI model download is required.

## 2. Project Location

```text
D:\Yogesh\Vera-Local-AI
```

## 3. Clone the Repository

```powershell
git clone https://github.com/Yogeshcff/Vera-Local-AI.git
cd Vera-Local-AI
```

Open the project folder in Visual Studio Code.

## 4. Backend Setup

### Create a Virtual Environment

```powershell
python -m venv .venv
```

### Activate the Environment

```powershell
.\.venv\Scripts\Activate.ps1
```

### Install Dependencies

```powershell
pip install -r backend/requirements.txt
```

### Configure Environment Variables

Create a `.env` file in the project root using `.env.example` as a template.

Add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Never commit the real `.env` file to GitHub.

## 5. Run the Backend

From the project root, execute:

```powershell
python -m uvicorn backend.main:app --reload --port 8000
```

Backend URL:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

Stop the server using `Ctrl + C`.

## 6. Run the Frontend Locally

Open a second terminal from the project root.

Run:

```powershell
python -m http.server 5500 --directory frontend
```

Open:

```text
http://localhost:5500
```

Ensure the backend is running before testing chat functionality.

## 7. Production Deployment

Vera AI is deployed using separate frontend and backend hosting services.

| Component    | Platform     |
| ------------ | ------------ |
| Frontend     | GitHub Pages |
| Backend      | Render       |
| AI Inference | Groq API     |

### Live Application

https://yogeshcff.github.io/Vera-Local-AI/

### Backend

https://vera-ai-backend-9occ.onrender.com

The production backend requires the `GROQ_API_KEY` environment variable to be configured in Render.

## 8. Installing Vera AI on a Phone

1. Open the live application in a supported mobile browser.
2. Use the browser's Install App or Add to Home Screen option if available.
3. Launch Vera AI from the home screen.

Installation availability depends on browser support and PWA configuration.

## 9. Troubleshooting

### Backend Does Not Start

* Verify that the virtual environment is activated.
* Install dependencies.
* Check that the `.env` file exists and contains a valid API key.

### Chat Does Not Respond

* Confirm that the backend is running.
* Check the backend logs.
* Verify the Groq API key and API availability.
* Check browser developer tools for network or CORS errors.

### Frontend Cannot Connect to Backend

Verify that the frontend is configured to use the correct backend URL and that the backend permits the frontend's origin.

### Slow First Response

The Render free-tier service may sleep after inactivity. The first request can take longer while the service wakes up.

## 10. Cost

Vera AI uses GitHub Pages, Render, and Groq API services.

Free-tier availability, usage limits, and service policies depend on the respective providers.

The application does not require users to install or operate a local AI model.
