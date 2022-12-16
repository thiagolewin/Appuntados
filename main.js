function alturaMinima() {
    const altura = window.innerHeight - filtros.getBoundingClientRect().top - filtros.getBoundingClientRect().height +30;
    console.log(altura)
    espacioTarjetas.style.minHeight = altura + "px";
}
function removeAllChilds(a)
 {
 while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }
let tarjetas = [];
const espacioTarjetas = document.getElementsByClassName("main__apuntes__tarjetas")[0];
const filtros = document.getElementsByClassName("main__apuntes__filtro")[0];
let seleccionado = null;
for (let i = 0; i<filtros.childElementCount;i++) {
    filtros.children[i].addEventListener("click",(e)=> {
        if (seleccionado != null) {
            seleccionado.classList.toggle("selected");
        }
        seleccionado = e.target;
        seleccionado.classList.toggle("selected");
        let filtro = seleccionado.textContent;
        removeAllChilds(espacioTarjetas)
        alturaMinima()
        for (let i = 0; i<tarjetas.length;i++) {
            let materia = tarjetas[i].children[1].children[0].children[0].children[1].textContent;
            if (materia == filtro) {
                console.log("a")
                espacioTarjetas.appendChild(tarjetas[i])
            }
        }
    })
}
for (let i = 0; i<espacioTarjetas.childElementCount;i++) {
    tarjetas[i] = espacioTarjetas.children[i];
}