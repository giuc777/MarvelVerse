import React from "react";
import ReactDOM from "react-dom/client"; // No es necesario importar desde "react-dom/client"
import App from "./src/app";
import './src/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = document.querySelector('#app');

ReactDOM.createRoot(root).render( // Aquí, creamos una raíz utilizando createRoot() y luego utilizamos render() en esa raíz.
  <>
    <App />
  </>
);