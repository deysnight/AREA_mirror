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
    "service": {
        "google": true,
        "facebook": true,
        "twitch": false,
        "onedrive": true,
    },
    "ytb01": [
        {"mail": false},
        {"sheet": false},
        {"facebook": false, "facebook_page_id": null}
    ],
    "ytb02": [
        {"mail": false, "video_id": null},
        {"sheet": false, "video_id": null},
        {"facebook": false, "video_id": null, "facebook_page_id": null}
    ],
    "ytb03": [
        {"mail": false},
        {"facebook": false, "facebook_page_id": null}
    ],
    "fb01": [
        {"mail": false, "page_id_for_action": null},
        {"sheet": false, "page_id_for_action": null},
        {"facebook": false, "page_id_for_action": null, "facebook_page_id": null}
    ],
    "fb02": [
        {"mail": false},
        {"sheet": false},
        {"facebook": false, "facebook_page_id": null}
    ],
    "twitch01": [
        {"mail": false},
        {"sheet": false},
        {"facebook": false, "facebook_page_id": null}
    ],
    "twitch02": [
        {"mail": false},
        {"sheet": false},
        {"facebook": false, "facebook_page_id": null}
    ],
    "twitch03": [
        {"mail": false, "streamer_live": null},
        {"facebook": false, "streamer_live": null, "facebook_page_id": null}
    ],
    "onedrive01": [
        {"mail": false},
        {"sheet": false},
        {"facebook": false, "facebook_page_id": null}
    ],
    "gdrive01": [
        {"mail": false},
        {"facebook": false, "facebook_page_id": null}
    ],
    "gsheet01": [
        {"mail": false},
        {"facebook": false, "facebook_page_id": null}
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
    if (user_config.ytb01[1].sheet === true || user_config.service.google === false) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.ytb01[2].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.ytb02[1].sheet === true || user_config.service.google === false) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.ytb02[2].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.ytb03[1].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.fb01[1].sheet === true || user_config.service.google === false) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.fb01[2].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.fb01[1].sheet === true || user_config.service.google === false) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.fb01[2].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.twitch01[1].sheet === true || user_config.service.google === false) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.twitch01[2].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.twitch02[1].sheet === true || user_config.service.google === false) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.twitch02[2].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.twitch03[1].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.onedrive01[1].sheet === true || user_config.service.google === false) {
        $("#sheet_react").css("pointer-events", "none");
        $("#sheet_react").css("border-color", "grey");
        $("#sheet_react i").css("color", "grey");
    }
    else {
        $("#sheet_react").css("pointer-events", "auto");
        $("#sheet_react").css("border-color", "black");
        $("#sheet_react i").css("color", "black");
    }
    if (user_config.onedrive01[2].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.gdrive01[1].facebook === true || user_config.service.facebook === false) {
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
    if (user_config.gsheet01[1].facebook === true || user_config.service.facebook === false) {
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


if (user_config.service.google == false) {
    $('#youtube_reaction').append(ytb_login);
    $(".yt").css("display", "none");
}
if (user_config.service.facebook == false) {
    $('#facebook_reaction').append(fb_login);
    $(".fb").css("display", "none");
}
if (user_config.service.twitch == false) {
    $('#twitch_reaction').append(twitch_login);
    $(".twitch").css("display", "none");
}
if (user_config.service.onedrive == false) {
    $('#onedrive_reaction').append(onedrive_login);
    $(".onedrive").css("display", "none");
}
if (user_config.service.google == false) {
    $('#drive_reaction').append(gdrive_login);
    $(".gdrive").css("display", "none");
}
if (user_config.service.google == false) {
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
         //   window.location.href = "/";
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
            //window.location.href = "/";
        }
    });
}