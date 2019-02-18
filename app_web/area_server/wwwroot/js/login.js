function EncryptPass(pass1) {
    var hash = 0, i, chr;
    for (i = 0; i < pass1.length; i++) {
        chr = pass1.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

var button = document.getElementById("login_button");
var cpt_field = 0;
var cpt_login_error = 0;


$("#login_button").click(function () {
    var username = $('#login_username').val();
    var pass1 = $('#login_pass1').val();

    
    if (username == "" ||  pass1 == "") {
        if (cpt_field < 1) {
            input = $('<p class="error_fade" id="error_field">Tout les champs doivent être remplis.</p>');
            input.insertAfter('.pass1_div');
            input.hide();
            input.fadeIn(1000);
            cpt_field++;
        }
        return false;
    }
    else {
        $("#error_field").remove();
        cpt_field = 0
    }

    var input_login = "";
    var input_email = "";
    var username = $('#login_username').val();
    var pass1 = $('#login_pass1').val();
    var data = btoa(username + ':' + EncryptPass(pass1));
    $.ajax(
        {
            url: "internal/login/" + data,
            type: "get",
            async: false,
            success: function(response){
                let jsonObject = JSON.parse(response);
                console.log(jsonObject);
                if (jsonObject.success == true) {
                    $("#error_login").remove();
                    cpt_login_error = 0;
                    location.reload();
                }
                else {
                    if (jsonObject.reason === "account require email validation") {
                        $(".moncul2").hide();
                        $(".moncul1").hide();
                        input_email = $('<p class="moncul1 error_fade" id="error_login">Veuillez valider votre mail avant de vous connecter.</p>');
                    }
                    else if (jsonObject.reason === "login or user incorrect") {
                        $(".moncul1").hide();
                        $(".moncul2").hide();
                        input_login = $('<p class="moncul2 error_fade" id="error_login">Vos données de connexion sont incorrectes.</p>');
                    }
                    $(input_email).insertAfter('.pass1_div');
                    $(input_email).hide();
                    $(input_email).fadeIn(1000);
                    $(input_login).insertAfter('.pass1_div');
                    $(input_login).hide();
                    $(input_login).fadeIn(1000);
                }
            }
        })
    });

$("#login_form").submit(function(e) {
    e.preventDefault();
});

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('statut');

var validation_mail =
"<p style=\"margin-bottom: 60px; font-weight: bold; font-size: 18px;\">Validez votre email pour pouvoir vous connecter</p>";

if (myParam === "require_email_validation")
    $('#mail').append(validation_mail);
