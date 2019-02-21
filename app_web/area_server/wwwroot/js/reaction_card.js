var twitch_login =
"<div class=\"login_button_container\">" +
"<a href=\"https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=bdxjm36z6d15f9barb92e8kiogru3t&redirect_uri=http://localhost:8080/&scope=user_follows_edit user_read&state=twitch\" class=\"login_button_container_twitch\" >Login Twitch</a>" +
"</div>";

var fb_login =
"<div class=\"login_button_container\">" +
"<a class=\"login_button_container_fb\" onclick=\"initiateFBLogin();\" href=\"#\">Login Facebook</a>" +
"</div>";

var onedrive_login =
"<div class=\"login_button_container\">" +
"<a class=\"login_button_container_onedrive\" href=\"https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9d1f0555-d6d2-4e41-aaae-8a661a8dd511&scope=Files.ReadWrite.All&response_type=token&redirect_uri=http://localhost:8080/&state=onedrive\">Login Onedrive</a>"
"</div>";

var ytb_login = 
"<div class=\"login_button_container\">" +
"<div id=\"my-signin2\"></div>" +
"</div>";

var gdrive_login = 
"<div class=\"login_button_container\">" +
"<div id=\"my-signin4\"></div>" +
"</div>";

var gsheet_login = 
"<div class=\"login_button_container\">" +
"<div id=\"my-signin5\"></div>" +
"</div>";

var teste_twitch = true;
var teste_fb = true;
var teste_onedrive = true;
var test_google = true;


if (test_google == false) {
    $('#youtube_reaction').append(ytb_login);
    $(".yt").css("display", "none");
}
if (teste_fb == false) {
    $('#facebook_reaction').append(fb_login);
    $(".fb").css("display", "none");
}
if (teste_twitch == false) {
    $('#twitch_reaction').append(twitch_login);
    $(".twitch").css("display", "none");
}
if (teste_onedrive == false) {
    $('#onedrive_reaction').append(onedrive_login);
    $(".onedrive").css("display", "none");
}
if (test_google == false) {
    $('#drive_reaction').append(gdrive_login);
    $(".gdrive").css("display", "none");
}
if (test_google == false) {
    $('#sheet_reaction').append(gsheet_login);
    $(".gsheet").css("display", "none");
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
    }, {scope: 'public_profile,email,manage_pages,publish_pages'});
}

function send_FB_data_to_serv(response) {
   var accessToken = response.authResponse.accessToken;
    $.ajax({
    url: "http://localhost:8080/internal/oauth2/facebook/?token=" + accessToken,
    method: "GET",
    success: function (response) {
        window.location.href = "/";
    }
});
}

if (window.location.href.indexOf("state=twitch") > -1) {
    // get data from twitch
    var str = window.location.href;
    var slug = str.split('#').pop().split('&')[0];
    var token = slug.split('=').pop();
    console.log(slug);
    $.ajax({
        url: "http://localhost:8080/internal/oauth2/twitch/?token=" + token,
        method: "GET",
        success: function (response) {
            window.location.href = "/";
        }
    });
}

if (window.location.href.indexOf("state=onedrive") > -1) {
    // get data from twitch
    var str = window.location.href;
    var slug = str.split('#').pop().split('&')[0];
    var token = slug.split('=').pop();
    console.log(token);
    $.ajax({
        url: "http://localhost:8080/internal/oauth2/onedrive/?token=" + token,
        method: "GET",
        success: function (response) {
            window.location.href = "/";
        }
    });
}