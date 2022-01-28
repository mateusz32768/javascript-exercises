const item = {
  isCollapsed: true,
};

function isLargeScreen() {
  return false;
}

// tak było w es5

// let classes = 'header';
// classes += isLargeScreen()
//   ? ''
//   : item.isCollapsed
//   ? ' icon-expander'
//   : ' icon-collapser';

// w es6
// const classes = `header ${
//   isLargeScreen() ? '' : item.isCollapsed ? ' icon-expander' : ' icon-collapser'
// }`;

// w es6 z zagnieżdzonymi literałami szablonów
const classes = `header ${
  isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}`
}`;

console.log(classes);
