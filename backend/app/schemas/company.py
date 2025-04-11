from pydantic import BaseModel
from typing import List
from app.schemas.contact import ContactOut

class CompanyBase(BaseModel):
    name: str
    email: str
    phone: str
    address: str
    city: str
    province: str
    country: str
    postal_code: str

class CompanyCreate(CompanyBase):
    pass

class CompanyUpdate(CompanyBase):
    pass

class CompanyOut(CompanyBase):
    id: int
    class Config:
        from_attributes = True
class CompanyOutWithContacts(CompanyBase):
    id: int
    contacts: List[ContactOut] = []
    class Config:
        from_attributes = True
