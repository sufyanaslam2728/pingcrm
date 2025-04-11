from sqlalchemy import Column, Integer, String, ForeignKey
from ..database import Base
from sqlalchemy.orm import relationship

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    phone = Column(String)
    city = Column(String)
    company_id = Column(Integer, ForeignKey("companies.id"))

    company = relationship("Company", backref="contacts")