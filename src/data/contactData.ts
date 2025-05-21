
export interface ContactInfo {
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
}

export const contactData: ContactInfo = {
  email: "fabramo92@gmail.com",
  phone: "-",
  location: {
    city: "Varese",
    country: "Italy"
  }
};
