const kowalski = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  job: 'programmer',
};

for (const prop in kowalski) {
  console.log(`${prop}:`, kowalski[prop]);
}

const kowalskiClone = { ...kowalski };

for (const key in kowalskiClone) {
  console.log(`${key}: ${kowalskiClone[key]}`);
}
