const employeeAmazon = {
  id: 100,
  profession: 'maintenance technician',
  workplace: 'Wrocław',
  firma: 'Amazon',
  firstName: 'Jan',
  lastName: 'Bogaty',

  displayPersonalData() {
    console.log(
      `${this.firstName}\n${this.lastName}\n${this.profession}\n${this.workplace}\n${this.firma}\n${this.id}`
    );
  },
};

// employeeAmazon.displayPersonalData();

const marek_raubo = {
  ...employeeAmazon,
  id: 101,
  firstName: 'Marek',
  lastName: 'Raubo',
};

const janusz_gowacki = {
  ...employeeAmazon,
  id: 102,
  firstName: 'Janusz',
  lastName: 'Głowacki',
};

const employeesAmazon = [marek_raubo, janusz_gowacki];

for (const employee of employeesAmazon) {
  for (const data in employee) {
    console.log(data, employee[data]);
  }
}
