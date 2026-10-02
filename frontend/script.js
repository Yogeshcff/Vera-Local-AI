
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");
const welcomeScreen = document.getElementById("welcome-screen");

let conversationHistory = [];

// Display messages
function addMessage(text, sender) {
    const message = document.createElement("div");
    message.className = `message ${sender}`;

    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = sender === "user" ? "Y" : "V";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = text;

    message.appendChild(avatar);
    message.appendChild(content);

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    conversationHistory.push({ sender, text });
}

// Typing indicator
function showTyping() {
    const typing = document.createElement("div");
    typing.className = "message assistant";
    typing.id = "typing-indicator";

    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = "V";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = "Vera is thinking...";

    typing.appendChild(avatar);
    typing.appendChild(content);

    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message to Groq through our FastAPI backend
async function getVeraResponse(message) {
    const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });

    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.reply) {
        throw new Error("Vera returned an empty response.");
    }

    return data.reply;
}

// Chat form handler
chatForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const text = messageInput.value.trim();

    if (!text) return;

    welcomeScreen.style.display = "none";

    addMessage(text, "user");

    messageInput.value = "";
    messageInput.focus();

    showTyping();

    try {
        const reply = await getVeraResponse(text);

        document.getElementById("typing-indicator")?.remove();

        addMessage(reply, "assistant");

    } catch (error) {
        console.error("Vera API error:", error);

        document.getElementById("typing-indicator")?.remove();

        addMessage(
            "I'm having trouble connecting to my AI service. Please check that the backend is running and try again.",
            "assistant"
        );
    }
});

// Service worker — offline support
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Vera offline support enabled!"))
            .catch((error) => console.error("Service worker error:", error));
    });
}