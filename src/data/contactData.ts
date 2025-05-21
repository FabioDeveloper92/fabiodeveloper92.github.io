
export interface ContactInfo {
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
}

export const contactData: ContactInfo = {
  email: "fabio@example.com",
  phone: "+39 123 456 7890",
  location: {
    city: "Milano",
    country: "Italia"
  }
};
