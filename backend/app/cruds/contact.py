from sqlalchemy.orm import Session
from app import models, schemas

def create_contact(db: Session, contact: schemas.ContactCreate):
    db_contact = models.Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def get_contacts(db: Session, name: str = None, company_name: str = None):
    query = db.query(models.Contact).join(models.Company)

    if name:
        query = query.filter(models.Contact.name.ilike(f"%{name}%"))
    if company_name:
        query = query.filter(models.Company.name.ilike(f"%{company_name}%"))

    contacts =  query.all()
    return [
        {
            "id": contact.id,
            "name": contact.name,
            "phone": contact.phone,
            "city": contact.city,
            "company": contact.company.name, 
            "company_id": contact.company.id
        }
        for contact in contacts
    ]

def get_contact(db: Session, contact_id: int):
    return db.query(models.Contact).filter(models.Contact.id == contact_id).first()

def update_contact(db: Session, contact_id: int, updated_data: schemas.ContactUpdate):
    contact = get_contact(db, contact_id)
    if not contact:
        return None

    for key, value in updated_data.dict(exclude_unset=True).items():
        setattr(contact, key, value)

    db.commit()
    db.refresh(contact)
    return contact

def delete_contact(db: Session, contact_id: int):
    contact = get_contact(db, contact_id)
    if contact:
        db.delete(contact)
        db.commit()
    return contact
