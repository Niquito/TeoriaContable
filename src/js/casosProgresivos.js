var contador = 0;

function traerCaso(){

    return enunciados[(contador < enunciados.length) ? (contador++) : (contador = 0)];

}

new Vue({
  el: '#app',
  data () {
        return {
          i:0,
          descripcion:'',
          casos: []
        }
      },
      methods:{
        siguienteCaso(){

            var error = false;
            var inputs = document.getElementsByTagName('input');
            for(var i = 0; i < inputs.length; i++) {
            	if (inputs[i].checked.toString() != inputs[i].dataset.respuesta){
            		error = true;
            	}
            }

            if (!error){
            	const caso = traerCaso();
                this.i++;
                this.casos.push(caso);
            } else {
                var tabla = document.getElementsByTagName('table');//
                tabla[0].classList.add("animar-error");

                tabla[0].addEventListener("animationend", (e) => {
                    tabla[0].classList.remove("animar-error");
                });
            }
            error = false;
        },
        removerCaso(caso) {
            this.casos.splice(this.casos.indexOf(caso),1);
            this.i--;
        }
      }
})