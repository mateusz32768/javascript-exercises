import { initBuffers } from './buffers.js';
import { drawScene } from './drawcall.js';
import { initShaderProgram } from './shaderprogram.js';

main();

function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('Nie udało się utworzyć kontekstu WebGL');
    return;
  }

  const vertexShader = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

        
    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;

  const fragmentShader = `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `;

  const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        'uProjectionMatrix'
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  const buffers = initBuffers(gl);

  drawScene(gl, programInfo, buffers);
}
