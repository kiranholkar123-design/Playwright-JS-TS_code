
const user = {
  id: 1,
  name: "Kiran",
  email: "kiran@example.com",
  phone: 999009,
  isActive: true,
  address: {
    street: "123 MG Road",
    city: "Pune",
    state: "Maharashtra",
    zip: 411001
  }
};

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user['address']['state']);