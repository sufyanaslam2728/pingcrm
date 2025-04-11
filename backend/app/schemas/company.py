from pydantic import BaseModel

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
        orm_mode = True
