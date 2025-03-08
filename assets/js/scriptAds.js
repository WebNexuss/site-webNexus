document.addEventListener("DOMContentLoaded", function () {

    if (location.href.includes("contact")) {

        //Script para visualizar de página
        gtag('event', 'conversion', {'send_to': 'AW-16915736770/ulO3CPPI4qcaEMLRhoI_'});

    }


    if (location.href.includes("/")) {

        //Script para visualizar de página
        gtag('event', 'conversion', {'send_to': 'AW-16915736770/qEBaCImB8qcaEMLRhoI_'});

    }

    document.addEventListener('click', function (e) {
        if (e.target.href.includes("api.whatsapp")) {
            // Acionamento WhatsApp
            gtag('event', 'conversion', {'send_to': 'AW-16915736770/O39xCIaB8qcaEMLRhoI_'});
        }
    })



})