document.addEventListener("DOMContentLoaded", function(){

    if(location.href.includes("contact")){

        //Script para visualizar de página

    }

    document.addEventListener('click', function(e) {
        console.log(e.target.href.includes("api.whatsapp"))
    })

})