/*-- Strict mode enabled --*/
"use strict";

module.exports = function() {
  var smooth = require('smooth-scroll')
  var smoothScroll = new smooth()
  var Isotope = require('isotope-layout')
  var wow = require('wowjs')
  var WOW = wow.WOW
  require('font-awesome/css/font-awesome.css')
  //set page loader
  $('body').append('<div class="loader_wrapper"><div class="loader text-center"></div></div>');

  $(window).on("load", function() {

    // Animate loader off screen
    $(".loader_wrapper").fadeOut("5000");

    /*-- Isotope js
    ------------------------------------ --*/
    var $grid = Isotope('.grid', {
      // options
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      percentPosition: true
    });

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

    $('.button-group').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });
  });


  $(function() {
    //show dropdown menu
    $('.menu_btn').on('click', function() {
      $('.side_nav').addClass('slide_in');
    });
    $('.close_nav').on('click', function() {
      $('.side_nav').removeClass('slide_in');
    });


    /* -- Smooth scrolling
    ---------------------------------- --*/
    smoothScroll.init({
      selector: '[data-scroll]',
      selectorHeader: null,
      speed: 1000,
      easing: 'easeInOutQuint',
      offset: 65,
      callback: function(anchor, toggle) {}
    });


    //affixed nav
    $(document).on('scroll', function(event) {
      /*if ($(this).scrollTop() > $('.rev_slider').offset().top + 100) {*/
      if ($(this).scrollTop() > 500) {
        $('.navbar-default').addClass('fixed_top');
      } else {
        $('.navbar-default').removeClass('fixed_top');
      };
    });



    /*-- Animation on scroll
    ---------------------------------- --*/
    new WOW().init();


    /*-- owl carousel
    --------------------------------- --*/
    $(".feedback .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    });

    $(".port_single .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: true,
      autoplay: false,
      smartSpeed: 600,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    $(".blog .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: true,
      autoplay: false,
      smartSpeed: 600,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });

    $(".blog_single .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: true,
      autoplay: false,
      smartSpeed: 600,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    $(".partners .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      smartSpeed: 600,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 5
        },
        1000: {
          items: 5
        }
      }
    });


    /*-- Stellar parallax effect
    ------------------------------------ --*/
    $.stellar({
      horizontalScrolling: false,
      verticalScrolling: true,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: true,
      scrollProperty: 'scroll',
      positionProperty: 'position',
      parallaxBackgrounds: true,
      hideDistantElements: true,
      hideElement: function($elem) {
        $elem.hide();
      },
      showElement: function($elem) {
        $elem.show();
      }
    });


    /*-- progressbar
    ----------------------------------- --*/
    $(".skills").each(function() {
      $(this).waypoint(function() {
        var progressBar = $(".progress-bar");
        progressBar.each(function(indx) {
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
      }, {
        triggerOnce: true,
        /*offset: 'bottom-in-view'*/
        offset: '50%'
      });
    });


    /*-- animated nav button
    ----------------------------------- --*/
    $("header .navbar-toggle").on('click', function() {
      $(this).toggleClass("change");
    });


    /* --counter up
    -------------------------------------*/
    $('.counter').counterUp({
      delay: 10,
      time: 1500
    });


    /*-- tooltip
    -------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    //magnific popup
    $('.portfolio').each(function() {
      $(this).magnificPopup({
        delegate: '.magnify',
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });



    /*-- fullscreen youtube video bg
    --------------------------------- --*/
    $(".player").mb_YTPlayer();

  }); /*ready*/

}
