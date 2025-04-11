from sqlalchemy.orm import Session,joinedload
from app.models import company as model
from app.schemas import company as schemas

def create_company(db: Session, company: schemas.CompanyCreate):
    db_company = model.Company(**company.model_dump())
    db.add(db_company)
    db.commit()
    db.refresh(db_company)
    return db_company

def get_companies(db: Session, skip: int = 0, limit: int = 100, name: str = None):
    query = db.query(model.Company)
    if name:
        query = query.filter(model.Company.name.ilike(f"%{name}%"))
    return query.offset(skip).limit(limit).all()

def get_company(db: Session, company_id: int):
    return db.query(model.Company).options(joinedload(model.Company.contacts)).filter(model.Company.id == company_id).first()

def update_company(db: Session, company_id: int, updated_data: schemas.CompanyUpdate):
    company = get_company(db, company_id)
    if not company:
        return None
    for key, value in updated_data.model_dump().items():
        setattr(company, key, value)
    db.commit()
    db.refresh(company)
    return company

def delete_company(db: Session, company_id: int):
    company = get_company(db, company_id)
    if company.contacts and len(company.contacts) > 0:
        return False
    if company:
        db.delete(company)
        db.commit()
    return company

