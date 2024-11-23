# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import date
from sqlalchemy import create_engine, Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:4321"],  # Ajusta según tu configuración
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuración de la base de datos
SQLALCHEMY_DATABASE_URL = "sqlite:///./registrations.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Modelo de la base de datos
class Registration(Base):
    __tablename__ = "registrations"

    id = Column(Integer, primary_key=True, index=True)
    student_name = Column(String, index=True)
    birth_date = Column(Date)
    gender = Column(String)
    document_id = Column(String, unique=True, index=True)
    grade = Column(String)
    parent_name = Column(String)
    parent_phone = Column(String)
    parent_email = Column(String)
    address = Column(String)

# Crear las tablas
Base.metadata.create_all(bind=engine)

# Modelo Pydantic para la validación de datos
class RegistrationCreate(BaseModel):
    studentName: str
    birthDate: str
    gender: str
    documentId: str
    grade: str
    parentName: str
    parentPhone: str
    parentEmail: str
    address: str

    class Config:
        orm_mode = True

@app.post("/api/register")
async def register_student(registration: RegistrationCreate):
    db = SessionLocal()
    try:
        # Verificar si ya existe un registro con el mismo documento
        existing_registration = db.query(Registration).filter(
            Registration.document_id == registration.documentId
        ).first()
        
        if existing_registration:
            raise HTTPException(status_code=400, detail="Ya existe un registro con este número de documento")
        
        # Crear nuevo registro
        db_registration = Registration(
            student_name=registration.studentName,
            birth_date=date.fromisoformat(registration.birthDate),
            gender=registration.gender,
            document_id=registration.documentId,
            grade=registration.grade,
            parent_name=registration.parentName,
            parent_phone=registration.parentPhone,
            parent_email=registration.parentEmail,
            address=registration.address
        )
        
        db.add(db_registration)
        db.commit()
        db.refresh(db_registration)
        
        return {"status": "success", "message": "Registro completado exitosamente"}
    
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    
    finally:
        db.close()

@app.get("/api/registrations")
async def get_registrations():
    db = SessionLocal()
    try:
        registrations = db.query(Registration).all()
        return registrations
    finally:
        db.close()