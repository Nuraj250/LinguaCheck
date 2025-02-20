from fastapi import APIRouter, HTTPException, Depends
from utils.firebase import verify_token

router = APIRouter()

@router.get("/auth/verify")
async def verify_user(token: str):
    user = verify_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"message": "User authenticated", "user": user}
