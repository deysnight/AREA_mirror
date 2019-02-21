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

if (user_config.ytb01[0].mail === true) {
    $("#youtube_first_mail").css("display", "flex");
}
if (user_config.ytb01[1].sheet === true) {
    $("#youtube_first_sheet").css("display", "flex");
}
if (user_config.ytb01[2].facebook === true) {
    $("#youtube_first_facebook").css("display", "flex");
}
if (user_config.ytb02[0].mail === true) {
    $("#youtube_second_mail").css("display", "flex");
}
if (user_config.ytb02[1].sheet === true) {
    $("#youtube_second_sheet").css("display", "flex");
}
if (user_config.ytb02[2].facebook === true) {
    $("#youtube_second_facebook").css("display", "flex");
}
if (user_config.ytb01[0].mail === true) {
    $("#youtube_third_mail").css("display", "flex");
}
if (user_config.ytb01[1].facebook === true) {
    $("#youtube_third_facebook").css("display", "flex");
}

if (user_config.fb01[0].mail === true) {
    $("#facebook_first_mail").css("display", "flex");
}
if (user_config.fb01[1].sheet === true) {
    $("#facebook_first_sheet").css("display", "flex");
}
if (user_config.fb01[2].facebook === true) {
    $("#facebook_first_facebook").css("display", "flex");
}
if (user_config.fb02[0].mail === true) {
    $("#facebook_second_mail").css("display", "flex");
}
if (user_config.fb02[1].sheet === true) {
    $("#facebook_second_sheet").css("display", "flex");
}
if (user_config.fb02[2].facebook === true) {
    $("#facebook_second_facebook").css("display", "flex");
}

if (user_config.twitch01[0].mail === true) {
    $("#twitch_first_mail").css("display", "flex");
}
if (user_config.twitch01[1].sheet === true) {
    $("#twitch_first_sheet").css("display", "flex");
}
if (user_config.twitch01[2].facebook === true) {
    $("#twitch_first_facebook").css("display", "flex");
}
if (user_config.twitch02[0].mail === true) {
    $("#twitch_second_mail").css("display", "flex");
}
if (user_config.twitch02[1].sheet === true) {
    $("#twitch_second_sheet").css("display", "flex");
}
if (user_config.twitch02[2].facebook === true) {
    $("#twitch_second_facebook").css("display", "flex");
}
if (user_config.twitch03[0].mail === true) {
    $("#twitch_third_mail").css("display", "flex");
}
if (user_config.twitch03[1].facebook === true) {
    $("#twitch_third_facebook").css("display", "flex");
}

if (user_config.onedrive01[0].mail === true) {
    $("#onedrive_first_mail").css("display", "flex");
}
if (user_config.onedrive01[1].sheet === true) {
    $("#onedrive_first_sheet").css("display", "flex");
}
if (user_config.onedrive01[2].facebook === true) {
    $("#onedrive_first_facebook").css("display", "flex");
}

if (user_config.gdrive01[0].mail === true) {
    $("#gdrive_first_mail").css("display", "flex");
}
if (user_config.gdrive01[1].facebook === true) {
    $("#gdrive_first_facebook").css("display", "flex");
}

if (user_config.gsheet01[0].mail === true) {
    $("#gsheet_first_mail").css("display", "flex");
}
if (user_config.gsheet01[1].facebook === true) {
    $("#gsheet_first_facebook").css("display", "flex");
}