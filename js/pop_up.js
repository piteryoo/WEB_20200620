function pop_up() {
    var cookieCheck = getCookie("popupYN");
    if (cookieCheck != "N"){
        window.open("pop_up.html", "팝업테스트", "width=400, height=300, top=10, left=10");
    }
}

function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";
       
}

function getCookie(name) {
    var cookie = document.cookie;
    if (cookie != "") {
        var cookie_array = cookie.split("; ");
        for ( var index in cookie_array) {
            var cookie_name = cookie_array[index].split("=");
            
            if (cookie_name[0] == "popupYN") {
                return cookie_name[1];
            }
        }
    }
    return undefined;
}

function closePopup() {
    if (document.getElementById('check_popup').checked) {
        self.close();
        setCookie("popupYN", "N", 1);
    }
}
