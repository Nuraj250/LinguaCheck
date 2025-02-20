from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
from services.whisper_service import analyze_speech

router = APIRouter()

@router.post("/speech-analysis")
async def speech_analysis(file: UploadFile = File(...)):
    try:
        temp_file = f"temp_audio_{file.filename}"
        with open(temp_file, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        result = analyze_speech(temp_file)
        return {"transcription": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
