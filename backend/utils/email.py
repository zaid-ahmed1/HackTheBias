import os
from email.message import EmailMessage
import aiosmtplib

async def send_prereg_email(to_email: str, name: str):
    message = EmailMessage()
    message["From"] = os.getenv("MAIL_FROM", "hello@hackthebias.dev")
    message["To"] = to_email
    message["Subject"] = "Thanks for pre-registering for HackTheBias 2026!"

    message.set_content(
        f"""
Hi {name},

Thanks for signing up for Hack the Bias 2026!
We'll keep you updated as we get closer to the event and notify you as soon as registration opens.

– The Hack the Bias Team
"""
    )

    await aiosmtplib.send(
        message,
        hostname=os.getenv("MAILTRAP_HOST"),
        port=int(os.getenv("MAILTRAP_PORT")),
        username=os.getenv("MAILTRAP_USER"),
        password=os.getenv("MAILTRAP_PASS"),
        start_tls=True,
    )
