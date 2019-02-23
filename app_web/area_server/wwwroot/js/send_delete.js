var final_url = "http://localhost:8080/internal/area/";
var type = "DELETE";

function send_delete_ytb_1_1() {
    $("#youtube_first_mail").css("display", "none");
    $.ajax({
        url: final_url + "ytb_1_1",
        method: type,
        async: false,
        success: function (response) {
            $("#youtube_first_mail").css("display", "none");
            location.reload();
        }
    })
};