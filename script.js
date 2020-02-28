// Set Cookie - A cookie is used to save Dark Mode preference 
// to the user's local machine.

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Get Cookie
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
// Check 
function checkCookie(cname) {
  var name=getCookie(cname);
  if (name != "dark") {
    setLight();
  } else {
     setDark();
  }
}

// Adjust appearance for Dark Mode and set a cookie to remember this preference
function setDark() {
  $("body").css("background-color", "black");
  $("body").css("color", "white");
  $("a").css("color", "white");
  $("li").css("color", "white");
  $("hr").css("color", "white");
  $("input[type=button]").css("background-color", "#999999");
  $("input[type=button]").css("color", "white");
  $("input[type=button]").css("border", "3px solid white");
  $("input[type=button]").attr('value',"Light");
  setCookie("mode","dark",30);
}
// Adjust appearance for Light Mode and set a cookie to remember this preference
function setLight() {
  $("body").css("background-color", "white");
  $("body").css("color", "black");
  $("a").css("color", "black");
  $("li").css("color", "black");
  $("hr").css("color", "black");
  $("input[type=button]").css("background-color", "#444444");
  $("input[type=button]").css("color", "black");
  $("input[type=button]").css("border", "3px solid black");
  $("input[type=button]").attr('value',"Dark");
  setCookie("mode","light",30);
}

// On page load check for any cookies with Dark Mode preferences
$(function(){
  checkCookie("mode");
  
	// On button click, toggle Dark Mode
	$(":button").click(function(){
		if ($("body").css("background-color")=="rgb(255, 255, 255)") {
		  setDark();
		} else {
		  setLight();
		}
	});
});
