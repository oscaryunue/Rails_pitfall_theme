// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require_self
//= require rails_pitfall

$(document).ready(function () {
//Flickr feed snippet by css-tricks.com
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=37321137@N03&format=json&jsoncallback=?", function (data) {
        var target = "#latest-flickr-images ul"; // Where is it going?
        for (i = 0; i <= 9; i = i + 1) { // Loop through the 10 most recent, [0-9]
            var pic = data.items[i];
            var liNumber = i + 1; // Add class to each LI (1-12)
            $(target).append("<li class='flickr-image no-" + liNumber + "'><a rel='prettyPhoto' title='" + pic.title + "' href='" + pic.link + "'><img src='" + pic.media.m + "' /></a></li>");
        }
    });
});