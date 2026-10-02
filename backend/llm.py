import os
from pathlib import Path

import httpx
from dotenv import load_dotenv

# Load API key from project root
ENV_PATH = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(ENV_PATH, override=True)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

MODEL = "openai/gpt-oss-20b"


async def get_ai_response(message: str) -> str:

    if not GROQ_API_KEY:
        raise RuntimeError("Groq API key is missing.")

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "system",
                "content": (
                    "You are Vera, a friendly, helpful conversational "
                    "AI assistant. Respond naturally and clearly."
                ),
            },
            {
                "role": "user",
                "content": message,
            },
        ],
        "temperature": 0.7,
        "max_tokens": 1024,
    }

    async with httpx.AsyncClient(timeout=60.0) as client:

        response = await client.post(
            GROQ_URL,
            headers=headers,
            json=payload,
        )

        if response.is_error:
            print("Groq HTTP status:", response.status_code)
            print("Groq error:", response.text[:1000])
            response.raise_for_status()

        data = response.json()

        choices = data.get("choices", [])

        if not choices:
            raise RuntimeError("Groq returned no response.")

        return choices[0]["message"]["content"]