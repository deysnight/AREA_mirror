var ytb_reaction_card = "<div class=\"reaction reaction_none\" id=\"ytb_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Like/Dislike</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié quand votre vidéo reçoit un like ou un dislike</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Abonnement à ma chaine</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié quand votre compteur d'abonné Youtube change</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>";

var fb_reaction_card = "<div class=\"reaction reaction_none\" id=\"fb_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Message privé</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsque vous recevez un message Facebook</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Nouveau like page</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié lorsqu'une page Facebook gagne un fan</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var twitch_reaction_card = "<div class=\"reaction reaction_none\" id=\"twitch_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Streamer Online</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié quand votre streamer est en ligne</p>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var slack_reaction_card = "<div class=\"reaction reaction_none\" id=\"slack_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Une réaction cool</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Une description cool du cul lol</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var gmail_reaction_card = "<div class=\"reaction reaction_none\" id=\"gmail_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Upload pièce jointe</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Mon cul sur la chaise</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa fa-cloud fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var onedrive_reaction_card = "<div class=\"reaction reaction_none\" id=\"onedrive_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Onedrive upload</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié lorsqu'un upload a lieu sur votre onedrive</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var twitch_login =
"<div class=\"reaction reaction_none\" id=\"twitch_reaction\">" +
"<div class=\"login_button_container_twitch\">" +
"<a href=\"https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=bdxjm36z6d15f9barb92e8kiogru3t&redirect_uri=http://charlespd.com:8080/&scope=user_follows_edit\">Login Twitch</a>" +
"</div>"
"</div>";

var fb_login =
"<div class=\"reaction reaction_none\" id=\"fb_reaction\">" +
"<div class=\"login_button_container_fb\">" +
"<a onclick=\"initiateFBLogin();\" href=\"#\">Login Facebook</a>" +
"</div>"
"</div>";

var teste = false;
var teste_fb = true;

$('#action-reaction-wrap').append(ytb_reaction_card);

if (teste_fb == false) {
    $('#action-reaction-wrap').append(fb_reaction_card);
}
else {
    $('#action-reaction-wrap').append(fb_login);
}


if (teste == false) {
    $('#action-reaction-wrap').append(twitch_reaction_card);
}
else {
    $('#action-reaction-wrap').append(twitch_login);
}



$('#action-reaction-wrap').append(slack_reaction_card);
$('#action-reaction-wrap').append(gmail_reaction_card);
$('#action-reaction-wrap').append(onedrive_reaction_card);


function statusChangeCallback(response) {
    if (response.status === 'connected') {
    }
    else if (response.status === 'not_authorized') {
    }
    else {
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function fetch_user_data() {
    FB.api('/me/accounts', function(response) {
        console.log(response.data);
})};

function initiateFBLogin() {
    FB.login(function(response) {
        send_FB_data_to_serv(response);
    }, {scope: 'public_profile,email,manage_pages'});
}

function send_FB_data_to_serv(response) {
   var id_token = response.authResponse.accessToken
    $.ajax({
    url: "/internal/oauth2/facebook ",
    method: "POST",
    data: {
        user_id_token: id_token,
    },
    success: function (response) {
        location.reload();
    }
});
}