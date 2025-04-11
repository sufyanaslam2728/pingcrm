from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import company
from .routers import contact

from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router)
app.include_router(company.router)

@app.get('/')
def hello():
    return {"message": "Welcome to PingCRM"}