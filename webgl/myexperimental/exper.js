main();

function main() {
  const convas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('Nie można zainicjalizować WebGL');
    return;
  }

  // Shadery

  const vertexShader = `
  in vec4 inPosition;

  void main(){
    gl_Position = inPosition;
  }
`;
  const fragmentShader = `
  void main(){
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
  }
`;

  const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('Błąd kompilacji shadera' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);

    return null;
  }

  return shader;
}
