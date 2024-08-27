export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Student {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
}
