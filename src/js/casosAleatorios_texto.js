function traerCasoAleatorio(){

    var obj_keys = Object.keys(enunciados);
    var k =  obj_keys[Math.floor(Math.random() *obj_keys.length)];
    return enunciados[k];

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
            	if (inputs[i].value.toLowerCase().trim() != inputs[i].dataset.respuesta.toLowerCase().trim()){
            		error = true;
            	}
            }

            if (!error){
            	const caso = traerCasoAleatorio();
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

document.getElementById('cuerpoTabla').style.display = '';