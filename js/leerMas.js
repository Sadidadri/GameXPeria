{

    let enlacesLeerMas = document.getElementsByClassName("leerMas");
    let spanTextoAdicional = document.getElementsByClassName("textoOculto");

    init = function () {

        for (let i = 0; i < enlacesLeerMas.length; i++) {
            enlacesLeerMas[i].addEventListener("click",mostrarTexto(i))
        }
    }

    mostrarTexto = function (i) {
        return () => {
            enlacesLeerMas[i].style.display = "none";
            spanTextoAdicional[i].style.display = "block";
        }
    }

    document.addEventListener("DOMContentLoaded", init)
}
