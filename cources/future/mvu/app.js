import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
// helper function
const qs = s => document.querySelector(s);

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
  // <ul id='courses'></ul> już istnieje w kodzie
  qs('#courses').innerHTML = courses
    .map(({ name }) => `<li>course: ${name}</li>`)
    .join('');
};

const renderApp = () => {
  renderCourses();
};

// UPDATE
//  funkcje zmieniające MODEL

const setCourseName = (courseId, newName) => {
  courses = courses.map(course =>
    course.id === courseId ? { ...course, name: newName } : course
  );
  renderApp(); // change View
};

const addCourse = newCourse => {
  courses = [...courses, newCourse]; // change Model
  renderApp(); // change View
};

// Events
qs('#addCourseForm').addEventListener('submit', e => {
  e.preventDefault(); // form nie przeładuje strony
  const { newCourseName } = e.currentTarget.elements; // targetujemy html-owy
  // element <input/>, który ma atrybut name="newCourseName"
  const courseId = nanoid();
  const newCourse = {
    id: courseId,
    name: newCourseName.value
  };
  addCourse(newCourse);
});

qs('#editCourseForm').addEventListener('submit', e => {
  e.preventDefault(); // form nie przeładuje strony
  const { newCourseName } = e.currentTarget.elements; // targetujemy html-owy
  // element <input/>, który ma atrybut name="newCourseName"
  const courseId = newCourseName.dataset.id; // korzystamy z atrybutu data-id
  setCourseName(courseId, newCourseName.value);
});

// start aplikacji
renderApp();
