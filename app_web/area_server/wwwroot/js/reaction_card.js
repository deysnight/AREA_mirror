var ytb_reaction_card = "<div class=\"reaction reaction_none\" id=\"ytb_reaction\">" +
"<div class=\"reaction_card google_ytb\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Abonnement</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Notifie votre compte d'abonné sur une Sheet Google</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fas fa-file-alt fa-2x\"></i>" +
"</div>" +
"</div>" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Like Vidéo</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsqu'une vidéo se voit être liké ou disliké</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\"></i>" +
"</div>" +
"</div>" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Youtuber actif</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsque votre chaîne favorite poste une nouvelle vidéo</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\"></i>" +
"</div>" +
"</div>";

var fb_reaction_card = "<div class=\"reaction reaction_none\" id=\"fb_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Like page</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsqu'une de vos page gagne un fan</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"<div class=\"reaction_card google_fb\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Nouvelle page</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Notifie votre compte de page sur une Sheet Google</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fas fa-file-alt fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var twitch_reaction_card = "<div class=\"reaction reaction_none\" id=\"twitch_reaction\">" +
"<div class=\"reaction_card google_twitch\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Follow Streamer</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Modifie votre compte d'abonnement lorsque vous suivez une nouvelle chaîne Twitch</p>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fas fa-file-alt fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Nouveau follow</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsque votre chaîne gagne en follower</p>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Streamer live</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsque votre streamer favoris passe live</p>" +
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
"<p class=\"reaction_title\">Partage fichier</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsque quelqu'un partage un fichier avec vous sur OneDrive</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var gdrive_reaction_card = "<div class=\"reaction reaction_none\" id=\"gdrive_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Upload fichier</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsque quelqu'un upload un fichier sur votre Google Drive</p>" +
"</div>" +
"</div>" +
"<hr class=\"card_separator\">" +
"<div class=\"compatible\">" +
"<i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>" +
"</div>" +
"</div>" +
"</div>";

var gsheet_reaction_card = "<div class=\"reaction reaction_none\" id=\"gsheet_reaction\">" +
"<div class=\"reaction_card\">" +
"<div>" +
"<div class=\"card_reaction_title\">" +
"<p class=\"reaction_title\">Upload fichier</p>" +
"</div>" +
"<div class=\"card_reaction_desc\">" +
"<p class=\"reaction_description\">Soyez notifié par mail lorsque quelqu'un upload un fichier sur votre Google Drive</p>" +
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
"<div class=\"login_button_container\">" +
"<a class=\"login_button_container_twitch\" href=\"https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=bdxjm36z6d15f9barb92e8kiogru3t&redirect_uri=http://localhost:8080/internal/oauth2/twitch/&scope=user_follows_edit user_read\">Login Twitch</a>" +
"</div>" +
"</div>";

var fb_login =
"<div class=\"reaction reaction_none\" id=\"fb_reaction\">" +
"<div class=\"login_button_container\">" +
"<a class=\"login_button_container_fb\" onclick=\"initiateFBLogin();\" href=\"#\">Login Facebook</a>" +
"</div>" +
"</div>";

var onedrive_login =
"<div class=\"reaction reaction_none\" id=\"onedrive_reaction\">" +
"<div class=\"login_button_container\">" +
"<a class=\"login_button_container_onedrive\" href=\"https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9d1f0555-d6d2-4e41-aaae-8a661a8dd511&scope=Files.ReadWrite.All&response_type=token&redirect_uri=http://localhost:8080/internal/oauth2/onedrive\">Login Onedrive</a>"
"</div>" +
"</div>";

var ytb_login = 
"<div class=\"reaction reaction_none\" id=\"ytb_reaction\">" +
"<div class=\"login_button_container\">" +
"<div id=\"my-signin2\"></div>" +
"</div>" +
"</div>";

var gmail_login = 
"<div class=\"reaction reaction_none\" id=\"gmail_reaction\">" +
"<div class=\"login_button_container\">" +
"<div id=\"my-signin3\"></div>" +
"</div>" +
"</div>";

var gdrive_login = 
"<div class=\"reaction reaction_none\" id=\"gdrive_reaction\">" +
"<div class=\"login_button_container\">" +
"<div id=\"my-signin4\"></div>" +
"</div>" +
"</div>";

var gsheet_login = 
"<div class=\"reaction reaction_none\" id=\"gsheet_reaction\">" +
"<div class=\"login_button_container\">" +
"<div id=\"my-signin5\"></div>" +
"</div>" +
"</div>";

var teste = true;
var teste_fb = true;
var teste_onedrive = true;
var test_google = true;


if (test_google == true) {
    $('#action-reaction-wrap').append(ytb_reaction_card);
}
else {
    $('#action-reaction-wrap').append(ytb_login);
}

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

if (test_google == true) {
    $('#action-reaction-wrap').append(gmail_reaction_card);
}
else {
    $('#action-reaction-wrap').append(gmail_login);
}

if (teste_onedrive == false)
    $('#action-reaction-wrap').append(onedrive_reaction_card);
else {
    $('#action-reaction-wrap').append(onedrive_login);
}

if (test_google == true) {
    $('#action-reaction-wrap').append(gdrive_reaction_card);
}
else {
    $('#action-reaction-wrap').append(gdrive_login);
}

if (test_google == true) {
    $('#action-reaction-wrap').append(gsheet_reaction_card);
}
else {
    $('#action-reaction-wrap').append(gsheet_login);
}



gooogle = false;
var react_cards = document.getElementsByClassName("google_ytb");
if (gooogle == false) {
    $(".google_fb").css({'background-color': 'grey', 'pointer-events': 'none'});    
    $(".google_twitch").css({'background-color': 'grey', 'pointer-events': 'none'});    
}



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

function initiateFBLogin() {
    FB.login(function(response) {
        send_FB_data_to_serv(response);
    }, {scope: 'public_profile,email,manage_pages'});
}

function send_FB_data_to_serv(response) {
   var accessToken = response.authResponse.accessToken;
   var userID = response.authResponse.userID;
   console.log(userID);
   console.log(accessToken);
    $.ajax({
    url: "/internal/oauth2/facebook ",
    method: "POST",
    data: {
        access_token: accessToken,
        user_id: userID
    },
    success: function (response) {
        location.reload();
    }
});
}