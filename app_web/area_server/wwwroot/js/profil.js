// GET USER_CONFIG FROM SERVER HERE

var user_config = {
    "cards": [
        {"is_active" : true}, // yt1_gdrive
        {"is_active" : true, "url_video" : null}, // yt2_mail
        {"is_active" : true, "id_chaine" : null}, // yt3_mail
        {"is_active" : true, "id_page" : null}, // fb1_gdrive
        {"is_active" : true}, // fb2_mail
        {"is_active" : true}, // twitch1_mail
        {"is_active" : true}, // twitch2_mail
        {"is_active" : true, "streamer" : null}, // twitch3_mail
        {"is_active" : true}, // gmail1
        {"is_active" : true}, // onedrive1_mail
        {"is_active" : true}, // gdrive1_mail
        {"is_active" : true}, // gsheet1_mail
    ]
}

var youtube_1 = document.getElementById("youtube_first");
var youtube_2 = document.getElementById("youtube_second");
var youtube_3 = document.getElementById("youtube_third");
var facebook_1 = document.getElementById("facebook_first");
var facebook_2 = document.getElementById("facebook_second");
var twitch_1 = document.getElementById("twitch_first");
var twitch_2 = document.getElementById("twitch_second");
var twitch_3 = document.getElementById("twitch_third");
var gmail_1 = document.getElementById("gmail_first");
var onedrive_1 = document.getElementById("onedrive_first");
var gdrive_1 = document.getElementById("gdrive_first");
var gsheet_1 = document.getElementById("gsheet_first");

var reaction_card = [
    youtube_1,
    youtube_2,
    youtube_3,
    facebook_1,
    facebook_2,
    twitch_1,
    twitch_2,
    twitch_3,
    gmail_1,
    onedrive_1,
    gdrive_1,
    gsheet_1
]

cards_class = document.getElementsByClassName("reaction_card");
for (var i = 0; i < user_config.cards.length; i++) {
    if (user_config.cards[i].is_active === true)
        reaction_card[i].style.display = "flex";
}