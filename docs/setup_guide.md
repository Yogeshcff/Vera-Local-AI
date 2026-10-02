# Vera AI — Setup Guide

## 1. Prerequisites

Required software:

* Python 3.10 or later (only if using the optional backend).
* Visual Studio Code.
* Git.
* A modern web browser.

No Ollama installation, AI model download, or API key is required.

## 2. Project Location

```text
D:\Yogesh\Vera-Local-AI
```

## 3. Opening the Project

1. Open Visual Studio Code.
2. Open the Vera-Local-AI project folder.
3. Navigate to the `frontend` directory.
4. Open `index.html` in a browser for basic interface testing.

For proper PWA functionality, use a local development server or deploy the application over HTTPS.

## 4. Local Development

The frontend can be tested using the VS Code Live Server extension.

Alternatively, from the project root, run:

```powershell
python -m http.server 5500 --directory frontend
```

Open:

```text
http://localhost:5500
```

Stop the server using `Ctrl + C`.

## 5. Installing Vera AI on a Phone

1. Deploy the application to an HTTPS website.
2. Open the website in the mobile browser.
3. Select the browser's Install App or Add to Home Screen option.
4. Launch Vera AI from the home screen.

The exact installation steps may vary by browser and device.

## 6. Offline Functionality

After the first successful load, the service worker can cache essential application resources.

Basic chatbot functionality can then work offline, provided the required files have been cached successfully.

## 7. Deployment

The initial frontend can be deployed using a free static hosting service that supports HTTPS.

The deployment should include:

* `index.html`
* `style.css`
* `script.js`
* `manifest.json`
* `service-worker.js`

## 8. Troubleshooting

### Page does not load

Check the local server or hosting URL.

### Install option is unavailable

Verify that the site is served over HTTPS or localhost and that the PWA manifest is configured correctly.

### Offline mode does not work

Check whether the service worker has registered and cached the application files.

## 9. Cost

The initial application requires no paid AI API, external inference service, or local AI model.

Free hosting availability and limits depend on the selected provider.
