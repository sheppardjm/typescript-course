export interface Address {
  street: string;
  city: string;
  zip: string;
}

export interface User {
  name: string;
  age: number;
  country: string;
  address: Address;
};
