// MODEL
// dane naszej aplikacji

let courses = [
  {
    id: 'some-uuid-should-be-here',
    name: 'Frontend'
  }
];

// VIEW
// funkcje renderujące View (czyli tworzące DOM)
const renderCourses = () => {
  const coursesDOM = courses.map(({ name }) => `<li>course: ${name}</li>`);
  // <ul id='courses'></ul> już istnieje w kodzie
  document.querySelector('#courses').innerHTML = coursesDOM;
};

// UPDATE
//  funkcje zmieniające MODEL

const setCourseName = (courseId, newName) => {
  const newCourses = courses.map((course) =>
    course.id === courseId ? { ...course, name: newName } : course
  );
};
