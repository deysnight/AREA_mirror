var youtube_card = "<div id=\"ytb_card\" class=\"card\" id=\"youtube\">" + 
"<div>" +
"<i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>" + 
"<p class=\"card_title\">Youtube</p>" +
"<hr class=\"card_separator\">" +
"</div>" +
"<div class=\"data_arrow\">" +
"<img class=\"img_one arrow_none\" src=\"img/down_arrow.png\"/>" +
"<img class=\"img_two\" src=\"img/up_arrow.png\"/>" +
"<p class=\"connect_button\">Infos</p>" +
"</div>"
"</div>";

var facebook_card = "<div id=\"fb_card\" class=\"card\" id=\"facebook\">" + 
"<div>" +
"<i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>" + 
"<p class=\"card_title\">Facebook</p>" +
"<hr class=\"card_separator\">" +
"</div>" +
"<div class=\"data_arrow\">" +
"<img class=\"img_one arrow_none\" src=\"img/down_arrow.png\"/>" +
"<img class=\"img_two\" src=\"img/up_arrow.png\"/>" +
"<p class=\"connect_button\">Infos</p>" +
"</div>"
"</div>";

var twitch_card = "<div id=\"twitch_card\" class=\"card\" id=\"twitch\">" + 
"<div>" +
"<i class=\"fa fa-twitch\" aria-hidden=\"true\"></i>" + 
"<p class=\"card_title\">Twitch</p>" +
"<hr class=\"card_separator\">" +
"</div>" +
"<div class=\"data_arrow\">" +
"<img class=\"img_one arrow_none\" src=\"img/down_arrow.png\"/>" +
"<img class=\"img_two\" src=\"img/up_arrow.png\"/>" +
"<p class=\"connect_button\">Infos</p>" +
"</div>"
"</div>";

var slack_card = "<div id=\"slack_card\" class=\"card\" id=\"slack\">" + 
"<div>" +
"<i class=\"fa fa-slack\" aria-hidden=\"true\"></i>" + 
"<p class=\"card_title\">Slack</p>" +
"<hr class=\"card_separator\">" +
"</div>" +
"<div class=\"data_arrow\">" +
"<img class=\"img_one arrow_none\" src=\"img/down_arrow.png\"/>" +
"<img class=\"img_two\" src=\"img/up_arrow.png\"/>" +
"<p class=\"connect_button\">Infos</p>" +
"</div>"
"</div>";

var gmail_card = "<div id=\"gmail_card\" class=\"card\" id=\"gmail\">" + 
"<div>" +
"<i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>" + 
"<p class=\"card_title\">Gmail</p>" +
"<hr class=\"card_separator\">" +
"</div>" +
"<div class=\"data_arrow\">" +
"<img class=\"img_one arrow_none\" src=\"img/down_arrow.png\"/>" +
"<img class=\"img_two\" src=\"img/up_arrow.png\"/>" +
"<p class=\"connect_button\">Infos</p>" +
"</div>"
"</div>";

var onedrive_card = "<div id=\"onedrive_card\" class=\"card\" id=\"onedrive\">" + 
"<div>" +
"<i class=\"fa fa-cloud\" aria-hidden=\"true\"></i>" + 
"<p class=\"card_title\">OneDrive</p>" +
"<hr class=\"card_separator\">" +
"</div>" +
"<div class=\"data_arrow\">" +
"<img class=\"img_one arrow_none\" src=\"img/down_arrow.png\"/>" +
"<img class=\"img_two\" src=\"img/up_arrow.png\"/>" +
"<p class=\"connect_button\">Infos</p>" +
"</div>"
"</div>";


$('#card-wrap').append(youtube_card);
$('#card-wrap').append(facebook_card);
$('#card-wrap').append(twitch_card);
$('#card-wrap').append(slack_card);
$('#card-wrap').append(gmail_card);
$('#card-wrap').append(onedrive_card);

var my_card = document.getElementsByClassName("card");

function remove_focus_card_ytb() {
    $(my_card[1]).addClass("unactive_card");
    $(my_card[2]).addClass("unactive_card");
    $(my_card[3]).addClass("unactive_card");
    $(my_card[4]).addClass("unactive_card");
    $(my_card[5]).addClass("unactive_card");
    $("#fb_card .img_one").removeClass("arrow_ok");
    $("#fb_card .img_one").addClass("arrow_none");
    $("#fb_card .img_two").addClass("arrow_ok");
    $("#twitch_card .img_one").removeClass("arrow_ok");
    $("#twitch_card .img_one").addClass("arrow_none");
    $("#twitch_card .img_two").addClass("arrow_ok");
    $("#slack_card .img_one").removeClass("arrow_ok");
    $("#slack_card .img_one").addClass("arrow_none");
    $("#slack_card .img_two").addClass("arrow_ok");
    $("#gmail_card .img_one").removeClass("arrow_ok");
    $("#gmail_card .img_one").addClass("arrow_none");
    $("#gmail_card .img_two").addClass("arrow_ok");
    $("#onedrive_card .img_one").removeClass("arrow_ok");
    $("#onedrive_card .img_one").addClass("arrow_none");
    $("#onedrive_card .img_two").addClass("arrow_ok");
}

function remove_focus_card_fb() {
    $(my_card[0]).addClass("unactive_card");
    $(my_card[2]).addClass("unactive_card");
    $(my_card[3]).addClass("unactive_card");
    $(my_card[4]).addClass("unactive_card");
    $(my_card[5]).addClass("unactive_card");
    $("#ytb_card .img_one").removeClass("arrow_ok");
    $("#ytb_card .img_one").addClass("arrow_none");
    $("#ytb_card .img_two").addClass("arrow_ok");
    $("#twitch_card .img_one").removeClass("arrow_ok");
    $("#twitch_card .img_one").addClass("arrow_none");
    $("#twitch_card .img_two").addClass("arrow_ok");
    $("#slack_card .img_one").removeClass("arrow_ok");
    $("#slack_card .img_one").addClass("arrow_none");
    $("#slack_card .img_two").addClass("arrow_ok");
    $("#gmail_card .img_one").removeClass("arrow_ok");
    $("#gmail_card .img_one").addClass("arrow_none");
    $("#gmail_card .img_two").addClass("arrow_ok");
    $("#onedrive_card .img_one").removeClass("arrow_ok");
    $("#onedrive_card .img_one").addClass("arrow_none");
    $("#onedrive_card .img_two").addClass("arrow_ok");
}

function remove_focus_card_twitch() {
    $(my_card[1]).addClass("unactive_card");
    $(my_card[0]).addClass("unactive_card");
    $(my_card[3]).addClass("unactive_card");
    $(my_card[4]).addClass("unactive_card");
    $(my_card[5]).addClass("unactive_card");
    $("#fb_card .img_one").removeClass("arrow_ok");
    $("#fb_card .img_one").addClass("arrow_none");
    $("#fb_card .img_two").addClass("arrow_ok");
    $("#ytb_card .img_one").removeClass("arrow_ok");
    $("#ytb_card .img_one").addClass("arrow_none");
    $("#ytb_card .img_two").addClass("arrow_ok");
    $("#slack_card .img_one").removeClass("arrow_ok");
    $("#slack_card .img_one").addClass("arrow_none");
    $("#slack_card .img_two").addClass("arrow_ok");
    $("#gmail_card .img_one").removeClass("arrow_ok");
    $("#gmail_card .img_one").addClass("arrow_none");
    $("#gmail_card .img_two").addClass("arrow_ok");
    $("#onedrive_card .img_one").removeClass("arrow_ok");
    $("#onedrive_card .img_one").addClass("arrow_none");
    $("#onedrive_card .img_two").addClass("arrow_ok");
}

function remove_focus_card_slack() {
    $(my_card[1]).addClass("unactive_card");
    $(my_card[2]).addClass("unactive_card");
    $(my_card[0]).addClass("unactive_card");
    $(my_card[4]).addClass("unactive_card");
    $(my_card[5]).addClass("unactive_card");
    $("#fb_card .img_one").removeClass("arrow_ok");
    $("#fb_card .img_one").addClass("arrow_none");
    $("#fb_card .img_two").addClass("arrow_ok");
    $("#twitch_card .img_one").removeClass("arrow_ok");
    $("#twitch_card .img_one").addClass("arrow_none");
    $("#twitch_card .img_two").addClass("arrow_ok");
    $("#ytb_card .img_one").removeClass("arrow_ok");
    $("#ytb_card .img_one").addClass("arrow_none");
    $("#ytb_card .img_two").addClass("arrow_ok");
    $("#gmail_card .img_one").removeClass("arrow_ok");
    $("#gmail_card .img_one").addClass("arrow_none");
    $("#gmail_card .img_two").addClass("arrow_ok");
    $("#onedrive_card .img_one").removeClass("arrow_ok");
    $("#onedrive_card .img_one").addClass("arrow_none");
    $("#onedrive_card .img_two").addClass("arrow_ok");
}

function remove_focus_card_gmail() {
    $(my_card[1]).addClass("unactive_card");
    $(my_card[2]).addClass("unactive_card");
    $(my_card[3]).addClass("unactive_card");
    $(my_card[0]).addClass("unactive_card");
    $(my_card[5]).addClass("unactive_card");
    $("#fb_card .img_one").removeClass("arrow_ok");
    $("#fb_card .img_one").addClass("arrow_none");
    $("#fb_card .img_two").addClass("arrow_ok");
    $("#twitch_card .img_one").removeClass("arrow_ok");
    $("#twitch_card .img_one").addClass("arrow_none");
    $("#twitch_card .img_two").addClass("arrow_ok");
    $("#slack_card .img_one").removeClass("arrow_ok");
    $("#slack_card .img_one").addClass("arrow_none");
    $("#slack_card .img_two").addClass("arrow_ok");
    $("#ytb_card .img_one").removeClass("arrow_ok");
    $("#ytb_card .img_one").addClass("arrow_none");
    $("#ytb_card .img_two").addClass("arrow_ok");
    $("#onedrive_card .img_one").removeClass("arrow_ok");
    $("#onedrive_card .img_one").addClass("arrow_none");
    $("#onedrive_card .img_two").addClass("arrow_ok");
}

function remove_focus_card_onedrive() {
    $(my_card[1]).addClass("unactive_card");
    $(my_card[2]).addClass("unactive_card");
    $(my_card[3]).addClass("unactive_card");
    $(my_card[4]).addClass("unactive_card");
    $(my_card[0]).addClass("unactive_card");
    $("#fb_card .img_one").removeClass("arrow_ok");
    $("#fb_card .img_one").addClass("arrow_none");
    $("#fb_card .img_two").addClass("arrow_ok");
    $("#twitch_card .img_one").removeClass("arrow_ok");
    $("#twitch_card .img_one").addClass("arrow_none");
    $("#twitch_card .img_two").addClass("arrow_ok");
    $("#slack_card .img_one").removeClass("arrow_ok");
    $("#slack_card .img_one").addClass("arrow_none");
    $("#slack_card .img_two").addClass("arrow_ok");
    $("#gmail_card .img_one").removeClass("arrow_ok");
    $("#gmail_card .img_one").addClass("arrow_none");
    $("#gmail_card .img_two").addClass("arrow_ok");
    $("#ytb_card .img_one").removeClass("arrow_ok");
    $("#ytb_card .img_one").addClass("arrow_none");
    $("#ytb_card .img_two").addClass("arrow_ok");
}

$(my_card[0]).click(function() {
    $(this).removeClass("unactive_card");
    $(this).addClass("active_card_ytb");
    $("#ytb_card .img_one").addClass("arrow_ok");
    $("#ytb_card .img_one").removeClass("arrow_none");
    $("#ytb_card .img_two").removeClass("arrow_ok");
    $("#ytb_card .img_two").addClass("arrow_none");
    $("#ytb_reaction").removeClass("reaction_none");
    $("#fb_reaction").addClass("reaction_none");    
    $("#twitch_reaction").addClass("reaction_none");    
    $("#slack_reaction").addClass("reaction_none");    
    $("#gmail_reaction").addClass("reaction_none");    
    $("#onedrive_reaction").addClass("reaction_none");    
    remove_focus_card_ytb();
});

$(my_card[1]).click(function() {
    $(this).removeClass("unactive_card");
    $(this).addClass("active_card_fb");
    $("#fb_card .img_one").addClass("arrow_ok");
    $("#fb_card .img_one").removeClass("arrow_none");
    $("#fb_card .img_two").removeClass("arrow_ok");
    $("#fb_card .img_two").addClass("arrow_none");
    $("#ytb_reaction").addClass("reaction_none");
    $("#fb_reaction").removeClass("reaction_none");    
    $("#twitch_reaction").addClass("reaction_none");    
    $("#slack_reaction").addClass("reaction_none");    
    $("#gmail_reaction").addClass("reaction_none");    
    $("#onedrive_reaction").addClass("reaction_none");  
    remove_focus_card_fb();
});

$(my_card[2]).click(function() {
    $(this).removeClass("unactive_card");
    $(this).addClass("active_card_twitch");
    $("#twitch_card .img_one").addClass("arrow_ok");
    $("#twitch_card .img_one").removeClass("arrow_none");
    $("#twitch_card .img_two").removeClass("arrow_ok");
    $("#twitch_card .img_two").addClass("arrow_none");
    $("#ytb_reaction").addClass("reaction_none");
    $("#fb_reaction").addClass("reaction_none");    
    $("#twitch_reaction").removeClass("reaction_none");    
    $("#slack_reaction").addClass("reaction_none");    
    $("#gmail_reaction").addClass("reaction_none");    
    $("#onedrive_reaction").addClass("reaction_none");  
    remove_focus_card_twitch();
});

$(my_card[3]).click(function() {
    $(this).removeClass("unactive_card");
    $(this).addClass("active_card_slack");
    $("#slack_card .img_one").addClass("arrow_ok");
    $("#slack_card .img_one").removeClass("arrow_none");
    $("#slack_card .img_two").removeClass("arrow_ok");
    $("#slack_card .img_two").addClass("arrow_none");
    $("#ytb_reaction").addClass("reaction_none");
    $("#fb_reaction").addClass("reaction_none");    
    $("#twitch_reaction").addClass("reaction_none");    
    $("#slack_reaction").removeClass("reaction_none");    
    $("#gmail_reaction").addClass("reaction_none");    
    $("#onedrive_reaction").addClass("reaction_none");  
    remove_focus_card_slack();
});

$(my_card[4]).click(function() {
    $(this).removeClass("unactive_card");
    $(this).addClass("active_card_gmail");
    $("#gmail_card .img_one").addClass("arrow_ok");
    $("#gmail_card .img_one").removeClass("arrow_none");
    $("#gmail_card .img_two").removeClass("arrow_ok");
    $("#gmail_card .img_two").addClass("arrow_none");
    $("#ytb_reaction").addClass("reaction_none");
    $("#fb_reaction").addClass("reaction_none");    
    $("#twitch_reaction").addClass("reaction_none");    
    $("#slack_reaction").addClass("reaction_none");    
    $("#gmail_reaction").removeClass("reaction_none");    
    $("#onedrive_reaction").addClass("reaction_none");  
    remove_focus_card_gmail();
});

$(my_card[5]).click(function() {
    $(this).removeClass("unactive_card");
    $(this).addClass("active_card_onedrive");
    $("#onedrive_card .img_one").addClass("arrow_ok");
    $("#onedrive_card .img_one").removeClass("arrow_none");
    $("#onedrive_card .img_two").removeClass("arrow_ok");
    $("#onedrive_card .img_two").addClass("arrow_none");
    $("#ytb_reaction").addClass("reaction_none");
    $("#fb_reaction").addClass("reaction_none");    
    $("#twitch_reaction").addClass("reaction_none");    
    $("#slack_reaction").addClass("reaction_none");    
    $("#gmail_reaction").addClass("reaction_none");    
    $("#onedrive_reaction").removeClass("reaction_none");  
    remove_focus_card_onedrive();
});