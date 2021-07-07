addEventListener("DOMContentLoaded", () => {
    const $botonMenu = document.querySelector(".mobile-nav-toggle"),
        $botonIcono = document.querySelector(".bi-list"),
        $navegacion = document.getElementById("navegacion"),
        $lista = document.querySelectorAll(".lista");
        
    if($botonMenu){
        $botonMenu.addEventListener("click", () => {
            if ($botonIcono.className == "bi bi-list") {
                $navegacion.classList.add("nav-active");
                $botonIcono.classList.replace("bi-list", "bi-x");
            }
            else if ($botonIcono.className == "bi bi-x") {
                $navegacion.classList.remove("nav-active");
                $botonIcono.classList.replace("bi-x", "bi-list");
            }
        });
    };

    $lista.forEach(lista => {
        lista.addEventListener("click", function() {
            $lista.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});