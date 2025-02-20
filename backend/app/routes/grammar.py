from fastapi import APIRouter, HTTPException
from services.openai_service import correct_grammar

router = APIRouter()

@router.post("/grammar-check")
async def grammar_check(data: dict):
    text = data.get("text")
    if not text:
        raise HTTPException(status_code=400, detail="Text is required")
    
    corrected_text = correct_grammar(text)
    return {"corrected_text": corrected_text}
