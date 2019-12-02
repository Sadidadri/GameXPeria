function cargaContextoCanvas(idCanvas) {
    //Recibimos el elemento canvas
    let elemento = document.getElementById(idCanvas);
    //Comprobación sobre si encontramos un elemento
    //y podemos extraer su contexto con getContext(), que indica compatibilidad con canvas
    if (elemento && elemento.getContext) {
        //Accedo al contexto de '2d' de este canvas, necesario para dibujar
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    } 
}
let contexto;

window.onload = function() {
    
    contexto = cargaContextoCanvas("userIcon");
    
    contexto.fillStyle = "#E7E2CE";
    contexto.fillRect(0,0,1000,1000);
    
    //Cuerpo
    contexto.beginPath();
    contexto.fillStyle = "white";
    contexto.arc(150, 200, 100, Math.PI,0 );
    contexto.fill();
    contexto.closePath();
    //Cabeza
    contexto.beginPath();
    contexto.fillStyle = "white";
    contexto.arc(150, 80, 40, 0,2*Math.PI );
    contexto.fill();
    contexto.closePath();
}