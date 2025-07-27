from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import os
import httpx
from utils.email import send_prereg_email
from utils.supabase_client import supabase

router = APIRouter()

class PreregisterRequest(BaseModel):
    name: str
    email: EmailStr
    captchaToken: str

@router.post("/preregister")
async def preregister(data: PreregisterRequest):
    # 1. Verify reCAPTCHA
    secret = os.getenv("RECAPTCHA_SECRET")
    async with httpx.AsyncClient() as client:
        resp = await client.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={"secret": secret, "response": data.captchaToken},
        )
        if not resp.json().get("success"):
            raise HTTPException(status_code=400, detail="CAPTCHA failed")

    # 2. Insert into Supabase
    try:
        response = supabase.table("preregistrations").insert({
            "name": data.name,
            "email": data.email
        }).execute()
    except Exception as e:
        print("Supabase insert error:", e)
        raise HTTPException(status_code=500, detail="Error saving data")

    # 3. Send confirmation email
    try:
        await send_prereg_email(data.email, data.name)
    except Exception as e:
        print("Email sending failed:", e)
        raise HTTPException(status_code=500, detail="Failed to send confirmation email")

    return {"message": "Successfully added to mailing list"}
