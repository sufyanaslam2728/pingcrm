from sqlalchemy.orm import Session
from app import models, schemas

def create_company(db: Session, company: schemas.CompanyCreate):
    db_company = models.Company(**company.dict())
    db.add(db_company)
    db.commit()
    db.refresh(db_company)
    return db_company

def get_companies(db: Session, skip: int = 0, limit: int = 100, name: str = None):
    query = db.query(models.Company)
    if name:
        query = query.filter(models.Company.name.ilike(f"%{name}%"))
    return query.offset(skip).limit(limit).all()

def get_company(db: Session, company_id: int):
    return db.query(models.Company).filter(models.Company.id == company_id).first()

def update_company(db: Session, company_id: int, updated_data: schemas.CompanyUpdate):
    company = get_company(db, company_id)
    if not company:
        return None
    for key, value in updated_data.dict().items():
        setattr(company, key, value)
    db.commit()
    db.refresh(company)
    return company

def delete_company(db: Session, company_id: int):
    company = get_company(db, company_id)
    if company:
        db.delete(company)
        db.commit()
    return company

