import data from '../json/data.json' assert { type: 'json' };
import { AgregarDatos } from './AgregarDatos.js';
import { NavBar } from './NavBar.js';

addEventListener("DOMContentLoaded", () => {
  const $portada = document.querySelector('.inicio-contenedor'),
    $sobremi = document.querySelector('.sobremi_descripcion'),
    $habilidades = document.querySelector('.skills_grid'),
    $proyectos = document.querySelector('#portafolio .container .row');

  const agregarDatos = new AgregarDatos(data),
    navBar = new NavBar();

  agregarDatos.portada($portada);
  agregarDatos.sobremi($sobremi);
  agregarDatos.habilidades($habilidades);
  agregarDatos.proyectos($proyectos);
  
  navBar.botonMenu();
  navBar.activeMenu();
});