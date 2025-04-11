from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, crud
from ..database import SessionLocal

router = APIRouter(prefix="/companies", tags=["Companies"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.CompanyOut)
def create(company: schemas.CompanyCreate, db: Session = Depends(get_db)):
    return crud.create_company(db, company)

@router.get("/", response_model=list[schemas.CompanyOut])
def read_companies(name: str = None, db: Session = Depends(get_db)):
    return crud.get_companies(db, name=name)

@router.get("/{company_id}", response_model=schemas.CompanyOut)
def read_company(company_id: int, db: Session = Depends(get_db)):
    db_company = crud.get_company(db, company_id)
    if db_company is None:
        raise HTTPException(status_code=404, detail="Company not found")
    return db_company

@router.put("/{company_id}", response_model=schemas.CompanyOut)
def update(company_id: int, company: schemas.CompanyUpdate, db: Session = Depends(get_db)):
    updated = crud.update_company(db, company_id, company)
    if updated is None:
        raise HTTPException(status_code=404, detail="Company not found")
    return updated

@router.delete("/{company_id}")
def delete(company_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_company(db, company_id)
    if deleted is None:
        raise HTTPException(status_code=404, detail="Company not found")
    return {"detail": "Deleted"}
