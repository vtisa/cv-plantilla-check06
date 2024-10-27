
//Crear las barritas de una barra identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=13;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//seleccion de todas las barras 
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let css = document.getElementById("css");
crearBarra(css);
let slq = document.getElementById("sql");
crearBarra(sql);
let python = document.getElementById("python");
crearBarra(python);
let bootstrap = document.getElementById("bootstrap");
crearBarra(bootstrap);

/*guardar la cantidad de barritas que se van a ir pintando por cada barra 
se utiliza un arreglo. comienzan en -1 porque no tiene ninguna pintada al iniciarse.*/
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable hara saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 10, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 3, 1, intervalJavascript);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 7, 2, intervalCss);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 10, 3, intervalSql);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 10, 4, intervalPython);
        },100);
        const intervalBootstrap = setInterval(function(){
            pintarBarra(bootstrap, 7, 5, intervalBootstrap);
        },100);
    }
}

//llena una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecta el scrolldel mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}