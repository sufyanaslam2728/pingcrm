from sqlalchemy import Column, Integer, String, ForeignKey
from ..database import Base


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String,unique=True, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    address = Column(String)
    city = Column(String)
    province = Column(String)
    country = Column(String)
    postal_code = Column(String)