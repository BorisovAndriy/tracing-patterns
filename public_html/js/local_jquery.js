$(document).ready(function(){
    if (jQuery) {

        /**
         * Тестові дефолтні дані
         * */
        /*
        $('#pattern1').val("https://ad.admitad.com/g/jjx7myox8ff2a34fb9f3af9e6cb3ff/?ulp={lpurl}&pt=1")
        $('#accountCode').val("865-829-6080");

         */

        $("#accountCode").mask("999-999-9999");
        /**
         *
         * */

        $( "#signupForm1" ).validate( {
            rules: {
                pattern1: {
                    required: true,
                    url: true
                },
                accountCode: {
                    required: true,
                    minlength: 9
                },
            },
            messages: {
                /*pattern1: "Вкажіть шаблон відстеження",*/
                lastname1: "Please enter your lastname",
                pattern1: {
                    required: "Вкажіть шаблон відстеження",
                    url: "Невірний шаблон відстеження"
                },
                accountCode: {
                    required: "Вкажіть 10-ти значний номер аккаунту",
                    minlength: "Номер аккаунту має містити 10 цифр"
                },

            },
            errorElement: "em",
            errorPlacement: function ( error, element ) {

                // Add the `help-block` class to the error element
                error.addClass( "help-block" );

                // Add `has-feedback` class to the parent div.form-group
                // in order to add icons to inputs
                element.parents( ".col-sm-5" ).addClass( "has-feedback" );

                if ( element.prop( "type" ) === "checkbox" ) {
                    error.insertAfter( element.parent( "label" ) );
                } else {
                    error.insertAfter( element );
                }

                // Add the span element, if doesn't exists, and apply the icon classes to it.
                if ( !element.next( "span" )[ 0 ] ) {
                    $( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
                }
            },
            success: function ( label, element ) {

                // Add the span element, if doesn't exists, and apply the icon classes to it.
                if ( !$( element ).next( "span" )[ 0 ] ) {
                    $( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
                }

                event.preventDefault();
            },

            // specifying a submitHandler prevents the default submit
            submitHandler: function() {

                /**
                 * По даним в формі формує посилання у вигляді строки і копіює в буфер обміну користувача
                 * */
                var url_1 = $('#pattern1').val();
                var acc_code = $('#accountCode').val();
                var admitad_url = url_1.substr(0,55);
                var admitad_url_params = url_1.substr(57);
                var input_type = $('input[name=companyType]:checked').val();
                var result = admitad_url+'/?subid3=('+acc_code+')-'+input_type+'&'+admitad_url_params;
                $("#outResult").val(result).select();

                if (document.execCommand('copy')) {};

                event.preventDefault();
            },
            highlight: function ( element, errorClass, validClass ) {
                $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
                $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
            },
            unhighlight: function ( element, errorClass, validClass ) {
                $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
                $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
            }
        } );

    } else {
        // jQuery is not loaded
        alert("jQuery is not loaded");
    }
});



