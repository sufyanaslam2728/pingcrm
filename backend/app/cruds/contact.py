from sqlalchemy.orm import Session
from app.models import company, contact as model
from app.schemas import contact as schemas

def create_contact(db: Session, contact: schemas.ContactCreate):
    db_contact = model.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def get_contacts(db: Session, name: str = None, company_name: str = None):
    query = db.query(model.Contact).join(model.Contact.company)

    if name:
        query = query.filter(model.Contact.name.ilike(f"%{name}%"))
    if company_name:
        query = query.filter(company.name.ilike(f"%{company_name}%"))

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
    return db.query(model.Contact).filter(model.Contact.id == contact_id).first()

def update_contact(db: Session, contact_id: int, updated_data: schemas.ContactUpdate):
    contact = get_contact(db, contact_id)
    if not contact:
        return None

    for key, value in updated_data.model_dump(exclude_unset=True).items():
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
