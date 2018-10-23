$(document).ready(function () {
  particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 500,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },

      },
      "opacity": {
        "value": 0.25,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 9.5,
          "opacity_min": 1,
          "sync": true
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 253,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 80,
        "color": "#ffffff",
        "opacity": 0.17,
        "width": 0.3
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 146,
          "line_linked": {
            "opacity": 0.7
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

  );
});



$(document).ready(function () { 
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
  })
  $('ul li').click(function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  })
});


$(document).ready(function() {
  $(".banner-slide").slick({
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  })
});
  
$(document).ready(function() {
    $(".slider").slick({
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  })
});

$(document).ready(function() {
    $('.prod-item-thumb-slide').slick({
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  })
});
$(document).ready(function() {
    $('.prod-item-thumb-slide-website').slick({
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  })
});

$(document).ready(function() {
    $('.prod-item-thumb-slide-software').slick({
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  })
});




