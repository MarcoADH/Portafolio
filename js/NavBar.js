export class NavBar {

  constructor() {
    this.$botonMenu = document.querySelector(".mobile-nav-toggle")
    this.$botonIcono = document.querySelector(".bi-list")
    this.$navegacion = document.getElementById("navegacion")
    this.$lista = document.querySelectorAll(".lista")
  }

  botonMenu() {
    const $this = this
    if ($this.$botonMenu) {
      $this.$botonMenu.addEventListener("click", () => {
        if ($this.$botonIcono.className == "bi bi-list") {
          $this.$navegacion.classList.add("nav-active");
          $this.$botonIcono.classList.replace("bi-list", "bi-x");
        }
        else if ($this.$botonIcono.className == "bi bi-x") {
          $this.$navegacion.classList.remove("nav-active");
          $this.$botonIcono.classList.replace("bi-x", "bi-list");
        }
      });
    };
  }

  activeMenu() {
    const $this = this
    $this.$lista.forEach(lista => {
      lista.addEventListener("click", function () {
        $this.$lista.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }
}