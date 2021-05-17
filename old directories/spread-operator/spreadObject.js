const kowalski = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  job: 'programmer',
};

const kowalskiClone = { ...kowalski };

for (const key in kowalskiClone) {
  console.log(`${key}: ${kowalskiClone[key]}`);
}
