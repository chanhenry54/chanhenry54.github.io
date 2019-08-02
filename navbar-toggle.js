$(document).ready(function () {
    $('.navbar-toggle').on('click', function () {
        $('.main-nav').toggleClass('navbar-show');
    });

    $('.main-nav li').on('click', function () {
        if ($('.main-nav').hasClass('navbar-show')) {
            $('.main-nav').toggleClass('navbar-show');
        }
    });
});