export function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 1.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Utwórz macierz perspektywiczną, czyli specjalną macierz
  // używaną do symulacji zniekształcenia perspektywy w kamerze.
  // Pole widzenia wynosi 45 stopni, szerokość / wysokość
  // współczynnik dopasowany do rozmiaru wyświetlania płótna
  // i chcemy widzieć tylko obiekty między 0,1 jednostki
  // i 100 jednostek z dala od aparatu.

  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // uwaga: glmatrix.js zawsze ma pierwszy argument
  // jako miejsce docelowe, aby otrzymać wynik.
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // Ustaw pozycję rysowania  środek sceny.
  const modelViewMatrix = mat4.create();

  // Teraz przesuń pozycję rysowania trochę tam, gdzie chcemy
  // zacznij rysować kwadrat.
  mat4.translate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [-0.0, 0.0, -6.0]
  ); // amount to translate

  // Powiedz WebGL, jak wyciągnąć pozycje z position
  // buffer do atrybutu vertexPosition.
  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL to use our program when drawing
  gl.useProgram(programInfo.program);

  // Set the shader uniforms
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix
  );

  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix
  );

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}
