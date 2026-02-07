(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    street: string;
    city: string;
    country: string;
  }
  const client: Client = {
    name: "Alejo",
    age: 28,
    address: {
      street: "123 Main St",
      city: "Springfield",
      country: "USA",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
