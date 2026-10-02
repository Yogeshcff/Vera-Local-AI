from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from backend.llm import get_ai_response

app = FastAPI(
    title="Vera AI",
    description="AI-powered conversational assistant",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
    "https://yogeshcff.github.io",
],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=4000)


@app.get("/")
def home():
    return {
        "message": "Vera AI backend is running!",
        "status": "online",
    }


@app.post("/chat")
async def chat(request: ChatRequest):

    try:
        reply = await get_ai_response(request.message)

        return {
            "reply": reply,
        }

    except Exception as error:
        print("Chat endpoint error:", repr(error))

        raise HTTPException(
            status_code=502,
            detail="Unable to get a response from Groq. Check backend logs.",
        )