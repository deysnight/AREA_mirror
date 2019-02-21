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

var user_config = {
    "ytb01": [
        {"mail": true},
        {"sheet": true},
        {"facebook": true, "facebook_page_id": null}
    ],
    "ytb02": [
        {"mail": true, "video_id": null},
        {"sheet": true, "video_id": null},
        {"facebook": true, "video_id": null, "facebook_page_id": null}
    ],
    "ytb03": [
        {"mail": true},
        {"facebook": true, "facebook_page_id": null}
    ],
    "fb01": [
        {"mail": true, "page_id_for_action": null},
        {"sheet": true, "page_id_for_action": null},
        {"facebook": true, "page_id_for_action": null, "facebook_page_id": null}
    ],
    "fb02": [
        {"mail": true},
        {"sheet": true},
        {"facebook": true, "facebook_page_id": null}
    ],
    "twitch01": [
        {"mail": true},
        {"sheet": true},
        {"facebook": true, "facebook_page_id": null}
    ],
    "twitch02": [
        {"mail": true},
        {"sheet": true},
        {"facebook": true, "facebook_page_id": null}
    ],
    "twitch03": [
        {"mail": true, "streamer_live": null},
        {"facebook": true, "streamer_live": null, "facebook_page_id": null}
    ],
    "onedrive01": [
        {"mail": true},
        {"sheet": true},
        {"facebook": true, "facebook_page_id": null}
    ],
    "gdrive01": [
        {"mail": true},
        {"facebook": true, "facebook_page_id": null}
    ],
    "gsheet01": [
        {"mail": true},
        {"facebook": true, "facebook_page_id": null}
    ],
}

if (user_config.ytb01[0].mail === true && user_config.ytb01[1].sheet === true && user_config.ytb01[2].facebook === true) {
    $("#youtube_first").css("pointer-events", "none");
    $("#youtube_first").css("background-color", "grey");
}

if (user_config.ytb02[0].mail === true && user_config.ytb02[1].sheet === true && user_config.ytb02[2].facebook === true) {
    $("#youtube_second").css("pointer-events", "none");
    $("#youtube_second").css("background-color", "grey");
}

if (user_config.ytb03[0].mail === true && user_config.ytb03[1].facebook === true) {
    $("#youtube_third").css("pointer-events", "none");
    $("#youtube_third").css("background-color", "grey");
}

if (user_config.fb01[0].mail === true && user_config.fb01[1].sheet === true && user_config.fb01[2].facebook === true) {
    $("#facebook_first").css("pointer-events", "none");
    $("#facebook_first").css("background-color", "grey");
}

if (user_config.fb02[0].mail === true && user_config.fb02[1].sheet === true && user_config.fb02[2].facebook === true ) {
    $("#facebook_second").css("pointer-events", "none");
    $("#facebook_second").css("background-color", "grey");
}

if (user_config.twitch01[0].mail === true && user_config.twitch01[1].sheet === true && user_config.twitch01[2].facebook === true) {
    $("#twitch_first").css("pointer-events", "none");
    $("#twitch_first").css("background-color", "grey");
}

if (user_config.twitch02[0].mail === true && user_config.twitch02[1].sheet === true && user_config.twitch02[2].facebook === true) {
    $("#twitch_second").css("pointer-events", "none");
    $("#twitch_second").css("background-color", "grey");
}

if (user_config.twitch03[0].mail === true && user_config.twitch03[1].facebook === true) {
    $("#twitch_third").css("pointer-events", "none");
    $("#twitch_third").css("background-color", "grey");
}

if (user_config.onedrive01[0].mail === true && user_config.onedrive01[1].sheet === true && user_config.onedrive01[2].facebook === true) {
    $("#onedrive_first").css("pointer-events", "none");
    $("#onedrive_first").css("background-color", "grey");
}

if (user_config.gdrive01[0].mail === true && user_config.gdrive01[1].facebook === true) {
    $("#gdrive_first").css("pointer-events", "none");
    $("#gdrive_first").css("background-color", "grey");
}

if (user_config.gsheet01[0].mail === true && user_config.gsheet01[1].facebook === true) {
    $("#gsheet_first").css("pointer-events", "none");
    $("#gsheet_first").css("background-color", "grey");
}

$("#youtube_first").click(function() {
    if (user_config.ytb01[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.ytb01[1].sheet === true) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.ytb01[2].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#youtube_second").click(function() {
    if (user_config.ytb02[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.ytb02[1].sheet === true) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.ytb02[2].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#youtube_third").click(function() {
    if (user_config.ytb03[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.ytb03[1].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#facebook_first").click(function() {
    if (user_config.fb01[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.fb01[1].sheet === true) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.fb01[2].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#facebook_second").click(function() {
    if (user_config.fb01[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.fb01[1].sheet === true) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.fb01[2].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#twitch_first").click(function() {
    if (user_config.twitch01[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.twitch01[1].sheet === true) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.twitch01[2].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#twitch_second").click(function() {
    if (user_config.twitch02[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.twitch02[1].sheet === true) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.twitch02[2].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#twitch_third").click(function() {
    if (user_config.twitch03[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.twitch03[1].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#onedrive_first").click(function() {
    if (user_config.onedrive01[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.onedrive01[1].sheet === true) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.onedrive01[2].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#gdrive_first").click(function() {
    if (user_config.gdrive01[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.gdrive01[1].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});

$("#gsheet_first").click(function() {
    if (user_config.gsheet01[0].mail === true) {
        $("#mail_react").css("pointer-events", "none");
        $("#mail_react").css("border-color", "grey");
        $("#mail_react i").css("color", "grey");
    }
    else {
        $("#mail_react").css("pointer-events", "auto");
        $("#mail_react").css("border-color", "black");
        $("#mail_react i").css("color", "black");
    }
    if (user_config.gsheet01[1].facebook === true) {
        $("#facebook_react").css("pointer-events", "none");
        $("#facebook_react").css("border-color", "grey");
        $("#facebook_react i").css("color", "grey");
    }
    else {
        $("#facebook_react").css("pointer-events", "auto");
        $("#facebook_react").css("border-color", "black");
        $("#facebook_react i").css("color", "black");
    }
});