/*!
* Sffresch functionality for some blog postss
*
* Copyright 2021, Frank Eschner - https://sffresch.de
* 
* This file holds a collection of functions that are used in various posts on sffresch.de.
* Feel free to copy, use and alter them for your very own projects how ever you like.
*
*/

function output_lightbulb_reaction() {
    var active_lightbulbs = 0;
    var input_lightbulbs = document.getElementsByClassName("input_lightbulb");
    for (let lightbulb of input_lightbulbs) {
        if (lightbulb.getAttribute("state") == "on") {
            active_lightbulbs += 1;
        }
    }
    
    if (active_lightbulbs % 2 == 0) {
        document.getElementById("target_lightbulb").src = "http://localhost:2368/content/images/2021/08/light-bulb-on.png";
    }
    else {
        document.getElementById("target_lightbulb").src = "http://localhost:2368/content/images/2021/08/light-bulb-off.png";
    }
};

function input_lightbulb_clicked(clicked_id) {

    if (document.getElementById(clicked_id).getAttribute("state") == "off") 
    {
        document.getElementById(clicked_id).src = "http://localhost:2368/content/images/2021/08/light-bulb-on.png";
        document.getElementById(clicked_id).setAttribute("state", "on");
    }
    else 
    {
        document.getElementById(clicked_id).src = "http://localhost:2368/content/images/2021/08/light-bulb-off.png";
        document.getElementById(clicked_id).setAttribute("state", "off");
    }

    output_lightbulb_reaction();
};


adjust_title_font_size = function () {
    var mediaSize = $(".post-media").width();
    $(".on-media-title").css('font-size', mediaSize * 0.08);
};


$(window).resize(adjust_title_font_size);
$(document).ready(adjust_title_font_size);
