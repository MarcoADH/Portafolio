export class AgregarDatos {
  constructor(data) {
    this.data = data
    this.informacion = this.data.informacion
    this.$fragment = document.createDocumentFragment()
  }

  portada(element) {
    element.querySelector("h1").innerText = this.informacion.nombre
    element.querySelector("p").innerText = this.informacion.cargo
  }

  sobremi(element) {
    const $div = document.createElement("div"),
          $actividades = element.querySelector(".sobremi_actual .actividades");

    element.querySelector(".mi_info").innerHTML = this.informacion.descripcion
    this.informacion.actividades.forEach(actividad => {
      $div.innerText = actividad
      $actividades.appendChild($div.cloneNode(true))
    })
  }

  habilidades(element) {
    const $template_skill = document.getElementById('template-skill').content;

    this.informacion.habilidades.forEach(habilidad => {
      let icono = habilidad.icono ? habilidad.icono : "placeholder.jpg"
      $template_skill.querySelector("img").setAttribute("src", `./assets/img/${icono}`)
      $template_skill.querySelector("img").setAttribute("alt", habilidad.nombre)
      $template_skill.querySelector(".hab_nombre").innerText = habilidad.nombre

      let $clone = document.importNode($template_skill, true);
      this.$fragment.appendChild($clone);
    })

    element.appendChild(this.$fragment);
  }

  proyectos(element) {
    const $template_project = document.getElementById('template-project').content;
    
    this.informacion.proyectos.reverse().forEach(proyecto => {
      let imagen = proyecto.imagen ? `proyectos/${proyecto.imagen}` : "img/proyecto-fondo.png"
      let $project_skills = ""
      let $enlaces = ""

      $template_project.querySelector(".portafolio_img img").setAttribute("src", `./assets/${imagen}`)
      $template_project.querySelector(".portafolio_img img").setAttribute("alt", proyecto.nombre)
      $template_project.querySelector(".portafolio_info h2").innerText = proyecto.nombre
      $template_project.querySelector(".portafolio_info .proy_descripcion").innerText = proyecto.descripcion
      
      proyecto.tecnologias.forEach(tecnologia => $project_skills += `<p>${tecnologia}</p>`)
      $template_project.querySelector(".portafolio_info .proy_tecnologias > div").innerHTML = $project_skills

      // if (proyecto.detalles)    $enlaces += `<a class="btn btn-success mx-1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">Leer más</a>`
      if (proyecto.pagina)      $enlaces += `<a class="btn btn-primary mx-1" href="${proyecto.pagina}" target="_blank"><i class="bi bi-link"></i> Sitio Web</a>`
      if (proyecto.repositorio) $enlaces += `<a class="btn btn-dark mx-1" href="${proyecto.repositorio}" target="_blank"><i class="bi bi-github"></i> Repositorio</a>`
      $template_project.querySelector(".proy_links").innerHTML = $enlaces

      let $clone = document.importNode($template_project, true);
      this.$fragment.appendChild($clone);
    })

    element.appendChild(this.$fragment);
  }
}