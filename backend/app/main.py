from fastapi import FastAPI
from routes import grammar, speech, auth

app = FastAPI()

app.include_router(grammar.router, prefix="/api")
app.include_router(speech.router, prefix="/api")
app.include_router(auth.router, prefix="/api")

@app.get("/")
def home():
    return {"message": "LinguaCheck API is running!"}
