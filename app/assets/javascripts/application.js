// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery-ui-1.8.18.custom.min.js
//= require modernizr
//= require bootstrap/js/bootstrap
//= require scripts
$(document).keypress(function(e) {
    if(e.keyCode == 13) {
        $('.gridShow').remove();
        $('body').append('<div class="gridShow"></div>')
    }
});