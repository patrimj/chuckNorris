(()=>{"use strict";class e{constructor(){this.nombres=[]}async obtenerCategorias(){const e=await fetch("https://api.chucknorris.io/jokes/categories");return this.nombres=await e.json(),this.nombres}}document.getElementById("generar").addEventListener("click",(function(){window.location.href="frase.html"})),async function(){const t=new e,n=await t.obtenerCategorias(),a=document.getElementById("tabla");n.forEach((function(e){const t=document.createElement("tr"),n=document.createElement("td"),o=document.createElement("a");o.href=`frase.html?categoria=${e}`,o.textContent=e,n.appendChild(o),t.appendChild(n),a.appendChild(t)}))}()})();