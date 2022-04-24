function render(fog_level = 0, spark_level = 100) {
  console.log(
    `Poziom zamglenia: ${fog_level}, a natężenie iskier: ${spark_level}`
  );
}

render(10);
render(undefined, 10);

function render_1(fog_level = 3, spark_level = fog_level) {
  console.log(
    `Poziom zamglenia: ${fog_level}, a natężenie iskier: ${spark_level}`
  );
}

render_1(10);

function render_2(fog_level = 10, spark_level = fog_level * 5) {
  console.log(
    `Poziom zamglenia: ${fog_level}, a natężenie iskier: ${spark_level}`
  );
}

render_2(5);

const scope = 'zakres zewnętrzny';

function scoper(val = scope) {
  const scope = 'zakres wewnętrzny';
  console.log(val);
}

scoper();
