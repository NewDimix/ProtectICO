// START countdown timer
function countdown() {
  var element=document.getElementById('js-sec');
  if(!element){return;}

  var d = new Date();
  var x = new Date("28 Feb 2018 00:00");

  d.setTime(Date.parse(x));

  var days = Math.floor(-((+new Date - d) / 1000 / 60 / 60 / 24));
  var hours = Math.floor(-((+new Date - d) / 1000 / 60 / 60));
  var minutes = Math.floor(-((+new Date - d) / 1000 / 60));
  var seconds = (Math.floor(-((+new Date - d) / 1000))) - (minutes * 60);
  minutes = minutes - (hours * 60);
  hours = hours - (days * 24);

  if (days < 0) {
    days = "0";
    hours = "0";
    minutes = "0";
    seconds = "0";
  };

  if (days <= 9) days = "0" + days;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  if (document.layers) {
    document.layers.doc_time.document.write(seconds);
    document.layers.doc_time.document.write(minutes);
    document.layers.doc_time.document.write(hours);
    document.layers.doc_time.document.write(days);
    document.layers.doc_time.document.close();
  } else
    document.getElementById("js-sec").innerHTML = seconds;
    document.getElementById("js-min").innerHTML = minutes;
    document.getElementById("js-hours").innerHTML = hours;
    document.getElementById("js-days").innerHTML = days;

  setTimeout("countdown()", 1000);
};

countdown();
// END countdown timer



$(window).on('load', function () {
  // START preloader
  $preloader = $('.js-loader'),
  $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');
  // END preloader



  // START mCustomScrollbar
  $('.js-project-text').mCustomScrollbar();
  // END mCustomScrollbar



  // START polyfill.object-fit settings
  objectFit.polyfill({
    selector: '.js-news-img',
    fittype: 'cover',
    disableCrossDomain: 'true'
  });
  // END polyfill.object-fit settings



  // START SCAM message
  if($(".js-scam-section .project").length) {
    $('.js-scam-message').hide();
    $('.js-scam-section').show();
  } else {
    $('.js-scam-message').show();
    $('.js-scam-section').hide();
  };
  // END SCAM message


  // START jquery.validate
  $(".js-signup-form").validate({
    errorPlacement: function(error, element) {
      element.after(error);
      jQuery(window).trigger('resize').trigger('scroll');
    },
    rules: {
      email: {
        regexp: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.+@.+\..+)$/
      },
      password: {
        regexp: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/
      }
    },
    messages: {
      email: {
        regexp: "E-MAIL должен быть в формате name@domain.com"
      },
      password: {
        regexp: "Пароль должен содержать минимум: 8 символов, одну цифру, одну букву в верхнем регистре и одну в нижнем"
      }
    }
  });

  $.validator.addMethod('regexp', function(value, element, params) {
    var expression = new RegExp(params);
    return this.optional(element) || expression.test(value);
  });

  jQuery.extend(jQuery.validator.messages, {
    required: "Это поле является обязательным для заполнения",
    remote: "Please fix this field.",
    email: "E-MAIL должен быть в формате name@domain.com",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
  });
  // END jquery.validate



  // START slick
  $('.js-news-slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="news-slider__arrows news-slider__arrows_prev"><span>Previous</span></button>',
    nextArrow: '<button type="button" class="news-slider__arrows news-slider__arrows_next"><span>Next</span></button>',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // END slick


  jQuery(window).trigger('resize').trigger('scroll');

  // START scam-page background (particles.js setting)
  particlesJS("particles-js", {"particles":{"number":{"value":67,"density":{"enable":true,"value_area":1683.5826639087988}},"color":{"value":"#1d3e4b"},"shape":{"type":"circle","stroke":{"width":0,"color":"#1d3e4b"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.44093831673801875,"random":true,"anim":{"enable":true,"speed":0.7308694910712106,"opacity_min":0.4466424667657398,"sync":false}},"size":{"value":7.891476416322726,"random":true,"anim":{"enable":false,"speed":11.988011988011989,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":288.6141709557941,"color":"#1d3e4b","opacity":0.8522794529628545,"width":2.5252724532232724},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":10000,"rotateY":8898.936937803652}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":377.61590372012546,"line_linked":{"opacity":0.7732616009805608}},"bubble":{"distance":889.2245474699729,"size":267.9854800594439,"duration":1.5984015984015985,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
  // END scam-page background (particles.js setting)
});
