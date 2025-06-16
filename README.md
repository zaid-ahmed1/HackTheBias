# HackTheBias Platform

This is a fullstack web app built for managing hackathon information, registration, team formation, and sponsor details.  
It uses **Next.js (React)** for the frontend and **FastAPI (Python)** for the backend.

---

## 🧱 Project Structure


---

## 🖥️ Frontend Setup (Next.js)

### 🔧 Prerequisites
- Node.js (v18+ recommended)
- npm

### ▶️ To run:

```bash
cd frontend
npm install
npm run dev
```
# 1. Create and activate environment (if not already done)
conda activate hackthebias

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the FastAPI backend
cd backend
uvicorn main:app --reload

FastAPI will be live at http://localhost:8000

## Migrations

Make sure alembic is set up (init once with alembic init alembic if not already).

###🔄 To apply migrations:
```bash
cd backend
alembic upgrade head
```

###✍️ To create a migration after changing models:
```bash
alembic revision --autogenerate -m "your message here"
```