export interface CompanyData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
  id?: number;
  contacts?: ContactData[];
}
export interface ContactData {
  name: string;
  phone: string;
  city: string;
  company_id: number;
  id?: number;
}
