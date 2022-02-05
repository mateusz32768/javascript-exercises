import { initBuffers } from "./initBuffers.js";
import { drawScene } from "./displayScene.js";
import { initShaderProgram } from "./programShader.js";

main();

function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('Nie można zainicjalizować WebGL');
    return;
  }

  // Shadery
const vertexShader = `
  attribute vec4 inPosition;
  attribute vec4 aVertexColor;

  varying lowp vec4 vColor;

  void main(){
    gl_Position = inPosition;
    vColor = aVertexColor;
  }
`;

  const fragmentShader = `
   varying lowp vec4 vColor;

  void main(){
    gl_FragColor = vColor;
  }
`;

  const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'inPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor')
    },
  };

  const buffers = initBuffers(gl);

  drawScene(gl, programInfo, buffers)
}