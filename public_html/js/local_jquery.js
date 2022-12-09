$(document).ready(function(){
    if (jQuery) {
        // jQuery is loaded
        //alert("jQuery is loaded");

        /**
         * Тестові дефолтні дані
         * */
        $('#input_patterns_1').val("https://ad.admitad.com/g/jjx7myox8ff2a34fb9f3af9e6cb3ff/?ulp={lpurl}&pt=1")
        $('#input_code').val("865-829-6080");

        /**
         * По даним в формі формує посилання у вигляді строки і копіює в буфер обміну користувача
         * */
        $( "#getResult" ).click(function() {

            var url_1 = $('#input_patterns_1').val();
            var acc_code = $('#input_code').val();
            var admitad_url = url_1.substr(0,55);
            var admitad_url_params = url_1.substr(57);
            var input_type = $('input[name=input_type]:checked').val();
            var result = admitad_url+'/?subid3=('+acc_code+')-'+input_type+'&'+admitad_url_params;
            $("#outResult").val(result).select();

            if (document.execCommand('copy')) {};
            event.preventDefault();
        });

    } else {
        // jQuery is not loaded
        alert("jQuery is not loaded");
    }
});
