const lordify = (regularPerson) => {
  console.log(`${regularPerson.firstName}, lord Canterbury`);
};

const regularPerson = {
  firstName: 'Mark',
  lastName: 'Wilson',
};

lordify(regularPerson);

// object destructuring

const lordifyOne = ({ firstName }) => {
  console.log(`${firstName}, lord Canterbury`);
};

lordifyOne(regularPerson);
