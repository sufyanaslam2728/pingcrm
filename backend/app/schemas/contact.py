from pydantic import BaseModel

class ContactBase(BaseModel):
    name: str
    phone: str
    city: str
    company_id: int

class ContactCreate(ContactBase):
    pass

class ContactUpdate(ContactBase):
    pass

class ContactOut(ContactBase):
    id: int

    class Config:
        from_attributes = True

class ContactWithCompany(BaseModel):
    id: int
    name: str
    phone: str
    city: str
    company: str
    company_id: int

    class Config:
        from_attributes = True