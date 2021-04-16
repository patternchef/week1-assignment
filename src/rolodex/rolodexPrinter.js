import people from './people.json';

people.forEach((person) => {
  // old
  // const names = person.name.split(' ');
  // const firstName = names[0];
  // const lastName = names[1];
  // const email = person.email;
  // const phone = person.phone;

  // refactor 1 - object destructuring
  // const id = {
  //   firstName: person.name.split(' ')[0],
  //   lastName: person.name.split(' ')[1],
  //   email: person.email,
  //   phone: person.phone
  // };
  // const {firstName, lastName, email, phone} = id;

  // refector 2 - array destructuring
  const [firstName, lastName, email, phone] = [person.name.split(' ')[0], person.name.split(' ')[1], person.email, person.phone];

  console.log(`First name: ${firstName} Last name: ${lastName} Email: ${email} Phone number: ${phone}
  `);
});
