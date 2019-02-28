function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

var USER_ID = parseInt(getCookie("user_id"), 10);

/*$.ajax(
    {
    url: "http://localhost:8080/internal/oauth2/token/" + USER_ID,
    type: "get",
    async: false,
    success: function(response){
        let user_token_json = JSON.parse(response);
        console.log(user_token_json);
        }
});*/

var user_token_json = [
    {
        "user_id": 3,
        "facebook": 3,
        "twitch": 1,
        "google": "lul",
        "onedrive": 1
    }
]

function remove_form_on_card_click() {
    $("#validate_youtube1-1").css("display", "none");
    $("#validate_youtube1-2").css("display", "none");
    $("#validate_youtube1-3").css("display", "none");
    $("#validate_youtube2-1").css("display", "none");
    $("#validate_youtube2-2").css("display", "none");
    $("#validate_youtube2-3").css("display", "none");
    $("#validate_youtube3-1").css("display", "none");
    $("#validate_youtube3-3").css("display", "none");
    $("#validate_twitch1-1").css("display", "none");
    $("#validate_facebook1-1").css("display", "none");
    $("#validate_facebook1-2").css("display", "none");
    $("#validate_facebook1-3").css("display", "none");
    $("#validate_facebook2-1").css("display", "none");
    $("#validate_facebook2-2").css("display", "none");
    $("#validate_facebook2-3").css("display", "none");
    $("#validate_facebook3-1").css("display", "none");
    $("#validate_facebook3-2").css("display", "none");
    $("#validate_facebook3-3").css("display", "none");
    $("#validate_twitch1-1").css("display", "none");
    $("#validate_twitch1-2").css("display", "none");
    $("#validate_twitch1-3").css("display", "none");
    $("#validate_twitch2-1").css("display", "none");
    $("#validate_twitch2-2").css("display", "none");
    $("#validate_twitch2-3").css("display", "none");
    $("#validate_twitch3-1").css("display", "none");
    $("#validate_twitch3-3").css("display", "none");
    $("#validate_onedrive1-1").css("display", "none");
    $("#validate_onedrive1-2").css("display", "none");
    $("#validate_onedrive1-3").css("display", "none");
    $("#validate_gdrive1-1").css("display", "none");
    $("#validate_gdrive1-3").css("display", "none");
    $("#validate_gsheet1-1").css("display", "none");
    $("#validate_gsheet1-3").css("display", "none");
}

$("#youtube_card").click(function() {
    $(this).addClass("active");
    $("#facebook_card").removeClass("active");
    $("#twitch_card").removeClass("active");
    $("#onedrive_card").removeClass("active");
    $("#drive_card").removeClass("active");
    $("#sheet_card").removeClass("active");

    $("#youtube_reaction").css("display", "flex");
    $("#facebook_reaction").css("display", "none");
    $("#twitch_reaction").css("display", "none");
    $("#onedrive_reaction").css("display", "none");
    $("#drive_reaction").css("display", "none");
    $("#sheet_reaction").css("display", "none");
    remove_focus_youtube();
    remove_form_on_card_click();
})

$("#facebook_card").click(function() {
    $(this).addClass("active");
    $("#youtube_card").removeClass("active");
    $("#twitch_card").removeClass("active");
    $("#onedrive_card").removeClass("active");
    $("#drive_card").removeClass("active");
    $("#sheet_card").removeClass("active");

    $("#youtube_reaction").css("display", "none");
    $("#facebook_reaction").css("display", "flex");
    $("#twitch_reaction").css("display", "none");
    $("#onedrive_reaction").css("display", "none");
    $("#drive_reaction").css("display", "none");
    $("#sheet_reaction").css("display", "none");
    remove_focus_facebook();
    remove_form_on_card_click();
})

$("#twitch_card").click(function() {
    $(this).addClass("active");
    $("#facebook_card").removeClass("active");
    $("#youtube_card").removeClass("active");
    $("#onedrive_card").removeClass("active");
    $("#drive_card").removeClass("active");
    $("#sheet_card").removeClass("active");

    $("#youtube_reaction").css("display", "none");
    $("#facebook_reaction").css("display", "none");
    $("#twitch_reaction").css("display", "flex");
    $("#onedrive_reaction").css("display", "none");
    $("#drive_reaction").css("display", "none");
    $("#sheet_reaction").css("display", "none");
    remove_focus_twitch();
    remove_form_on_card_click();
})

$("#onedrive_card").click(function() {
    $(this).addClass("active");
    $("#facebook_card").removeClass("active");
    $("#twitch_card").removeClass("active");
    $("#youtube_card").removeClass("active");
    $("#drive_card").removeClass("active");
    $("#sheet_card").removeClass("active");

    $("#youtube_reaction").css("display", "none");
    $("#facebook_reaction").css("display", "none");
    $("#twitch_reaction").css("display", "none");
    $("#onedrive_reaction").css("display", "flex");
    $("#drive_reaction").css("display", "none");
    $("#sheet_reaction").css("display", "none");
    remove_focus_onedrive();
    remove_form_on_card_click();
})

$("#drive_card").click(function() {
    $(this).addClass("active");
    $("#facebook_card").removeClass("active");
    $("#twitch_card").removeClass("active");
    $("#onedrive_card").removeClass("active");
    $("#youtube_card").removeClass("active");
    $("#sheet_card").removeClass("active");

    $("#youtube_reaction").css("display", "none");
    $("#facebook_reaction").css("display", "none");
    $("#twitch_reaction").css("display", "none");
    $("#onedrive_reaction").css("display", "none");
    $("#drive_reaction").css("display", "flex");
    $("#sheet_reaction").css("display", "none");
    remove_focus_gdrive();
    remove_form_on_card_click();
})

$("#sheet_card").click(function() {
    $(this).addClass("active");
    $("#facebook_card").removeClass("active");
    $("#twitch_card").removeClass("active");
    $("#onedrive_card").removeClass("active");
    $("#drive_card").removeClass("active");
    $("#youtube_card").removeClass("active");

    $("#youtube_reaction").css("display", "none");
    $("#facebook_reaction").css("display", "none");
    $("#twitch_reaction").css("display", "none");
    $("#onedrive_reaction").css("display", "none");
    $("#drive_reaction").css("display", "none");
    $("#sheet_reaction").css("display", "flex");
    remove_focus_gsheet();
    remove_form_on_card_click();
})

$("#youtube_first").click(function() {
    $(this).addClass("active");
    $("#youtube_second").removeClass("active");
    $("#youtube_third").removeClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#youtube_second").click(function() {
    $("#youtube_first").removeClass("active");
    $(this).addClass("active");
    $("#youtube_third").removeClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();

})

$("#youtube_third").click(function() {
    $("#youtube_first").removeClass("active");
    $("#youtube_second").removeClass("active");
    $(this).addClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px grey solid");    
    $("#reaction_1 #sheet_react i").css("color", "grey");
    $("#reaction_1 #sheet_react").css("pointer-events", "none");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#facebook_first").click(function() {
    $(this).addClass("active");
    $("#facebook_second").removeClass("active");
    $("#facebook_third").removeClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");
    
    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#facebook_second").click(function() {
    $("#facebook_first").removeClass("active");
    $(this).addClass("active");
    $("#facebook_third").removeClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#facebook_third").click(function() {
    $("#facebook_first").removeClass("active");
    $("#facebook_second").removeClass("active");
    $(this).addClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#twitch_first").click(function() {
    $(this).addClass("active");
    $("#twitch_second").removeClass("active");
    $("#twitch_third").removeClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#twitch_second").click(function() {
    $("#twitch_first").removeClass("active");
    $(this).addClass("active");
    $("#twitch_third").removeClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#twitch_third").click(function() {
    $("#twitch_first").removeClass("active");
    $("#twitch_second").removeClass("active");
    $(this).addClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px grey solid");    
    $("#reaction_1 #sheet_react i").css("color", "grey");
    $("#reaction_1 #sheet_react").css("pointer-events", "none");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#onedrive_first").click(function() {
    $(this).addClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px black solid");    
    $("#reaction_1 #sheet_react i").css("color", "black");
    $("#reaction_1 #sheet_react").css("pointer-events", "auto");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#gdrive_first").click(function() {
    $(this).addClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px grey solid");    
    $("#reaction_1 #sheet_react i").css("color", "grey");
    $("#reaction_1 #sheet_react").css("pointer-events", "none");

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

$("#gsheet_first").click(function() {
    $(this).addClass("active");

    $("#reaction_1").css("display", "flex");

    $("#reaction_1 #sheet_react").css("border", "1px grey solid");    
    $("#reaction_1 #sheet_react i").css("color", "grey");
    $("#reaction_1 #sheet_react").css("pointer-events", "none"); 

    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");
    remove_form_on_card_click();
})

function remove_focus_youtube() {
    $("#youtube_first").removeClass("active");
    $("#youtube_second").removeClass("active");
    $("#youtube_third").removeClass("active");
    $("#facebook_first").removeClass("active");
    $("#facebook_second").removeClass("active");
    $("#facebook_third").removeClass("active");
    $("#twitch_first").removeClass("active");
    $("#twitch_second").removeClass("active");
    $("#twitch_third").removeClass("active");
    $("#onedrive_first").removeClass("active");
    $("#gdrive_first").removeClass("active");
    $("#gsheet_first").removeClass("active");

    $("#reaction_1").css("display", "none");
}

function remove_focus_facebook() {
    $("#youtube_first").removeClass("active");
    $("#youtube_second").removeClass("active");
    $("#youtube_third").removeClass("active");
    $("#facebook_first").removeClass("active");
    $("#facebook_second").removeClass("active");
    $("#facebook_third").removeClass("active");
    $("#twitch_first").removeClass("active");
    $("#twitch_second").removeClass("active");
    $("#twitch_third").removeClass("active");
    $("#onedrive_first").removeClass("active");
    $("#gdrive_first").removeClass("active");
    $("#gsheet_first").removeClass("active");

    $("#reaction_1").css("display", "none");
}

function remove_focus_twitch() {
    $("#youtube_first").removeClass("active");
    $("#youtube_second").removeClass("active");
    $("#youtube_third").removeClass("active");
    $("#facebook_first").removeClass("active");
    $("#facebook_second").removeClass("active");
    $("#facebook_third").removeClass("active");
    $("#twitch_first").removeClass("active");
    $("#twitch_second").removeClass("active");
    $("#twitch_third").removeClass("active");
    $("#onedrive_first").removeClass("active");
    $("#gdrive_first").removeClass("active");
    $("#gsheet_first").removeClass("active");

    $("#reaction_1").css("display", "none");
}

function remove_focus_onedrive() {
    $("#youtube_first").removeClass("active");
    $("#youtube_second").removeClass("active");
    $("#youtube_third").removeClass("active");
    $("#facebook_first").removeClass("active");
    $("#facebook_second").removeClass("active");
    $("#facebook_third").removeClass("active");
    $("#twitch_first").removeClass("active");
    $("#twitch_second").removeClass("active");
    $("#twitch_third").removeClass("active");
    $("#onedrive_first").removeClass("active");
    $("#gdrive_first").removeClass("active");
    $("#gsheet_first").removeClass("active");
    
    $("#reaction_1").css("display", "none");
}

function remove_focus_gdrive() {
    $("#youtube_first").removeClass("active");
    $("#youtube_second").removeClass("active");
    $("#youtube_third").removeClass("active");
    $("#facebook_first").removeClass("active");
    $("#facebook_second").removeClass("active");
    $("#facebook_third").removeClass("active");
    $("#twitch_first").removeClass("active");
    $("#twitch_second").removeClass("active");
    $("#twitch_third").removeClass("active");
    $("#onedrive_first").removeClass("active");
    $("#gdrive_first").removeClass("active");
    $("#gsheet_first").removeClass("active");

    $("#reaction_1").css("display", "none");
}

function remove_focus_gsheet() {
    $("#youtube_first").removeClass("active");
    $("#youtube_second").removeClass("active");
    $("#youtube_third").removeClass("active");
    $("#facebook_first").removeClass("active");
    $("#facebook_second").removeClass("active");
    $("#facebook_third").removeClass("active");
    $("#twitch_first").removeClass("active");
    $("#twitch_second").removeClass("active");
    $("#twitch_third").removeClass("active");
    $("#onedrive_first").removeClass("active");
    $("#gdrive_first").removeClass("active");
    $("#gsheet_first").removeClass("active");

    $("#reaction_1").css("display", "none");
}

$("#mail_react").click(function() {
    $(this).addClass("active");
    $("#sheet_react").removeClass("active");
    $("#facebook_react").removeClass("active");

    if ($("#youtube_first").hasClass("active")) {
        $("#validate_youtube1-1").css("display", "flex");
        $("#validate_youtube1-2").css("display", "none");
        $("#validate_youtube1-3").css("display", "none");        
    }
    if ($("#youtube_second").hasClass("active")) {
        $("#validate_youtube2-1").css("display", "flex");
        $("#validate_youtube2-2").css("display", "none");
        $("#validate_youtube2-3").css("display", "none");

    }
    if ($("#youtube_third").hasClass("active")) {
        $("#validate_youtube3-1").css("display", "flex");
        $("#validate_youtube3-3").css("display", "none");
    }

    if ($("#facebook_first").hasClass("active")) {
        $("#validate_facebook1-1").css("display", "flex");
        $("#validate_facebook1-2").css("display", "none");
        $("#validate_facebook1-3").css("display", "none");
    }
    if ($("#facebook_second").hasClass("active")) {
        $("#validate_facebook2-1").css("display", "flex");
        $("#validate_facebook2-2").css("display", "none");
        $("#validate_facebook2-3").css("display", "none");
    }
    if ($("#facebook_third").hasClass("active")) {
        $("#validate_facebook3-1").css("display", "flex");
        $("#validate_facebook3-2").css("display", "none");
        $("#validate_facebook3-3").css("display", "none");
    }

    if ($("#twitch_first").hasClass("active")) {
        $("#validate_twitch1-1").css("display", "flex");
        $("#validate_twitch1-2").css("display", "none");
        $("#validate_twitch1-3").css("display", "none");
    }
    if ($("#twitch_second").hasClass("active")) {
        $("#validate_twitch2-1").css("display", "flex");
        $("#validate_twitch2-2").css("display", "none");
        $("#validate_twitch2-3").css("display", "none");
    }
    if ($("#twitch_third").hasClass("active")) {
        $("#validate_twitch3-1").css("display", "flex");
        $("#validate_twitch3-3").css("display", "none");
    }

    if ($("#onedrive_first").hasClass("active")) {
        $("#validate_onedrive1-1").css("display", "flex");
        $("#validate_onedrive1-2").css("display", "none");
        $("#validate_onedrive1-3").css("display", "none");
    }

    if ($("#gdrive_first").hasClass("active")) {
        $("#validate_gdrive1-1").css("display", "flex");
        $("#validate_gdrive1-3").css("display", "none");
    }

    if ($("#gsheet_first").hasClass("active")) {
        $("#validate_gsheet1-1").css("display", "flex");
        $("#validate_gsheet1-3").css("display", "none");
    }

})

$("#sheet_react").click(function() {
    $("#mail_react").removeClass("active");
    $(this).addClass("active");
    $("#facebook_react").removeClass("active");

    if ($("#youtube_first").hasClass("active")) {
        $("#validate_youtube1-1").css("display", "none");
        $("#validate_youtube1-2").css("display", "flex");
        $("#validate_youtube1-3").css("display", "none");        
    }
    if ($("#youtube_second").hasClass("active")) {
        $("#validate_youtube2-1").css("display", "none");
        $("#validate_youtube2-2").css("display", "flex");
        $("#validate_youtube2-3").css("display", "none");

    }
    if ($("#youtube_third").hasClass("active")) {
        $("#validate_youtube3-1").css("display", "none");
        $("#validate_youtube3-3").css("display", "none");
    }

    if ($("#facebook_first").hasClass("active")) {
        $("#validate_facebook1-1").css("display", "none");
        $("#validate_facebook1-2").css("display", "flex");
        $("#validate_facebook1-3").css("display", "none");
    }
    if ($("#facebook_second").hasClass("active")) {
        $("#validate_facebook2-1").css("display", "none");
        $("#validate_facebook2-2").css("display", "flex");
        $("#validate_facebook2-3").css("display", "none");
    }
    if ($("#facebook_third").hasClass("active")) {
        $("#validate_facebook3-1").css("display", "none");
        $("#validate_facebook3-2").css("display", "flex");
        $("#validate_facebook3-3").css("display", "none");
    }

    if ($("#twitch_first").hasClass("active")) {
        $("#validate_twitch1-1").css("display", "none");
        $("#validate_twitch1-2").css("display", "flex");
        $("#validate_twitch1-3").css("display", "none");
    }
    if ($("#twitch_second").hasClass("active")) {
        $("#validate_twitch2-1").css("display", "none");
        $("#validate_twitch2-2").css("display", "flex");
        $("#validate_twitch2-3").css("display", "none");
    }
    if ($("#twitch_third").hasClass("active")) {
        $("#validate_twitch3-1").css("display", "none");
        $("#validate_twitch3-3").css("display", "none");
    }

    if ($("#onedrive_first").hasClass("active")) {
        $("#validate_onedrive1-1").css("display", "none");
        $("#validate_onedrive1-2").css("display", "flex");
        $("#validate_onedrive1-3").css("display", "none");
    }

    if ($("#gdrive_first").hasClass("active")) {
        $("#validate_gdrive1-1").css("display", "none");
        $("#validate_gdrive1-3").css("display", "none");
    }

    if ($("#gsheet_first").hasClass("active")) {
        $("#validate_gsheet1-1").css("display", "none");
        $("#validate_gsheet1-3").css("display", "none");
    }
})

$("#facebook_react").click(function() {
    $("#mail_react").removeClass("active");
    $("#sheet_react").removeClass("active");
    $(this).addClass("active");

    if ($("#youtube_first").hasClass("active")) {
        $("#validate_youtube1-1").css("display", "none");
        $("#validate_youtube1-2").css("display", "none");
        $("#validate_youtube1-3").css("display", "flex");        
    }
    if ($("#youtube_second").hasClass("active")) {
        $("#validate_youtube2-1").css("display", "none");
        $("#validate_youtube2-2").css("display", "none");
        $("#validate_youtube2-3").css("display", "flex");

    }
    if ($("#youtube_third").hasClass("active")) {
        $("#validate_youtube3-1").css("display", "none");
        $("#validate_youtube3-3").css("display", "flex");
    }

    if ($("#facebook_first").hasClass("active")) {
        $("#validate_facebook1-1").css("display", "none");
        $("#validate_facebook1-2").css("display", "none");
        $("#validate_facebook1-3").css("display", "flex");
    }
    if ($("#facebook_second").hasClass("active")) {
        $("#validate_facebook2-1").css("display", "none");
        $("#validate_facebook2-2").css("display", "none");
        $("#validate_facebook2-3").css("display", "flex");
    }
    if ($("#facebook_third").hasClass("active")) {
        $("#validate_facebook3-1").css("display", "none");
        $("#validate_facebook3-2").css("display", "none");
        $("#validate_facebook3-3").css("display", "flex");
    }

    if ($("#twitch_first").hasClass("active")) {
        $("#validate_twitch1-1").css("display", "none");
        $("#validate_twitch1-2").css("display", "none");
        $("#validate_twitch1-3").css("display", "flex");
    }
    if ($("#twitch_second").hasClass("active")) {
        $("#validate_twitch2-1").css("display", "none");
        $("#validate_twitch2-2").css("display", "none");
        $("#validate_twitch2-3").css("display", "flex");
    }
    if ($("#twitch_third").hasClass("active")) {
        $("#validate_twitch3-1").css("display", "none");
        $("#validate_twitch3-3").css("display", "flex");
    }

    if ($("#onedrive_first").hasClass("active")) {
        $("#validate_onedrive1-1").css("display", "none");
        $("#validate_onedrive1-2").css("display", "none");
        $("#validate_onedrive1-3").css("display", "flex");
    }

    if ($("#gdrive_first").hasClass("active")) {
        $("#validate_gdrive1-1").css("display", "none");
        $("#validate_gdrive1-3").css("display", "flex");
    }

    if ($("#gsheet_first").hasClass("active")) {
        $("#validate_gsheet1-1").css("display", "none");
        $("#validate_gsheet1-3").css("display", "flex");
    }
})

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


if (user_token_json[0].google === null) {
    $('#youtube_reaction').append(ytb_login);
    $(".yt").css("display", "none");
}
if (user_token_json[0].facebook === null) {
    $('#facebook_reaction').append(fb_login);
    $(".fb").css("display", "none");
    $("#facebook_react").css("border-color", "grey");
    $("#facebook_react i").css("color", "grey");
    $("#facebook_react").css("pointer-events", "none");
}
if (user_token_json[0].twitch === null) {
    $('#twitch_reaction').append(twitch_login);
    $(".twitch").css("display", "none");
}
if (user_token_json[0].onedrive === null) {
    $('#onedrive_reaction').append(onedrive_login);
    $(".onedrive").css("display", "none");
}
if (user_token_json[0].google === null) {
    $('#drive_reaction').append(gdrive_login);
    $(".gdrive").css("display", "none");
}
if (user_token_json[0].google === null) {
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
        location.reload();
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
            location.reload();
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
            location.reload();
        }
    });
}